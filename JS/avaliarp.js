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