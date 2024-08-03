
let numeroAzar = Math.floor(Math.random()*100) + 1;

let numeroEntrada = document.getElementById('numeroEntrada');
let mensaje = document.getElementById('mensaje');
let intentos = document.getElementById('intentos');
let intento = 0;

// esta accion va ha ejecutar cuando se toque el boton ejecutar

function checarResult() {
    intento ++;
    intentos.textContent = intento
    let numeroIngresado = parseInt(numeroEntrada.value);

    if (numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)) {
        mensaje.textContent = 'Por favor ingrese un numero entre 1 y 100';
        return;
    }

    if (numeroIngresado === numeroAzar) {
        mensaje.textContent = 'Felicidades has acertado el numero!!';
        mensaje.style.color = 'green';
        numeroEntrada.disabled = true;
        
    } else if (numeroIngresado < numeroAzar) {
        mensaje.textContent = '¡Mas alto! el numero es mayor al que elijiste';
        mensaje.style.color = 'red';
    } else {
        mensaje.textContent = '¡Mas bajo! el numero es menor al que elijiste';
        mensaje.style.color = 'red';
    }
}