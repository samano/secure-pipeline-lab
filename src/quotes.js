const quotes = [
  "Discipline equals freedom.",
  "Move slowly and fix things.",
  "Simplicity is prerequisite for reliability."
];

function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

module.exports = { getRandomQuote };