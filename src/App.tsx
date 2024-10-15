import React, { useState } from 'react';
import axios from 'axios';

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

function App() {
  const [baseDescription, setBaseDescription] = useState<string>('');
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const [userMessage, setUserMessage] = useState<string>('');

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    try {
      // Updated endpoint to use glxy7
      const response = await axios.post('http://localhost:8000/glxy7/upload-base-layout/', formData);
      setBaseDescription(response.data.description);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  const handleSendMessage = async () => {
    if (!userMessage.trim()) return;

    const newUserMessage: ChatMessage = { role: 'user', content: userMessage };
    setChatHistory([...chatHistory, newUserMessage]);

    try {
      const formData = new FormData();
      formData.append('base_description', baseDescription);
      formData.append('user_message', userMessage);

      // Updated endpoint to use glxy7
      const response = await axios.post('http://localhost:8000/glxy7/process-message/', formData);
      
      const newAssistantMessage: ChatMessage = { role: 'assistant', content: response.data.response };
      setChatHistory(prev => [...prev, newAssistantMessage]);
    } catch (error) {
      console.error('Error processing message:', error);
    }

    setUserMessage('');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Base Layout Analyzer</h1>
      </header>
      <main>
        <div>
          <h2>Upload Base Layout</h2>
          <p>Please upload a map or layout of your base. Accepted file types: Images (PNG, JPG, JPEG, GIF), PDF, Word documents.</p>
          <input type="file" accept=".png,.jpg,.jpeg,.gif,.pdf,.docx" onChange={handleFileUpload} />
        </div>
        {baseDescription && (
          <div>
            <h2>Base Description</h2>
            <p>{baseDescription}</p>
          </div>
        )}
        <div>
          <h2>Chat</h2>
          <div style={{ height: '300px', overflowY: 'scroll', border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
            {chatHistory.map((msg, index) => (
              <div key={index} style={{ marginBottom: '10px' }}>
                <strong>{msg.role === 'user' ? 'You: ' : 'Assistant: '}</strong>
                {msg.content}
              </div>
            ))}
          </div>
          <textarea 
            value={userMessage} 
            onChange={(e) => setUserMessage(e.target.value)}
            style={{ width: '100%', height: '100px' }}
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </main>
    </div>
  );
}

export default App;
