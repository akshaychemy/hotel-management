// models/room.js
import mongoose from 'mongoose';

const roomSchema = new mongoose.Schema({
  hotel: { type: mongoose.Schema.Types.ObjectId, ref: 'Hotel', required: true },
  number: { type: Number, required: true },
  type: { type: String, required: true },
  // Add other necessary fields like capacity, price, availability, etc.
});

const Room = mongoose.model('Room', roomSchema);

export default Room;
