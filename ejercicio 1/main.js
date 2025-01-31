window.onload = () => {
    //Genero un main donde acumular todo
    const main = document.createElement('main');
    //Genero un botón que al pulsarlo me genere dos contenedores con la imagen y los botones
    const btnInicial = document.createElement('button');
    btnInicial.textContent = "Generar primera imagen";
    btnInicial.id = 'btnInicial';

    //Genero los divs tanto de la imagen como de los botones antes de entrar al evento para darles contenido al hacer click
    const divImg = document.createElement('div');
    divImg.className = 'escudos';
    const divBtn = document.createElement('div');
    divBtn.className = 'botones';
    //Realizo un contador para que, al pulsar en el boton, este contador aumente y la img cambie
    let contador = 1;
    //Declaro img antes del evento para poder usarlo a posteriori en siguientes eventos
    let img;
    btnInicial.addEventListener('click', () => {
        //Elimino el botón inicial
        btnInicial.remove();
        //Añadimos contenido al div de la imagen 
        img = document.createElement('img');
        img.src = 'img/img' + contador + '.jpg';
        //Añado los contenidos al main y a sus divs correspondientes
        divBtn.append(btnIzq, btnDer);
        divImg.append(img);

    })
    //Añadimos contenido al div de los botones 
    const btnIzq = document.createElement('button');
    btnIzq.textContent = '<';
    const btnDer = document.createElement('button');
    btnDer.textContent = '>';

    btnDer.addEventListener('click', sigImagen);
    btnIzq.addEventListener('click', antImagen);

    //Evento cuando pulso la tecla flecha derecha 
    //IMPORTANTE -> tenemos que realizar el evento sobre el objeto WINDOW, para quwe de esta manera no tener que hacer foco en la tecla, sino capturar todas las teclas de manera global 
    //Hacemos lo mismo con el btn izquierdo
    btnIzq.addEventListener('click', antImagen);
    window.addEventListener('keydown', (evento) => {
        if (evento.key === 'ArrowLeft') {
            antImagen();
        } else if (evento.key === 'ArrowRight') {
            sigImagen();
        }
    })


    main.append(btnInicial, divImg, divBtn);
    //Añado el botón inicial para que aparezca
    main.append(btnInicial)
    document.body.append(main)

    //genero una funcion para cuando quiera poner una imagen superior o anterior
    function sigImagen() {
        if (contador == 5) {
            contador = 5;
        } else {
            contador++;
        }
        img.src = 'img/img' + contador + '.jpg';
    }
    function antImagen() {
        if (contador == 1) {
            contador = 1;
        } else contador--;

        img.src = 'img/img' + contador + '.jpg';
    }
}