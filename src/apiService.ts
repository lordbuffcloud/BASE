import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/glxy7';

export const uploadBaseLayout = async (file: File) => {
  const formData = new FormData();
  formData.append('file', file);
  const response = await axios.post(`${API_BASE_URL}/upload-base-layout/`, formData);
  return response.data;
};

export const processMessage = async (baseDescription: string, userMessage: string) => {
  const formData = new FormData();
  formData.append('base_description', baseDescription);
  formData.append('user_message', userMessage);
  const response = await axios.post(`${API_BASE_URL}/process-message/`, formData);
  return response.data;
};
