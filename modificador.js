// Funciones de modificación
function cambiarColorFondo(color) {
    document.body.style.backgroundColor = color;
}

function cambiarTamanoFuente(tamano) {
    document.body.style.fontSize = tamano + "px";
}

function cambiarContraste() {
    let body = document.body;
    if (body.style.backgroundColor === "black") {
        body.style.backgroundColor = "white";
        body.style.color = "black";
    } else {
        body.style.backgroundColor = "black";
        body.style.color = "white";
    }
}

function cambiarImagenes(url) {
    let imagenes = document.querySelectorAll("img");
    imagenes.forEach(function(img) {
        img.src = url;
    });
}

// Crear los botones y agregarlos al cuerpo de la página
function crearBotones() {
    const contenedorBotones = document.createElement("div");
    contenedorBotones.style.position = "fixed";
    contenedorBotones.style.top = "10px";
    contenedorBotones.style.left = "10px";
    contenedorBotones.style.zIndex = "1000"; // Para asegurarse de que estén encima del contenido

    // Botón para cambiar el fondo
    const botonFondo = document.createElement("button");
    botonFondo.innerHTML = "Cambiar Fondo";
    botonFondo.onclick = function() {
        cambiarColorFondo('lightblue');
    };

    // Botón para cambiar tamaño de fuente
    const botonTamano = document.createElement("button");
    botonTamano.innerHTML = "Aumentar Fuente";
    botonTamano.onclick = function() {
        cambiarTamanoFuente(20);
    };

    // Botón para cambiar el contraste
    const botonContraste = document.createElement("button");
    botonContraste.innerHTML = "Cambiar Contraste";
    botonContraste.onclick = function() {
        cambiarContraste();
    };

    // Botón para cambiar la imagen
    const botonImagen = document.createElement("button");
    botonImagen.innerHTML = "Cambiar Imagen";
    botonImagen.onclick = function() {
        cambiarImagenes('https://via.placeholder.com/200');
    };

    // Añadir los botones al contenedor
    contenedorBotones.appendChild(botonFondo);
    contenedorBotones.appendChild(botonTamano);
    contenedorBotones.appendChild(botonContraste);
    contenedorBotones.appendChild(botonImagen);

    // Agregar el contenedor de botones al body
    document.body.appendChild(contenedorBotones);
}

// Llamamos a la función para agregar los botones cuando cargue el script
crearBotones();
