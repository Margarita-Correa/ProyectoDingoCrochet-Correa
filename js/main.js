const carritoDeCompras = [];


//Evento del Carrito de compras
const comprar = document.getElementById("comprar");

comprar.addEventListener('click', agregarAlCarrito =>{
    carritoDeCompras.push({}); //aca se deberia agregar el producto correspondiente al array carritoDeCompras
});


//Guardado del carrito de Compras en el Storage
const carritoStorage = (clave,valor) => {localStorage.setItem(clave,valor)};
    for(const carrito of carritoDeCompras) {
        carritoStorage("carrito",JSON.stringify(carritoDeCompras));
    }



//Mostrar productos seleccionados
/* referencia a la seccion donde se mostrarán los productos:*/
let productosSeleccionados = document.getElementById("productosSeleccionados");

/*Obtener carrito de productos seleccionados */
let carritoFinal = JSON.stringify(localStorage.getItem('carrito'));
   



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