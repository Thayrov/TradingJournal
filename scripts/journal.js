//  Traer datos del local storage
const cargarEntradaJournal = () => {
	return JSON.parse(localStorage.getItem('entradaJournal')) || [];
};
//  Imprimir tabla

const addEntradaJournal = () => {
	var entradaJournalLS = cargarEntradaJournal();
	if (localStorage.length > 0) {
		for (const element of entradaJournalLS) {
			journal.push(
				new EntradaJournal(
					(estatus = element.estatus),
					(date = element.date),
					(market = element.market),
					(position = element.position),
					(price = element.price),
					(size = element.size),
					(element.retornoCash =
						element.estatus == 'win' ? element.profitTotal : element.lossTotal),
					(element.retornoPerc =
						element.estatus == 'win'
							? (element.profitTotal / element.balance) * 100
							: (element.lossTotal / element.balance) * 100),
				),
			);
		}
	}
	imprimirTablaJournal();

	if (journal.length > 0) {
		for (const entradaJournalImpresa of journal) {
			entradaJournalImpresa.calcRetornoCash();
			entradaJournalImpresa.calcRetornoPerc();
			entradaJournalImpresa?.imprimirEntradaJournal();
		}
	}
};

addEntradaJournal();
