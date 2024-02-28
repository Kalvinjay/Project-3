// server.js
const express = require('express');
const mongoose = require('mongoose');
const registerRoute = require('./routes/registerRoute');
const loginRoute = require('./routes/loginRoute');

const app = express();
const PORT = 3000;

app.use(express.json());

// Connecting to MongoDB database
mongoose.connect('mongodb://localhost:27017/Project3Logins', { useNewUrlParser: true, useUnifiedTopology: true });

app.post('/register', (req, res) => {
  const { username, email, password } = req.body;

  // Validate input
  if (!username || !email || !password) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  // Check for existing user
  if (userExists(username, email)) {
    return res.status(409).json({ error: 'User already exists' });
  }

  // Hash password (using bcrypt, for example)
  const hashedPassword = hashPassword(password);

  // Create user record in the database
  createUser(username, email, hashedPassword);

  // Return success response
  res.status(201).json({ message: 'User registered successfully', token });
});


// Define routes
app.use('/register', registerRoute);
app.use('/login', loginRoute);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
