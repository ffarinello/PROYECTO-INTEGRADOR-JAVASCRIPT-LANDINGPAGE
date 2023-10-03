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
        const mouseContainer = document.createElement("section") // .container {mouseHeader, mouseContent, botones}
        const mouseHeader = document.createElement("section"); // .header {titulo, headerText}
        const mouseContent = document.createElement("div"); // .content {contentText, contentImg}
        const contentImg = document.createElement("div")   // .content-img {img}   
        const botones = document.createElement("div"); // .button {btnVolver, btnComprar}
        const headerText = document.createElement("div") // .header-text {precio, valoracion}
        const contentText = document.createElement("div"); // .content-text {details, specs}
        
        const titulo = document.createElement("h1");
        const precio = document.createElement("span");
        const valoracion = document.createElement("span");
        const details = document.createElement("p");
        const specs = document.createElement("ul");
        const img = document.createElement("img");

        const btnVolver = document.createElement("button");
        const btnComprar = document.createElement("button");
        
        // Aplicar clases
        mouseContainer.classList.add("container");
        mouseHeader.classList.add("header");
        headerText.classList.add("header-text");
        mouseContent.classList.add("content");
        contentText.classList.add("content-text")
        contentImg.classList.add("content-img");

        botones.classList.add("botones");
        img.classList.add("mouse-img");
        btnVolver.classList.add("button");
        btnComprar.classList.add("button");

        
        // Agregar contenido
        // titulo de pagina
        mouseContainer.innerHTML = `<title>${mouseSeleccionado.marca} ${mouseSeleccionado.modelo}</title>`;
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
        mouseHeader.appendChild(headerText);

        headerText.appendChild(valoracion);
        headerText.appendChild(precio);
        
        mouseContent.appendChild(contentText);
        mouseContent.appendChild(contentImg);

        contentText.appendChild(details);
        contentText.appendChild(specs);

        contentImg.appendChild(img);

        mouseContainer.appendChild(mouseHeader);
        mouseContainer.appendChild(mouseContent);
        mouseContainer.appendChild(botones);
        
        detalleMouse.appendChild(mouseContainer);
    };
});