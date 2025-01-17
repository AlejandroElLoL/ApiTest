const express = require('express');
const cursosRoutes = require('./routes/cursos.routes.js');

const app = express()
app.use(express.json())

app.use('/api',cursosRoutes)

app.use((req,res,next) => {
    res.status(404).json({
        mensaje: 'ruta no encontrada'
    })
})

export default app;
