//  Variables y entradas
const sixDecimals = 6;
const twoDecimals = 2;

let balance = document.getElementById('balance');
let market = document.getElementById('instrumento');
let position = document.getElementById('direccion');
let date = document.getElementById('fecha');
let price = document.getElementById('precio');
let spread = document.getElementById('spread');
let change = document.getElementById('variacion');
let rrr = document.getElementById('rrr');

//	Declaración del array
const Entradas = [];

//	Clase constructora
class entradaMercado {
	constructor(
		entryNo,
		capital,
		market,
		position,
		date,
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
		this.entryNo = entryNo;
		this.capital = capital;
		this.market = market;
		this.position = position;
		this.date = date;
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

	contarEntradas(i) {
		this.entryNo = i;
		this.entryNo ? i++ : i;
	}

	getDate() {
		new Date(this.hour);
	}

	calcUnits() {
		return this.capital / this.price;
	}
	calcSize() {
		return this.price * this.units;
	}
	calcCommission() {
		return this.spread * this.units;
	}
	calcStopLoss() {
		switch (this.position) {
			case 'long':
				return this.price - this.change * this.price * 0.382;
			case 'short':
				return this.price + this.change * this.price * 0.382;
		}
	}
	calcTakeProfit() {
		switch (this.position) {
			case 'long':
				return this.price + this.change * this.price * this.ratio * 0.382;
			case 'short':
				return this.price - this.change * this.price * this.ratio * 0.382;
		}
	}
	calcLossTotal() {
		switch (this.position) {
			case 'long':
				return this.units * (this.stopLoss - this.price) - this.commission;
			case 'short':
				return this.units * (this.price - this.stopLoss) - this.commission;
		}
	}
	calcProfitTotal() {
		switch (this.position) {
			case 'long':
				return this.units * (this.price - this.takeProfit) - this.commission;
			case 'short':
				return this.units * (this.takeProfit - this.price) - this.commission;
		}
	}
	calcRatio2() {
		return -this.profitTotal / this.lossTotal;
	}
	calcRisk() {
		return (-this.lossTotal / this.capital) * 100;
	}

	imprimirEntrada() {
		return (document.getElementById('entradasCalculadora').innerHTML = `<tr>
		<th scope="row">${this.contarEntradas()}</th>
		<td>$ ${parseFloat(this.capital).toFixed(twoDecimals)}</td>
		<td>${this.market}</td>
		<td>${this.position}</td>
		<td>${new Date(this.date).toUTCString()}</td>
		<td>$ ${parseFloat(this.price).toFixed(twoDecimals)}}</td>
		<td>${parseFloat(this.calcUnits()).toFixed(twoDecimals)}</td>
		<td>$ ${parseFloat(this.spread).toFixed(twoDecimals)}</td>
		<td>$ ${parseFloat(this.calcSize()).toFixed(twoDecimals)}</td>
		<td>$ ${parseFloat(this.calcCommission()).toFixed(twoDecimals)}</td>
		<td>${parseFloat(this.change).toFixed(twoDecimals)}%</td>
		<td>${parseFloat(this.ratio).toFixed(twoDecimals)}</td>
		<td>$ ${parseFloat(this.calcStopLoss()).toFixed(twoDecimals)}</td>
		<td>$ ${parseFloat(this.calcTakeProfit()).toFixed(twoDecimals)}</td>
		<td>$ ${parseFloat(this.calcLossTotal()).toFixed(twoDecimals)}</td>
		<td>$ ${parseFloat(this.calcProfitTotal()).toFixed(twoDecimals)}</td>
		<td>${parseFloat(this.calcRatio2()).toFixed(twoDecimals)}</td>
		<td>${parseFloat(this.calcRisk()).toFixed(twoDecimals)}%</td>
		</tr>`);
	}
}

let agregarEntrada = document.getElementById('btnAgregarEntrada');

for (let i = 1; i <= 100; i++) {
	const entrada = new entradaMercado(
		(balance.onchange = () => {
			document.getElementById('balance').value;
		}),
		(market.onchange = () => {
			document.getElementById('instrumento').value;
		}),
		(position.onchange = () => {
			document.getElementById('direccion').value;
		}),
		(date.onchange = () => {
			document.getElementById('fecha').value;
		}),
		(price.onchange = () => {
			document.getElementById('precio').value;
		}),
		(spread.onchange = () => {
			document.getElementById('spread').value;
		}),
		(change.onchange = () => {
			document.getElementById('variacion').value;
		}),
		(rrr.onchange = () => {
			document.getElementById('rrr').value;
		}),
	);
	entrada.contarEntradas(),
		entrada.calcUnits(),
		entrada.calcSize(),
		entrada.calcCommission(),
		entrada.calcStopLoss(),
		entrada.calcTakeProfit(),
		entrada.calcLossTotal(),
		entrada.calcProfitTotal(),
		entrada.calcRatio2(),
		entrada.calcRisk(),
		//	Guarda la información en el array
		Entradas.push(entrada);
	agregarEntrada.onclick = () => {
		entrada.imprimirEntrada();
	};
}
