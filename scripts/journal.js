//  Imprimir tabla
imprimirTablaJournal();

//  Falta definir de donde saca la info la tabla usando métodos en el array Entradas[]
const addEntradaJournal = () => {
	let date = entradas[i].date;
	let market = entradas[i].market;
	let position = entradas[i].position;
	let price = entradas[i].price;
	let size = entradas[i].size;
	const entradaJournal = new EntradaJournal(
		(estatus = ''),
		(date = date),
		(market = market),
		(position = position),
		(price = price),
		(size = size),
		(retornoCash = parseFloat(
			calcRetornoCash(estatus, profitTotal, lossTotal),
		).toFixed(twoDecimals)),
		(retornoPerc = parseFloat(
			calcRetornoPerc(estatus, balance, profitTotal, lossTotal),
		).toFixed(twoDecimals)),
	);

	//  Imprimir datos en tabla
	entradaJournal.imprimirEntradaJournal();
	//  Guardar datos en array
	journal.push(entradaJournal);
};
