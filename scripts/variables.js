//  Variables, declaraciones y clase constructora
const sixDecimals = 6;
const twoDecimals = 2;
var entradas = [];
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
		estatus,
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
		this.estatus = estatus;
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
            <td><button
			type="button"
			class="btn btn-outline-secondary"
			id="btnEnviarEntrada${entradas.length}"
			onClick='guardarEntrada()' ><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-notebook" width="40" height="40" viewBox="0 0 24 24" stroke-width="1" stroke="#a8fbfb" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M6 4h11a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-11a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1m3 0v18"></path><path d="M13 8l2 0"></path><path d="M13 12l2 0"></path></svg></button></td>
            </tr>`);
	}
}

class EntradaJournal {
	constructor(
		estatus,
		date,
		market,
		position,
		price,
		size,
		retornoCash,
		retornoPerc,
	) {
		this.estatus = estatus;
		this.date = date;
		this.market = market;
		this.position = position;
		this.price = price;
		this.size = size;
		this.retornoCash = retornoCash;
		this.retornoPerc = retornoPerc;
	}

	calcRetornoCash(estatus, profitTotal, lossTotal) {
		estatus == 'win' ? profitTotal : lossTotal;
	}

	calcRetornoPerc(estatus, balance, profitTotal, lossTotal) {
		estatus == 'win'
			? (profitTotal = (balance / profitTotal) * 100)
			: (lossTotal = (balance / lossTotal) * 100);
	}

	imprimirEntradaJournal() {
		return (document.getElementById('entradasJournal').innerHTML += `
		<th scope="row">${this.estatus}</th>
		<td>${this.date}</td>
		<td>${this.market}</td>
		<td>${this.position}</td>
		<td>$${this.price}</td>
		<td>$${this.size}</td>
		<td>$${this.retornoCash}</td>
		<td>${this.retornoPerc.toFixed(twoDecimals)}%</td>
		</tr>`);
	}
}
