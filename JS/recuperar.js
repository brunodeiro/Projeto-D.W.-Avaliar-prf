function login(){
    window.location.href = "index.html"
}
function validar(){
    let inputUser = document.getElementById('inputusuario')
    let inputEmail = document.getElementById('inputemail')

    if(inputUser.value && inputEmail.value){
        alert("Solicitação enviada! Verifique seu E-mail.")
        window.location.href = "index.html"
    }else{
        alert('Insira o usuário e E-mail nos campos abaixo!')
    }
}



