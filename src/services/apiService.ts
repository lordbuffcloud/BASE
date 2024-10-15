import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

export const processImage = async (imageFile: File): Promise<string> => {
  try {
    const reader = new FileReader();
    const imageDataUrl = await new Promise<string>((resolve) => {
      reader.onload = (e) => resolve(e.target?.result as string);
      reader.readAsDataURL(imageFile);
    });

    const response = await openai.chat.completions.create({
      model: "gpt-4-vision-preview",
      messages: [
        {
          role: "user",
          content: [
            { type: "text", text: "Describe this military base image in detail, focusing on building layouts, infrastructure, and potential strategic points." },
            { type: "image_url", image_url: { url: imageDataUrl } }
          ],
        },
      ],
    });

    return response.choices[0].message.content || '';
  } catch (error) {
    console.error('Error processing image:', error);
    throw error;
  }
};

export const generateCOA = async (imageDescription: string, userInput: string): Promise<string> => {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        { role: "system", content: "You are a military installation planner assistant. Generate a Course of Action (COA) based on the provided base description and user input." },
        { role: "user", content: `Base description: ${imageDescription}\n\nUser input: ${userInput}\n\nGenerate a detailed COA.` }
      ],
    });

    return response.choices[0].message.content || '';
  } catch (error) {
    console.error('Error generating COA:', error);
    throw error;
  }
};

export const chatWithContext = async (
  chatHistory: Array<{ role: 'user' | 'assistant', content: string }>,
  message: string,
  coa: string
): Promise<string> => {
  try {
    const messages = [
      { role: "system", content: "You are a military installation planner assistant. Provide information and answer questions based on the generated Course of Action (COA) and previous chat context." },
      { role: "assistant", content: `Here's the current COA: ${coa}` },
      ...chatHistory,
      { role: "user", content: message }
    ];

    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: messages as any,
    });

    return response.choices[0].message.content || '';
  } catch (error) {
    console.error('Error in chat:', error);
    throw error;
  }
};