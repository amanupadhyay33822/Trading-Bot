// Bot state
let balance = 10000; // Initial balance
let holdings = 0; // How many stocks the bot holds
let previousPrice = 100; // Starting mock stock price
let totalProfit = 0; // Total profit from trades
let trades = []; // List of all trades

// Buy and Sell thresholds
// Buy and Sell thresholds
const buyThreshold = 0.99; // Buy when price drops by 1%
const sellThreshold = 1.01; // Sell when price increases by 1%

// Trading strategy function
const tradingStrategy = (currentPrice) => {
    console.log(`Current Price: ${currentPrice}`); // Log each price change
    if (!holdings && currentPrice <= previousPrice * buyThreshold) {
        // Buy logic
        const amountToBuy = (balance / currentPrice).toFixed(2); // Max shares that can be bought
        holdings = amountToBuy;
        balance = 0; // Spent all balance on buying shares
        previousPrice = currentPrice;
        trades.push({
            action: 'BUY',
            price: currentPrice,
            timestamp: new Date().toISOString(),
        });
        console.log(`Bought ${amountToBuy} shares at ${currentPrice}`);
    } else if (holdings && currentPrice >= previousPrice * sellThreshold) {
        // Sell logic
        const amountToSell = (holdings * currentPrice).toFixed(2); // Total value of sold shares
        const profit = (amountToSell - (previousPrice * holdings)).toFixed(2);
        balance = parseFloat(amountToSell); // Update balance with sold amount
        totalProfit += parseFloat(profit); // Add to total profit
        trades.push({
            action: 'SELL',
            price: currentPrice,
            timestamp: new Date().toISOString(),
            profit: parseFloat(profit),
        });
        console.log(`Sold holdings at ${currentPrice}, Profit: ${profit}`);
        holdings = 0; // No more stocks
        previousPrice = currentPrice;
    }
};

// Function to get the current status of the bot
const getBotStatus = () => {
    return {
        balance: balance.toFixed(2),
        holdings,
        trades,
        totalProfit: totalProfit.toFixed(2),
    };
};

module.exports = { tradingStrategy, getBotStatus };
