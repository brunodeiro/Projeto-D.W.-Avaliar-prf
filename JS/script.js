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
header.appendChild(logoEl)