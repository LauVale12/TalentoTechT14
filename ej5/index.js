const { esPar } = require('./numeros');
const numeros = [2, 3, 101, 201, 202, 100];

for (let i = 0; i < numeros.length; i++) {
    if (esPar(numeros[i])) {
        console.log(`${numeros[i]} es par`);
    } else {
        console.log(`${numeros[i]} es impar`);
    }
}

