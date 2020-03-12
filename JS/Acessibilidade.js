window.onload = function() {
    let bodyEl = document.querySelector('body');
    let botaoAumentar = document.getElementById('aumentar');
    let botaoDiminuir = document.getElementById('diminuir');

    //Fonte normal do body
    let fontSize = 100;

    let aumentarDiminuir = 15;

    botaoAumentar.addEventListener('click', function(event) {
        if(fontSize<115){
            fontSize += aumentarDiminuir;
            bodyEl.style.fontSize = fontSize + '%';
        }
    });

    botaoDiminuir.addEventListener('click', function(event) {
        if(fontSize>100){
            fontSize -= aumentarDiminuir;
            bodyEl.style.fontSize = fontSize + '%';
        }
    });
}


function escuro(){
    let img1 = document.getElementsByClassName('alto-contraste')
    let bodyEl = document.querySelector('body')
    let titulo1 = document.getElementById('titulo')
    if(img1){
        bodyEl.className = 'fundo1'
        titulo1.style.color = 'white'
    }
}
function branco(){
    let img2 = document.getElementsByClassName('contraste-normal')
    let bodyEl = document.querySelector('body')
    let titulo2 = document.getElementById('titulo')
    if(img2){
        titulo2.style.color = 'black'
        bodyEl.className = 'fundo'
    }
}

   




// function mudarContraste(contraste) {
//     let bodyEl = document.querySelector('body')
//     let titulo = document.getElementById('titulo')
//     if(contraste.value === 'branco'){
//         titulo.style.color = 'white'
//         bodyEl.className = 'fundo1'

//     }else if(contraste.value === 'escuro'){
//         titulo.style.color = 'black'
//         bodyEl.className = 'fundo'
//     }
// }