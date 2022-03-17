/*codigo que usamos para generar los alert por cada radiobutton*/

// function submit() {
//   let res1= document.querySelector('input[name="respuesta1"]:checked');
//   let res2= document.querySelector('input[name="respuesta2"]:checked');
//   console.log(res1);
//   console.log(res2);
//   alert(res1.value);
//   alert(res2.value);
//
// }
//

/*codigo que usamos para generar los alert con las respuestas correctas*/

let listaRespuestas0 = ["Natalie Rushman", "El chitauri", "Mjolnir", "Agente coulson"];
let listaRespuestas1 = ["Vibranio", "Gatos", "T'Challa", "Neurocirujano"];

function submit() {
    let res = document.querySelectorAll('.flex input:checked');

    // console.log(res);

    let set = document.querySelector('input[name="settings1"]:checked');
    // console.log(set);
    if (set.value == "MARVEL MOVIES") {
        listaRespuestas = listaRespuestas0;
    }
    else if (set.value == "MARVEL COMICS") {
        listaRespuestas = listaRespuestas1;
    }
    else {
        alert("tienes que seleccionar alguna opción");
    }

    let lista = "";
    let msg = "";
    let suma = 0;
    for (let i = 0; i < res.length; i++) {
        // console.log(res[i]);
        // alert(res[i].value);
        //lista = lista + ' / ' + res[i].value;

        if (res[i].value == listaRespuestas[i]) {
            // console.log("Pregunta "+ (i+1) +":" + " Excelente! tu respuesta es correcta!" + "\n");
            msg = msg + "Pregunta " + (i + 1) + ":" + " Excelente! tu respuesta es correcta!" + "\n";
            suma = suma + 25;
        }
        else {
            // console.log("Pregunta "+ (i+1) +":" + "Respuesta Incorrecta!" + "\n" + "la respuesta correcta es: " + listaRespuestas[i] + "\n");
            msg = msg + "Pregunta " + (i + 1) + ":" + "Respuesta Incorrecta!" + "\n" + "la respuesta correcta es: " + listaRespuestas[i] + "\n";
            suma = suma + 0;
        }

    }
    console.log(suma);
    // alert("las respuestas correctas son:" + lista);
    // console.log(msg);
    alert(msg);
    alert("Tu puntaje total es: " + suma);
}


/*funcion para mostrar el contenido y registrar el nombre del jugador*/
// function mostrar(){
//   document.getElementById('contenido').style.display="block";
// }
/*función para guardar el nombre del jugador*/
let jugador = "";
let tiempo = 90;
function buttonPlay() {
    // console.log("estoy en el boton");
    jugador = document.getElementById("namePlayer");
    // console.log(jugador);
    // console.log(jugador.value);
    jugador = jugador.value;
    // document.querySelector('input:checked');
    // document.body.innerHTML = "";
    /*busco donde voy a colocar el nombre del usuario*/
    let rug = document.getElementById("usuario");
    // console.log(rug);
    rug.innerHTML = " ";
    rug.innerHTML = jugador;

    /*funcion que despliega la sección de preguntas*/
    let set = document.querySelector('input[name="settings1"]:checked');
    // console.log(set);
    if (set.value == "MARVEL MOVIES") {
        document.querySelector(".grupo1").style.display = "block";
        document.querySelector(".grupo2").style.display = "none";
    }
    else if (set.value == "MARVEL COMICS") {
        document.querySelector(".grupo2").style.display = "block";
        document.querySelector(".grupo1").style.display = "none";
    }
    document.getElementById('contenido').style.display = "block";

}

function uncheckRadio() {
    let res = document.querySelectorAll('.flex input:checked');
    for (let i = 0; i < res.length; i++) {
        res[i].checked = false;
    }
}


function cuentaRegresiva() {
    if (tiempo > 0) {
        tiempo--
    }
    else {
        // window.close();
        document.querySelector(".grupo1").style.display = "none";
        document.querySelector(".grupo2").style.display = "none";
        document.getElementById('contenido').style.display = "none";
        uncheckRadio();
        return
    }
    document.getElementById("tiempoact").innerHTML = tiempo;
    setTimeout("cuentaRegresiva()", 1000);
}

// window.onload = function(){
//   cuentaRegresiva();
// };



// vuelve arriba
let scrollToTopBtn = document.querySelector(".scroll");
let rootElement = document.documentElement;
function scrollToTop() {

    // Scroll to top logic
    rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
    })
    // esconde el group
    document.querySelector(".grupo1").style.display = "none";
    document.querySelector(".grupo2").style.display = "none";
    document.getElementById('contenido').style.display = "none";
    uncheckRadio();
    tiempo = 90;
}
scrollToTopBtn.addEventListener("click", scrollToTop);