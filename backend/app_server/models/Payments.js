const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to the user who made the payment
    type: { type: String, enum: ['Appointment', 'Product'], required: true }, // Indicates whether the payment is for an appointment booking or product purchase
    appointmentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Appointment' }, // Reference to the appointment (if payment is for an appointment)
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' }, // Reference to the product (if payment is for a product)
    amount: { type: Number, required: true }, // Amount of the payment
    paymentMethod: { type: String, required: true }, // Payment method used (e.g., credit card, PayPal, etc.)
    status: { type: String, enum: ['Pending', 'Completed', 'Failed'], default: 'Pending' }, // Status of the payment
    // You can add more fields here as needed
  },
  { timestamps: true }
);

module.exports = mongoose.model("Payment", paymentSchema);
