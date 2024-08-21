let saludar = (nombre, apellido, callback) => {
    console.log(`Hola ${nombre} ${apellido}`);
    callback('Luego de saludar se ejecuta el callback')
};

module.exports = {
    saludar
}