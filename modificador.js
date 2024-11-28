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

// Crear el panel de modificación (con botones)
function crearPanelModificador() {
    const panel = document.createElement("div");
    panel.style.position = "fixed";
    panel.style.top = "50%";
    panel.style.right = "10px";
    panel.style.transform = "translateY(-50%)";
    panel.style.backgroundColor = "#fff";
    panel.style.padding = "10px";
    panel.style.borderRadius = "10px";
    panel.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.1)";
    panel.style.zIndex = "1000";
    panel.style.display = "flex";
    panel.style.flexDirection = "column";
    panel.style.alignItems = "center";
    panel.style.fontFamily = "Arial, sans-serif";

    // Botón para cambiar el fondo
    const botonFondo = document.createElement("button");
    botonFondo.innerHTML = "Cambiar Fondo";
    botonFondo.style.marginBottom = "10px";
    botonFondo.onclick = function() {
        cambiarColorFondo('lightblue');
    };

    // Botón para cambiar tamaño de fuente
    const botonTamano = document.createElement("button");
    botonTamano.innerHTML = "Aumentar Fuente";
    botonTamano.style.marginBottom = "10px";
    botonTamano.onclick = function() {
        cambiarTamanoFuente(20);
    };

    // Botón para cambiar el contraste
    const botonContraste = document.createElement("button");
    botonContraste.innerHTML = "Cambiar Contraste";
    botonContraste.style.marginBottom = "10px";
    botonContraste.onclick = function() {
        cambiarContraste();
    };

    // Botón para cambiar la imagen
    const botonImagen = document.createElement("button");
    botonImagen.innerHTML = "Cambiar Imagen";
    botonImagen.onclick = function() {
        cambiarImagenes('https://via.placeholder.com/200');
    };

    // Añadir los botones al panel
    panel.appendChild(botonFondo);
    panel.appendChild(botonTamano);
    panel.appendChild(botonContraste);
    panel.appendChild(botonImagen);

    // Agregar el panel al body
    document.body.appendChild(panel);
}

// Llamamos a la función para crear el panel cuando cargue el script
crearPanelModificador();

