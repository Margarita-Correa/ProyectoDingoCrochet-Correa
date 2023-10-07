const carritoDeCompras = [];


//Evento del Carrito de compras
let comprar = document.getElementsByClassName("comprar");


let mensaje = document.getElementById("mensaje");
const mostrarMensaje = ()=>{
    if(carritoDeCompras.length === 0){
        mensaje.className = "visible";
    }else{mensaje.className ="oculto";}
}


comprar.addEventListener('click', agregarAlCarrito =>{
    mostrarMensaje();
    carritoDeCompras.push({}); //aca se deberia agregar el producto correspondiente al array carritoDeCompras
});


//Guardado del carrito de Compras en el Storage
const carritoStorage = (clave,valor) => {localStorage.setItem(clave,valor)};
    for(const carrito of carritoDeCompras) {
        carritoStorage("carrito",JSON.stringify(carritoDeCompras));
    }



//Mostrar productos seleccionados

/*Obtener carrito de productos seleccionados */
let carritoFinal = JSON.stringify(localStorage.getItem('carrito'));

/* referencia a la seccion donde se mostrarán los productos:*/
let productosSeleccionados = document.getElementById("productosSeleccionados")

const mostrarProductosCarrito = ()=>{
    for(const carrito of carritoFinal){
        let productoCarrito = document.createElement("div");
        productoCarrito.innerHTML = `<p>
          Tipo: ${carrito.tipo} 
          Producto: ${carrito.nombre}  
          Precio: ${carrito.precio}</p>`;
        document.productosSeleccionados.append(productoCarrito);
    }
}

