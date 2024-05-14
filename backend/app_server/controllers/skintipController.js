const SkinTip = require("../models/SkinTip");

module.exports = {
  // Create a new skin tip
  createSkinTip: async (req, res) => {
    try {
      const newSkinTip = new SkinTip(req.body);
      await newSkinTip.save();
      res.status(201).json({ message: "Skin tip created successfully", skinTip: newSkinTip });
    } catch (error) {
      res.status(500).json({ error: "Failed to create skin tip" });
    }
  },

  // Get all skin tips
  getAllSkinTips: async (req, res) => {
    try {
      const skinTips = await SkinTip.find();
      res.status(200).json(skinTips);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch skin tips" });
    }
  },

  // Get a single skin tip by ID
  getSkinTipById: async (req, res) => {
    try {
      const skinTip = await SkinTip.findById(req.params.id);
      if (!skinTip) {
        return res.status(404).json({ message: "Skin tip not found" });
      }
      res.status(200).json(skinTip);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch skin tip" });
    }
  },

  // Update a skin tip by ID
  updateSkinTipById: async (req, res) => {
    try {
      const skinTip = await SkinTip.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!skinTip) {
        return res.status(404).json({ message: "Skin tip not found" });
      }
      res.status(200).json({ message: "Skin tip updated successfully", skinTip });
    } catch (error) {
      res.status(500).json({ error: "Failed to update skin tip" });
    }
  },

  // Delete a skin tip by ID
  deleteSkinTipById: async (req, res) => {
    try {
      const skinTip = await SkinTip.findByIdAndDelete(req.params.id);
      if (!skinTip) {
        return res.status(404).json({ message: "Skin tip not found" });
      }
      res.status(200).json({ message: "Skin tip deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: "Failed to delete skin tip" });
    }
  }
};
