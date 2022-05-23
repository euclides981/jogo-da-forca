function popup() {
    document.getElementById('inserir_palavra').style.display = 'flex'
    document.getElementById('insere_palavra').focus()
}

function mostraPalavras (){
    
var corpoTabela = document.querySelector('#tbody')
    
tbody.innerText = ''

for (var pos = 0; pos < palavras.length; pos++) {
    
var tr = document.createElement('tr');

corpoTabela.appendChild(tr);

tr.innerHTML = palavras[pos]
    
}
}