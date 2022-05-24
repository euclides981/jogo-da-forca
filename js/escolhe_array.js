var escolha = 0

let botaoSistema = document.getElementById('opcaoSistema')

botaoSistema.addEventListener('click', ()=>{

    escolha = 0

    localStorage.setItem('Lista', escolha)

    reiniciarJogo()
})

let botaoUsuario = document.getElementById('opcaoUsuario')

botaoUsuario.addEventListener('click', ()=>{

    if (palavrasInseridas != "" || palavrasParse != null) {

        escolha = 1

        localStorage.setItem('Lista', escolha)

        reiniciarJogo()
    }

    else {

        reiniciarJogo()
    }
})

let botaoMistura = document.getElementById('opcaoMisturada')

botaoMistura.addEventListener('click', ()=>{

    if (palavrasInseridas != "" || palavrasParse != null) {

    escolha = 2

    localStorage.setItem('Lista', escolha)

    reiniciarJogo()

    }

    else {

        reiniciarJogo()
    }
})