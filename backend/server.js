require("dotenv").config();
const app = require("./src/app");

// Render (or other hosting) ke liye dynamic port use karo
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
