'use strict'

async function pesquisarFotos(){
    const url = `https://api.thecatapi.com/v1/images/search?limit=20` // url da api 

    const response  = await fetch(url) // fetch -> faz requisições web (conversa com o back)
    const data      = await response.json() // chamar apenas o json
    return data.map(cat => cat.url)
}

// Função para criar as imgs dentro da DIV 
function criarImagem(link){ // Recebe o link da imagem 
    const galeria = document.getElementById('galeria')
    const novaImg = document.createElement('img') // criando nova imagem 
    novaImg.src = link // Cria a nova image, com a link da foto do API 

    galeria.appendChild(novaImg)
}

async function preencherFotos(){
    const fotos = await pesquisarFotos()

    fotos.forEach (criarImagem)
}

preencherFotos()