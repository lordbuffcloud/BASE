import React, { useState } from 'react';
import { FileText, Download } from 'lucide-react';

interface COADisplayProps {
  coa: string;
  onGenerateCOA: (userInput: string) => void;
}

const COADisplay: React.FC<COADisplayProps> = ({ coa, onGenerateCOA }) => {
  const [userInput, setUserInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onGenerateCOA(userInput);
  };

  const handleDownloadPDF = () => {
    // Implement PDF download functionality here
    console.log('Downloading PDF...');
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="mb-4">
        <textarea
          className="w-full p-2 border rounded"
          rows={3}
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Enter additional information for COA generation..."
        />
        <button
          type="submit"
          className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Generate COA
        </button>
      </form>
      {coa && (
        <div className="bg-gray-100 p-4 rounded">
          <h3 className="font-semibold mb-2 flex items-center">
            <FileText className="mr-2" /> Generated COA:
          </h3>
          <p className="whitespace-pre-wrap">{coa}</p>
          <button
            onClick={handleDownloadPDF}
            className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 flex items-center"
          >
            <Download className="mr-2" /> Download as PDF
          </button>
        </div>
      )}
    </div>
  );
};

export default COADisplay;