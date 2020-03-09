window.onload = function() {
    let bodyEl = document.querySelector('body');
    let botaoAumentar = document.getElementById('aumentar');
    let botaoDiminuir = document.getElementById('diminuir');

    //Fonte notmal do body
    let fontSize = 100;

    let aumentarDiminuir = 10;

    botaoAumentar.addEventListener('click', function(event) {
        fontSize += aumentarDiminuir;
        bodyEl.style.fontSize = fontSize + '%';
    });

    botaoDiminuir.addEventListener('click', function(event) {
        fontSize -= aumentarDiminuir;
        bodyEl.style.fontSize = fontSize + '%';
    });
}


function mudarContraste(contraste) {
    let bodyEl = document.querySelector('body')
    let titulo = document.getElementById('titulo')
    if(contraste.value == 'Branco'){
        titulo.style.color = 'white'
        bodyEl.className = 'fundo1'

    }
    if(contraste.value == 'Preto'){
        titulo.style.color = 'black'
        bodyEl.className = 'fundo'
    }
}