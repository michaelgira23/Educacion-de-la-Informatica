// Constantes
const requerir = require;
const __ruta = __dirname;

const ruta = requerir('path');

let config;
try {
	config = requerir(ruta.join(__ruta, 'config.js'));
} catch(e) {
	throw new Error('***CREA UN CONFIG.JS EN TU SISTEMA. MIRA A CONFIG.EJEMPLO.JS***');
}

const expreso = requerir('express');
const app = expreso();

app.set('view engine', 'ejs');
app.set('views', ruta.join(__ruta, 'vistas'));

app.get('/', (req, res) => {
	res.render('páginas/inicio');
});

app.listen(config.puerto, () => console.log(`Servidor escuchando en puerto *:${config.puerto}`));
