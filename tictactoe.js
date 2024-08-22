let fichas = ['X', 'O'];
let jugadorActual = 0;
let fichasColocadas = 0;
let ganador = -1;
let casillas = Array.from(document.getElementsByTagName('button'));
casillas.forEach(casilla => casilla.addEventListener('click', tictactoe)); // Agrega a todos los botones (casillas) la función tictactoe
let resultado = document.getElementById('result');
let botonReiniciar = document.getElementById('restart-button')
botonReiniciar.addEventListener('click', reiniciar);

function tictactoe(event) { // Función principal de la partida
    if (agregarFicha(event.target)) { // Validación de que la ficha se agregó correctamente
        jugadorActual = (jugadorActual + 1) % 2;
        fichasColocadas++;
        validarGanador();
        if ((fichasColocadas == 9) || (ganador != -1)) // Si hay un ganador o hay empate (se colocaron 9 fichas) la partida termina
            juegoTerminado();
        else
            juegaComputadora();
    }
}

function juegaComputadora() {
    let casillasVacias = casillas.filter(casilla => casilla.textContent == ''); // Obtiene todas las casillas vacias (cuyo texto es un string vacío)
    let casilla = casillasVacias[Math.floor(Math.random() * casillasVacias.length)];
    agregarFicha(casilla)
    jugadorActual = (jugadorActual + 1) % 2;
    fichasColocadas++;
    validarGanador();
    if ((fichasColocadas == 9) || (ganador != -1))
        juegoTerminado();
}

function juegoTerminado() {
    casillas.forEach(casilla => casilla.removeEventListener('click', tictactoe));
    if (ganador == -1)
        resultado.innerText = 'Empate';
        
    else
        resultado.innerText = 'Ganó ' + fichas[ganador];
}

function agregarFicha(casilla) { // Si la casilla está vacía, le añade la 'X' y retorna true
    if (casilla.textContent == "") {
        casilla.textContent = fichas[jugadorActual];
        return true;
    } else {
        return false;
    }
}

function validarGanador() { 
    validarFilas();
    if (ganador == -1)
        validarColumnas();
    if (ganador == -1)
        validarCruzado();
}

function validarFilas() {
    for (let i = 0; i <= 6; i += 3) {
        if ((casillas[i].textContent != "") &&
            (casillas[i].textContent == casillas[i + 1].textContent) &&
            (casillas[i].textContent == casillas[i + 2].textContent))
            ganador = fichas.indexOf(casillas[i].textContent);
    }
}

function validarColumnas() {
    for (let i = 0; i < 3; i++) {
        if ((casillas[i].textContent != "") &&
            (casillas[i].textContent == casillas[i + 3].textContent) &&
            (casillas[i].textContent == casillas[i + 6].textContent))
            ganador = fichas.indexOf(casillas[i].textContent);
    }
}

function validarCruzado() {
    if (casillas[4].textContent == "") return;

    else if ((casillas[0].textContent == casillas[4].textContent) &&
             (casillas[0].textContent == casillas[8].textContent))
        ganador = fichas.indexOf(casillas[0].textContent);

    else if ((casillas[2].textContent == casillas[4].textContent) &&
             (casillas[2].textContent == casillas[6].textContent))
        ganador = fichas.indexOf(casillas[2].textContent);
}

function reiniciar() {
    casillas.forEach(casilla => {
        casilla.textContent = "";
        casilla.addEventListener('click', tictactoe);
    });
    jugadorActual = 0;
    fichasColocadas = 0;
    ganador = -1;
    resultado.innerText = '';
}