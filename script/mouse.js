document.addEventListener("DOMContentLoaded", () => {
    const detalleMouse = document.getElementById("main-content");
    // Selecciono dato 'id' de mouse desde la url
    const urlParams = new URLSearchParams(window.location.search);
    const idMouse = urlParams.get("id");
    
    // Selecciono datos de mouse desde localStorage
    const datosMouse = JSON.parse(localStorage.getItem("mouses"));

    const mouseSeleccionado = datosMouse.find(
        (mouse) => mouse.id == idMouse
    );

    if(mouseSeleccionado){
        
        // Crear elementos
        const info = document.createElement("section"); // container
        const infoText = document.createElement("div"); // div = titulo+details+specs
        const infoImg = document.createElement("div")   // div = img

        const titulo = document.createElement("h1");
        const details = document.createElement("p");
        const specs = document.createElement("p");
        const img = document.createElement("img");
        
        // Aplicar clases
        info.classList.add("contenedor");
        infoText.classList.add("info-text");
        infoImg.classList.add("info-img");

        titulo.classList.add("info-title");
        details.classList.add("info-details");
        specs.classList.add("info-specs");
        img.classList.add("mouse-img");

        // Agregar contenido
        titulo.textContent = `${mouseSeleccionado.marca + ' '  + mouseSeleccionado.modelo}`;
        img.setAttribute("src", `${mouseSeleccionado.img}`);
        details.textContent = `${mouseSeleccionado.descripcion}`;
        specs.textContent = `${mouseSeleccionado.especificaciones}`;

        // Append child
        infoText.appendChild(titulo);
        infoText.appendChild(details);
        infoText.appendChild(specs);

        infoImg.appendChild(img);

        info.appendChild(infoImg);
        info.appendChild(infoText);

        detalleMouse.appendChild(info);
    };
});