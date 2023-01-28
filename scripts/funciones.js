//  Funciones
const calcUnits = (balance, price) => balance / price;
const calcSize = (price, units) => price * units;
const calcCommission = (spread, units) => spread * units;
const calcStopLoss = (position, price, change) => {
	switch (position) {
		case 'long':
			return price * (1 - (change / 100) * 0.382);
		case 'short':
			return price * (1 + (change / 100) * 0.382);
	}
};
const calcTakeProfit = (position, price, change, rrr) => {
	switch (position) {
		case 'long':
			return price * (1 + (change / 100) * rrr * 0.382);
		case 'short':
			return price * (1 - (change / 100) * rrr * 0.382);
	}
};
const calcLossTotal = (position, units, stopLoss, price, commission) => {
	switch (position) {
		case 'long':
			return units * (stopLoss - price) - commission;
		case 'short':
			return units * (price - stopLoss) - commission;
	}
};
const calcProfitTotal = (position, units, takeProfit, price, commission) => {
	switch (position) {
		case 'long':
			return units * (takeProfit - price) - commission;
		case 'short':
			return units * (price - takeProfit) - commission;
	}
};
const calcRRRTotal = (profitTotal, lossTotal) => -profitTotal / lossTotal;
const calcRisk = (lossTotal, balance) => (-lossTotal / balance) * 100;

//  Imprimir tabla
var imprimirTabla = (function () {
	var impreso = false;
	return function () {
		if (!impreso) {
			impreso = true;
			document.getElementById('tabla').innerHTML = `<table
			class="table table-dark table-striped table-hover table-sm align-middle">
			<caption>
				*(Relación de Riesgo y Recompensa); **(Stop Loss); ***(Take Profit)
			</caption>
			<thead>
				<tr>
					<th scope="col">Fecha</th>
					<th scope="col">Balance</th>
					<th scope="col">Instrumento</th>
					<th scope="col">Dirección</th>
					<th scope="col">Precio de entrada</th>
					<th scope="col">Unidades</th>
					<th scope="col">Spread</th>
					<th scope="col">Tamaño del trade</th>
					<th scope="col">Comisión</th>
					<th scope="col">Variación(%)</th>
					<th scope="col">RRR*</th>
					<th scope="col">SL**</th>
					<th scope="col">TP***</th>
					<th scope="col">Posible pérdida</th>
					<th scope="col">Posible ganancia</th>
					<th scope="col">RRR con comisión</th>
					<th scope="col">Riesgo</th>
				</tr>
			</thead>
			<tbody class="table-group-divider" id="entradasCalculadora"></tbody>
		</table>`;
		}
	};
})();
