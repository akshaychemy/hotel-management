// index.js
import express from 'express';
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from 'body-parser';
import mongoose from "mongoose";
import hotelRouter from './routes/hotel.js';
import roomRouter from './routes/room.js';
import bookingRouter from './routes/booking.js';
import employeeRouter from './routes/employee.js';
import serviceRouter from './routes/service.js';
import authRoutes from './routes/auth.js'; 

const app = express();
const PORT = process.env.PORT || 3000;

dotenv.config();

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Failed to connect to MongoDB', err));

app.use(express.json());
app.use(bodyParser.json());
app.use(cors({ origin: true, credentials: true }));

// Routes
app.use('/hotels', hotelRouter);
app.use('/rooms', roomRouter);
app.use('/bookings', bookingRouter);
app.use('/employees', employeeRouter);
app.use('/services', serviceRouter);
app.use('/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
