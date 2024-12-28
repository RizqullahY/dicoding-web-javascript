// const {coffeeStock , isCoffeeMachineReady} = require('./state')

//* ES6 Module
import { coffeeStock as stock, isCoffeeMachineReady } from "./state.js";

const displayStock = (stock) => {
   for (const type in stock) {
      console.log(type);
   }
};
const makeCoffee = (type, miligram) => {
   if (coffeeStock[type] >= miligram) {
      console.log("Kopi dibuat...");
   } else {
      console.log("Biji kopi habiss...");
   }
};

console.log(isCoffeeMachineReady)
makeCoffee("robusta", 100);
displayStock(stock);
