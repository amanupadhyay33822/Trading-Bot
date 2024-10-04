const express = require('express');
const { getMockStockPrice } = require('./mockData');
const { tradingStrategy, getBotStatus } = require('./Tading');

const app = express();
const PORT = 3000;

// Simulate stock prices and apply trading logic every 10 seconds
// Simulate stock prices and apply trading logic every 1 second
setInterval(() => {
    const { price: currentPrice } = getMockStockPrice();
    tradingStrategy(currentPrice);
}, 1000); // Runs every 1 second

// API route to get the bot's status (balance, trades, total profit)
app.get('/status', (req, res) => {
    res.json(getBotStatus());
});

// Start the server
app.listen(PORT, () => {
    console.log(`Trading bot running on http://localhost:${PORT}`);
});
