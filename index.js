const express = require('express');

const app = express();
app.use(express.json());
const PORT = 3000;

let platillos = [];

app.get('/index',(req, res)=>{
    res.json("Entro a la ruta de index");
});

app.get('/platillos',(req, res)=>{
    res.json(platillos);
});

app.post('/platillos',(req, res)=>{
    const {nombre, descripcion} = req.body;
    if (!nombre || ! descripcion) {
        return res.json({
            error: 'Debe proporcionar nombre y descripcion'
        })
    }
    const nuevoPlatillo = {nombre, descripcion}
    
    platillos.push(nuevoPlatillo);

    res.json(platillos);
});

app.listen(PORT, ()=>{
    console.log(`Servidor Express en ejecución en http://localhost:${PORT}`);
});