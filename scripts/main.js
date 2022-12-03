//Variables
let market = prompt("¿En qué mercado operarás?");
let capital = prompt("¿Cuánto es tu capital?");
let risk = prompt("¿Cuánto es tu porcentaje de riesgo por operación?(Ingresa número del 1 al 99)")/100;
let rrratio = prompt("¿De cuánto es tu rata de recompensa/riesgo?");
let price = prompt("¿Cuánto vale la unidad del activo que operarás?");
let position = prompt("¿En qué posición entrarás al mercado?");
let stopLoss = prompt("¿En qué precio establecerás tu Stop Loss?");

let takeProfit;
let units;

if (position=="short") {
    takeProfit=price-(stopLoss-price)*rrratio;
    units=capital*risk/(stopLoss-price);
} else if (position=="long") {
    takeProfit=price+(price-stopLoss)*rrratio;
    units=capital*risk/(price-stopLoss);
} else {
    "Ingresa 'short' o 'long' en tu posición de entrada"
};

let loss = capital*(1-risk);
let profit = capital*(1+risk*rrratio);


console.log("Entraste al mercado: "+market)
console.log("Tu capital es de $"+capital)
console.log("Tu porcentaje de riesgo es de "+risk*100+"%")
console.log("Tu rata de recompensa/riesgo es de "+rrratio)
console.log("El activo que operarás en el mercado "+market+" vale $ "+price)
console.log("Entrará al mercado en posición "+position)

console.log("Con tu stop loss y porcentaje de riesgo, deberás comprar "+units+" unidades para satisfacer tu estrategia de trading")
console.log("Saldrás del mercado si el precio llega a $" +stopLoss) 

console.log("Cerrarás tu operación con la ganancia correspondiente a tu estrategia si el precio llega a $"+takeProfit)

console.log("Si pierdes y sales en tu stop loss tu capital luego de la operación será de $"+loss)
console.log("Si ganas y sales en tu take profit tu capital luego de la operación será de $"+profit)

