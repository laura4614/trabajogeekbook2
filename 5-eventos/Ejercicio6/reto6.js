'use strict';

const div=document.querySelector('.div');
var letra;

const  changeClass=(event)=> {
    letra=event.keyCode;
   
    
    if ( letra==114){
        div.classList.add('fondor');
        div.classList.remove('fondom');
    }
    else if(letra==109){
        div.classList.add('fondom');
        div.classList.remove('fondor');
    }
}

div.addEventListener('keypress', changeClass);