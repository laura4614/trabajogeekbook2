const button=document.querySelector('.alert');

const frase=document.querySelector('.texto');

const showAlert=()=> {
   frase.innerHTML='Mi primer click, ¡ole yo y la mujer que me parió!';
}

button.addEventListener('click', showAlert);