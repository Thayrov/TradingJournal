//  Funciones
const calcUnits = (balance, price) => balance / price;
const calcSize = (price, units) => price * units;
const calcCommission = (spread, units) => spread * units;
const calcStopLoss = (position, price, change) => {
	switch (position) {
		case 'long':
			return price * (1 - (change / 100) * 0.382);
		case 'short':
			return price * (1 + (change / 100) * 0.382);
	}
};
const calcTakeProfit = (position, price, change, rrr) => {
	switch (position) {
		case 'long':
			return price * (1 + (change / 100) * rrr * 0.382);
		case 'short':
			return price * (1 - (change / 100) * rrr * 0.382);
	}
};
const calcLossTotal = (position, units, stopLoss, price, commission) => {
	switch (position) {
		case 'long':
			return units * (stopLoss - price) - commission;
		case 'short':
			return units * (price - stopLoss) - commission;
	}
};
const calcProfitTotal = (position, units, takeProfit, price, commission) => {
	switch (position) {
		case 'long':
			return units * (takeProfit - price) - commission;
		case 'short':
			return units * (price - takeProfit) - commission;
	}
};
const calcRRRTotal = (profitTotal, lossTotal) => -profitTotal / lossTotal;
const calcRisk = (lossTotal, balance) => (-lossTotal / balance) * 100;
