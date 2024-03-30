const http = require("http");
http.createServer((req, res) => {
    if (req.url == "/Inicio" && req.method == "GET") {
        res.end("Hola Paula! Este es un servidor con Node js puro");
    }
})
.listen(3000, () => {
    console.log("El servidor está inicializado en el puerto 3000");
});


//ABRIR ESTE LOCAL HOST http://localhost:3000/Inicio   SI NO, NO ABRE EL SERVIDOR