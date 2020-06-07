const empezar = document.querySelector('.empezar');
const inception = 'Inception';
const theButterFlyEffect = 'The butterfly effect';
const eternalSunshineOfTheSM = 'Eternal sunshine of the spotless mind';
const blueVelvet = 'Blue velvet';
const split = 'Split';

empezar.addEventListener('click', () => {
  
    document.querySelector('.lista').innerHTML =     
    `
      <li id="uno"> ${inception}</li>
      <li id="dos">${theButterFlyEffect}</li>
      <li id="tres">${eternalSunshineOfTheSM}</li>
      <li id="cuatro">${blueVelvet}</li>
      <li id="cinco">${split}</li>
    `;
    const peliUno = document.querySelector('#uno');
    const peliDos = document.querySelector('#dos');
    const peliTres = document.querySelector('#tres');
    const peliCuatro = document.querySelector('#cuatro');
    const peliCinco = document.querySelector('#cinco');

    peliUno.addEventListener('click', first);
    peliDos.addEventListener('click', second);
    peliTres.addEventListener('click', third);
    peliCuatro.addEventListener('click', fourth);
    peliCinco.addEventListener('click', fifth);
});



const first = () => {
    alert(`${inception}`);
};

const second = () => {
  alert(`${theButterFlyEffect}`);
};

const third = () => {
  alert(`${eternalSunshineOfTheSM}`);
};

const fourth = () => {
  alert(`${blueVelvet}`);
};

const fifth = () => {
  alert(`${split}`);
};

