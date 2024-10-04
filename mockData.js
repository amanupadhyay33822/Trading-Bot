let previousPrice = 100; // Starting mock stock price

// Function to simulate stock prices (mock data)
const getMockStockPrice = () => {
    // Simulate random price fluctuations (within -5% to +5% of the previous price)
    const fluctuation = Math.random() * (1.05 - 0.95) + 0.95;
    previousPrice = (previousPrice * fluctuation).toFixed(2);
    return {
        price: parseFloat(previousPrice),
        timestamp: new Date().toISOString(),
    };
};

module.exports = { getMockStockPrice };
