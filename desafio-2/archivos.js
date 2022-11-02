const fs = require('fs')

class Contenedor {
    constructor (nombre, precio, id) {
        this.nombre = nombre
        this.precio = precio
        this.id = id
    }            
}

fs.readFile('./products.txt', 'utf-8', (error, contenido) => {
    if(error) {
        fs.writeFile('./products.txt', 'utf-8')
    } else {console.log(contenido)
}})
