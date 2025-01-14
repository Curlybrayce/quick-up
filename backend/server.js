const express = require('express');
const cors = require('cors'); // Import cors

const app = express();

// Enable CORS
app.use(cors());

// If you want to restrict CORS to specific origins:
app.use(cors({
    origin: true, //'https:tutourly.verce.app', // Allow only the frontend origin
    methods: 'GET,POST', // Allow only specific HTTP methods
    allowedHeaders: 'Content-Type', // Allow only specific headers
}));

const sessions = {}; // Store sessions in memory

app.use(express.json());

// API to create a session
app.post('/create-session', (req, res) => {
    const { sessionId } = req.body;
    if (!sessions[sessionId]) {
        sessions[sessionId] = { users: [] }; // Initialize session
        return res.status(201).send({ message: 'Session created successfully' });
    }
    return res.status(400).send({ message: 'Session already exists' });
});

// API to join a session
app.post('/join-session', (req, res) => {
    const { sessionId, user } = req.body;
    if (sessions[sessionId]) {
        sessions[sessionId].users.push(user); // Add user to session
        return res.status(200).send({ message: 'Joined session', session: sessions[sessionId] });
    }
    return res.status(404).send({ message: 'Session not found' });
});

// API to get session details
app.get('/session/:sessionId', (req, res) => {
    const { sessionId } = req.params;
    if (sessions[sessionId]) {
        return res.status(200).send({ session: sessions[sessionId] });
    }
    return res.status(404).send({ message: 'Session not found' });
});

// This will be removed later on. it's just to keep render free platform awake
const startTime = new Date();
app.get('/health', async (req, res) => {
  try {
      const healthData = {
          status: 'healthy',
          uptime: process.uptime(),
          timestamp: new Date(),
          serviceStarted: startTime
      };

      // Memory usage information (optional)
      healthData.memory = {
          used: process.memoryUsage().heapUsed / 1024 / 1024,
          total: process.memoryUsage().heapTotal / 1024 / 1024
      };

      // If everything is OK, send 200
      res.status(200).json(healthData);
  } catch (error) {
      // If there's an error, send 500
      res.status(500).json({
          status: 'unhealthy',
          error: error.message
      });
  }
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));