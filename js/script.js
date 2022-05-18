var palavras = ['montanha', 'estrelas', 'estudante', 'javascript', 'passaro','paisagem']
var palavrasInseridas = []
var exibe = document.getElementById('exibe_palavra')
var chute = document.getElementById('digita_chute')
document.getElementById('digita_chute').focus()
var letrasErradas = []
var letrasCorretas = []
var letrasInvalidas = []
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
    var erradas = document.querySelector('.letras_erradas')
    erradas.innerHTML = ``
    letrasErradas.forEach(letra => {
        erradas.innerHTML += `${letra}`
    })
}

function verifica() {
    if(chute.value == '') {
        console.log('Digiteuma letra para Jogar')
        letrasInvalidas.push(chute.value)
    }
    else if (palavraSorteada.split('').indexOf(chute.value) != -1) {
        letrasCorretas.push(chute.value)
    }
    else {
        letrasErradas.push(chute.value)
    }
    mostrarLetrasCertas()
    mostrarLetrasErradas()
    checarJogo()       
    chute.value =''
    document.getElementById('digita_chute').focus()
}

function checarJogo() {
    var secreta = document.querySelector('#exibe_palavra')

    if(letrasErradas.length == 6 ) {
    alert('Fim de Jogo! Você Perdeu.')
}
if(palavraSorteada === secreta.innerHTML) {
    alert('Parabéns! Você Ganhou.')
}
}
function reiniciarJogo() {
    window.location.reload()
}

/* document.onchange =  appendToStorage; */