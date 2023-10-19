let carritoDeCompras = [];


let carrito = document.getElementById("carrito");
let vaciar = document.getElementById("vaciar");
let comprar = document.getElementById("comprar");
        

//Funciones
async function renderizarProductos(){
    try{
        let divProductos = document.getElementById("productos");
        divProductos.innerHTML = "Cargando productos disponibles...";

        await new Promise((resolve)=> setTimeout(resolve, 5000));

        const response = await fetch("./data.json");
        if (!response.ok) {
          throw new Error("No se pudo obtener la información");
        }    

        const productos = await response.json();

        divProductos.innerHTML = "";

        productos.forEach((producto)=>{             
            const cardProducto = generarCardProducto(producto);

            const card = document.createElement("div");
            card.classList.add('card' ,'col-sm-2');
            card.innerHTML = cardProducto;

            //Agregamos al nodo padre 
            divProductos.appendChild(card);

        })
        
        //Productos en Storage
        const productosEnStorage = (clave, valor) => { localStorage.setItem(clave, valor) };
        productosEnStorage(productos.id, JSON.stringify(productos));
        
        //Referencia al botón agregar Producto al Carrito
        let agregar = document.getElementsByClassName("agregar");
        for(let index = 0 ; index < productos.length ; index++){

        //Evento del Carrito de compras cada vez que se hace click sobre el boton 'agregar al Carrito' 
        agregar[index].onclick = (e)=>{
                    
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
        }};
    
    
    }catch (error){
        console.error("Error:", error);
    };
};


window.addEventListener("load", renderizarCarrito);


function generarCardProducto(producto){ 
    return `
            <div class = "card-body">
                <h4 class="card-title">${producto.nombre}</h4>
                <h5>${producto.tipo}</h5>
                <img class="img-fluid" src="${producto.imagen}"></img>
                <p class="card-text">$ ${producto.precio}</p>
                <button class="btn btn-primary agregar" marcador="${producto.id}">Agregar al Carrito</button>
            </div>
    `
}



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
        confirmButtonText: 'Eliminar',
        cancelButtonText:'Cancelar'
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
    if(carritoDeCompras.length == 0){
        Swal.fire({
            title: 'No tienes productos en tu carrito',
            icon: 'warning',
            showCancelButton: false,
            showConfirmButton:false,
            timer: 1000
    })}else{
        Swal.fire({
            title: '¿Vaciar Carrito?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: 'Carrito Vacío',
                    icon:'success',
                    showConfirmButton: false,
                    timer:1000,
                });
                carritoDeCompras = [];
                sessionStorage.clear();
                renderizarCarrito();
            };
        });
    };
};

//Traer el carrito de Compras del Storage
const carritoFinal = JSON.parse(sessionStorage.getItem('Carrito')) || [];


//Evento Comprar productos
comprar.addEventListener('click', ()=> {
    if(carritoDeCompras.length == 0){
        Swal.fire({
            title: 'Tu carrito está vacio',
            text:'Selecciona alguno de nuestros productos',
            icon: 'warning',
            showCancelButton: false,
            showConfirmButton:false,
            timer: 1000
        });
    }else{
        Swal.fire({
            title: '¿Quieres confirmar tu compra?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Confirmar',
            cancelButtonText:'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: 'Gracias por confirmar tu compra!',
                    icon:'success',
                    showConfirmButton: false,
                    timer:1000,
                });
            carritoDeCompras = [];
            sessionStorage.clear();
            renderizarCarrito();
            };
        });
    }
});


//Evento vaciar carrito
vaciar.addEventListener('click', vaciarCarrito);


//Llamado de funciones
renderizarCarrito();
renderizarProductos();
