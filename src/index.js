const app = require('./app.js');
const { PORT } = require('./config.js');

app.listen(PORT, () => {
    console.log('Servidor Iniciado');
});
