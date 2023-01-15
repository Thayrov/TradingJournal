class EntradaMercado {
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
		this.entryNo = entryNo = Date.now();
		this.capital = capital;
		this.market = market;
		this.position = position;
		this.date = date;
		this.price = price;
		this.units = units = capital / price;
		this.spread = spread;
		this.size = size = price * units;
		this.commission = commission = spread * units;
		this.change = change;
		this.ratio = ratio;
		this.stopLoss = stopLoss =
			position == 'long'
				? price * (1 - change * 0.382)
				: price * (1 + change * 0.382);
		this.takeProfit = takeProfit =
			position == 'long'
				? price * (1 + change * rrr * 0.382)
				: price * (1 - change * rrr * 0.382);
		this.lossTotal = lossTotal =
			position == 'long'
				? units * (stopLoss - price) - commission
				: units * (price - stopLoss) - commission;
		this.profitTotal = profitTotal =
			position == 'long'
				? units * (price - takeProfit) - commission
				: units * (takeProfit - price) - commission;
		this.ratio2 = ratio2 = -profitTotal / lossTotal;
		this.risk = risk = (lossTotal / capital) * 100;
	}

	/* 	imprimirEntrada() {
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
	} */
}
