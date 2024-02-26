const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Project3Logins', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB:', err));

const User = mongoose.model('User', userSchema, 'users');