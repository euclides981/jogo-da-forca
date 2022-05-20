document.getElementById('digita_chute').focus()
var palavras = ['montanha', 'money','estrelas', 'familia','estudante', 'javascript', 'passaro','paisagem', 'vida', 'frio', 'palmeiras', 'corinthians']
var erradas = document.querySelector('.letras_erradas')
var esconde = document.querySelector('.esconde').style.display = 'block'
var resultado = document.querySelector('#resultado').style.display = 'none'
var informa = document.getElementById('informa')
var exibe = document.getElementById('exibe_palavra')
var chute = document.getElementById('digita_chute')
var campoVazio = document.getElementById('campoVazio')
var ultimaChance = document.getElementById('ultimaChance')
var letrasErradas = []
var letrasCorretas = []
var letrasInvalidas = []
var palavrasInseridas = []
var palavrasUsuario = localStorage.getItem('palavrasInseridas')
var palavrasParse = JSON.parse(palavrasUsuario)

function inserirPalavra() {
    
    var insere = document.getElementById('insere_palavra').value
    
    if (palavras.indexOf(insere)  != - 1) {
        
        console.log("Já existe essa palavra");  
    }
    else if (insere == '') {
        console.log("Campo Vazio");
    }
    else {

        palavrasInseridas.push(insere)
        
        localStorage.setItem('palavrasInseridas', JSON.stringify(palavrasInseridas))
        
       /*  var corpoTabela = document.querySelector('#tbody')
        
        tbody.innerText = ''
        
        for (var pos = 0; pos < palavras.length; pos++) {
            
        var tr = document.createElement('tr');
        
        corpoTabela.appendChild(tr);
        
        tr.innerHTML = palavras[pos]
        
    } */
    
}
document.getElementById('insere_palavra').value = ''
}

function sorteiaPalavra(){
    if(palavrasParse != null) {
    var sorteio = palavrasParse[Math.floor(Math.random() * palavrasParse.length)]
}
else {
    sorteio = palavras[Math.floor(Math.random() * palavras.length)]
}
return sorteio
}

var palavraSorteada = sorteiaPalavra().toUpperCase()

mostrarLetrasCertas()

function mostrarLetrasCertas() {
    var secreta = document.querySelector('#exibe_palavra')
    secreta.innerHTML = ''
    palavraSorteada.split('').forEach(letra => {
        if(letrasCorretas.includes(letra)) {
            secreta.innerHTML += `${letra}`
        }
        else {
            secreta.innerHTML += ` _ `
        }
    })
}

function mostrarLetrasErradas() {
    
    erradas.innerHTML = `&nbsp;`
    letrasErradas.forEach(letra => {
        erradas.innerHTML += `${letra}`
    })
}

function verifica() {
    campoVazio.innerHTML = `&nbsp;`

    var chuteUp = chute.value.toUpperCase()
    if(chuteUp == '') {
        campoVazio.innerHTML = 'Digite uma letra'
    }else if(palavraSorteada.split('').indexOf(chuteUp) != -1 && letrasCorretas.indexOf(chuteUp) == -1) {
        letrasCorretas.push(chuteUp)
    } else if(palavraSorteada.split('').indexOf(chuteUp) == -1 && letrasErradas.indexOf(chuteUp) == -1) {
        letrasErradas.push(chuteUp)
    }
    if(letrasErradas.length == 5) {
        ultimaChance.innerHTML = 'Resta uma chance'
    }
    
    mostrarLetrasCertas()
    mostrarLetrasErradas()
    desenharForca() 
    checarJogo()
    console.log('CORRETAS: ' + letrasCorretas)
    console.log('ERRADAS: ' + letrasErradas)
    console.log('INVALIDAS: '+ letrasInvalidas)
    chute.value =''
    document.getElementById('digita_chute').focus()
}


function checarJogo() {
    var secreta = document.querySelector('#exibe_palavra')
    
    if(letrasErradas.length == 6 ) {
        document.querySelector('.esconde').style.display = 'none'
        document.querySelector('#resultado').style.display = 'block'
        informa.innerHTML = `Que pena...<br>Não acertou a palavra secreta:
        <br>${palavraSorteada}<br>0${letrasErradas.length} palpites errados
        <br>0${letrasCorretas.length} palpites corretos<br>
        Total de tentativas: ${letrasCorretas.length + letrasErradas.length}`
    }
    if(palavraSorteada == secreta.innerHTML) {
        document.getElementById('trocaImg').src="img/forcaV.svg"
        document.querySelector('.esconde').style.display = 'none'
        document.querySelector('#resultado').style.display = 'block'
        informa.innerHTML = `Parabéns...<br>Você acertou a palavra secreta:
        <br>${palavraSorteada}<br>0${letrasErradas.length} palpites errados.
        <br>0${letrasCorretas.length} palpites corretos<br>
        Total de tentativas: ${letrasCorretas.length + letrasErradas.length}`
    }
}
desenharForca()

function desenharForca() {
    switch(letrasErradas.length){
        case  0:
            document.getElementById('trocaImg').src="img/forca.svg"
            break
            case 1:
            document.getElementById('trocaImg').src="img/forca2.svg"
            break
            case 2:
            document.getElementById('trocaImg').src="img/forca3.svg"
            break
            case 3:
            document.getElementById('trocaImg').src="img/forca4.svg"
            break
            case 4:
            document.getElementById('trocaImg').src="img/forca5.svg"
            break
            case 5:
            document.getElementById('trocaImg').src="img/forca6.svg"
            break
            case 6:
            document.getElementById('trocaImg').src="img/forca7.svg"
            break
            case 6:
            document.getElementById('trocaImg').src="img/forca7.svg"
            break
    }
}

function reiniciarJogo() {
    window.location.reload()
}

/* document.onchange =  appendToStorage; */

$('#digita_chute').keypress(function(e) {
    var keyCode = (e.keyCode ? e.keyCode : e.which); 
    if (!(keyCode > 64 && keyCode < 91 || keyCode > 96 && keyCode < 123)) {
      e.preventDefault();
      alert('Letra Não Permitida')
    }
    });
    