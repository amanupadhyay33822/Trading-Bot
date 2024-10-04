#Stock Trading Bot Documentation
Overview
This application simulates a basic stock trading bot using Node.js. The bot monitors stock price changes and executes trades based on predefined strategies. It also tracks the balance, holdings, and profit/loss from trades.

Project Structure
/stock-trading-bot
        - server.js           // Main server file
        - tradingLogic.js     // Contains trading logic and bot state
        - mockData.js         // Generates mock stock price data
Trading Logic
Strategy
The bot uses a simple trading strategy with the following logic:

Buying Condition:

The bot buys shares if:
It holds no shares (holdings === 0).
The current price drops to 99% or less of the previous price (1% drop).
When buying, it spends its entire balance to purchase as many shares as possible.
Selling Condition:

The bot sells shares if:
It currently holds shares (holdings > 0).
The current price rises to 101% or more of the previous price (1% rise).
When selling, it calculates the total profit from the sale and updates the balance accordingly.
State Management
Balance: Initial amount of money the bot can use to buy stocks.
Holdings: The number of shares currently held by the bot.
Previous Price: The last stock price before the current price.
Total Profit: Cumulative profit from all trades made by the bot.
Trades: An array to keep a record of all buy and sell actions.
API Usage
Endpoints
Start Trading:

Method: GET
Endpoint: /start
Description: Initiates the trading bot to start monitoring stock prices.
Get Bot Status:

Method: GET
Endpoint: /status
Description: Returns the current state of the bot, including balance, holdings, trades, and total profit.
Example Requests Using Postman
Start Trading:

Open Postman.
Select GET method and enter the URL: http://localhost:3000/start.
Click Send.
Get Status:

Open Postman.
Select GET method and enter the URL: http://localhost:3000/status.
Click Send.
You should receive a JSON response with the bot's current status.
Running the Application
Prerequisites
Node.js (version 14 or later) installed on your machine.
Installation Steps
Clone the Repository:

bash
Copy code
git clone <repository-url>
cd stock-trading-bot
Install Dependencies:

bash
Copy code
npm install
Start the Server:

bash
Copy code
node src/server.js
Monitor the Output:

Check the console for log messages from the trading strategy and current stock prices.
Interact with the API:

Use Postman to interact with the bot as described in the API Usage section.
Conclusion
This trading bot is a simple implementation that can be expanded with more complex trading strategies, error handling, and data management features.
