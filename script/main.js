fetch("datos.json")
  .then((respuesta) => respuesta.json())
  .then((datos) => localStorage.setItem("mouses", JSON.stringify(datos)));
  

document.addEventListener("DOMContentLoaded", () => {
    const groupCards = document.getElementById("card-group");
    const datosMouses = JSON.parse(localStorage.getItem("mouses"));
    // console.log(datosMouses);
    if(datosMouses){
        console.log(datosMouses)
        datosMouses.forEach((mouse) => {
            // Creo una tarjeta con clase card
           const cardItem = document.createElement("div");
           cardItem.classList.add("card");

           cardItem.innerHTML = `<h4>${mouse.marca}</h4>`;

           cardItem.addEventListener("click", () => {
                mostrarDetallesDato(mouse);
            });
            groupCards.appendChild(cardItem);
            /*   
                cardItem.appendChild(card-img)
                cardItem.appendChild(card-title)
                cardItem.appendChild(card-body)
                cardItem.appendChild(card-text)
                cardItem.appendChild(card.specifics) 
            */
        });
    }
})

function mostrarDetallesDato(mouse){
    window.location.href = `mouse.html?id=${mouse.id + mouse.modelo}`;
}