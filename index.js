const backgrounds = ['url(sources/backgrounds/2.png)', 'url(sources/backgrounds/3.png)', 'url(sources/backgrounds/1.png)']; // Ubicaciones de los fondos de pantalla
let index = 0;

function changeBackground() {
    document.getElementById('carousel').style.backgroundImage = backgrounds[index]; // Cuando se ejecuta cambian el fondo
    index = (index + 1) % backgrounds.length; // Incrementa el índice en 1, manteniendolo entre 0 y el tamaño del array
}

setInterval(changeBackground, 5000); // Ejecuta la función cada 5 segundos


window.addEventListener('scroll', transparentHeader); // Ejecuta la función cuando el usuario scrollea

function transparentHeader() {
    let header = document.getElementsByTagName('header')[0];
    if (window.scrollY > 0) { // Evalua si el usuario se encuentra en el tope de la página
        header.style.background = 'rgb(39, 39, 39)'; // En caso de que no sea así, mantiene oscuro el fondo del header
        header.style.boxShadow = '0 0 3px black';
    } else {
        header.style.background = 'transparent'; // En caso afirmativo lo hace transparente
        header.style.boxShadow = 'none';
    }
}