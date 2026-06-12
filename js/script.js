// =========================
// MENSAJE SORPRESA
// =========================

function mostrarMensaje() {

    const mensaje = document.getElementById("mensaje");

    if (
        mensaje.style.display === "none" ||
        mensaje.style.display === ""
    ) {
        mensaje.style.display = "block";
    } else {
        mensaje.style.display = "none";
    }
}

// =========================
// CONTADOR DESDE 12/02/2023
// =========================

function actualizarContador() {

    const fechaInicio = new Date("2023-02-12T00:00:00");
    const hoy = new Date();

    const diferencia = hoy - fechaInicio;

    const dias = Math.floor(
        diferencia / (1000 * 60 * 60 * 24)
    );

    const horas = Math.floor(
        diferencia / (1000 * 60 * 60)
    );

    const minutos = Math.floor(
        diferencia / (1000 * 60)
    );

    document.getElementById("contador").innerHTML = `
        💙 ${dias} días juntos <br><br>
        🕒 ${horas.toLocaleString()} horas compartidas <br><br>
        ⏳ ${minutos.toLocaleString()} minutos de amor
    `;
}

actualizarContador();

setInterval(actualizarContador, 60000);

// =========================
// MENSAJES ALEATORIOS
// =========================

const mensajes = [

    "💙 Eres mi persona favorita.",

    "🧸 Gracias por existir.",

    "🚀 Te amo hasta el infinito y más allá.",

    "💙 Siempre te elegiría a ti.",

    "✨ Gracias por cada momento juntos.",

    "💙 Eres lo mejor que me ha pasado.",

    "🧸 Amo cada recuerdo contigo.",

    "💙 Mi lugar favorito siempre será a tu lado.",

    "🚀 Nuestro amor no tiene límites.",

    "💙 Gracias por hacer mi vida más bonita.",

    "🥺 Gracias por ser mi niño.",

    "💙 Santiago, eres mi felicidad.",

    "🧸 Cada día contigo vale la pena.",

    "💙 Eres mi hogar favorito.",

    "🚀 Te amaría una y mil veces más."

];

function mensajeAleatorio() {

    const indice = Math.floor(
        Math.random() * mensajes.length
    );

    document.getElementById(
        "mensajeAleatorio"
    ).innerHTML = mensajes[indice];
}

// =========================
// CORAZONES AZULES
// =========================

function crearCorazon() {

    const corazon = document.createElement("div");

    corazon.classList.add("corazon");

    corazon.innerHTML = "💙";

    corazon.style.left =
        Math.random() * window.innerWidth + "px";

    corazon.style.top = "-20px";

    corazon.style.position = "fixed";

    corazon.style.fontSize =
        Math.random() * 20 + 20 + "px";

    corazon.style.zIndex = "999";

    document.body.appendChild(corazon);

    let posicion = -20;

    const animacion = setInterval(() => {

        posicion += 3;

        corazon.style.top = posicion + "px";

        if (posicion > window.innerHeight) {

            clearInterval(animacion);

            corazon.remove();
        }

    }, 20);
}

setInterval(crearCorazon, 800);

// =========================
// EFECTO EN GALERIA
// =========================

const fotos = document.querySelectorAll(".galeria img");

fotos.forEach((foto) => {

    foto.addEventListener("click", () => {

        foto.classList.toggle("zoom");
    });

});

// =========================
// MENSAJE FINAL
// =========================

const texto =
"💙 TE AMO MUCHO HASTA EL INFINITO Y MÁS ALLÁ 🚀";

let i = 0;

function escribir() {

    if (i < texto.length) {

        document.getElementById("fraseFinal").innerHTML += texto.charAt(i);

        i++;

        setTimeout(escribir, 80);
    }
}

escribir();

function entrarPagina(){

    document.getElementById("pantallaBienvenida").style.display = "none";

}
function abrirCarta(){

    const carta = document.getElementById("carta");

    if(
        carta.style.display === "none" ||
        carta.style.display === ""
    ){

        carta.style.display = "block";

    }else{

        carta.style.display = "none";

    }

}

function entrarPagina(){

    document.getElementById(
        "pantallaBienvenida"
    ).style.display = "none";

    for(let i=0;i<50;i++){

        setTimeout(() => {

            crearCorazon();

        }, i * 50);

    }

}
