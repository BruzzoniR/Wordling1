const jugador1 = [];
const jugador2 = [];
let palabra1 = "";
let palabra2 = "";
let palabraBase = "";
var intento = 0;
var comprobador = false;
teclado = document.getElementById('teclado');
textoResultado = document.getElementById("textoResultado");
textoResultado.style.visibility="hidden";

function definirPalabra(){
word = prompt("Ingrese su palabra para que el otro jugador adivine:");
while (word.length!==5){
    alert("Su palabra debe tener exáctamente 5 letras. Pruebe de nuevo.")
    word = prompt("Ingrese su palabra para que el otro jugador adivine:");
}
return word;
}

palabra1 = definirPalabra();


teclado.onclick = escribirIntento;
let letra = 0;
function escribirIntento(evento) {
    let destino = "#intento" + (intento + 1) + " span[class~='" + (letra + 1) + "']";
    while (comprobador) {
        alert ("Reinicie para volver a jugar.");
        break
    }
    if (evento.target.id != "") {
        if (letra < 5 && evento.target.id != "enter" && evento.target.id != "borrar" && evento.target.id != "teclado") {
            document.querySelector(destino).innerHTML = evento.target.id.toUpperCase();
            palabraBase = palabraBase + evento.target.id;
            letra++;
        } else {
            if (evento.target.id == "enter") {
                if (letra==5){
                    probarIntento();
                    if (comprobador){
                        textoResultado.innerHTML = "GANASTE";
                        textoResultado.style.visibility="visible";
                        textoResultado.className="animate__animated animate__heartBeat";
                        
                    }
                    letra = 0;
                    intento++;
                    palabraBase = "";
                } else {
                    alert ("Ud. aún no ha completado su palabra. Ingrese las 5 letras antes de presionar ENTER.");
                }

            } else{
                if (evento.target.id == "borrar" && letra > 0) {
                    letra--;
                    palabraBase = palabraBase.slice(0,-1);
                    destino = "#intento" + (intento + 1) + " span[class~='" + (letra + 1) + "']";
                    document.querySelector(destino).innerHTML = "-";
                } else {
                    if (evento.target.id != "teclado"){
                        alert("Ha completado la palabra, oprima ENTER para enviar o BORRAR para modificarla.");
                    }
                }
            }

        }
    }

}


function probarIntento(){
    let contador = 0;
    for (i=0;i<palabra1.length;i++){
        let destino = "#intento" + (intento + 1) + " span[class~='" + (i + 1) + "']";
        let pastillaCambio = document.querySelector(destino);
        if (palabra1.charAt(i)==palabraBase.charAt(i)){
            pastillaCambio.className = "badge text-bg-success "+ (i+1);
            contador++;
 
        } else {
            for (j=0;j<palabra1.length;j++){
                if (palabra1.charAt(j)==palabraBase.charAt(i)){
                    pastillaCambio.className = "badge text-bg-warning "+ (i+1);
                    break;
                } else {
                    pastillaCambio.className = "badge text-bg-danger "+ (i+1);
                }
            }
        }
        
        if (contador==5){
            comprobador = true;
            break;
        }
    }

}


