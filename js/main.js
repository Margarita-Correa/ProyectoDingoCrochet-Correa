let carritoDeCompras = [];

let itemProductos = document.getElementById("productos");
let carrito = document.getElementById("carrito");
let total = document.getElementById("total");
let vaciar = document.getElementById("vaciar");


//Funciones

function renderizarProductos(){
    productos.forEach((producto)=>{
        //Cuerpo del card nuevo Producto
        const nuevoDiv = document.createElement('div');
        nuevoDiv.classList.add('card','col-sm-4');
        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        //Titulo
        const titulo = document.createElement('h4');
        titulo.classList.add('card-title');
        titulo.textContent = producto.nombre;
        //Tipo
        const tipo = document.createElement('h5');
        tipo.textContent = producto.tipo;
        //Imagen
        const imagen = document.createElement('img');
        imagen.classList.add('img-fluid');
        imagen.setAttribute('src', producto.imagen);
        //Precio
        const precio = document.createElement('p');
        precio.classList.add('card-text');
        precio.textContent = `$ ${producto.precio}`;

        //Boton agregar al carrito el producto
        const agregar = document.createElement('button');
        agregar.classList.add('btn', 'btn-primary');
        agregar.textContent = 'Agregar al Carrito';
        agregar.setAttribute('marcador', producto.id);
        agregar.addEventListener('click', agregarAlCarrito);

        //Agregamos cada valor del objeto producto a su card correspondiente
        cardBody.appendChild(titulo);
        cardBody.appendChild(tipo);
        cardBody.appendChild(imagen);
        cardBody.appendChild(precio);
        cardBody.appendChild(agregar);
        nuevoDiv.appendChild(cardBody);

        //Agregamos al nodo padre 
        itemProductos.appendChild(nuevoDiv);


    });
}



//Evento del Carrito de compras
function agregarAlCarrito (e){
    carritoDeCompras.push(e.target.getAttribute('marcador'));
    renderizarCarrito();
};



//Dibuja en la pantalla los productos guardados en el carrito

function renderizarCarrito(){
    carrito.textContent = '';
    const productoUnico = [...new Set (carritoDeCompras)];
    //Genera los nodos a partir del carrito
    productoUnico.forEach((item) => {
        //obtiene el item que necesita de los datos de  productos
        const itemCarrito = productos.filter((itemProductos) => {
            return itemProductos.id === parseInt(item);
        }); 
    
    //Nodo del item del producto
    const nuevoItem = document.createElement('li');
    nuevoItem.classList.add('text-right','mx-2');
    nuevoItem.textContent = `Producto Seleccionado: ${itemCarrito[0].nombre} - Precio: ${itemCarrito[0].precio}`;

    //Boton eliminar un item del carrito
    const botonEliminar = document.createElement('button');
    botonEliminar.classList.add('btn','btn-danger');
    botonEliminar.textContent ='Eliminar';
    botonEliminar.addEventListener('click', eliminarItemCarrito);

    nuevoItem.appendChild(botonEliminar);
    carrito.appendChild(nuevoItem);
    });

    total.textContent = calcularTotal();
}


//Evento para Eliminar un item del carrito
function eliminarItemCarrito(e) {
    // Obtener el producto ID que hay en el boton pulsado


    //se vuelve a renderizar
    renderizarCarrito();
}



//Calcular el precio Total del carrito

function calcularTotal() {
    let total = 0;
 //continuar
    return total += producto.precio;
}



//Vaciar todo el carrito completo 
function vaciarCarrito(){
    carrito = [];
    renderizarCarrito();
};


//Evento
vaciar.addEventListener('click', vaciarCarrito);


//Llamado de funciones
 renderizarProductos();
 renderizarCarrito();


/*
let mensaje = document.getElementById("mensaje");
const mostrarMensaje = ()=>{
    if(carritoDeCompras.length === 0){
        mensaje.className = "visible";
    }else{mensaje.className ="oculto";}
}
*/