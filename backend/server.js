const express = require('express');
const cors = require('cors'); // Import cors

const app = express();

// Enable CORS
app.use(cors());

// If you want to restrict CORS to specific origins:
app.use(cors({
    origin: 'http://localhost:5173', // Allow only the frontend origin
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

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));