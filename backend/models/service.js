// models/service.js
import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  hotel: { type: mongoose.Schema.Types.ObjectId, ref: 'Hotel', required: true }, // Reference to the hotel providing the service
  // Add other necessary fields like duration, availability, etc.
});

const Service = mongoose.model('Service', serviceSchema);

export default Service;

