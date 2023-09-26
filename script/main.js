fetch("datos.json")
    .then((respuesta) => respuesta.json())
    .then((datos) => localStorage.setItem("mouses", JSON.stringify(datos)));

document.addEventListener("DOMContentLoaded", () => {
    const groupCards = document.getElementById("card-group");           // container
    const datosMouses = JSON.parse(localStorage.getItem("mouses"));

    if (datosMouses) {
        datosMouses.forEach((mouse) => {

            // Crear elementos
            const card = document.createElement("div");         //card-container
            const cardBody = document.createElement("div");     //div = title+sintesis
            const img = document.createElement("img");          
            const titulo = document.createElement("h2");         
            const sintesis = document.createElement("p");      

            // Aplicar clases
            card.classList.add("card");
            cardBody.classList.add("card-body");
            img.classList.add("card-img");
            titulo.classList.add("card-title");
            sintesis.classList.add("card-synthesis");

            // Agregar contenido
            img.setAttribute("src", `${mouse.img}`);
            titulo.textContent = `${mouse.marca} ${mouse.modelo}`;
            sintesis.textContent = `${mouse.sintesis}`;

            // evento
            card.addEventListener("click", () => mostrarDetallesDato(mouse));
            
            // Append child
            cardBody.appendChild(img);
            cardBody.appendChild(titulo);
            cardBody.appendChild(sintesis);
            
            card.appendChild(cardBody);
            
            groupCards.appendChild(card);
        });
    }
});

function mostrarDetallesDato(mouse) {
    window.location.href = `mouse.html?id=${mouse.id}`;
}
