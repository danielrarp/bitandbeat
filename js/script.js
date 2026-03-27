function verColeccion(){
    window.scrollTo({
        top: 600,
        behavior: "smooth"
    });
}


function comprar(nombre, btn){

    const card = btn.closest(".card");

    const talla = card.querySelector(".talla").value;
    const corte = card.querySelector(".corte").value;
    const color = card.getAttribute("data-color-selected");

    if(!talla || !corte || !color){
        alert("Selecciona corte, color y talla");
        return;
    }

const mensaje = `Hola, buen día.

Me interesa adquirir la siguiente playera:

• Modelo: ${nombre}
• Corte: ${corte}
• Color: ${color}
• Talla: ${talla}

¿Podrías confirmarme disponibilidad y tiempos de entrega?

Gracias.`;

    const url = `https://wa.me/56?text=${encodeURIComponent(mensaje)}`;

    window.open(url, "_blank");
}

document.querySelectorAll(".card").forEach(card => {

    const corteSelect = card.querySelector(".corte");
    const colorContainer = card.querySelector(".color-options");

    let selectedColor = "";

    corteSelect.addEventListener("change", () => {

        colorContainer.innerHTML = "";
        selectedColor = "";

        let colores = [];

        if(corteSelect.value === "Oversized"){
            colores = [
                {name:"Negro", code:"#000"},
                {name:"Arena", code:"#d2b48c"},
                {name:"Rosa", code:"#ff69b4"},
                {name:"Café", code:"#6b3e26"},
                {name:"Azul cielo", code:"#87ceeb"},
                {name:"Verde", code:"#2ecc71"}
            ];
        }

        if(corteSelect.value === "Regular"){
            colores = [
                {name:"Negro", code:"#000"}
            ];
        }

        colores.forEach(c => {

            const div = document.createElement("div");
            div.classList.add("color");
            div.style.background = c.code;
            div.setAttribute("data-color", c.name);

            div.addEventListener("click", () => {

                card.querySelectorAll(".color").forEach(el => el.classList.remove("selected"));
                div.classList.add("selected");

                selectedColor = c.name;
                card.setAttribute("data-color-selected", selectedColor);
            });

            colorContainer.appendChild(div);
        });

    });

});

const elements = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

elements.forEach(el => {
    el.classList.add("fade-in");
    observer.observe(el);
});