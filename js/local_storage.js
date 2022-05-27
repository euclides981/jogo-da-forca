var banco = localStorage.getItem('Banco')

var alerta = document.getElementById('alert')

function inserirPalavra() {
    document.getElementById('insere_palavra').focus()
    var insere = document.getElementById('insere_palavra').value

    if (insere == '') {
        alerta.innerHTML = ''
        alerta.innerHTML = `O campo não pode estar vazio`
    }

    else {

        if (palavrasParse == null) {

            if (palavras.indexOf(insere) != -1 || palavrasInseridas.indexOf(insere) != -1) {
                alerta.innerHTML = ''
                alerta.innerHTML = `palavra ${insere} já existe no Jogo`
            }

            else {
                palavrasInseridas.push(insere)
                localStorage.setItem('palavrasInseridas', JSON.stringify(palavrasInseridas))
                banco = 1
                localStorage.setItem('Banco', (banco))
                alerta.innerHTML = ''
                alerta.innerHTML = `palavra ${insere} inserida com sucesso`
            }
        }

        if (palavrasParse != null) {

            if (palavras.indexOf(insere) != -1 || palavrasParse.indexOf(insere) != -1 || palavrasInseridas.indexOf(insere) != -1) {
                alerta.innerHTML = ''
                alerta.innerHTML = `palavra ${insere} já existe no Jogo`
            }

            else {
                palavrasInseridas.push(insere)
                localStorage.setItem('palavrasInseridas', JSON.stringify(palavrasInseridas.concat(palavrasParse)))
                banco = 1
                localStorage.setItem('Banco', (banco))
                alerta.innerHTML = ''
                alerta.innerHTML = `Palavra ${insere} inserida com sucesso`
            }
        }
    }

    document.getElementById('insere_palavra').value = ''
}

function excluiBanco() {

    if (banco == 1) {
        localStorage.removeItem('palavrasInseridas')
        localStorage.setItem('Lista', 0)
        alerta.innerHTML = ''
        alerta.innerHTML = `Suas Palavras Foram Excluídas`
        banco = 0
        palavrasParse = ''
        palavrasInseridas = []
        localStorage.setItem('Banco', JSON.stringify(banco))
    }

    else {
        alerta.innerHTML = ''
        alerta.innerHTML = `Não Existem Palavras Para Excluir`
    }
    document.getElementById('insere_palavra').focus()
}
