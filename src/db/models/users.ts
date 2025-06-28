'use server' 
// models/User.js
import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  accessToken: String,
}, { timestamps: true });

export const User = mongoose.models.User || mongoose.model('User', UserSchema);
