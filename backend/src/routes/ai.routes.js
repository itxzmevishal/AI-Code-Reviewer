const express = require("express");
const router = express.Router();

// Example POST route
router.post("/get-review", (req, res) => {
  const { code } = req.body;

  // Placeholder response (yahan tu apna AI logic add karega)
  if (!code) {
    return res.status(400).json("❌ No code provided.");
  }

  res.json(`✅ Review for your code:\n\nLooks good!`);
});

module.exports = router;
