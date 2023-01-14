//  Variables y entradas
const sixDecimals = 6;
const twoDecimals = 2;

//	Declaración del array
const Entradas = [];

//	Clase constructora
class entradaMercado {
	constructor(
		entryNo,
		capital,
		market,
		position,
		hour,
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
		this.hour = hour;
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

	contarEntradas() {
		let numeroEntradas = 1;
		imprimirEntrada() ? numeroEntradas++ : numeroEntradas;
		return numeroEntradas;
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
		<th scope="row">${this.entryNo}</th>
		<td>$ ${this.capital}</td>
		<td>${this.market}</td>
		<td>${this.position}</td>
		<td>${this.hour}</td>
		<td>$ ${this.price}}</td>
		<td>${this.units}</td>
		<td>$ ${this.spread}</td>
		<td>$ ${this.size}</td>
		<td>$ ${this.commission}</td>
		<td>${this.change}%</td>
		<td>${this.ratio}</td>
		<td>$ ${this.stopLoss}</td>
		<td>$ ${this.takeProfit}</td>
		<td>$ ${this.lossTotal}</td>
		<td>$ ${this.profitTotal}</td>
		<td>${this.ratio2}</td>
		<td>${this.risk}%</td>
		</tr>`);
	}
}
let agregarEntrada = document.getElementById('btnAgregarEntrada');
agregarEntrada.onclick = () => {
	const entrada = new entradaMercado(
		entrada.contarEntradas(),
		parseFloat(document.getElementById('balance').value).toFixed(twoDecimals),
		document.getElementById('instrumento').value.toUpperCase(),
		document.getElementById('direccion').value.toLowerCase(),
		document.getElementById('hora').value.toDateString(),
		parseFloat(document.getElementById('precio').value).toFixed(twoDecimals),
		entrada.calcUnits().toFixed(twoDecimals),
		parseFloat(document.getElementById('spread').value).toFixed(twoDecimals),
		entrada.calcSize().toFixed(twoDecimals),
		entrada.calcCommission().toFixed(twoDecimals),
		parseFloat(document.getElementById('variacion').value).toFixed(twoDecimals),
		parseFloat(document.getElementById('rrr').value).toFixed(twoDecimals),
		parseFloat(entrada.calcStopLoss()).toFixed(twoDecimals),
		parseFloat(entrada.calcTakeProfit()).toFixed(twoDecimals),
		parseFloat(entrada.calcLossTotal()).toFixed(twoDecimals),
		parseFloat(entrada.calcProfitTotal()).toFixed(twoDecimals),
		parseFloat(entrada.calcRatio2()).toFixed(twoDecimals),
		parseFloat(entrada.calcRisk()).toFixed(twoDecimals),
		entrada.imprimirEntrada(),
		//	Guarda la información en el array
		Entradas.push(entrada),
	);
};
