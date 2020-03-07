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

var logoEl = document.createElement("img")
logoEl.id="logo"
logoEl.src="IMG/sesi-logo-1.png"
logoEl.setAttribute("width", "200px")
logoEl.setAttribute("height", "80px")
divHeaderEl.appendChild(logoEl)

var divUserEl = document.createElement("div")
divUserEl.id="usuario"
divFormEl.appendChild(divUserEl)

var labelUserEl = document.createElement("label")
labelUserEl.id="label_user"
labelUserEl.innerText="Usuário: "
divUserEl.appendChild(labelUserEl)
/*APLICAR TAG BR AQUI PARA SALTAR */
var pularUserEl =document.createElement("br")
pularUserEl.id="pular_user"
divUserEl.appendChild(pularUserEl)

var loginEl = document.createElement("input")
loginEl.id="input_login"
loginEl.setAttribute("type", "Text")
loginEl.setAttribute("placeholder", "Digite seu usuário")
divUserEl.appendChild(loginEl)

var divSenhaEl =document.createElement("div")
divSenhaEl.id="senha"
divFormEl.appendChild(divSenhaEl)

var  labelSenhaEl = document.createElement("label")
labelSenhaEl.id="label_senha"
labelSenhaEl.innerText="Senha: "
divSenhaEl.appendChild(labelSenhaEl)
/*APLICAR TAG BR AQUI PARA SALTAR */
var pularSenhaEl = document.createElement("br")
pularSenhaEl.id="pular_senha"
divSenhaEl.appendChild(pularSenhaEl)

var senhaEl = document.createElement("input")
senhaEl.id="input_senha"
senhaEl.setAttribute("type", "password")
senhaEl.setAttribute("placeholder", "Digite sua senha")
divSenhaEl.appendChild(senhaEl)

var divCheckEl = document.createElement("div")
divCheckEl.id="manter_logado"
divFormEl.appendChild(divCheckEl)



var labelCheckbox = document.createElement("label")
labelCheckbox.id="label_checkbox"
labelCheckbox.innerText="Continuar Logado"
labelCheckbox.setAttribute("onclick", "clicar()")
divCheckEl.appendChild(labelCheckbox)

var checkboxEl = document.createElement("input")
checkboxEl.id="checkbox_logado"
checkboxEl.setAttribute("type", "checkbox")
divCheckEl.appendChild(checkboxEl)

var divEsqueciSenhaEl = document.createElement("div")
divEsqueciSenhaEl.id="esqueci_senha"
divFormEl.appendChild(divEsqueciSenhaEl)

var esqueciSenha = document.createElement("a")
esqueciSenha.id="esqueci_senha_link"
esqueciSenha.setAttribute("href", "recuperar.html")
esqueciSenha.innerText="Esqueceu sua senha ?"
divEsqueciSenhaEl.appendChild(esqueciSenha)

var divBtn = document.createElement("div")
divBtn.id="entrar"
divFormEl.appendChild(divBtn)

var entrarEl = document.createElement("button")
entrarEl.id="botao_entrar"
entrarEl.innerText="Entrar"
entrarEl.setAttribute("onclick", "checarLogin()")
divBtn.appendChild(entrarEl)

function checarLogin(){
    if ((useradmin===input_login.value) && (usersenha===input_senha.value)){
        alert("Olá " + input_login.value + " Seja bem vindo !")
        window.location.href="menu.html"    
        // DIRECIONAR PARA A TELA DE MENU
    }
    else{
        alert("Login ou senha incorreto !")
        window.location.href="index.html"
        //RETORNAR PARA A TELA DE LOGIN
    }
 
 }


 //Exemplo de dados
useradmin='admin'
usersenha='admin'



function clicar(){
    checkboxEl.checked=true
    //CHECKBOX É MARCADO AO CLICAR NO "MANTER LOGADO"
}    