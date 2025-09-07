const express = require("express");
const aiRoutes = require("./routes/ai.routes");
const cors = require("cors");

const app = express();

app.use(express.json());

// ✅ CORS config (local + Render frontend dono allowed)
app.use(
  cors({
    origin: [
      "http://localhost:5173",                  // local dev
      "https://ai-code-reviewer-frontend.onrender.com" // apna frontend URL (replace!)
    ],
    methods: ["GET", "POST"],
  })
);

// ✅ Test route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// ✅ AI routes
app.use("/ai", aiRoutes);

module.exports = app;
