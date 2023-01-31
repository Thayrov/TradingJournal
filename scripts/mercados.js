const date = new Date();
var dd = date.getDate();
var mm = date.getMonth() + 1;
var yyyy = date.getFullYear();
var m = '';
mm < 10 ? (m = 0) : (m = '');

const buscarStock = async () => {
	const inputSearch = document
		.getElementById('inputSearch')
		.value.toUpperCase();

	if (inputSearch.length > 0) {
		imprimirTablaMercados();
		const result = await fetch(
			'https://api.finage.co.uk/history/stock/open-close?stock=' +
				inputSearch +
				'&date=' +
				yyyy +
				'-' +
				m +
				mm +
				'-' +
				dd +
				'&apikey=API_KEYedLNFPSX4J8RF8DPWDYW4LH1LZJQNSOU',
		);
		const data = await result.json();
		document.getElementById('dataMercados').innerHTML += `<tr>
                    <th scope="row">${data.symbol}</th>
                    <td>$${data.open}</td>
                    <td>$${data.high}</td>
                    <td>$${data.low}</td>
                    <td>$${data.close}</td>
                    <td>${data.volume}</td>
                    </tr>`;
	}
};

document
	.getElementById('btnBuscarStock')
	.addEventListener('click', buscarStock);
