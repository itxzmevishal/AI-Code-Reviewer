const express = require("express");
const aiRoutes = require("./routes/ai.routes");
const cors = require("cors");

const app = express();

// ✅ CORS middleware
app.use(
  cors({
    origin: ["http://localhost:5173", "https://your-frontend.onrender.com"],
    methods: ["GET", "POST"],
  })
);

app.use(express.json());

// ✅ Test route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// ✅ AI routes
app.use("/ai", aiRoutes);

module.exports = app;
