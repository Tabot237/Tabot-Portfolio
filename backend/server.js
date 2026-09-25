
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const contactRoutes = require("./routes/contactRoutes");
const connectDB = require("./config/database");

connectDB();

const app = express();
const PORT = 5000;
app.use(cors());
app.use(express.json());
app.use("/api", contactRoutes);
app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "Tabot Portfolio backend is running",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});