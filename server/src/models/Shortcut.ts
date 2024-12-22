import mongoose from 'mongoose';

const ShortcutSchema = new mongoose.Schema({
   description: { type: String, required: true },
   key: { type: String, required: true }
}, {
   timestamps: true
});

const ApplicationSchema = new mongoose.Schema({
   name: { type: String, required: true },
   shortcuts: [ShortcutSchema]
}, {
   timestamps: true
});

export const Application = mongoose.model('Application', ApplicationSchema);