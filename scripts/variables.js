//  Variables, declaraciones y clase constructora
const sixDecimals = 6;
const twoDecimals = 2;
const entradas = [];
const journal = [];

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
		status,
		retornoCash,
		retornoPerc,
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
		this.status = status;
		this.retornoCash = retornoCash;
		this.retornoPerc = retornoPerc;
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
            </tr>`);
	}

	imprimirEntradaJournal() {
		return (document.getElementById('entradasJournal').innerHTML += `
		<th scope="row">${this.status}</th>
		<td>$${this.date}</td>
		<td>${this.market}</td>
		<td>${this.position}</td>
		<td>$${this.price}</td>
		<td>$${this.size}</td>
		<td>$${this.retornoCash}</td>
		<td>${this.retornoPerc}</td>
		</tr>`);
	}
}

class EntradaJournal {
	constructor(
		status,
		date,
		market,
		position,
		price,
		size,
		retornoCash,
		retornoPerc,
	) {
		this.status = status;
		this.date = date;
		this.market = market;
		this.position = position;
		this.price = price;
		this.size = size;
		this.retornoCash = retornoCash;
		this.retornoPerc = retornoPerc;
	}

	imprimirEntradaJournal() {
		return (document.getElementById('entradasJournal').innerHTML += `
		<th scope="row">${this.status}</th>
		<td>$${this.date}</td>
		<td>${this.market}</td>
		<td>${this.position}</td>
		<td>$${this.price}</td>
		<td>$${this.size}</td>
		<td>$${this.retornoCash}</td>
		<td>${this.retornoPerc}</td>
		</tr>`);
	}
}
