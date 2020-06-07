const button = document.querySelector('.alert');
const input = document.querySelector('.nombre');
const hola=document.querySelector('.hola');

const showAlert = () => {
    hola.innerHTML='Hola ' + input.value;
}

button.addEventListener('click', showAlert);