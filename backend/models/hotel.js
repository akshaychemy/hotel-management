// models/hotel.js
import mongoose from 'mongoose';

const hotelSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  // Add other necessary fields like address, contact details, etc.
});

const Hotel = mongoose.model('Hotel', hotelSchema);

export default Hotel;
