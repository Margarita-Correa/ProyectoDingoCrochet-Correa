
class Productos{
    constructor(id, tipo, nombre, precio){
        this.id = id;
        this.tipo = tipo;
        this.nombre = nombre;
        this.precio = precio;
    }
}

const productos = [];

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

//console.log(productos);


const carrito = [];

let comprar = document.querySelector(".comprar");

comprar.addEventListener('click', agregarAlCarrito =>{
    //alert("se agrego al carrito");
});



/*
let precioUnitario = 0;
let costo = 0;

function calculoCosto(){
    let seguir = true;
    while(seguir){
        ingreso= parseInt(prompt("Ingrese el id de producto: "));
        cantidad = parseInt(prompt("Ingrese la cantidad: "));
        if(ingreso=="1"){
            precioUnitario = 3800 ;
        }else if(ingreso=="2"){
            precioUnitario = 5200;
        }else if(ingreso=="3"){
            precioUnitario = 2100;
        }else if(ingreso=="4"){
            precioUnitario= 3500;
        }else if(ingreso=="5"){
            precioUnitario= 1700;
        }else{
            console.log("Ingrese un numero válido");
        }
        costo += precioUnitario * cantidad;
        let respuesta = prompt("Para seguir cargando escriba S");
        if(respuesta !=="s" && respuesta !=="S" ){
            seguir=false;
        }
    }        
    console.log("El costo total es: "+ costo);
}
console.log(calculoCosto());



console.log('Su carrito de compra contiene los siguientes productos: ' );

*/