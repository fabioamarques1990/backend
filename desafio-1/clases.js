class Usuario {
    constructor (nombre, apellido, libros, mascotas) {
        this.nombre = nombre
        this.apellido = apellido
        this.libros = libros
        this.mascotas = mascotas
    }

    getFullName() {
        return (this.nombre + " " + this.apellido)
    }

    addMascota = (mascota) => {
        this.mascotas.push (mascota)
    }

    countMascotas() {
        return this.mascotas.length
    }

    addBook = (libro) => {
        this.libros.push (libro)
    }

    getBookNames () {
        let book = this.libros.map((e) => e.titulo)
        return book
    }

}

let usuario = new Usuario ("Roberto", "Carlos",
                            [{titulo: "Kane and Abel", autor: "Jeffrey Archer"}],
                            ["Snoopy"]
)

usuario.getFullName()
usuario.addMascota("Bruce Wayne")
usuario.countMascotas()
usuario.addBook({titulo: "El Maestro de Esgrima", autor: "Arturo Perez Reverte"})
usuario.getBookNames()

console.log(usuario);