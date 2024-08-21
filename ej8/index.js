const http = require('http');
const puerto = 3001;

/**Crear servidor basico */

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Bienvenidos a Node.js Server Side');
});
server.listen(puerto, 'localhost', (err) => {
    if (err) {
        console.error(`No se pudo levantar el servidor en el puerto ${puerto}`);
    } else {
        console.log(`Servidor corriendo en el localhost puerto ${puerto}`);
    }
});