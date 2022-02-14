let peliculaGuardada = localStorage.getItem('titulo');
let referencia = document.getElementById('referencia');


if(peliculaGuardada == 'Bob Esponja'){
    referencia.src = 'image/2.jpg';
}else if(peliculaGuardada == 'X-Men'){
    referencia.src = 'image/3.jpg';
}else if(peliculaGuardada == 'Matrix Recargado'){
    referencia.src ='image/1.jpg';
}


document.getElementById("movie-serie").innerHTML = peliculaGuardada;
console.log(peliculaGuardada);


