// models/employee.js
import mongoose from 'mongoose';

const employeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  position: { type: String, required: true },
  hotel: { type: mongoose.Schema.Types.ObjectId, ref: 'Hotel', required: true }, // Reference to the hotel where the employee works
  // Add other necessary fields like contact details, salary, etc.
});

const Employee = mongoose.model('Employee', employeeSchema);

export default Employee;

