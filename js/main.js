/*Algoritmo (1ra Entrega)
Ingrese su nombre
Calcular costo Total mediante una funcion con parametros: tipo de producto y cantidad
Repetir hasta que el cliente ya no quiera comprar mas nada
Mostrar en consola el costo Total
*/

//Simulador interactivo:

//Ingreso al sitio
let nombre = prompt("Ingrese su nombre:");
alert("Bienvenido/a "+nombre+" a Dingo Crochet!");

const productos = [
    {id:1, nombre: 'Amigurumi', precio: 3800 },
    {id:2, nombre: 'Manta de Apego', precio: 5200 },
    {id:3, nombre:'Sonajero', precio: 2100 },
    {id:4, nombre:'Nombre Tejido', precio: 3500 },
    {id:5, nombre:'Llavero', precio: 1700 }
]

function retornarProductos(){
    for(const producto of productos){
        console.log('ID: '+ producto.id);
        console.log('Nombre: '+producto.nombre);
        console.log('Precio: '+ producto.precio)
    }
}
console.log(retornarProductos());


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


const carrito = [];
console.log('Su carrito de compra contiene los siguientes productos: ' );
