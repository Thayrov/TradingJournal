//  Imprimir tabla
imprimirTablaJournal();

//  Falta definir de donde saca la info la tabla usando métodos en el array Entradas[]
const addEntradaJournal = () => {
	const entradaJournal = new EntradaJournal(
		(estatus = '')((date = new Date(''.value).toDateString())),
		(market = ''.value.toUpperCase()),
		(position = ''.value),
		(price = parseFloat(''.value)),
		(size = parseFloat(calcSize(price, units)).toFixed(twoDecimals)),
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
