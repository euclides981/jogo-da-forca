function verifica() {

    campoVazio.innerHTML = `&nbsp;`

    var chuteUp = chute.value.toUpperCase()

    if (chuteUp == '') {

        campoVazio.innerHTML = 'Digite uma letra'
    }

    else if (palavraSorteada.split('').indexOf(chuteUp) != -1
    
    && letrasCorretas.indexOf(chuteUp) == -1) {

        letrasCorretas.push(chuteUp)

    } 

    else if (letrasCorretas.indexOf(chuteUp) != -1) {

        campoVazio.innerHTML = 'Já acertou essa Letra'

    }

    else if (palavraSorteada.split('').indexOf(chuteUp) == -1

    && letrasErradas.indexOf(chuteUp) == -1) {

        letrasErradas.push(chuteUp)

    } 
    
    else if (letrasErradas.indexOf(chuteUp) != -1) {

        campoVazio.innerHTML = 'Já errou essa Letra'
    }

    if (letrasErradas.length == 5) {

        campoVazio.innerHTML += '<br>Resta uma chance'

    }
    
    mostrarLetrasCertas()

    mostrarLetrasErradas()

    desenharForca() 

    checarJogo()

    chute.value =''
    
    document.getElementById('digita_chute').focus()
}