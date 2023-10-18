let carritoDeCompras = [];


let itemProductos = document.getElementById("productos");
let carrito = document.getElementById("carrito");
let vaciar = document.getElementById("vaciar");
let comprar = document.getElementById("comprar");



//Funciones

function renderizarProductos(){
    productos.forEach((producto)=>{
        //Cuerpo del card nuevo Producto
        const card= document.createElement('div');
        card.classList.add('card','col-sm-2');
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
        card.appendChild(cardBody);

        //Agregamos al nodo padre 
        itemProductos.appendChild(card);
    });
}


//Evento del Carrito de compras
function agregarAlCarrito (e){
        const marcador = e.target.getAttribute('marcador');
        const productoSeleccionado = productos.find((producto)=> producto.id == marcador);
        carritoDeCompras.push(productoSeleccionado);
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Producto Agregado',
            showConfirmButton: false,
            timer: 1000
          })
        renderizarCarrito();
};

//Carrito en Storage
const carritoEnStorage = (clave, valor) => { sessionStorage.setItem(clave, valor) };



//Dibuja en la pantalla los productos guardados en el carrito
function renderizarCarrito(){
    carrito.textContent= '';

    //Genera los nodos a partir del carrito
        carritoDeCompras.forEach((item)=>{

    //Nodo del item del producto
        const nuevoItem = document.createElement('li');
        nuevoItem.classList.add('text-right','mx-2');
        nuevoItem.setAttribute('marcador', item.id);
        nuevoItem.textContent = `Producto Seleccionado: ${item.nombre} - Precio: $ ${item.precio}`;

    //Boton eliminar un item del carrito
        const botonEliminar = document.createElement('button');
        botonEliminar.classList.add('btn','btn-danger', item.id);
    //botonEliminar.setAttribute('marcador', item.id);
        botonEliminar.textContent ='Eliminar';


//Evento para Eliminar un item del carrito
function eliminarItemCarrito() {
    // Obtener el producto ID que hay en el boton pulsado
        const marcadorLista = document.getElementsByClassName(item.id);
        carritoDeCompras.splice((item)=> item.id == marcadorLista,1);

    //se vuelve a renderizar
        renderizarCarrito();
};

//Asignamos un sweet Alert antes de confirmar si se elimina un producto del Carrito o no, caso afirmativo: se ejecuta eliminarItemCarrito;
botonEliminar.addEventListener('click', ()=> 
     Swal.fire({
        title: '¿Quieres eliminar este producto de tu carrito?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, Eliminar'
    }).then((result) => {
        if (result.isConfirmed) {
        Swal.fire({
           title:'Eliminado',
           icon:'success',
           showConfirmButton: false,
           timer:1000
        });
        eliminarItemCarrito();
        };
    })
);
    
    nuevoItem.appendChild(botonEliminar);
    carrito.appendChild(nuevoItem);


    //Guardar en el Storage cada vez que agrego un producto al Carrito de Compras
    carritoEnStorage(item.id, JSON.stringify(item));
    });
    calcularTotal();
};




//Calcular el precio Total del carrito
function calcularTotal() {
    const preciosCarrito = carritoDeCompras.map ((carrito)=> carrito.precio );
    document.getElementById("total").innerHTML = preciosCarrito.reduce((acumulador, precio) => acumulador + precio,0 );
}



//Vaciar todo el carrito completo 
function vaciarCarrito(){
    carritoDeCompras = [];
    sessionStorage.clear();
    renderizarCarrito();
};

//Traer el carrito de Compras del Storage
const carritoFinal = JSON.parse(sessionStorage.getItem('Carrito')) || [];


//Evento vaciar carrito
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