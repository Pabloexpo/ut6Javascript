import { quiniela } from './partidos.js';

//Generamos main 
const main = document.createElement('main');

//Generamos un div donde incluir el botón de comprobar y la caja de números a introducir
const divInput = document.createElement('div');
divInput.className = 'divInput';

//le añadimos el btn y el input
const btnComprobar = document.createElement('button');
btnComprobar.textContent = 'COMPROBAR';

let input = document.createElement('input');
input.type = 'text';
input.id = 'comprobacion';
divInput.append(btnComprobar, input);

main.append(divInput);
//Hacemos div para el btn de limpiar y las casillas
const divCasillas = document.createElement('div');
divCasillas.className = 'divCasillas';

//Generamos el contenido
const btnLimpiar = document.createElement('button');
btnLimpiar.textContent = 'LIMPIAR';
btnLimpiar.id = 'btnLimpiar'

divCasillas.append(btnLimpiar);
main.append(divCasillas);

//haremos un bucle de 14 iteracciones para realizar las casillas, generando la tabla también
const tabla = document.createElement('table');
tabla.border = '2';
const divQuiniela = document.createElement('div');
divQuiniela.className = 'divQuiniela';

//Elaboramos una variable donde introducir los valores de la quiniela
let resultado = '';

for (let partido of quiniela) {
    //Generamos una tr que agrupe a las 3 posibilidades
    const tr = document.createElement('tr');

    const tdPartido = document.createElement('td');
    tdPartido.append(partido.equipo1 + ' - ' + partido.equipo2)

    let uno = document.createElement('h3');
    uno.value = '1';
    uno.textContent = '1';

    //Metemos todo lo relacionado con 1 en una td, lo haremos con las otras dos casillas también
    const tdUno = document.createElement('td');
    tdUno.append(uno);

    let dos = document.createElement('h3');
    dos.value = 'X';
    dos.textContent = 'X'

    const tdDos = document.createElement('td');
    tdDos.append(dos);

    let tres = document.createElement('h3');
    tres.value = '2'
    tres.textContent = '2'

    const tdTres = document.createElement('td');
    tdTres.append(tres);
    tr.append(tdPartido, tdUno, tdDos, tdTres);
    tabla.append(tr)

    //Empezamos a realizar los eventos
    uno.addEventListener('click', (e) => {
        e.target.classList.add('seleccionada')
        dos.classList.remove('seleccionada')
        tres.classList.remove('seleccionada')
    })

    dos.addEventListener('click', (e) => {
        e.target.classList.add('seleccionada')
        uno.classList.remove('seleccionada')
        tres.classList.remove('seleccionada')
        //resultado+=dos.value;
    })

    tres.addEventListener('click', (e) => {
        uno.classList.remove('seleccionada')
        dos.classList.remove('seleccionada')
        e.target.classList.add('seleccionada')
        //resultado+=tres.value;
    })
}

divCasillas.append(divQuiniela);
main.append(tabla)
document.body.append(main);

btnComprobar.addEventListener('click', fcomprobar)

//Pasamos al botón de limpiar
btnLimpiar.addEventListener('click', flimpiar)

function fcomprobar (){
    //Recogemos el valor de las casillas pulsadas
    const casillasPulsadas = document.querySelectorAll('.seleccionada');
    for (let casilla of casillasPulsadas) {
        resultado += casilla.textContent;
        console.log(resultado);
    }
    //Recogemos el valor del input
    let inputCombinacion = document.querySelector('#comprobacion');
    let combinacion = inputCombinacion.value
    console.log(combinacion);
    console.log(quiniela.length)
    //Elaboramos la regex para comprobar si se ha introducido una cadena de 14 carácteres
    let regex = /([1-2]|[X-x]){14}/;
    if (!regex.test(combinacion)) {
        alert('Has introducido una combinación no acorde a los estándares de los resultados de una quiniela');
        inputCombinacion.value = '';
        return;
    }
    // if (combinacion.length != quiniela.length) {

    // }
    //console.log(combinacion.length)
    const divResultado = document.createElement('div');
    divResultado.className = 'divResultado';
    const h1 = document.createElement('h1');
    //Realizamos la comprobacion
    if (combinacion == resultado) {
        h1.textContent = '¡Enhorabuena!'
    } else h1.textContent = 'No tienes la combinación ganadora'
    divResultado.append(h1);
    main.append(divResultado);
    inputCombinacion.value = '';
}

function flimpiar (){
        //Recogemos todos los resultados que han sido seleccionados y le quitamos la clase
        const seleccionada = document.querySelectorAll('.seleccionada');
        for (let clase of seleccionada) {
            clase.classList.remove('seleccionada');
        }
        //Además, reseteamos el resultado
        resultado = '';
        //Recogemos el input y también lo limpiamos
        const comprobacion = document.querySelector('#comprobacion');
        comprobacion.value = '';
    
        //Si tuvieramos elementos en el div de resultado, también limpiamos
        const rdo = document.querySelector('.divResultado');
        if (rdo) {
            rdo.remove();
        }
}
