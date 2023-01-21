//  Función que toma entrada de datos del usuario
const addEntrada = start => {
	start.preventDefault();
	const entrada = new EntradaMercado(
		(date = new Date(document.getElementById('fecha').value).toDateString()),
		(balance = parseFloat(document.getElementById('balance').value)),
		(market = document.getElementById('instrumento').value.toUpperCase()),
		(position = document.getElementById('direccion').value),
		(price = parseFloat(document.getElementById('precio').value)),
		(units = parseFloat(calcUnits(balance, price)).toFixed(twoDecimals)),
		(spread = document.getElementById('spread').value),
		(size = parseFloat(calcSize(price, units)).toFixed(twoDecimals)),
		(commission = parseFloat(calcCommission(spread, units)).toFixed(
			twoDecimals,
		)),
		(change = document.getElementById('variacion').value),
		(rrr = document.getElementById('rrr').value),
		(stopLoss = parseFloat(calcStopLoss(position, price, change)).toFixed(
			twoDecimals,
		)),
		(takeProfit = parseFloat(
			calcTakeProfit(position, price, change, rrr),
		).toFixed(twoDecimals)),
		(lossTotal = parseFloat(
			calcLossTotal(position, units, stopLoss, price, commission),
		).toFixed(twoDecimals)),
		(profitTotal = parseFloat(
			calcProfitTotal(position, units, takeProfit, price, commission),
		).toFixed(twoDecimals)),
		(rrrTotal = parseFloat(calcRRRTotal(profitTotal, lossTotal)).toFixed(
			twoDecimals,
		)),
		(risk = parseFloat(calcRisk(lossTotal, balance)).toFixed(twoDecimals)),
	);
	//  Imprimir datos en tabla
	entrada.imprimirEntrada();
	//  Guardar datos en array
	entradas.push(entrada);
	//  Limpiar formulario para siguiente entrada
	document.querySelector('form').reset();
	//  Guardar array en local storage
	localStorage.setItem('listaEntradas', JSON.stringify(entradas));
};

//  Evento para activar función addEntrada()
document.addEventListener('DOMContentLoaded', () => {
	document
		.getElementById('btnAgregarEntrada')
		.addEventListener('click', addEntrada);
});
