desenharForca()

function desenharForca() {
    switch (letrasErradas.length) {
        case  0:
        document.getElementById('trocaImg').src="img/forca.svg"
        break
        case 1:
        document.getElementById('trocaImg').src="img/forca2.svg"
        break
        case 2:
        document.getElementById('trocaImg').src="img/forca3.svg"
        break
        case 3:
        document.getElementById('trocaImg').src="img/forca4.svg"
        break
        case 4:
        document.getElementById('trocaImg').src="img/forca5.svg"
        break
        case 5:
        document.getElementById('trocaImg').src="img/forca6.svg"
        break
        case 6:
        document.getElementById('trocaImg').src="img/forca7.svg"
        break
        case 6:
        document.getElementById('trocaImg').src="img/forca7.svg"
        break
    }
}

let escolha = 0

let botaoSistema = document.getElementById('opcaoSistema')

botaoSistema.addEventListener('click', ()=>{

    escolha = 0

    localStorage.setItem('Lista', escolha)

    reiniciarJogo()
})

let botaoUsuario = document.getElementById('opcaoUsuario')

botaoUsuario.addEventListener('click', ()=>{

    if (banco == 1) {

        escolha = 1

        localStorage.setItem('Lista', escolha)

        reiniciarJogo()
    }

    else {

       alert('você não possui palavras cadastradas')
    }
})

let botaoMistura = document.getElementById('opcaoMisturada')

botaoMistura.addEventListener('click', ()=>{

    if (banco == 1) {

    escolha = 2

    localStorage.setItem('Lista', escolha)

    reiniciarJogo()

    }

    else {

        alert('você não possui palavras cadastradas')
    }
})