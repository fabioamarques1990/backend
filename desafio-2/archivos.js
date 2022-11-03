const { promises: fs } = require('fs')

class Contenedor {

    constructor(ruta) {
        this.ruta = ruta
    }

    async getAll() {
        try {
            let data = await fs.readFile('./products.txt', 'utf-8')
            return console.log(data);
        }
        catch (error) {
            return console.log ([]);
        }
    }

    async save(product) {
        let data = this.getAll()
        let id = 0
        let dataObj = null

        if (data.length == 0) {
            id = 1
        } else {
            dataObj = JSON.parse(data)
            id = dataObj[dataObj.length = -1].id + 1
        }
        const newObj = { id: id, ...product }


        fs.writeFile('./products.txt', JSON.stringyfy(newObj, null, 2))
            .then(() => {
                return console.log("New Product");
            })
            .catch(error => {
                return console.log("Error while writing the file");
            })
    }

    async getById(id) {
        const getId = await this.getAll.find((el) => el.id === id)
        try {
            console.log(getId);
        }
        catch (error) {
            console.log("Error while reading ID");
        }
    } 

    async deleteById(id){
        let deleteId = await this.getAll.filter(ele => ele.id !== id)
        await fs.promises.writeFile('./products.txt', JSON.stringify(deleteId, null, 2))
        try{
            console.log("Element deleted");
        }
        catch(error){
            console.log("Error while deleting");
        }
    }
     
    async deleteAll() {
        await fs.unlink("./products.txt")
            try {
               
                console.log ("There is no file")
            }
            catch(error) {
                console.log("It can't be deleted")
            }
     }



}

const contenedor1 = new Contenedor('./products.txt');
contenedor1.getAll();
contenedor1.save({product:"Wallet", price:"500"});
contenedor1.getByID (1);
