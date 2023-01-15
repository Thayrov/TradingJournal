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

//  Variables, declaraciones y clase constructora
const sixDecimals = 6;
const twoDecimals = 2;
const entradas = [];

let balance = document.getElementById('balance').value;
let market = document.getElementById('instrumento').value;
let position = document.getElementById('direccion').value;
let date = document.getElementById('fecha').value;
let price = document.getElementById('precio').value;
let units = calcUnits(balance, price);
let spread = document.getElementById('spread').value;
let size = calcSize(price, units);
let commission = calcCommission(spread, units);
let change = document.getElementById('variacion').value;
let rrr = document.getElementById('rrr').value;
let stopLoss = calcStopLoss(position, price, change);
let takeProfit = calcTakeProfit(position, price, change, rrr);
let lossTotal = calcLossTotal(position, units, stopLoss, price, commission);
let profitTotal = calcProfitTotal(
	position,
	units,
	takeProfit,
	price,
	commission,
);
let rrrTotal = calcRRRTotal(profitTotal, lossTotal);
let risk = calcRisk(lossTotal, balance);

class EntradaMercado {
	constructor(
		date,
		balance,
		market,
		position,
		price,
		units,
		spread,
		size,
		commission,
		change,
		ratio,
		stopLoss,
		takeProfit,
		lossTotal,
		profitTotal,
		ratio2,
		risk,
	) {
		this.date = date;
		this.balance = balance;
		this.market = market;
		this.position = position;
		this.price = price;
		this.units = units;
		this.spread = spread;
		this.size = size;
		this.commission = commission;
		this.change = change;
		this.ratio = ratio;
		this.stopLoss = stopLoss;
		this.takeProfit = takeProfit;
		this.lossTotal = lossTotal;
		this.profitTotal = profitTotal;
		this.ratio2 = ratio2;
		this.risk = risk;
	}

	imprimirEntrada() {
		return (document.getElementById('entradasCalculadora').innerHTML += `
            <th scope="row">${this.date}</th>
            <td>$${this.balance}</td>
            <td>${this.market}</td>
            <td>${this.position}</td>
            <td>$${this.price}</td>
            <td>${this.units}</td>
            <td>$${this.spread}</td>
            <td>$${this.size}</td>
            <td>$${this.commission}</td>
            <td>${this.change}%</td>
            <td>${this.ratio}</td>
            <td>$${this.stopLoss}</td>
            <td>$${this.takeProfit}</td>
            <td>$${this.lossTotal}</td>
            <td>$${this.profitTotal}</td>
            <td>${this.ratio2}</td>
            <td>${this.risk}%</td>
            </tr>
            
`);
	}
}

//  Función que toma entrada de datos del usuario
const addEntrada = start => {
	start.preventDefault();
	const entrada = new EntradaMercado(
		(date = new Date(document.getElementById('fecha').value).toUTCString()),
		(balance = parseFloat(document.getElementById('balance').value)),
		(market = document.getElementById('instrumento').value.toUpperCase()),
		(position = document.getElementById('direccion').value),
		(price = parseFloat(document.getElementById('precio').value)),
		(units = parseFloat(calcUnits(balance, price)).toFixed(twoDecimals)),
		(spread = document.getElementById('spread').value),
		(size = parseFloat(calcSize(price, units)).toFixed(twoDecimals)),
		(commission = parseFloat(calcCommission(spread, units)).toFixed(
			twoDecimals,
		)),
		(change = document.getElementById('variacion').value),
		(rrr = document.getElementById('rrr').value),
		(stopLoss = parseFloat(calcStopLoss(position, price, change)).toFixed(
			twoDecimals,
		)),
		(takeProfit = parseFloat(
			calcTakeProfit(position, price, change, rrr),
		).toFixed(twoDecimals)),
		(lossTotal = parseFloat(
			calcLossTotal(position, units, stopLoss, price, commission),
		).toFixed(twoDecimals)),
		(profitTotal = parseFloat(
			calcProfitTotal(position, units, takeProfit, price, commission),
		).toFixed(twoDecimals)),
		(rrrTotal = parseFloat(calcRRRTotal(profitTotal, lossTotal)).toFixed(
			twoDecimals,
		)),
		(risk = parseFloat(calcRisk(lossTotal, balance)).toFixed(twoDecimals)),
	);
	//  Imprimir datos en tabla
	entrada.imprimirEntrada();
	//  Guardar datos en array
	entradas.push(entrada);
	//  Limpiar formulario para siguiente entrada
	document.querySelector('form').reset();
	//  Guardar array en local storage
	localStorage.setItem('listaEntradas', JSON.stringify(entradas));
};

//  Evento para activar función addEntrada()
document.addEventListener('DOMContentLoaded', () => {
	document
		.getElementById('btnAgregarEntrada')
		.addEventListener('click', addEntrada);
});
