document.getElementById('agregar').addEventListener('click', function (evento){
    evento.preventDefault();

 let peliculaLista= document.querySelector('h1').textContent;

localStorage.setItem('titulo', peliculaLista);
console.log('titulo', peliculaLista);
alert('Por favor dirigete a Mi Lista');

});

