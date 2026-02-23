const express = require("express");
const { getRandomQuote } = require("./quotes");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/quote", (req, res) => {
  res.json({ quote: getRandomQuote() });
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;