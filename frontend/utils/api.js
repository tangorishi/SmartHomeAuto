// utils/api.js
import axios from 'axios';

export const fetchInitialData = async () => {
  try {
    const response = await axios.get('http://localhost:3005/api/appliances');
    console.log(response.data);
    
    return response.data;
  } catch (error) {
    console.error('Error fetching initial data:', error);
    throw new Error('Failed to fetch initial data');
  }
};
