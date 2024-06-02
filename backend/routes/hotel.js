// routes/hotel.js
import express from 'express';
import Hotel from '../models/hotel.js';

const router = express.Router();

// Create hotel
router.post('/', async (req, res) => {
  try {
    const hotel = await Hotel.create(req.body);
    res.json(hotel);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all hotels
router.get('/', async (req, res) => {
  try {
    const hotels = await Hotel.find();
    res.json(hotels); // Ensure the response is in JSON format
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update hotel
router.put('/:id', async (req, res) => {
  try {
    const hotel = await Hotel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(hotel);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete hotel
router.delete('/:id', async (req, res) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    res.json({ message: 'Hotel deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
