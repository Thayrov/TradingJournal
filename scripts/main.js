//Variables y entradas
const sixDecimals = 6;
const twoDecimals = 2;
const error = 'Ingresa "short" o "long" en tu posición de entrada para continuar';
let loops = parseInt(prompt('¿Cuántas operaciones quieres calcular?'));
//Bucle
for (let i = 0; i < loops; i++ ) {
    let currency = prompt('¿En qué moneda operas?').toLowerCase();
    let market = prompt('¿En qué mercado operarás?').toUpperCase();
    let capital = parseFloat(prompt('¿Cuánto es tu capital?'));
    let risk = parseFloat(prompt('¿Cuánto es tu porcentaje de riesgo por operación? (Ingresa número del 1 al 99)')/100);
    let ratio = parseFloat(prompt('¿De cuánto es tu rata de recompensa/riesgo?'));
    let price = parseFloat(prompt('¿Cuánto vale la unidad del activo que operarás?'));
    let position = prompt('¿En qué posición entrarás al mercado? (Ingresa "long" para alcista o "short" para bajista)').toLowerCase();
    let stopLoss = parseFloat(prompt('¿En qué precio establecerás tu Stop Loss?'));
//Funciones
    const lossTotal = (capital,risk) => capital*(1-risk);
    const profitTotal = (capital,risk,ratio) => capital*(1+risk*ratio);
    const takeProfit = (price,stopLoss,ratio) => price-(stopLoss-price)*ratio;
    const units = (capital,risk,stopLoss,price,position) => {
        switch (position) {
            case "long":
                return capital*risk/(price-stopLoss);
            case "short":
                return capital*risk/(stopLoss-price);
            default:
                return error;
                break;
        }
    }
//Salidas y condiciones
    if (position=="long"||position=="short"){
        console.log('Entraste al mercado: '+market);
        console.log('Tu capital es de $'+capital.toFixed(twoDecimals)+" "+currency);
        console.log('Tu porcentaje de riesgo es de '+risk.toFixed(twoDecimals)*100+'%');
        console.log('Tu rata de recompensa/riesgo es de '+ratio.toFixed(twoDecimals));
        console.log('El activo que operarás en el mercado '+market+' vale $'+price.toFixed(sixDecimals)+" "+currency);
        console.log('Entrará al mercado en posición '+position);
        console.log('Con tu stop loss y porcentaje de riesgo, deberás comprar '+units (capital,risk,stopLoss,price,position) +' unidades para satisfacer tu estrategia de trading');
        console.log('Saldrás del mercado con la pérdida correspondiente a tu estrategia, si el precio llega a $' +stopLoss.toFixed(sixDecimals)+" "+currency);
        console.log('Cerrarás tu operación con la ganancia correspondiente a tu estrategia, si el precio llega a $'+ takeProfit (price,stopLoss,ratio) .toFixed(sixDecimals) +" "+currency);
        console.log('Si pierdes y sales en tu stop loss tu capital luego de la operación será de $'+lossTotal (capital,risk) .toFixed(twoDecimals)+" "+currency);
        console.log('Si ganas y sales en tu take profit tu capital luego de la operación será de $'+profitTotal (capital,risk,ratio) .toFixed(twoDecimals)+" "+currency);
    } else {
        alert(error);
    }
}

