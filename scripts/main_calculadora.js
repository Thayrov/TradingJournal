entry = contar(entradas.length);
units = calcUnits(balance, price);
size = calcSize(price, units);
commission = calcCommission(spread, units);
stopLoss = calcStopLoss(position, price, change);
takeProfit = calcTakeProfit(position, price, change);
lossTotal = calcLossTotal(position, units, stopLoss, price, commission);
profitTotal = calcProfitTotal(position, units, takeProfit, price, commission);
rrrTotal = calcRRRTotal(profitTotal, lossTotal);
risk = calcRisk(lossTotal, balance);

const entradaUsuario = () => {
	for (let i = 1; i <= 100; i++) {
		const entrada = new EntradaMercado(
			entry,
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
			unit,
			(spread.onchange = () => {
				document.getElementById('spread').value;
			}),
			size,
			commission,
			(change.onchange = () => {
				document.getElementById('variacion').value;
			}),
			(rrr.onchange = () => {
				document.getElementById('rrr').value;
			}),
			stopLoss,
			takeProfit,
			lossTotal,
			profitTotal,
			rrrTotal,
			risk,
		);
		//	Guarda la información en el array
		Entradas.push(entrada);
	}
};

const imprimirEntrada = () => {
	const entradas = cargarEntradaLS();
	let newEntry = '';

	for (let entrada of entradas) {
		newEntry += `<tr>
		<th scope="row">${entrada.entryNo}</th>
		<td>$ ${parseFloat(entrada.capital).toFixed(twoDecimals)}</td>
		<td>${entrada.market}</td>
		<td>${entrada.position}</td>
		<td>${new Date(entrada.date).toUTCString()}</td>
		<td>$ ${parseFloat(entrada.price).toFixed(twoDecimals)}}</td>
		<td>${parseFloat(entrada.calcUnits()).toFixed(twoDecimals)}</td>
		<td>$ ${parseFloat(entrada.spread).toFixed(twoDecimals)}</td>
		<td>$ ${parseFloat(entrada.calcSize()).toFixed(twoDecimals)}</td>
		<td>$ ${parseFloat(entrada.calcCommission()).toFixed(twoDecimals)}</td>
		<td>${parseFloat(entrada.change).toFixed(twoDecimals)}%</td>
		<td>${parseFloat(entrada.ratio).toFixed(twoDecimals)}</td>
		<td>$ ${parseFloat(entrada.calcStopLoss()).toFixed(twoDecimals)}</td>
		<td>$ ${parseFloat(entrada.calcTakeProfit()).toFixed(twoDecimals)}</td>
		<td>$ ${parseFloat(entrada.calcLossTotal()).toFixed(twoDecimals)}</td>
		<td>$ ${parseFloat(entrada.calcProfitTotal()).toFixed(twoDecimals)}</td>
		<td>${parseFloat(entrada.calcRatio2()).toFixed(twoDecimals)}</td>
		<td>${parseFloat(entrada.calcRisk()).toFixed(twoDecimals)}%</td>
		</tr>`;
	}

	document.getElementById('entradasCalculadora').innerHTML = newEntry;
};

let agregarEntrada = document.getElementById('btnAgregarEntrada');
agregarEntrada.onclick = () => {
	imprimirEntrada();
};
