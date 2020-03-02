var header = document.getElementById("header")
var menu = document.getElementById("dracula")
var footer = document.getElementById("footer")

var divHeaderEl = document.createElement("div")
divHeaderEl.id="DivHeader"
header.appendChild(divHeaderEl)

var divFooter = document.createElement("div")
divFooter.id="divFooter"
footer.appendChild(divFooter)

var divFormEl = document.createElement("div")
divFormEl.id="divForm"
menu.appendChild(divFormEl)

var formEl = document.createElement("form")
formEl.setAttribute("action", "formulario.php")
formEl.setAttribute("method", "post")
formEl.id="form"
divFormEl.appendChild(formEl)

var logoEl = document.createElement("img")
logoEl.id="logo"
logoEl.src="img/sesi-logo-1.png"
logoEl.setAttribute("width", "200px")
logoEl.setAttribute("height", "80px")
divHeaderEl.appendChild(logoEl)

var divUserEl = document.createElement("div")
divUserEl.id="usuario"
formEl.appendChild(divUserEl)

var labelUserEl = document.createElement("label")
labelUserEl.id="label_user"
labelUserEl.innerText="Usuário: "
divUserEl.appendChild(labelUserEl)

var loginEl = document.createElement("input")
loginEl.id="input_login"
loginEl.setAttribute("type", "Text")
loginEl.setAttribute("placeholder", "Digite seu usuário")
divUserEl.appendChild(loginEl)

var divSenhaEl =document.createElement("div")
divSenhaEl.id="senha"
formEl.appendChild(divSenhaEl)

var  labelSenhaEl = document.createElement("label")
labelSenhaEl.id="label_senha"
labelSenhaEl.innerText="Senha: "
divSenhaEl.appendChild(labelSenhaEl)

var senhaEl = document.createElement("input")
senhaEl.id="input_senha"
senhaEl.setAttribute("type", "password")
senhaEl.setAttribute("placeholder", "Digite sua senha")
divSenhaEl.appendChild(senhaEl)

var divCheckEl = document.createElement("div")
divCheckEl.id="manter_logado"
formEl.appendChild(divCheckEl)

var checkboxEl = document.createElement("input")
checkboxEl.id="checkbox_logado"
checkboxEl.setAttribute("type", "checkbox")
divCheckEl.appendChild(checkboxEl)

var labelCheckbox = document.createElement("label")
labelCheckbox.id="label_checkbox"
labelCheckbox.innerText="Continuar Logado"
divCheckEl.appendChild(labelCheckbox)

var divEsqueciSenhaEl = document.createElement("div")
divEsqueciSenhaEl.id="esqueci_senha"
formEl.appendChild(divEsqueciSenhaEl)

var esqueciSenha = document.createElement("a")
esqueciSenha.id="esqueci_senha_link"
esqueciSenha.setAttribute("href", "recuperar.html")
esqueciSenha.innerText="Esqueceu sua senha ?"
divEsqueciSenhaEl.appendChild(esqueciSenha)

var divBtn = document.createElement("div")
divBtn.id="entrar"
formEl.appendChild(divBtn)

var entrarEl = document.createElement("button")
entrarEl.id="botao_entrar"
entrarEl.innerText="Entrar"
entrarEl.setAttribute("onclick", "checarLogin()")
divBtn.appendChild(entrarEl)

function checarLogin(){
    if ((useradmin===input_login.value) && (usersenha===input_senha.value)){
        alert("Olá " + input_login.value + " Seja bem vindo !")
        // DIRECIONAR PARA A TELA DE MENU
    }
    else{
        alert("Login ou senha incorreto !")
        //RETORNAR PARA A TELA DE LOGIN
    }
 
 }


 //Exemplo de dados
useradmin='admin'
usersenha='admin'