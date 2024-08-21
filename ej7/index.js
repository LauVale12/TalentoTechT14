const { saludar } = require('./saludador');

function ejecutar(texto) {
    console.log(texto);
};

saludar('Valentina', 'Mendoza', ejecutar);