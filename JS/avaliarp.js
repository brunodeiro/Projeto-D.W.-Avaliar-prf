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

var divImg=document.createElement("div") //SETAR ATRIBUTO DE IMAGEM PARA QUE AO PESQUISAR (DAVID LINS NO [btnNome]) APAREÇA SUA FOTO
    divImg.id="divImg"
    divFormEl.appendChild(divImg)

var imgP = document.createElement("img")
    imgP.id="imgP"
    imgP.src="IMG/avatar-icon.png"
    imgP.setAttribute("width", "70px")
    imgP.setAttribute("height", "85px")
    divImg.appendChild(imgP)


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
    avaliarP.disabled = true
    divBtn.appendChild(avaliarP)

var avaliarM = document.createElement("button") //DIRECIONAR PARA A PAGINA AVALIARM.HTML
    avaliarM.id="avaliarM"
    avaliarM.innerText="Matéria"
    avaliarM.setAttribute("onclick", "materia()")
    divBtn.appendChild(avaliarM)    

var divNome = document.createElement("div")
    divNome.id="divNome"
    divFormEl.appendChild(divNome)    

var labelNome = document.createElement("label")
    labelNome.id="labelNome"
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
    btnNome.setAttribute("onclick", "pesquisar()")
    divNome.appendChild(btnNome)



var divMateria=document.createElement("div")
    divMateria.id="divMateria"
    divFormEl.appendChild(divMateria)

var labelMateria=document.createElement("label")
    labelMateria.id="labelMateria"
    labelMateria.innerText="Matérias:"
    divMateria.appendChild(labelMateria)

var divBtnMateria=document.createElement("div")    
    divBtnMateria.id="divBtnMateria"
    divFormEl.appendChild(divBtnMateria)
//CRIAR FUNÇÃO PARA SELECIONAR APENAS UMA DAS 3 MATERIAS
var labelRadio1=document.createElement("label")
    labelRadio1.id="labelRadio1"
    labelRadio1.innerText="Materia A"
    divBtnMateria.appendChild(labelRadio1)

var inputRadio1=document.createElement("input")
    inputRadio1.id="inputRadio1"
    inputRadio1.name="materia"
    inputRadio1.setAttribute("type", "radio")
    inputRadio1.disabled=true
    labelRadio1.appendChild(inputRadio1)

//CLONE2

var labelRadio2=document.createElement("label")
    labelRadio2.id="labelRadio2"
    labelRadio2.innerText="Materia B"
    divBtnMateria.appendChild(labelRadio2)

var inputRadio2=document.createElement("input")
    inputRadio2.id="inputRadio2"
    inputRadio2.name="materia"
    inputRadio2.setAttribute("type", "radio")
    inputRadio2.disabled=true
    labelRadio2.appendChild(inputRadio2)

//CLONE3

var labelRadio3=document.createElement("label")
    labelRadio3.id="labelRadio3"
    labelRadio3.innerText="Materia C"
    divBtnMateria.appendChild(labelRadio3)

var inputRadio3=document.createElement("input")
    inputRadio3.id="inputRadio3"
    inputRadio3.name="materia"
    inputRadio3.setAttribute("type", "radio")
    inputRadio3.disabled=true
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
    labelAnon.setAttribute("onclick", "atv()")
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

var divTxt=document.createElement("div")
    divTxt.id="divTxt"
    divComent.appendChild(divTxt)

var txtArea = document.createElement("textarea") // usar resize: none no css para deixar fixo
    txtArea.id="txtArea"
    txtArea.setAttribute("placeholder", "Escreva aqui...")
    txtArea.setAttribute("class", "fixo")
    // txtArea.setAttribute("cols", "num")
    // txtArea.setAttribute("rows", "num")
    // txtArea.setAttribute("width", "500px")
    // txtArea.setAttribute("heigth", "200px")
    divTxt.appendChild(txtArea)

var divNota = document.createElement("div")
    divNota.id="divNota"
    divFormEl.appendChild(divNota)

var labelNota = document.createElement("label")
    labelNota.id="labelNota"
    labelNota.innerText="Dê a sua nota !"
    divNota.appendChild(labelNota)

var valor = 0

var divStar =document.createElement("div")
    divStar.id="divStar"
    divNota.appendChild(divStar)

var imgStar1=document.createElement("img")
    imgStar1.id="imgStar1"
    imgStar1.src="IMG/star1.png"
    imgStar1.setAttribute("onclick", "avaliar1()")
    divStar.appendChild(imgStar1)

var star1 = document.createElement("input")
    star1.id="star1"
    star1.setAttribute("type", "checkbox")
    imgStar1.appendChild(star1)

var imgStar2=document.createElement("img")
    imgStar2.id="imgStar2"
    imgStar2.src="IMG/star2.png"
    imgStar2.setAttribute("onclick", "avaliar2()")
    divStar.appendChild(imgStar2)

var star2 = document.createElement("input")
    star2.id="star2"
    star2.setAttribute("type", "checkbox")
    imgStar2.appendChild(star2)

var imgStar3=document.createElement("img")
    imgStar3.id="imgStar3"
    imgStar3.src="IMG/star3.png"
    imgStar3.setAttribute("onclick", "avaliar3()")
    divStar.appendChild(imgStar3)

var star3 = document.createElement("input")
    star3.id="star3"
    star3.setAttribute("type", "checkbox")
    imgStar3.appendChild(star3)

var imgStar4=document.createElement("img")
    imgStar4.id="imgStar4"
    imgStar4.src="IMG/star4.png"
    imgStar4.setAttribute("onclick", "avaliar4()")
    divStar.appendChild(imgStar4)

var star4 = document.createElement("input")
    star4.id="star4"
    star4.setAttribute("type", "checkbox")
    imgStar4.appendChild(star4)

var imgStar5=document.createElement("img")
    imgStar5.id="imgStar5"
    imgStar5.src="IMG/star5.png"
    imgStar5.setAttribute("onclick", "avaliar5()")
    divStar.appendChild(imgStar5)

var star5 = document.createElement("input")
    star5.id="star5"
    star5.setAttribute("type", "checkbox")
    imgStar5.appendChild(star5)

var divBts = document.createElement("div")
    divBts.id="divBts"
    divFormEl.appendChild(divBts)

var cancelarEl = document.createElement("button")
    cancelarEl.id="cancelarEl"
    cancelarEl.innerText="Cancelar"
    cancelarEl.setAttribute("onclick", "cancelar()")
    divBts.appendChild(cancelarEl)

var enviarEl = document.createElement("button")
    enviarEl.id="enviarEl"
    enviarEl.innerText="Enviar"
    enviarEl.setAttribute("onclick", "enviar()")
    divBts.appendChild(enviarEl)

function materia(){
    window.location.href="avaliarm.html" 
}

function pesquisar(){
    if (inputNome.value){
        alert("Simulação de busca de Professor!")
        inputRadio1.disabled=false
        inputRadio2.disabled=false
        inputRadio3.disabled=false
        imgP.src="IMG/avatar-professor.png"
        divMateria.style.color="black"
        labelRadio1.id="labelRadio11"
        inputRadio1.setAttribute("onclick", "opc()")
        inputRadio2.setAttribute("onclick", "opc()")
        inputRadio3.setAttribute("onclick", "opc()")
        labelRadio2.id="labelRadio21"
        labelRadio3.id="labelRadio31"
        //inputNome.value="" NÃO PRECISA LIMPAR, POIS O NOME DEVE CONTINUAR NO INMPUT PARA QUE O USER TENHA NOÇÃO DO QUE DIGITOU
    }
    else{
        alert("Preencha todos os campos!")
    }
}

function cancelar(){
    window.location.href="menu.html"
}

var materias=document.createElement("p")
    divFormEl.appendChild(materias)

function opc(){
    if(inputRadio1.checked==true){
        materias="Materia A"
        labelRadio1.style.backgroundColor="rgb(0, 89, 255)"
        labelRadio1.style.color="white"
        labelRadio1.style.boxShadow="2px 2px rgb(60, 30, 194)"
        labelRadio2.style.backgroundColor="rgba(100, 148, 237, 0.616)"
        labelRadio2.style.color="black"
        labelRadio2.style.boxShadow="unset"
        labelRadio3.style.backgroundColor="rgba(100, 148, 237, 0.616)"
        labelRadio3.style.color="black"
        labelRadio3.style.boxShadow="unset"
        // alert("A")//Verificador de teste
    }
    if(inputRadio2.checked==true){
        materias="Materia B"
        labelRadio2.style.backgroundColor="rgb(0, 89, 255)"
        labelRadio2.style.color="white"
        labelRadio2.style.boxShadow="2px 2px rgb(60, 30, 194)"
        labelRadio1.style.backgroundColor="rgba(100, 148, 237, 0.616)"
        labelRadio1.style.color="black"
        labelRadio1.style.boxShadow="unset"
        labelRadio3.style.backgroundColor="rgba(100, 148, 237, 0.616)"
        labelRadio3.style.color="black"
        labelRadio3.style.boxShadow="unset"
        // alert("B")//Verificador de teste
    }
    if(inputRadio3.checked==true){
        materias="Materia C"
        labelRadio3.style.backgroundColor="rgb(0, 89, 255)"
        labelRadio3.style.color="white"
        labelRadio3.style.boxShadow="2px 2px rgb(60, 30, 194)"
        labelRadio2.style.backgroundColor="rgba(100, 148, 237, 0.616)"
        labelRadio2.style.color="black"
        labelRadio2.style.boxShadow="unset"
        labelRadio1.style.backgroundColor="rgba(100, 148, 237, 0.616)"
        labelRadio1.style.color="black"
        labelRadio1.style.boxShadow="unset"
        // alert("C")//Verificador de teste
    }
    
}

function enviar(){
    if(inputNome.value && txtArea.value && valor>=1 && (inputRadio1.checked || inputRadio2.checked || inputRadio3.checked) ){ 
        var confirmar = confirm("Deseja enviar sua avaliação ?")
        if(confirmar==true){
            window.location.href="comentarios.html"
        }
    }
    else{
        alert("Preencha todos os campos!")
    }
}

function atv(){
    if(checkboxAnon.checked==true){
        labelAnon.style.color="rgb(44, 14, 175)"
        labelAnon.style.fontWeight="bold"
    }
    else{
        labelAnon.style.color="black"
        labelAnon.style.fontWeight="normal"
    }
}

function avaliar1(){
    valor=1
    if(valor==1){
        star1.checked=true
        star2.checked=false
        star3.checked=false
        star4.checked=false
        star5.checked=false
        imgStar1.src="IMG/star0.png"
        imgStar2.src="IMG/star2.png"
        imgStar3.src="IMG/star3.png"
        imgStar4.src="IMG/star4.png"
        imgStar5.src="IMG/star5.png"
    }
}

function avaliar2(){
    valor=2
    if(valor==2){
        star1.checked=true
        star2.checked=true
        star3.checked=false
        star4.checked=false
        star5.checked=false
        imgStar1.src="IMG/star0.png"
        imgStar2.src="IMG/star0.png"
        imgStar3.src="IMG/star3.png"
        imgStar4.src="IMG/star4.png"
        imgStar5.src="IMG/star5.png"
    }
}

function avaliar3(){
    valor=3
    if(valor==3){
        star1.checked=true
        star2.checked=true
        star3.checked=true
        star4.checked=false
        star5.checked=false
        imgStar1.src="IMG/star0.png"
        imgStar2.src="IMG/star0.png"
        imgStar3.src="IMG/star0.png"
        imgStar4.src="IMG/star4.png"
        imgStar5.src="IMG/star5.png"
    }
}

function avaliar4(){
    valor=4
    if(valor==4){
        star1.checked=true
        star2.checked=true
        star3.checked=true
        star4.checked=true
        star5.checked=false
        imgStar1.src="IMG/star0.png"
        imgStar2.src="IMG/star0.png"
        imgStar3.src="IMG/star0.png"
        imgStar4.src="IMG/star0.png"
        imgStar5.src="IMG/star5.png"
    }
}

function avaliar5(){
    valor=5
    if(valor==5){
        star1.checked=true
        star2.checked=true
        star3.checked=true
        star4.checked=true
        star5.checked=true
        imgStar1.src="IMG/star0.png"
        imgStar2.src="IMG/star0.png"
        imgStar3.src="IMG/star0.png"
        imgStar4.src="IMG/star0.png"
        imgStar5.src="IMG/star0.png"
    }
}