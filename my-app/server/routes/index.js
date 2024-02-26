const express = require('express');
const router = express.Router();

const registerRoute = require('./registerRoute');
const loginRoute = require('./loginRoute');

// Define routes
router.use('/register', registerRoute);
router.use('/login', loginRoute);

module.exports = router;
