import mongoose from "mongoose";

const scooterSchema = new mongoose.Schema({
  brand: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  availability: {
    type: Boolean,
    default: true,
  },
  rate: {
    type: Number,
    required: true,
  },
});

const Scooter = mongoose.model('Scooter', scooterSchema);

export default Scooter;
