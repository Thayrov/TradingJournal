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
