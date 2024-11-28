// Crear el panel de modificación (con botones)
function crearPanelModificador() {
    const panel = document.createElement("div");

    // Identificador único para el panel
    panel.id = "panel-modificador";
    panel.style.position = "fixed";
    panel.style.top = "50%";
    panel.style.right = "10px";
    panel.style.transform = "translateY(-50%)";
    panel.style.backgroundColor = "#fff";
    panel.style.padding = "10px";
    panel.style.borderRadius = "10px";
    panel.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.1)";
    panel.style.zIndex = "1000"; // Asegura que el panel esté visible
    panel.style.display = "flex";
    panel.style.flexDirection = "column";
    panel.style.alignItems = "center";
    panel.style.fontFamily = "Arial, sans-serif";
    panel.style.width = "60px";
    panel.style.height = "auto";

    // Botones con estilo único
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

    // Crear botones
    const botonFondo = document.createElement("button");
    botonFondo.innerHTML = "Fondo";
    Object.assign(botonFondo.style, estiloBoton);
    botonFondo.onclick = function() {
        document.body.style.backgroundColor = "lightblue";
    };

    const botonTamano = document.createElement("button");
    botonTamano.innerHTML = "Fuente";
    Object.assign(botonTamano.style, estiloBoton);
    botonTamano.onclick = function() {
        document.body.style.fontSize = "20px";
    };

    const botonContraste = document.createElement("button");
    botonContraste.innerHTML = "Contraste";
    Object.assign(botonContraste.style, estiloBoton);
    botonContraste.onclick = function() {
        const body = document.body;
        if (body.style.backgroundColor === "black") {
            body.style.backgroundColor = "white";
            body.style.color = "black";
        } else {
            body.style.backgroundColor = "black";
            body.style.color = "white";
        }
    };

    const botonImagen = document.createElement("button");
    botonImagen.innerHTML = "Imagen";
    Object.assign(botonImagen.style, estiloBoton);
    botonImagen.onclick = function() {
        const imagenes = document.querySelectorAll("img");
        imagenes.forEach((img) => (img.src = "https://via.placeholder.com/200"));
    };

    // Añadir botones al panel
    panel.appendChild(botonFondo);
    panel.appendChild(botonTamano);
    panel.appendChild(botonContraste);
    panel.appendChild(botonImagen);

    // Agregar panel al body
    document.body.appendChild(panel);
}

// Crear el panel al cargar
crearPanelModificador();



