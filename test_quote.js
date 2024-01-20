

// Importa la función desde el archivo
const calculateResidentialEle = require('./quote.js');

// Test case
const testApartments = 200;
const testFloors = 25;

// Llamada a la función
const result = calculateResidentialEle(testApartments, testFloors);

// Imprimir el resultado
console.log(`Para ${testApartments} apartamentos y ${testFloors} pisos, se necesitan ${result} elevadores.`);
