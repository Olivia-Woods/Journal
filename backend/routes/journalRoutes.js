const express = require("express");
const router = express.Router();

let journals = ["Gratitude", "Dreams", "Daily Logs"];

// GET all journals
router.get("/", (req, res) => {
  res.json(journals);
});

// POST a new journal
router.post("/", (req, res) => {
  const { name } = req.body;
  journals.push(name);
  res.status(201).json({ name });
});

module.exports = router;
