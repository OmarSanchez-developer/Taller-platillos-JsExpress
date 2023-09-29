# Taller-platillos-JsExpress
API Javascript , Express con metodos PUT añadir paltillos y Get para consultar platillos en servidor localhost://3000

instalamos nodejs y express
-npm init -y (Creamos paquete .json
-node index.js
nodemon index.js (nodemon sirve para actualizar cualquier cambio de la aplicación en el servidor)



Abrimos cualquier herramienta para consumir Rest API, como Postman, Thunder Client en Visual Studio Code.

Mandamos nombre del paltillo y descripción en formato Json , XMl o como se guste

Metodo Put 
http://localhost:3000/platillos
Respuesta en formato Json:

[
  {
    "nombre": "Tacos",
    "descripcion": "Ricos tacos Mexicanos!"
  },
  {
    "nombre": "Pizza",
    "descripcion": "Rica Pizza !"
  },
  {
    "nombre": "Fruta",
    "descripcion": "Rica Fruta !"
  },
  {
    "nombre": "Pozole",
    "descripcion": "Rico Pozole  !"
  },
  {
    "nombre": "Pozole Rojo",
    "descripcion": "Rico Pozole Rojo con carne de puerco  !"
  }
]

Recibiremos un 200 ok e iremos al navegador con la ruta para consultar con un get los platillos añadidos a nuestra API.

http://localhost:3000/platillos

[
  {
    "nombre": "Tacos",
    "descripcion": "Ricos tacos Mexicanos!"
  },
  {
    "nombre": "Pizza",
    "descripcion": "Rica Pizza !"
  },
  {
    "nombre": "Fruta",
    "descripcion": "Rica Fruta !"
  },
  {
    "nombre": "Pozole",
    "descripcion": "Rico Pozole  !"
  },
  {
    "nombre": "Pozole Rojo",
    "descripcion": "Rico Pozole Rojo con carne de puerco  !"
  }
]
