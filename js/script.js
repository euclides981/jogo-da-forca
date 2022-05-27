document.getElementById('digita_chute').focus()
document.getElementById('inserir_palavra').style.display = 'none'
var palavras = ['javascript','tecnologia','futebol','ovo','forca','computador',
'eua','dinheiro','vida','natureza','jesus','animais','professor','escola',
'camelo','brasil','inverno','mitologia']
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
var palavrasUsuario = []
var palavrasUsuario = localStorage.getItem('palavrasInseridas')
var palavrasParse = JSON.parse(palavrasUsuario)
var retornoEscolha = localStorage.getItem('Lista')

if (retornoEscolha == 2) {
    misturado = palavrasParse.concat(palavras)
}

function sorteiaPalavra() {
    if (retornoEscolha == 1) {
        var sorteio = palavrasParse[Math.floor(Math.random() * palavrasParse.length)]
    }

    else if (retornoEscolha == 2) {
        sorteio = misturado[Math.floor(Math.random() * misturado.length)]
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

    if (letrasErradas.length) {
        erradas.innerHTML = `Letras Erradas:<br>`
        letrasErradas.forEach(letra => {
            erradas.innerHTML += `${letra}`
        })
    }
}