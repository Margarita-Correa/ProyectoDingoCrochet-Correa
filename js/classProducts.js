class Productos{
    constructor(id, tipo, nombre, precio){
        this.id = id;
        this.tipo = tipo;
        this.nombre = nombre;
        this.precio = precio;
    }
}

const productos = [];

//Instanciar mis productos en stock
productos.push(new Productos("1", "amigurumi", "coneja", 3800));
productos.push(new Productos("2", "amigurumi", "elefante", 3800));
productos.push(new Productos("3", "amigurumi", "osito", 3800));
productos.push(new Productos("4", "amigurumi", "mapache", 3800));
productos.push(new Productos("5", "amigurumi", "monito", 3800));

productos.push(new Productos("6", "manta", "manta coneja", 5200));
productos.push(new Productos("7", "manta", "manta elefante", 5200));

productos.push(new Productos("8", "sonajero", "sonajero conejo", 2100));
productos.push(new Productos("9", "sonajero", "sonajero ballena", 2100));
productos.push(new Productos("10", "sonajero", "sonajero perro", 2100));

productos.push(new Productos("11", "nombre tejido", "nombre personalizado", 3500));

productos.push(new Productos("12", "llavero", "llavero avion", 1700));
productos.push(new Productos("13", "llavero", "llavero frida", 1700));
productos.push(new Productos("14", "llavero", "llavero caballito de mar", 1700));


//Guardado de los productos en el Storage
const productosStorage = (clave,valor) => {localStorage.setItem(clave,valor)};
    for(const producto of productos) {
        productosStorage(producto.id,JSON.stringify(producto));
    }

