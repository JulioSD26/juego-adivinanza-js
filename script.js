// El juego selecciona un número al azar entre 1 y 100
let numeroAzar = Math.floor(Math.random() * 100) + 1;

let numeroEntrada = document.getElementById("numeroEntrada");

let mensaje = document.getElementById("mensaje");


// esta función va a ejecutar cuando se toque el boton
function revisarResultado() {
    let numeroIngresado = parseInt(numeroEntrada.value);

    if(numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)){
        mensaje.textContent = "Por favor ingrese un número entre 1 y 100";
        mensaje.style.color = "red";
        return;
    }

    if(numeroIngresado === numeroAzar){
        mensaje.textContent = "¡Felicidades! Has adivinado el número";
        mensaje.style.color = "green";
        numeroEntrada.disabled = true;
    } else if(numeroIngresado > numeroAzar){
        mensaje.textContent = "El número es menor";
        mensaje.style.color = "red";
    } else {
        mensaje.textContent = "El número es mayor";
        mensaje.style.color = "red";
    }
}