/*
const express = require('express')
const app = express()

app.listen(3000, () => {
    console.log('El servidor está inicializado en el puerto 3000');
});

app.get("/Inicio", (req, res) => {
    res.send("Hola mundo! Servidor con Express js &#128526;")
});
*/



const express = require("express");
const app = express();

app.listen(3000, () => {
console.log("El servidor está inicializado en el puerto 3000");
});



app.get("/TocToc", (req, res) => {
res.send("¿Quién es?");
});

//Paso 1: Agregar una ruta GET y ocupa como primer parámetro lo siguiente: “*”
app.get("*", (req, res) => {
// Paso 2: Enviar como respuesta de la ruta genérica un encabezado centrado con HTML que diga “Sorry, aquí no hay nada :/”
    res.send("<center><h1>Disculpa, esta página está vacía :/</h1></center>");
});


//escribiendo esto solo para poder subirlo a git otra vez
//otro comentario
