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
        const infoMouse = document.createElement("section") // container
        const mouseHeader = document.createElement("section"); // nombre+precio+valoracion
        const textHeader = document.createElement("div") // precio+valoracion
        const mouseText = document.createElement("div"); // details+specs
        const mouseImg = document.createElement("div")   // img
        const botones = document.createElement("div"); // volver+comprar
        
        const titulo = document.createElement("h1");
        const precio = document.createElement("span");
        const valoracion = document.createElement("span");
        const details = document.createElement("p");
        const specs = document.createElement("ul");
        const img = document.createElement("img");

        const btnVolver = document.createElement("button");
        const btnComprar = document.createElement("button");
        
        // Aplicar clases
        infoMouse.classList.add("contenedor");
        mouseHeader.classList.add("info-header");
        textHeader.classList.add("header-text");
        mouseText.classList.add("info-text");
        mouseImg.classList.add("info-img");
        botones.classList.add("botones");
        img.classList.add("mouse-img");
        btnVolver.classList.add("button");
        btnComprar.classList.add("button");

        
        // Agregar contenido
        // titulo de pagina
        infoMouse.innerHTML = `<title>${mouseSeleccionado.marca} ${mouseSeleccionado.modelo}</title>`;
        // info-header
        titulo.textContent = `${mouseSeleccionado.marca} ${mouseSeleccionado.modelo}`;
        precio.textContent = `Precio: ${mouseSeleccionado.precio}`;
        valoracion.textContent = `Valoración: ${mouseSeleccionado.valoracion}`;
        // info-text
        // details
        details.textContent = `${mouseSeleccionado.descripcion}`;
        // specs
        mouseSeleccionado.especificaciones.forEach((especificacion) => {
            const item = document.createElement('li');
            item.textContent = especificacion;
            specs.appendChild(item);
        });
        // info-img
        img.setAttribute("src", `${mouseSeleccionado.img}`);
        // btn-volver
        btnVolver.textContent = "Volver";
        btnVolver.addEventListener("click", () => {window.location.href = '../index.html'});
        // btn-comprar
        btnComprar.textContent = "Comprar ahora";
        btnComprar.addEventListener("click", () => {if(confirm("¿Desea confirmar su compra?")) alert("Gracias por tu compra")});

        // Agregar elementos
        botones.appendChild(btnVolver);
        botones.appendChild(btnComprar);
        
        mouseHeader.appendChild(titulo);
        mouseHeader.appendChild(textHeader);
        textHeader.appendChild(valoracion);
        textHeader.appendChild(precio);
        
        mouseText.appendChild(details);
        mouseText.appendChild(specs);
        
        mouseImg.appendChild(img);
        
        infoMouse.appendChild(mouseHeader);
        infoMouse.appendChild(mouseText);
        infoMouse.appendChild(mouseImg);
        infoMouse.appendChild(botones);
        
        detalleMouse.appendChild(infoMouse);
    };
});