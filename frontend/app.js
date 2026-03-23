const express = require('express');
const path = require('path');

const app = express();

// Serve static files
app.use(express.static(__dirname));

// Show HTML page on "/"
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// API route (separate)
app.get('/api', (req, res) => {
    res.json({
        message: "Backend API is running 🚀",
        status: "success"
    });
});

app.get('/health', (req, res) => {
    res.send("OK");
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
