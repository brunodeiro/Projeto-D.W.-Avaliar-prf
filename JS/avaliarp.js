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

var divFiltro = document.createElement("div")
    divFiltro.id="divFiltro"
    divFormEl.appendChild(divFiltro)

var labelFiltro = document.createElement("label")
    labelFiltro.id="labelFiltro"
    labelFiltro.innerText="Filtrar por:"
    divFiltro.appendChild(labelFiltro)

var divBtn = document.createElement("div")
    divBtn.id="divBtn"
    divFiltro.appendChild(divBtn)

var avaliarP = document.createElement("button") //DEIXAR ESTE SELECIONADO
    avaliarP.id="avaliarP"
    avaliarP.innerText="Professor"
    divBtn.appendChild(avaliarP)

var avaliarM = document.createElement("button") //DIRECIONAR PARA A PAGINA AVALIARMATERIA.HTML
    avaliarM.id="avaliarM"
    avaliarM.innerText="Matéria"
    divBtn.appendChild(avaliarM)    

var divNome = document.createElement("div")
    divNome.id="divNome"
    divFormEl.appendChild(divNome)    

var labelNome = document.createElement("label")
    labelNome.id="labelFiltro"
    labelNome.innerText="Nome:"
    divNome.appendChild(labelNome)     

var inputNome =document.createElement("input")
    inputNome.id="inputNome"
    inputNome.setAttribute("type", "text")
    inputNome.setAttribute("placeholder", "Digite o nome do professor")    
    divNome.appendChild(inputNome)

var btnNome = document.createElement("button") //SIMULAR PESQUISA DO NOME (DAVID LINS).. NÃO PRECISA PREENCHER CAMPO, POIS NÃO TEMOS UM BANCO DE DADOS 
    btnNome.id="btnNome"
    // btnNome.html
    btnNome.setAttribute("class", "fa fa-search")
    divNome.appendChild(btnNome)

var imgP=document.createElement("div") //SETAR ATRIBUTO DE IMAGEM PARA QUE AO PESQUISAR (DAVID LINS NO [btnNome]) APAREÇA SUA FOTO
    imgP.id="imgP"
    divFormEl.appendChild(imgP)

var divMateria=document.createElement("div")
    divMateria.id="divMateria"
    divFormEl.appendChild(divMateria)

var labelMateria=document.createElement("label")
    labelMateria.id="labelMateria"
    labelMateria.innerText="Matérias:"
    divMateria.appendChild(labelMateria)

var divBtnMateria=document.createElement("div")    
    divBtnMateria.id="divBtnMateria"
    divMateria.appendChild(divBtnMateria)
//CRIAR FUNÇÃO PARA SELECIONAR APENAS UMA DAS 3 MATERIAS
var labelRadio1=document.createElement("label")
    labelRadio1.id="labelRadio1"
    labelRadio1.innerText="Materia 01"
    divBtnMateria.appendChild(labelRadio1)

var inputRadio1=document.createElement("input")
    inputRadio1.id="inputRadio1"
    inputRadio1.name="materia"
    inputRadio1.setAttribute("type", "radio")
    labelRadio1.appendChild(inputRadio1)

//CLONE2

var labelRadio2=document.createElement("label")
    labelRadio2.id="labelRadio2"
    labelRadio2.innerText="Materia 02"
    divBtnMateria.appendChild(labelRadio2)

var inputRadio2=document.createElement("input")
    inputRadio2.id="inputRadio2"
    inputRadio2.name="materia"
    inputRadio2.setAttribute("type", "radio")
    labelRadio2.appendChild(inputRadio2)

//CLONE3

var labelRadio3=document.createElement("label")
    labelRadio3.id="labelRadio3"
    labelRadio3.innerText="Materia 03"
    divBtnMateria.appendChild(labelRadio3)

var inputRadio3=document.createElement("input")
    inputRadio3.id="inputRadio3"
    inputRadio3.name="materia"
    inputRadio3.setAttribute("type", "radio")
    labelRadio3.appendChild(inputRadio3)

var divComent = document.createElement("div")
divComent.id="divComent"
divFormEl.appendChild(divComent)

var labelComent = document.createElement("label")
labelComent.id="labelComent"
labelComent.innerText="Comentário:"
divComent.appendChild(labelComent)

var labelAnon = document.createElement("label")
labelAnon.id="labelAnon"
labelAnon.innerText="Modo Anônimo "
divComent.appendChild(labelAnon)

var checkboxAnon = document.createElement("input")
checkboxAnon.id="checkboxAnon"
checkboxAnon.setAttribute("type", "checkbox")
labelAnon.appendChild(checkboxAnon)
//INCLUIR ICONE ANON
var iconAnon = document.createElement("img")
iconAnon.id="iconAnon"
iconAnon.src="IMG/anon-logo.png"
iconAnon.setAttribute("width", "20px")
iconAnon.setAttribute("height", "20px")
labelAnon.appendChild(iconAnon)

var txtArea = document.createElement("textarea") // usar resize: none no css para deixar fixo
txtArea.id="txtArea"
txtArea.setAttribute("placeholder", "Escreva aqui")
txtArea.setAttribute("width", "250px")
txtArea.setAttribute("heigth", "150px")
divComent.appendChild(txtArea)

var divNota = document.createElement("div")
divNota.id="divNota"
divFormEl.appendChild(divNota)