const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Endpoint to handle form submissions
app.post('/contact', (req, res) => {
    const { name, email, phone, message } = req.body;
    
    // Here you can handle the form data, e.g., save it to a database or send an email
    console.log('Form data received:', { name, email, phone, message });
    
    // Sending a response back to the client
    res.json({ status: 'success', message: 'Message received successfully!' });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
