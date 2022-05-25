
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

    if (palavraSorteada == secreta.innerHTML) {

        document.getElementById('trocaImg').src="img/forcaV.svg"

        document.querySelector('.esconde').style.display = 'none'

        document.querySelector('#resultado').style.display = 'block'

        informa.innerHTML = `Parabéns...<br>Você acertou a palavra secreta:
        <br>${palavraSorteada}<br>0${letrasErradas.length} palpites errados.
        <br>0${letrasCorretas.length} palpites corretos<br>
        Total de tentativas: ${letrasCorretas.length + letrasErradas.length}`
    }
}