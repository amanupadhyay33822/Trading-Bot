# Stock Trading Bot

A simple stock trading bot implemented using Node.js that simulates basic trading strategies based on stock price changes. The bot continuously monitors stock prices, executes trades, and tracks profit/loss.

## Table of Contents

- [Features](#features)
- [Trading Logic](#trading-logic)
- [API Usage](#api-usage)
- [Running the Application](#running-the-application)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Features

- Simulates buying and selling of stocks based on market movements.
- Tracks the bot's balance, holdings, and overall profit/loss.
- Implements simple trading strategies (buy when the price drops by 1%, sell when it rises by 1%).
- Provides an API to start the trading bot and check its status.

## Trading Logic

### Strategy

The trading bot uses the following logic:

1. **Buying Condition**:
   - Buys shares if it holds no shares and the current price drops to 99% or less of the previous price.
  
2. **Selling Condition**:
   - Sells shares if it holds shares and the current price rises to 101% or more of the previous price.

### State Management

- **Balance**: Initial amount available for trading.
- **Holdings**: The number of shares currently held.
- **Previous Price**: The last stock price before the current price.
- **Total Profit**: Cumulative profit from all trades.
- **Trades**: An array of all buy and sell actions.

## API Usage

### Endpoints

1. **Start Trading**
   - **Method**: `GET`
   - **Endpoint**: `/start`
   - **Description**: Initiates the trading bot to start monitoring stock prices.

2. **Get Bot Status**
   - **Method**: `GET`
   - **Endpoint**: `/status`
   - **Description**: Returns the current state of the bot, including balance, holdings, trades, and total profit.

### Example Requests Using Postman

- **Start Trading**: 
  - `GET http://localhost:3000/start`

- **Get Status**: 
  - `GET http://localhost:3000/status`

## Running the Application

### Prerequisites
- Node.js (version 14 or later) installed.

### Installation Steps
1. **Clone the Repository**
   ```bash
   git clone <repository-url>
 
2. **Install Dependencies**
   ```bash
   npm install
3. **Start the Server**
   ```bash
   npm start

## Technologies Used
- **Node.js**
- **Express.js**
- **JavaScript**

