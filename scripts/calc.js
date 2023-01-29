//  Función que toma entrada de datos del usuario
const addEntrada = () => {
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
};

const ejecutarImpresion = () => {
	//  Evento para activar función imprimirTabla()
	document.addEventListener('DOMContentLoaded', () => {
		document
			.getElementById('btnAgregarEntrada')
			.addEventListener('click', imprimirTabla);
	});

	//  Evento para activar función addEntrada()
	document.addEventListener('DOMContentLoaded', () => {
		document
			.getElementById('btnAgregarEntrada')
			.addEventListener('click', addEntrada);
	});
};
//  Evento de Bootstrap que activa estilos de validaciones y fue modificado para activar la impresión de la tabla
(() => {
	('use strict');
	const forms = document.querySelectorAll('.needs-validation');
	Array.from(forms).forEach(form => {
		document
			.getElementById('btnAgregarEntrada')
			.addEventListener('click', event => {
				if (!form.checkValidity()) {
					event.preventDefault();
					event.stopPropagation();
				}
				form.classList.add('was-validated');
				if (form.checkValidity()) {
					imprimirTabla();
					addEntrada();
				}
			});
	});
})();

const borrarTabla = () => {
	Swal.fire({
		title: 'Hey, we have something to say!',
		confirmButtonText: "Let's do this",
		showCancelButton: false,
		icon: 'info',
		iconHtml:
			'<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-bilibili" width="150" height="150" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3 10a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v6a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4v-6zm5 -7l2 3m6 -3l-2 3m-7 6l3 -1m4 0l3 1m-8 3a1.625 1.625 0 0 0 3 0a1.625 1.625 0 0 0 3 0"></path></svg>',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
	});
	document.getElementById(
		'tabla',
	).innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-face-id-error" width="240" height="240" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
	<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
	<path d="M4 8v-2a2 2 0 0 1 2 -2h2"></path>
	<path d="M4 16v2a2 2 0 0 0 2 2h2"></path>
	<path d="M16 4h2a2 2 0 0 1 2 2v2"></path>
	<path d="M16 20h2a2 2 0 0 0 2 -2v-2"></path>
	<path d="M9 10h.01"></path>
	<path d="M15 10h.01"></path>
	<path d="M9.5 15.05a3.5 3.5 0 0 1 5 0"></path>
</svg>
<h2>Aún no se han agregado entradas</h2>`;
};

//  Evento para activar función borrarTabla()
document.addEventListener('DOMContentLoaded', () => {
	document
		.getElementById('btnLimpiarEntrada')
		.addEventListener('click', borrarTabla);
});

const enviarEntrada = () => {
	//  Guardar array en local storage
	localStorage.setItem('listaEntradas', JSON.stringify(entradas));
};
