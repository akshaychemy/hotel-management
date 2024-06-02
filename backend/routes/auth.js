// routes/auth.js
import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User from '../models/User.js';
import authenticate from '../middleware/authenticate.js';

const router = express.Router();

router.post('/register', async (req, res) => {
    try {
      // Hash the password before saving it to the database
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      // Create a new user with the hashed password
      const newUser = await User.create({ 
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword 
      });
      res.json(newUser);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });

// User login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id ,isAdmin:user.isAdmin}, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({ message: 'Login successful', token,'admin':user.isAdmin });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Protected route example
router.get('/profile', authenticate, (req, res) => {
  res.json({ message: 'Authenticated user', user: req.user });
});

export default router;
