// utils/api.js
import axios from 'axios';

export const fetchInitialData = async () => {
  try {
    const response = await axios.get('http://localhost:3005/api/all-data');
    console.log(response.data.users[0].residences[0]);
    
    return response.data.users[0].residences[0];
  } catch (error) {
    console.error('Error fetching initial data:', error);
    throw new Error('Failed to fetch initial data');
  }
};
