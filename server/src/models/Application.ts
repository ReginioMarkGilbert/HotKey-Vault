import mongoose from 'mongoose';

// Create a schemaless model
const Application = mongoose.model('Application', new mongoose.Schema({}, {
  strict: false,  // This makes it schemaless
  timestamps: true // Keep timestamps
}));

export { Application };