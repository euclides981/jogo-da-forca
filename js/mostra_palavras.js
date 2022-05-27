var corpoTabela = document.querySelector('#mostra_secretas')

document.getElementById('espiar').style.display = 'none'

function popup() {
    document.getElementById('inserir_palavra').style.display = 'flex'
    document.getElementById('insere_palavra').focus()
}

function fechaPopup() {
    document.getElementById('inserir_palavra').style.display = 'none'
    document.getElementById('espiar').style.display = 'none'
    document.getElementById('digita_chute').focus()
    corpoTabela.innerText = ''
}

function mostraPalavras() {
    document.getElementById('espiar').style.display = 'flex'
}

function mostraPalavrasDoSistema() {
    corpoTabela.style.display = 'gryd'
    corpoTabela.innerText = ''
    for (var pos = 0; pos < palavras.length; pos++) {
        corpoTabela.innerHTML += `${palavras[pos]}\n`
    }
}

function mostraMinhasPalavras() {
    corpoTabela.style.display = 'gryd'
    corpoTabela.innerText = ''

    if (palavrasParse == null) {
        for (var pos = 0; pos < palavrasInseridas.length; pos++) {
            corpoTabela.innerHTML += `${palavrasInseridas[pos]}\n`
        }
    }

    else {
        for (var pos = 0; pos < palavrasParse.concat(palavrasInseridas).length; pos++) {
            corpoTabela.innerHTML += `${palavrasParse.concat(palavrasInseridas)[pos]}\n`
        }
    }

    if (corpoTabela.value == '') {
        corpoTabela.innerHTML = `Você ainda não cadastrou palavras`
    }
}

function mostraTodasPalavras() {
    corpoTabela.style.display = 'gryd'
    corpoTabela.innerText = ''

    if (palavrasParse == null && palavrasInseridas == '') {
        for (var pos = 0; pos < palavras.length; pos++) {
            corpoTabela.innerHTML += `${palavras[pos]}\n`
        }
    }

    else if (palavrasParse != null && palavrasInseridas != '') {
        for (var pos = 0; pos < palavras.concat(palavrasParse, palavrasInseridas).length; pos++) {
            corpoTabela.innerHTML += `${palavras.concat(palavrasParse, palavrasInseridas)[pos]}\n`
        }
    }

    else if (palavrasParse == null && palavrasInseridas != '') {
        for (var pos = 0; pos < palavras.concat(palavrasInseridas).length; pos++) {
            corpoTabela.innerHTML += `${palavras.concat(palavrasInseridas)[pos]}\n`
        }
    }
    
    else {
        for (var pos = 0; pos < palavras.concat(palavrasParse).length; pos++) {
            corpoTabela.innerHTML += `${palavras.concat(palavrasParse)[pos]}\n`
        }
    }
}