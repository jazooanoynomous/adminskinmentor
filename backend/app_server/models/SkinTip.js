const mongoose = require("mongoose");

const SkinTipSchema = new mongoose.Schema({
  type: { type: String, enum: ['text', 'image', 'video'], required: true },
  title: { type: String, required: true },
  content: { type: String },
  imageUrl: { type: String },
  videoUrl: { type: String },
  category: { type: String },
  quiz: {
    questions: [{ type: String }],
    options: [{ type: String }],
    correctAnswers: [{ type: Number }],
  },
  // You can add more fields as needed, such as author, tags, etc.
}, { timestamps: true });

module.exports = mongoose.model("SkinTip", SkinTipSchema);
