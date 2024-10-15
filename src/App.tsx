import React, { useState } from 'react';
import { MapIcon, Upload, FileText, MessageSquare } from 'lucide-react';
import ImageUploader from './components/ImageUploader';
import COADisplay from './components/COADisplay';
import ChatInterface from './components/ChatInterface';
import { processImage, generateCOA, chatWithContext } from './services/apiService';

function App() {
  const [imageDescription, setImageDescription] = useState('');
  const [coa, setCOA] = useState('');
  const [chatHistory, setChatHistory] = useState<Array<{ role: 'user' | 'assistant', content: string }>>([]);

  const handleImageUpload = async (imageFile: File) => {
    try {
      const description = await processImage(imageFile);
      setImageDescription(description);
    } catch (error) {
      console.error('Error uploading image:', error);
      // Handle error (e.g., show an error message to the user)
    }
  };

  const handleGenerateCOA = async (userInput: string) => {
    try {
      const generatedCOA = await generateCOA(imageDescription, userInput);
      setCOA(generatedCOA);
    } catch (error) {
      console.error('Error generating COA:', error);
      // Handle error
    }
  };

  const handleChat = async (message: string) => {
    try {
      const response = await chatWithContext(chatHistory, message, coa);
      setChatHistory([...chatHistory, { role: 'user', content: message }, { role: 'assistant', content: response }]);
    } catch (error) {
      console.error('Error in chat:', error);
      // Handle error
    }
  };

  // ... rest of the component remains the same
}

export default App;