// PRODUCTOS
const productos = [
    // Posters
    {
        id: "poster-01",
        titulo: "Poster 01",
        imagen: "../assets/img/Poster/Poster1.jpg",
        categoria: {
            nombre: "Posters",
            id: "posters"
        },
        precio: 1000
    },
    {
        id: "poster-02",
        titulo: "Poster 02",
        imagen: "../assets/img/Poster/Poster2.jpg",
        categoria: {
            nombre: "Posters",
            id: "posters"
        },
        precio: 1000
    },
    {
        id: "poster-03",
        titulo: "Poster 03",
        imagen: "../assets/img/Poster/Poster3.jpg",
        categoria: {
            nombre: "Posters",
            id: "posters"
        },
        precio: 1000
    },
    {
        id: "poster-04",
        titulo: "Poster 04",
        imagen: "../assets/img/Poster/Poster4.jpg",
        categoria: {
            nombre: "Posters",
            id: "posters"
        },
        precio: 1000
    },
    {
        id: "poster-05",
        titulo: "Poster 05",
        imagen: "../assets/img/Poster/Poster5.jpg",
        categoria: {
            nombre: "Posters",
            id: "posters"
        },
        precio: 1000
    },
    // Poleras
    {
        id: "polera-01",
        titulo: "Polera 01",
        imagen: "../assets/img/Polera/Polera1.jpg",
        categoria: {
            nombre: "Poleras",
            id: "poleras"
        },
        precio: 2000
    },
    {
        id: "polera-02",
        titulo: "Polera 02",
        imagen: "../assets/img/Polera/Polera2.jpg",
        categoria: {
            nombre: "Poleras",
            id: "poleras"
        },
        precio: 2000
    },
    {
        id: "polera-03",
        titulo: "Polera 03",
        imagen: "../assets/img/Polera/Polera3.jpg",
        categoria: {
            nombre: "Poleras",
            id: "poleras"
        },
        precio: 2000
    },
    {
        id: "polera-04",
        titulo: "Polera 04",
        imagen: "../assets/img/Polera/Polera4.jpg",
        categoria: {
            nombre: "Poleras",
            id: "poleras"
        },
        precio: 2000
    },
    {
        id: "polera-05",
        titulo: "Polera 05",
        imagen: "../assets/img/Polera/Polera5.jpg",
        categoria: {
            nombre: "Poleras",
            id: "poleras"
        },
        precio: 2000
    },
    {
        id: "polera-06",
        titulo: "Polera 06",
        imagen: "../assets/img/Polera/Polera6.jpg",
        categoria: {
            nombre: "Poleras",
            id: "poleras"
        },
        precio: 2000
    },
    {
        id: "polera-07",
        titulo: "Polera 07",
        imagen: "../assets/img/Polera/Polera7.jpg",
        categoria: {
            nombre: "Poleras",
            id: "poleras"
        },
        precio: 2000
    },
    {
        id: "polera-08",
        titulo: "Polera 08",
        imagen: "../assets/img/Polera/Polera8.jpg",
        categoria: {
            nombre: "Poleras",
            id: "poleras"
        },
        precio: 2000
    },
    // Pins
    {
        id: "Pin-01",
        titulo: "Pin 01",
        imagen: "../assets/img/Pin/Pin1.jpg",
        categoria: {
            nombre: "Pins",
            id: "pins"
        },
        precio: 3000
    },
    {
        id: "Pin-02",
        titulo: "Pin 02",
        imagen: "../assets/img/Pin/Pin2.jpg",
        categoria: {
            nombre: "Pins",
            id: "pins"
        },
        precio: 3000
    },
    {
        id: "Pin-03",
        titulo: "Pin 03",
        imagen: "../assets/img/Pin/Pin3.jpg",
        categoria: {
            nombre: "Pins",
            id: "pins"
        },
        precio: 3000
    },
    {
        id: "Pin-04",
        titulo: "Pin 04",
        imagen: "../assets/img/Pin/Pin4.jpg",
        categoria: {
            nombre: "Pins",
            id: "pins"
        },
        precio: 3000
    },
    {
        id: "Pin-05",
        titulo: "Pin 05",
        imagen: "../assets/img/Pin/Pin5.jpg",
        categoria: {
            nombre: "Pins",
            id: "pins"
        },
        precio: 3000
    }
];

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");


function cargarProductos(productosElegidos){

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {
        
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `

        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar();
}

cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        
        if (e.currentTarget.id != "todos"){
            const productoCaterogia = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerHTML = productoCaterogia.categoria.nombre;

            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        }else {
            tituloPrincipal.innerHTML = "Todos los productos";
            cargarProductos(productos);
        }
    
    })
})

function actualizarBotonesAgregar(){
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS){
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
}else {
    productosEnCarrito = [];
}

function agregarAlCarrito(e){
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)){
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    }else{
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }
    
    actualizarNumerito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito(){
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}