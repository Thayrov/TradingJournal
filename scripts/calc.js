const imprimirFormulario = () => {
	document.getElementById(
		'formulario',
	).innerHTML = `				<h2 class="fs-1 pb-2">Ingresa tus parámetros de entrada:</h2>
	<form class="needs-validation" novalidate>
		<fieldset class="row mb-3">
			<label for="fecha" class="col-sm-2 col-form-label col-form-label-sm"
				>Fecha</label
			>
			<div class="col-sm-9">
				<input
					type="datetime-local"
					class="form-control form-control-sm"
					id="fecha"
					placeholder="Fecha de tu entrada al mercado, ingresar de la siguiente manera: año, mes, día (AAAA, MM, DD)"
					required
				/>
				<div class="invalid-feedback">
					Elije una fecha.
				</div>
			</div>
		</fieldset>
		<fieldset class="row mb-3">
			<label
				for="balance"
				class="col-sm-2 col-form-label col-form-label-sm"
				>Balance</label
			>
			<div class="col-sm-9">
				<input
					type="number"
					class="form-control form-control-sm"
					id="balance"
					placeholder="Balance de tu cuenta"
					required
				/>
				<div class="invalid-feedback">
					Define tu balance.
				</div>
			</div>
		</fieldset>
		<fieldset class="row mb-3">
			<label
				for="instrumento"
				class="col-sm-2 col-form-label col-form-label-sm"
				>Instrumento</label
			>
			<div class="col-sm-9">
				<input
					type="text"
					class="form-control form-control-sm"
					id="instrumento"
					placeholder="Instrumento en el que vas a operar"
					required
					/>
					<div class="invalid-feedback">
						Determina el instrumento que operarás.
					</div>
			</div>
		</fieldset>
		<fieldset class="row mb-3">
			<label
				class="col-sm-2 col-form-label col-form-label-sm"
				for="direccion"
				>Dirección</label
			>
			<div class="col-sm-9">
				<select 
					id="direccion" 
					class="form-select form-select-sm form-control form-control-sm" 
					name="direccion" 
					required
				>
					<option value="" disabled selected hidden>Dirección del mercado en la que entrarás</option>
					<option value="long">Long</option>
					<option value="short">Short</option>
				</select>
				<div class="invalid-feedback">
					Elije tu posición en el mercado.
				</div>
			</div>
		</fieldset>

		<fieldset class="row mb-3">
			<label
				for="precio"
				class="col-sm-2 col-form-label col-form-label-sm"
				>Precio</label
			>
			<div class="col-sm-9">
				<input
					type="number"
					class="form-control form-control-sm"
					id="precio"
					placeholder="Precio del instrumento cuando entraste al mercado" 
					required
				/>
				<div class="invalid-feedback">
					Detalla el precio de entrada.
				</div>
			</div>
		</fieldset>
		<fieldset class="row mb-3">
			<label
				for="spread"
				class="col-sm-2 col-form-label col-form-label-sm"
				>Spread</label
			>
			<div class="col-sm-9">
				<input
					type="number"
					class="form-control form-control-sm"
					id="spread"
					placeholder="Spread del instrumento para calcular la comisión de entrada y salida" 
					required
					step="0.01"
				/>
				<div class="invalid-feedback">
					Detalla el spread que te cobrarán.
				</div>
			</div>
		</fieldset>
		<fieldset class="row mb-3">
			<label
				for="variacion"
				class="col-sm-2 col-form-label col-form-label-sm"
				>Variación del precio</label
			>
			<div class="col-sm-9">
				<input
					type="number"
					class="form-control form-control-sm"
					id="variacion"
					placeholder="Variación porcentual del precio en la ultima sesión. Si es 2.53% escribir solo 2.53"
					required
					step="0.01"
				/>
				<div class="invalid-feedback">
					Detalla la variación del precio desde el último cierre.
				</div>
			</div>
		</fieldset>
		<fieldset class="row mb-3">
			<label for="rrr" class="col-sm-2 col-form-label col-form-label-sm"
				>RRR</label
			>
			<div class="col-sm-9">
				<input
					type="number"
					class="form-control form-control-sm"
					id="rrr"
					placeholder="Relación de Riesgo y Recompensa de tu entrada" 
					required
					step="0.01"
				/>
				<div class="invalid-feedback">
					Determina tu RRR.
				</div>
			</div>
		</fieldset>
		<fieldset class="d-grid gap-2 col-12 mx-auto">
			<input
				type="button"
				class="btn btn-outline-info"
				id="btnAgregarEntrada"
				value="Presiona para ingresar entrada en la tabla">
				
			</input>
		</fieldset>
	</form> `;
};

//  Imprime formulario en DOM
imprimirFormulario();

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
					//  Limpiar formulario para siguiente entrada
					document.querySelector('form').reset();
					Swal.fire({
						position: 'center',
						iconHtml:
							'<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-discount-check" width="140" height="140" viewBox="0 0 24 24" stroke-width="1" stroke="#a8fbfb" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M5 7.2a2.2 2.2 0 0 1 2.2 -2.2h1a2.2 2.2 0 0 0 1.55 -.64l.7 -.7a2.2 2.2 0 0 1 3.12 0l.7 .7c.412 .41 .97 .64 1.55 .64h1a2.2 2.2 0 0 1 2.2 2.2v1c0 .58 .23 1.138 .64 1.55l.7 .7a2.2 2.2 0 0 1 0 3.12l-.7 .7a2.2 2.2 0 0 0 -.64 1.55v1a2.2 2.2 0 0 1 -2.2 2.2h-1a2.2 2.2 0 0 0 -1.55 .64l-.7 .7a2.2 2.2 0 0 1 -3.12 0l-.7 -.7a2.2 2.2 0 0 0 -1.55 -.64h-1a2.2 2.2 0 0 1 -2.2 -2.2v-1a2.2 2.2 0 0 0 -.64 -1.55l-.7 -.7a2.2 2.2 0 0 1 0 -3.12l.7 -.7a2.2 2.2 0 0 0 .64 -1.55v-1"></path><path d="M9 12l2 2l4 -4"></path></svg>',
						title: 'Se guardó la entrada en la tabla exitosamente ',
						showConfirmButton: false,
						timer: 1000,
					});
				}
			});
	});
})();

const borrarTabla = () => {
	if (entradas.length < 1) {
		Swal.fire({
			title: '¿Borrar?',
			text: '¡Aún no ingresas ningún dato!',
			iconHtml:
				'<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-question" width="140" height="140" viewBox="0 0 24 24" stroke-width="1" stroke="#a8fbfb" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path><path d="M21 21l-6 -6"></path><path d="M10 13l0 .01"></path><path d="M10 10a1.5 1.5 0 1 0 -1.14 -2.474"></path></svg>',
			confirmButtonColor: '#324254',
		});
	} else {
		Swal.fire({
			title: '¿Estás seguro?',
			text: '¡No se podrá revertir esto!',
			iconHtml:
				'<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-refresh-alert" width="140" height="140" viewBox="0 0 24 24" stroke-width="1" stroke="#a8fbfb" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4"></path><path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4"></path><path d="M12 9l0 3"></path><path d="M12 15l.01 0"></path></svg>',
			showCancelButton: true,
			confirmButtonColor: '#324254',
			cancelButtonColor: '#DC6856',
			confirmButtonText: '¡Sí!',
			cancelButtonText: 'Cancelar',
		}).then(result => {
			if (result.isConfirmed) {
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
				Swal.fire('Se han borrado las entradas', 'Tu tabla está limpia');
			}
		});
	}
};

//  Evento para activar función borrarTabla()
document.addEventListener('DOMContentLoaded', () => {
	document
		.getElementById('btnLimpiarEntrada')
		.addEventListener('click', borrarTabla);
});

const guardarEntrada = () => {
	//  Guardar array en local storage
	localStorage.setItem('listaEntradas', JSON.stringify(entradas));
};

//  Evento para activar función enviarEntrada()
document
	.getElementById('btnEnviarEntrada')
	.addEventListener('click', async () => {
		const {value: status} = await Swal.fire({
			title: 'Indica si ganaste o perdiste la entrada',
			input: 'select',
			inputOptions: {
				win: 'Win',
				loss: 'Loss',
			},
			inputPlaceholder: 'Elige una opción',
			showCancelButton: true,
			inputValidator: value => {
				return new Promise(resolve => {
					if (value === 'win' || value === 'loss') {
						resolve();
					} else {
						resolve('Elige una opción para continuar');
					}
				});
			},
		});

		if (status) {
			const Toast = Swal.mixin({
				toast: true,
				position: 'bottom-end',
				showConfirmButton: false,
				timer: 6000,
				timerProgressBar: true,
				didOpen: toast => {
					toast.addEventListener('mouseenter', Swal.stopTimer);
					toast.addEventListener('mouseleave', Swal.resumeTimer);
				},
			});

			Toast.fire({
				icon: 'success',
				title: `Tu entrada fue un: ${status} y ahora podrás revisarla en el journal`,
				background: '#4F6670',
			});
			guardarEntrada();
		}
	});

/* (async () => {
	const {value: status} = await Swal.fire({
		title: 'Indica si ganaste o perdiste la entrada',
		input: 'select',
		inputOptions: {
			win: 'Win',
			loss: 'Loss',
		},
		inputPlaceholder: 'Elige una opción',
		showCancelButton: true,
		inputValidator: value => {
			return new Promise(resolve => {
				if (value === 'win'|| value === 'loss') {
					resolve();
				} else {
					resolve('Elige una opción para continuar');
				}
			});
		},
	});

	if (status) {
		Swal.fire(`Tu entrada fue un: ${status}`);
	}
})(); */
//  Confirmación de entrada enviada al journal
/* const Toast = Swal.mixin({
	toast: true,
	position: 'top-end',
	showConfirmButton: false,
	timer: 3000,
	timerProgressBar: true,
	didOpen: (toast) => {
	  toast.addEventListener('mouseenter', Swal.stopTimer)
	  toast.addEventListener('mouseleave', Swal.resumeTimer)
	}
  })
  
  Toast.fire({
	icon: 'success',
	title: 'Signed in successfully'
  }) */
