// models/booking.js
import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
  room: { type: mongoose.Schema.Types.ObjectId, ref: 'Room', required: true },
  guestName: { type: String, required: true },
  checkInDate: { type: Date, required: true },
  checkOutDate: { type: Date, required: true },
  // Add other necessary fields like status, total amount, etc.
});

const Booking = mongoose.model('Booking', bookingSchema);

export default Booking;
