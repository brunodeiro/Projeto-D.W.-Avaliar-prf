function login(){
    window.location.href = "index.html"
}

function validar(){
    let user = document.getElementById("inputusuario").value
    let email = document.getElementById("inputemail").value

    if(user!='' && email!=''){
        alert('Solicitação enviada! Verifique seu E-mail.')
        window.location.href = 'index.html'
    }else{
        alert('Usuário ou senha inválidos!')
    }
}
