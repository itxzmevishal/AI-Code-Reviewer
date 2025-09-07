require("dotenv").config();
const app = require("./src/app");

// Render ke liye dynamic PORT (important)
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
