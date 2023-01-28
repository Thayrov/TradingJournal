//  Imprimir tabla
var imprimirTablaJournal = (function () {
	var impreso = false;
	return function () {
		if (!impreso) {
			impreso = true;
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
