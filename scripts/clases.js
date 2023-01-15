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
