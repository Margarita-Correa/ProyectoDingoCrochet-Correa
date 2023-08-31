/*Algoritmo
Ingrese su nombre
Calcular costo Total mediante una funcion con parametros: tipo de producto y cantidad
Repetir hasta que el cliente ya no quiera comprar mas nada
Mostrar en consola el costo Total
*/


//Simulador interactivo:

//Ingreso al sitio
let nombre = prompt("Ingrese su nombre:");
alert("Bienvenido/a "+nombre+" a Dingo Crochet!");


let precioUnitario = 0;
let costo = 0;

/*
Productos:
1-Amigurumi  
2-Manta de Apego
3-Sonajero
4-Nombre tejido 
5- Llavero
*/

function calculoCosto(){
    let seguir = true;
    while(seguir){
        producto =parseInt(prompt("Ingrese el numero de producto: "));
        cantidad =parseInt(prompt("Ingrese la cantidad: "));
        if(producto=="1"){
            precioUnitario = 3800 ;
        }else if(producto=="2"){
            precioUnitario = 5200;
        }else if(producto=="3"){
            precioUnitario = 2100;
        }else if(producto=="4"){
            precioUnitario= 3500;
        }else if(producto=="5"){
            precioUnitario= 1700;
        }else{
            console.log("Ingrese un numero válido");
        }
        costo += precioUnitario * cantidad;
        let respuesta = prompt("Para seguir cargando escriba S")
        if(respuesta !=="s" || respuesta !=="S" ){
            seguir=false;
        }
    }        
    console.log("El costo total es: "+ costo);
}


