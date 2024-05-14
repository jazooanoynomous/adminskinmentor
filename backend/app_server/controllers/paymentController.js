const Payment = require("../models/Payments");

module.exports = {
//   // Create a new payment
//   createPayment: async (req, res) => {
//     try {
//       const newPayment = new Payment(req.body);
//       await newPayment.save();
//       res.status(201).json({ message: "Payment created successfully", payment: newPayment });
//     } catch (error) {
//       res.status(500).json({ error: "Failed to create payment", details: error.message });
//     }
//   },

  // Get all payments
  getAllPayments: async (req, res) => {
    try {
      const payments = await Payment.find();
      res.status(200).json(payments);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch payments", details: error.message });
    }
  },

  // Get payment by ID
  getPaymentById: async (req, res) => {
    try {
      const payment = await Payment.findById(req.params.id);
      if (!payment) {
        return res.status(404).json({ message: "Payment not found" });
      }
      res.status(200).json(payment);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch payment", details: error.message });
    }
  },

//   // Update payment by ID
//   updatePaymentById: async (req, res) => {
//     try {
//       const updatedPayment = await Payment.findByIdAndUpdate(req.params.id, req.body, { new: true });
//       res.status(200).json({ message: "Payment updated successfully", payment: updatedPayment });
//     } catch (error) {
//       res.status(500).json({ error: "Failed to update payment", details: error.message });
//     }
//   },

//   // Delete payment by ID
//   deletePaymentById: async (req, res) => {
//     try {
//       await Payment.findByIdAndDelete(req.params.id);
//       res.status(200).json({ message: "Payment deleted successfully" });
//     } catch (error) {
//       res.status(500).json({ error: "Failed to delete payment", details: error.message });
//     }
//   }
// };
};
