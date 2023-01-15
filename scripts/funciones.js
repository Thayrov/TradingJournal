const contar = entradas => entradas++;
const calcEntryNo = Date.now();
const calcUnits = (capital, price) => capital / price;
const calcSize = (price, units) => price * units;
const calcCommission = (spread, units) => spread * units;
const calcStopLoss = (position, price, change) => {
	position == 'long'
		? price * (1 - change * 0.382)
		: price * (1 + change * 0.382);
};
const calcTakeProfit = (position, price, change) => {
	position == 'long'
		? price * (1 + change * rrr * 0.382)
		: price * (1 - change * rrr * 0.382);
};
const calcLossTotal = (position, units, stopLoss, price, commission) => {
	position == 'long'
		? units * (stopLoss - price) - commission
		: units * (price - stopLoss) - commission;
};
const calcProfitTotal = (position, units, takeProfit, price, commission) => {
	position == 'long'
		? units * (price - takeProfit) - commission
		: units * (takeProfit - price) - commission;
};
const calcRRRTotal = (profitTotal, lossTotal) => -profitTotal / lossTotal;
const calcRisk = (lossTotal, capital) => (lossTotal / capital) * 100;

const guardarEntradaLS = entradas => {
	localStorage.setItem('entradas', JSON.stringify(entradas));
};

const cargarEntradaLS = () => {
	return JSON.parse(localStorage.getItem('entradas')) || [];
};
