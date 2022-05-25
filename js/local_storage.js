
var banco = localStorage.getItem('Banco')

function inserirPalavra() {

    document.getElementById('insere_palavra').focus()

    var insere = document.getElementById('insere_palavra').value

    if (insere == '') {

        alert(`Digite uma Palavra Para Inserir \nO campo não pode estar vazio`)
    }

    else {

        if (palavrasParse == null) {

            if (palavras.indexOf(insere) != -1 || palavrasInseridas.indexOf(insere) != -1) {

                alert(`A palavra ${insere} já existe no Jogo\nTente uma palavra diferente`)
            }

            else {

                palavrasInseridas.push(insere)

                localStorage.setItem('palavrasInseridas', JSON.stringify(palavrasInseridas))

                banco = 1

                localStorage.setItem('Banco', (banco))

                alert(`A palavra ${insere} foi inserida com sucesso`)
            }
        }

        if (palavrasParse != null) {

            if (palavras.indexOf(insere) != -1 || palavrasParse.indexOf(insere) != -1 || palavrasInseridas.indexOf(insere) != -1) {

                alert(`A palavra ${insere} já existe no Jogo\nTente uma palavra diferente`)
            }

            else {

                palavrasInseridas.push(insere)

                localStorage.setItem('palavrasInseridas', JSON.stringify(palavrasInseridas.concat(palavrasParse)))
                
                banco = 1

                localStorage.setItem('Banco', (banco))

                alert(`A palavra ${insere} foi inserida com sucesso`)
            }
        }
    }

    document.getElementById('insere_palavra').value = ''
}

function excluiBanco() {

    if (banco == 1) {

    localStorage.removeItem('palavrasInseridas')
    
    localStorage.setItem('Lista', 0)

    alert('Suas Palavras Foram Excluídas')

    banco = 0

    localStorage.setItem('Banco', JSON.stringify(banco))
        
    }

    else {
        
        alert('Não Existem Palavras Para Excluir')
    }
}
