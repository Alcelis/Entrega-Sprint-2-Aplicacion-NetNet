const caraosuel = document.querySelector('.contenedor-carousel');
const indicadorIzquierda = document.getElementById('flecha-izquierda');
const indicadorDerecha = document.getElementById('flecha-derecha');

// Indicador Derecha
indicadorDerecha.addEventListener('click', () => {
	caraosuel.scrollLeft += caraosuel.offsetWidth;

});

// Indicador izquierda
indicadorIzquierda.addEventListener('click', () => {
	caraosuel.scrollLeft -= caraosuel.offsetWidth;

});

