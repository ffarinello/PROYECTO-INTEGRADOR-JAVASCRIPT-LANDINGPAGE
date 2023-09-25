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
        const infoMouse = document.createElement("section"); // container
        const mouseText = document.createElement("div"); // div = titulo+details+specs
        const mouseImg = document.createElement("div")   // div = img

        const titulo = document.createElement("h1");
        const details = document.createElement("p");
        const specs = document.createElement("p");
        const img = document.createElement("img");
        
        // Aplicar clases
        infoMouse.classList.add("contenedor");
        mouseText.classList.add("info-text");
        mouseImg.classList.add("info-img");

        titulo.classList.add("info-title");
        details.classList.add("info-details");
        specs.classList.add("info-specs");
        img.classList.add("mouse-img");

        // Agregar contenido
        titulo.textContent = `${mouseSeleccionado.marca + ' '  + mouseSeleccionado.modelo}`;
        img.setAttribute("src", `${mouseSeleccionado.img}`);
        details.textContent = `${mouseSeleccionado.descripcion}`;
        mouseSeleccionado.especificaciones.forEach((especificacion) => {
            const item = document.createElement('li');
            item.textContent = especificacion;
            specs.appendChild(item);
        });
        // specs.textContent = `${mouseSeleccionado.especificaciones}`;

        // Append child
        mouseText.appendChild(titulo);
        mouseText.appendChild(details);
        mouseText.appendChild(specs);
        
        mouseImg.appendChild(img);
        
        infoMouse.appendChild(mouseImg);
        infoMouse.appendChild(mouseText);
        
        detalleMouse.appendChild(infoMouse);
    };
});