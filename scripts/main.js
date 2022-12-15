//  Variables y entradas
const sixDecimals = 6;
const twoDecimals = 2;
const errorPosition =
	'Ingresa "short" o "long" en tu posición de entrada para continuar';
const loops = parseInt(
	prompt('¿Cuántas operaciones quieres calcular? (Máximo: 5)'),
);

//	Array
const Entradas = [];
//	Clase constructora
class entradaMercado {
	constructor(
		currency,
		market,
		capital,
		risk,
		ratio,
		price,
		position,
		stopLoss,
		lossTotal,
		profitTotal,
		takeProfit,
		units,
	) {
		this.currency = currency;
		this.market = market;
		this.capital = capital;
		this.risk = risk;
		this.ratio = ratio;
		this.price = price;
		this.position = position;
		this.stopLoss = stopLoss;
		this.lossTotal = lossTotal;
		this.profitTotal = profitTotal;
		this.takeProfit = takeProfit;
		this.units = units;
	}
	calcLossTotal() {
		return this.capital * (1 - this.risk);
	}
	calcProfitTotal() {
		return this.capital * (1 + this.risk * this.ratio);
	}
	calcTakeProfit() {
		return this.price - (this.stopLoss - this.price) * this.ratio;
	}
	calcUnits() {
		switch (this.position) {
			case 'long':
				return (this.capital * this.risk) / (this.price - this.stopLoss);
			case 'short':
				return (this.capital * this.risk) / (this.stopLoss - this.price);
			default:
				return errorPosition;
		}
	}
	imprimirEntrada() {
		return console.log(`Entraste al mercado: ${this.market}; 
		Tu capital es de $${this.capital.toFixed(twoDecimals)} ${this.currency} 
		Tu porcentaje de riesgo es de ${this.risk.toFixed(twoDecimals) * 100} % 
		Tu rata de recompensa/riesgo es de ${this.ratio.toFixed(twoDecimals)} 
		El activo que operarás en el mercado ${this.market} vale $${this.price.toFixed(
			sixDecimals,
		)} ${this.currency} 
		Entrará al mercado en posición ${this.position}
		Con tu stop loss y porcentaje de riesgo, deberás comprar: ${this.calcUnits().toFixed(
			twoDecimals,
		)} unidades para satisfacer tu estrategia de trading.
		Saldrás del mercado con la pérdida planeada, si el precio llega a $${this.stopLoss.toFixed(
			sixDecimals,
		)} ${this.currency}
		Cerrarás tu operación con la ganancia planeada, si el precio llega a $${this.calcTakeProfit().toFixed(
			sixDecimals,
		)} ${this.currency}
		Si pierdes, tu capital luego de la operación será de $${this.calcLossTotal().toFixed(
			twoDecimals,
		)} ${this.currency}
		Si ganas, tu capital luego de la operación será de $${this.calcProfitTotal().toFixed(
			twoDecimals,
		)} ${this.currency}`);
	}
}
//  Bucle
for (let loop = 0; loop < loops; loop++) {
	const entrada = new entradaMercado(
		prompt('¿En qué moneda operas?').toLowerCase(),
		prompt('¿En qué mercado operarás?').toUpperCase(),
		parseFloat(prompt('¿Cuánto es tu capital?')),
		parseFloat(
			prompt(
				'¿Cuánto es tu % de riesgo por operación? (Ingresa número del 1 al 99)',
			) / 100,
		),
		parseFloat(prompt('¿Cuánto es tu rata de recompensa/riesgo?')),
		parseFloat(prompt('¿Cuánto vale la unidad del activo que operarás?')),
		prompt(
			'¿En qué posición entrarás? ("long" para alcista o "short" para bajista)',
		).toLowerCase(),
		parseFloat(prompt('¿En qué precio establecerás tu Stop Loss?')),
	);
	entrada.calcLossTotal();
	entrada.calcProfitTotal();
	entrada.calcTakeProfit();
	entrada.calcUnits();
	//	Salida de información
	entrada.imprimirEntrada();
	//	Guarda la información en el array
	Entradas.push(entrada);
}

/* console.log(Entradas[0]);
console.log(Entradas[1]); */

/* ----------------------------------------------------------------------------------------------------------
//  Variables y entradas
const sixDecimals = 6;
const twoDecimals = 2;
const error =
	'Ingresa "short" o "long" en tu posición de entrada para continuar';
const loops = parseInt(prompt('¿Cuántas operaciones quieres calcular?'));
//  Bucle
for (let i = 0; i < loops; i++) {
	const currency = prompt('¿En qué moneda operas?').toLowerCase();
	const market = prompt('¿En qué mercado operarás?').toUpperCase();
	const capital = parseFloat(prompt('¿Cuánto es tu capital?'));
	const risk = parseFloat(
		prompt(
			'¿Cuánto es tu % de riesgo por operación? (Ingresa número del 1 al 99)',
		) / 100,
	);
	const ratio = parseFloat(prompt('¿Cuánto es tu rata de recompensa/riesgo?'));
	const price = parseFloat(
		prompt('¿Cuánto vale la unidad del activo que operarás?'),
	);
	const position = prompt(
		'¿En qué posición entrarás? ("long" para alcista o "short" para bajista)',
	).toLowerCase();
	const stopLoss = parseFloat(
		prompt('¿En qué precio establecerás tu Stop Loss?'),
	);
	//  Funciones
	const lossTotal = (capital, risk) => capital * (1 - risk);
	const profitTotal = (capital, risk, ratio) => capital * (1 + risk * ratio);
	const takeProfit = (price, stopLoss, ratio) =>
		price - (stopLoss - price) * ratio;
	const units = (capital, risk, stopLoss, price, position) => {
		switch (position) {
			case 'long':
				return (capital * risk) / (price - stopLoss);
			case 'short':
				return (capital * risk) / (stopLoss - price);
			default:
				return error;
		}
	};
	//  Salidas y condiciones
	//	prettier-ignore
	if (position == 'long' || position == 'short') {
		console.log(`Entraste al mercado: ${market}; 
		Tu capital es de $${capital.toFixed(twoDecimals)} ${currency} 
		Tu porcentaje de riesgo es de ${risk.toFixed(twoDecimals)*100} % 
		Tu rata de recompensa/riesgo es de ${ratio.toFixed(twoDecimals)} 
		El activo que operarás en el mercado ${market} vale $${price.toFixed(sixDecimals)} ${currency} 
		Entrará al mercado en posición ${position}
		Con tu stop loss y porcentaje de riesgo, deberás comprar: ${units(capital,risk,stopLoss,price,position)} unidades para satisfacer tu estrategia de trading.
		Saldrás del mercado con la pérdida planeada, si el precio llega a $${stopLoss.toFixed(sixDecimals)} ${currency}
		Cerrarás tu operación con la ganancia planeada, si el precio llega a $${takeProfit(price,stopLoss,ratio).toFixed(sixDecimals)} ${currency}
		Si pierdes, tu capital luego de la operación será de $${lossTotal(capital,risk).toFixed(twoDecimals)} ${currency}
		Si ganas, tu capital luego de la operación será de $${profitTotal(capital,risk,ratio).toFixed(twoDecimals)} ${currency}`);
	} else {
		alert(error);
	}
}
 */
