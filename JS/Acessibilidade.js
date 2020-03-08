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
    if(contraste.value == 'Branco'){
        bodyEl.className = 'fundo1'
    }
    if(contraste.value == 'Marron'){
        bodyEl.className = 'fundo'
    }
}