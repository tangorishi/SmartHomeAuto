// utils/socket.js
import { io } from 'socket.io-client';

// Replace with your backend URL
const socket = io('https://smart-home-auto-backend.vercel.app', {
  transports: ['websocket', 'polling'] // Specify transports if needed
});

export const subscribeToApplianceUpdates = (callback) => {
  socket.on('appliance-status', callback);
};

export const controlAppliance = (data) => {
  socket.emit('control-appliance', data);
};

export default socket; // Export the socket instance
