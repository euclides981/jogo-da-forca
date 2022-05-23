function inserirPalavra() {

    document.getElementById('insere_palavra').focus()

    var insere = document.getElementById('insere_palavra').value

    if (insere == '') {
        alert(`Digite uma Palavra Para Inserir \nO campo não pode estar vazio`)
    }
    else {
    if (palavrasParse == null){
        if(palavras.indexOf(insere) != -1 || palavrasInseridas.indexOf(insere) != -1) {
            alert(`A palavra ${insere} já existe no Jogo\nTente uma palavra diferente\nGostaria de ver as palavras cadastradas? Clique aqui${botaoMais}`)
        }
        else {
            palavrasInseridas.push(insere)
            localStorage.setItem('palavrasInseridas', JSON.stringify(palavrasInseridas))
            alert(`A palavra ${insere} foi inserida com sucesso`)
        }
    }
    if (palavrasParse != null) {
        if(palavras.indexOf(insere) != -1 || palavrasParse.indexOf(insere) != -1 || palavrasInseridas.indexOf(insere) != -1) {
            alert(`A palavra ${insere} já existe no Jogo\nTente uma palavra diferente\nGostaria de ver as palavras cadastradas? Clique aqui${botaoMais}`)
        }
        else {
            palavrasInseridas.push(insere)
            localStorage.setItem('palavrasInseridas', JSON.stringify(palavrasInseridas.concat(palavrasParse)))
            alert(`A palavra ${insere} foi inserida com sucesso`)
        }
    }
}
    document.getElementById('insere_palavra').value = ''
}