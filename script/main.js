fetch("datos.json")
    .then((respuesta) => respuesta.json())
    .then((datos) => localStorage.setItem("mouses", JSON.stringify(datos)));

document.addEventListener("DOMContentLoaded", () => {
    const groupCards = document.getElementById("card-group");
    const datosMouses = JSON.parse(localStorage.getItem("mouses"));
    if (datosMouses) {
        datosMouses.forEach((mouse) => {
            // Creo una tarjeta con clase card
            const card = document.createElement("div");
            card.classList.add("card");
            // agrego card-body
            const cardBody = document.createElement("div");
            cardBody.classList.add("card-body");
            // agrego img
            const img = document.createElement("img");
            img.classList.add("card-img-top");
            img.setAttribute("src", `${mouse.img}`);
            // cambio tamaños de imagenes
            // if (img.width === 420) {
            //     img.style.maxWidth = 150 + "px";
            // }
            // img.style.maxHeight = 250 + "px";
            // agrego nombre
            const title = document.createElement("h2");
            title.classList.add("card-title");
            title.textContent = `${mouse.marca + " " + mouse.modelo}`;
            // agrego sintesis
            const synthesis = document.createElement("p");
            synthesis.classList.add("card-synthesis-text");
            synthesis.textContent = `${mouse.sintesis}`;
            //    // agrego detalle
            //    const details = document.createElement("p");
            //    details.classList.add("card-text")
            //    details.textContent = `${mouse.descripcion}`;
            //    // agrego especificaciones
            //    const specs = document.createElement("p");
            //    specs.classList.add("card-specifics-text")
            //    specs.textContent = `${mouse.especificaciones}`;

            // evento onclick
            card.addEventListener("click", () => {
                mostrarDetallesDato(mouse);
            });

            // card's appenChild
            cardBody.appendChild(img);
            cardBody.appendChild(title);
            cardBody.appendChild(synthesis);
            //  cardBody.appendChild(details);
            //  cardBody.appendChild(specs);
            // html appenChild
            card.appendChild(cardBody);
            groupCards.appendChild(card);
        });
    }
});

function mostrarDetallesDato(mouse) {
    window.location.href = `mouse.html?id=${mouse.id + mouse.modelo}`;
}
