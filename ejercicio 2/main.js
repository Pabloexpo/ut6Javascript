
//Generamos el main 
const main = document.createElement('main');
//Generamos el contenedor con toda la pasarela de pago
const pasarela = document.createElement('div');
pasarela.className = 'pasarela';
const div = document.createElement('div'); //Generamos un div que es donde contendremos si la 
// pwd es correcta o no  
div.className = 'resultado';

//Ahora, realizamos la caja numérica
const cajaDiv = document.createElement('div');
const caja = document.createElement('input');
caja.disabled = true; //Para no insertar ningún número a mano
caja.type = 'password' //Formato contraseña 
//caja.value=9999
cajaDiv.append(caja)
pasarela.append(cajaDiv)

//Realizo 3 filas para almacenar los números 
let arrayNumeros = [];
let numero = 0;
let combinacion;
for (let i = 0; i < 3; i++) {
    const filaNum = document.createElement('div');
    filaNum.className = 'filaNum';

    let botonesGenerados = 0;
    while (botonesGenerados < 3) {
        let numero = Math.floor(Math.random() * (10 - 1) + 1);
        if (!arrayNumeros.includes(numero)) {
            //Si el número que se ha generado en el random no está incluido en el array, continuamos generando contenido
            arrayNumeros.push(numero);
            // Creamos el botón con el número
            const btnNum = document.createElement('button');
            btnNum.value = numero;
            btnNum.textContent = numero;
            filaNum.append(btnNum);
            botonesGenerados++;
            //Genero un evento dentro del propio bucle para ver el valor del boton que he pulsado, y lo añado a una variable
            btnNum.addEventListener('click', (e) => {
                numero = btnNum.value;
                if (caja.value.length >= 4) {
                    alert('Has llegado al máximo de caracteres')
                    div.textContent = ''
                } else {
                    caja.value += e.target.value;
                }
            })
        }
    }
    pasarela.append(filaNum);
}
//Pasamos a realizar los botones C y validar 
const filaUltima = document.createElement('div');
filaUltima.className = 'filaUltima';
const btnC = document.createElement('button');
btnC.textContent = 'C';
btnC.id = 'c'
//Evento a disparar cuando pulsamos C
btnC.addEventListener('click', flimpiar);

const btnVal = document.createElement('button');
btnVal.textContent = "VALIDAR";
btnVal.id = 'validar';

//Realizamos el evento cuando pulsamos el botón de validar  
btnVal.addEventListener('click', fvalidacion);

filaUltima.append(btnC, btnVal);
pasarela.append(filaUltima)
console.log(pasarela);

main.append(pasarela, div);
document.body.append(main);


//FUNCIONES
function fvalidacion() {
    const pwd = 9999; //contraseña a descifrar
    if (pwd == caja.value) {
        //Si la pwd es correcta, pues añadimos nuevo contenido al html 
        div.textContent = 'COMBINACIÓN CORRECTA'
        caja.value = ''
    } else {
        div.textContent = 'COMBINACIÓN INCORRECTA, INTÉNTALO DE NUEVO'
        caja.value = ''
    }
}
function flimpiar (){
    //Recogemos el valor de la caja y le quitamos el último caracter 
    let nuevoValor = caja.value.slice(0, -1);
    caja.value = nuevoValor;
    div.textContent=''; 
}
