// routes/secure-route.js
import express from 'express';
import authenticate from '../middleware/authenticate';

const router = express.Router();

// Route protected by JWT authentication middleware
router.get('/', authenticate, (req, res) => {
  // Access the authenticated user information
  const user = req.user;
  res.json({ message: 'Authenticated', user });
});

export default router;
