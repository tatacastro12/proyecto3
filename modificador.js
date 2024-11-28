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
    panel.style.padding = "5px";
    panel.style.borderRadius = "5px";
    panel.style.boxShadow = "0 0 5px rgba(0, 0, 0, 0.1)";
    panel.style.zIndex = "1000"; // Asegura que el panel esté encima de otros elementos
    panel.style.display = "flex";
    panel.style.flexDirection = "column";
    panel.style.alignItems = "center";
    panel.style.fontFamily = "Arial, sans-serif";
    panel.style.width = "60px"; // Hacer el panel más estrecho
    panel.style.height = "auto"; // Tamaño flexible según el contenido

    // Estilo de los botones para hacerlo más compacto
    const estiloBoton = {
        width: "50px",
        marginBottom: "5px",
        padding: "5px",
        fontSize: "12px",
        border: "1px solid #ccc",
        borderRadius: "3px",
        backgroundColor: "#f0f0f0",
        cursor: "pointer",
    };

    // Botón para cambiar el fondo
    const botonFondo = document.createElement("button");
    botonFondo.innerHTML = "Fondo";
    Object.assign(botonFondo.style, estiloBoton);
    botonFondo.onclick = function() {
        cambiarColorFondo('lightblue');
    };

    // Botón para cambiar tamaño de fuente
    const botonTamano = document.createElement("button");
    botonTamano.innerHTML = "Fuente";
    Object.assign(botonTamano.style, estiloBoton);
    botonTamano.onclick = function() {
        cambiarTamanoFuente(20);
    };

    // Botón para cambiar el contraste
    const botonContraste = document.createElement("button");
    botonContraste.innerHTML = "Contraste";
    Object.assign(botonContraste.style, estiloBoton);
    botonContraste.onclick = function() {
        cambiarContraste();
    };

    // Botón para cambiar la imagen
    const botonImagen = document.createElement("button");
    botonImagen.innerHTML = "Imagen";
    Object.assign(botonImagen.style, estiloBoton);
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


