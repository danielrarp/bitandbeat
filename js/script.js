function verColeccion(){
    window.scrollTo({
        top: 600,
        behavior: "smooth"
    });
}


function comprar(nombre, btn){

let card = btn.closest(".card");
let talla = card.querySelector(".talla").value;

if(talla === ""){
    alert("Selecciona una talla");
    return;
}

let mensaje = `Hola quiero la playera ${nombre} talla ${talla}`;
let url = `https://wa.me/521XXXXXXXXXX?text=${encodeURIComponent(mensaje)}`;

window.open(url, "_blank");

}