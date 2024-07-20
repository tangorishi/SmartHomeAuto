import express from 'express';
import { createServer } from 'http';
import { Server, Socket } from 'socket.io';
import cors from 'cors'; // Import the cors package
import deviceRoutes from './routes/deviceRoutes';
import { controlAppliance } from './services/deviceService';
import { ControlApplianceRequest } from './types';

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*', // Allow all origins for CORS
    methods: ['GET', 'POST'], // Allow specific HTTP methods
  }
});

// Middleware to parse JSON
app.use(express.json());

// Enable CORS for all origins
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST'],
  optionsSuccessStatus: 200,
}));

// Routes
app.use('/api', deviceRoutes);

// Handle Socket.IO connections
io.on('connection', (socket: Socket) => {
  console.log('New client connected:', socket.id);

  socket.on('control-appliance', (data: ControlApplianceRequest) => {
    const { userId, residenceId, roomId, applianceId, action, attributes } = data;
    const error = controlAppliance({ userId, residenceId, roomId, applianceId, action, attributes });
    if (error) {
      return socket.emit('error', error);
    }
    io.emit('appliance-status', { userId, residenceId, roomId, applianceId, status: action, attributes });
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected:', socket.id);
  });
});

// Start server
const PORT = process.env.PORT || 3005;

if (!process.env.VERCEL) {
  server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

export default app;
