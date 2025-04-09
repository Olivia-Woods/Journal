const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Sample Test Route
app.get("/", (req, res) => {
  res.send("Journal App API is running");
});

// Mount Routes (Will Connect Real Routes Soon)
app.use("/api/entries", require("./routes/entryRoutes"));
app.use("/api/journals", require("./routes/journalRoutes"));

// Start Server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
