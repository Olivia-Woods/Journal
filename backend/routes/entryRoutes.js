const express = require("express");
const router = express.Router();

let entries = [
  {
    id: 1,
    title: "First Entry",
    content: "Just testing things...",
    journal: "Gratitude",
    createdAt: new Date(),
  },
];

// GET all entries
router.get("/", (req, res) => {
  res.json(entries);
});

// POST a new entry
router.post("/", (req, res) => {
  const { title, content, journal } = req.body;

  const newEntry = {
    id: entries.length + 1,
    title,
    content,
    journal,
    createdAt: new Date(),
  };

  entries.push(newEntry);
  res.status(201).json(newEntry);
});

module.exports = router;
