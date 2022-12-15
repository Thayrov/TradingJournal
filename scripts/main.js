//  Variables y entradas
const sixDecimals = 6;
const twoDecimals = 2;
const errorPosition =
	'Ingresa "s" o "l" en tu posición de entrada para continuar';
do {
	var loops = parseInt(
		prompt('¿Cuántas operaciones quieres calcular? (Máximo: 5)'),
	);
} while (loops < 1 || loops > 5);
//	Declaración del array
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
			case 'l':
				return (this.capital * this.risk) / (this.price - this.stopLoss);
			case 's':
				return (this.capital * this.risk) / (this.stopLoss - this.price);
			default:
				return errorPosition;
		}
	}
	imprimirEntrada() {
		return console.log(`Entraste al mercado: ${this.market}; 
		Tu capital es de $${this.capital.toFixed(twoDecimals)} ${this.currency}; 
		Tu porcentaje de riesgo es de ${this.risk.toFixed(twoDecimals) * 100} %; 
		Tu rata de recompensa/riesgo es de ${this.ratio.toFixed(twoDecimals)}; 
		El activo que operarás en el mercado ${this.market} vale $${this.price.toFixed(
			sixDecimals,
		)} ${this.currency}; 
		Entrará al mercado en posición ${this.position};
		Con tu stop loss y porcentaje de riesgo, deberás comprar: ${this.calcUnits().toFixed(
			twoDecimals,
		)} unidades para satisfacer tu estrategia de trading;
		Saldrás del mercado con la pérdida planeada, si el precio llega a $${this.stopLoss.toFixed(
			sixDecimals,
		)} ${this.currency};
		Cerrarás tu operación con la ganancia planeada, si el precio llega a $${this.calcTakeProfit().toFixed(
			sixDecimals,
		)} ${this.currency};
		Si pierdes, tu capital luego de la operación será de $${this.calcLossTotal().toFixed(
			twoDecimals,
		)} ${this.currency};
		Si ganas, tu capital luego de la operación será de $${this.calcProfitTotal().toFixed(
			twoDecimals,
		)} ${this.currency}.`);
	}
}
//  Bucle
for (let loop = 0; loop < loops; loop++) {
	const entrada = new entradaMercado(
		prompt('¿En qué moneda operas?(usd o mxn)').toLowerCase(),
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
			'¿En qué posición entrarás? ("l" para long o alcista o "s" para short o bajista)',
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
//	Muestro el total gastado en cada operación
for (const entrada of Entradas) {
	console.log(
		`En total, gastaste $${parseFloat(entrada.calcUnits() * entrada.price)} ${
			entrada.currency
		} para ejecutar la operación de la entrada #${
			Entradas.indexOf(entrada) + 1
		}`,
	);
}
