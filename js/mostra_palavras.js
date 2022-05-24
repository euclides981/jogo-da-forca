var corpoTabela = document.querySelector('#tbody')

document.getElementById('espiar').style.display = 'none'

function popup() {
    document.getElementById('inserir_palavra').style.display = 'flex'
    document.getElementById('insere_palavra').focus()
}

function fechaPopup() {
    document.getElementById('inserir_palavra').style.display = 'none'
    document.getElementById('digita_chute').focus()
}

function mostraPalavras (){

    document.getElementById('espiar').style.display = 'flex'

}

function mostraPalavrasDoSistema() {

    corpoTabela.style.display = 'gryd'
        
    corpoTabela.innerText = ''

    for (var pos = 0; pos < palavras.length; pos++) {

        var word = document.createElement('option');

        corpoTabela.appendChild(word);

        word.innerHTML = palavras[pos]

    }
}

function mostraMinhasPalavras() {

    corpoTabela.style.display = 'gryd'

    corpoTabela.innerText = ''

    if(palavrasParse == null) {
        for (var pos = 0; pos < palavrasInseridas.length; pos++) {

            var word = document.createElement('option');
        
            corpoTabela.appendChild(word);
            
            word.innerHTML = palavrasInseridas[pos]
        }
    }
    else {
        for (var pos = 0; pos < palavrasParse.concat(palavrasInseridas).length; pos++) {

            var word = document.createElement('option');

            corpoTabela.appendChild(word);
            
            word.innerHTML = palavrasParse.concat(palavrasInseridas)[pos]
        }
    }
}

function mostraTodasPalavras() {

    corpoTabela.style.display = 'gryd'
        
    corpoTabela.innerText = ''

    for (var pos = 0; pos < palavras.concat(palavrasParse).length; pos++) {

        var word = document.createElement('option');

        corpoTabela.appendChild(word);

        word.innerHTML = palavras.concat(palavrasParse)[pos]

    }
}