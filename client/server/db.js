const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost/discord-clone', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // Additional options will to be added here
    });
    console.log('Connected to the database');
  } catch (error) {
    console.error('Failed to connect to the database:', error);
  }
};

module.exports = connectDB;