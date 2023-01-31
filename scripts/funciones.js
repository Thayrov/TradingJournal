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

const calcRetornoCash = (estatus, profitTotal, lossTotal) => {
	estatus == 'win' ? profitTotal : lossTotal;
};

const calcRetornoPerc = (estatus, balance, profitTotal, lossTotal) => {
	estatus == 'win'
		? (profitTotal = (balance / profitTotal) * 100)
		: (lossTotal = (balance / lossTotal) * 100);
};

//  Imprimir tabla
var imprimirTabla = (() => {
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
					<th scope="col">Enviar al Journal</th>
				</tr>
			</thead>
			<tbody class="table-group-divider" id="entradasCalculadora"></tbody>
		</table>`;
		}
	};
})();

//  Imprimir tabla del Journal

const imprimirTablaJournal = () => {
	if (journal.length < 1) {
		document.getElementById('tablaJournal').innerHTML = `
<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-face-id-error" width="240" height="240" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 8v-2a2 2 0 0 1 2 -2h2"></path><path d="M4 16v2a2 2 0 0 0 2 2h2"></path><path d="M16 4h2a2 2 0 0 1 2 2v2"></path><path d="M16 20h2a2 2 0 0 0 2 -2v-2"></path><path d="M9 10h.01"></path><path d="M15 10h.01"></path><path d="M9.5 15.05a3.5 3.5 0 0 1 5 0"></path></svg>
<h2>Aún no se han agregado entradas al Journal</h2>`;
	} else {
		var imprimirHeaderJournal = (function () {
			var impresoJournal = false;
			return function () {
				if (!impresoJournal) {
					impresoJournal = true;
					document.getElementById('tablaJournal').innerHTML = `<table
			class="table table-dark table-striped table-hover table-sm align-middle">
			<thead>
				<tr>
					<th scope="col">Status</th>
					<th scope="col">Fecha</th>
					<th scope="col">Instrumento</th>
					<th scope="col">Dirección</th>
					<th scope="col">Precio de entrada</th>
					<th scope="col">Tamaño del trade</th>
					<th scope="col">Retorno($)</th>
					<th scope="col">Retorno(%)</th>
				</tr>
			</thead>
			<tbody class="table-group-divider" id="entradasJournal"></tbody>
		</table>`;
				}
			};
		})();
		imprimirHeaderJournal();
	}
};

const imprimirTablaMercados = () => {
	if (mercados.length < 1) {
		document.getElementById('tablaMercados').innerHTML = `
		<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-exclamation" width="40" height="40" viewBox="0 0 24 24" stroke-width="1" stroke="#a8fbfb" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path><path d="M21 21l-6 -6"></path><path d="M10 13v.01"></path><path d="M10 7v3"></path></svg>
		<h4>Aún no haces una búsqueda</h4>`;
	} else {
		var imprimirHeaderMercados = (function () {
			var impresoMercados = false;
			return function () {
				if (!impresoMercados) {
					impresoMercados = true;
					document.getElementById('tablaMercados').innerHTML = `<table
			class="mt-5 table table-dark table-striped table-hover table-sm align-middle">
			<thead>
				<tr>
					<th scope="col">Stock</th>
					<th scope="col">Precio de apertura</th>
					<th scope="col">Precio más alto</th>
					<th scope="col">Precio más bajo</th>
					<th scope="col">Precio de cierre</th>
					<th scope="col">Volumen transaccional</th>
				</tr>
			</thead>
			<tbody class="table-group-divider" id="dataMercados"></tbody>
		</table>`;
				}
			};
		})();
		imprimirHeaderMercados();
	}
};
