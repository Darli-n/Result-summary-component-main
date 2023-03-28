
let divResults = document.querySelector(".conteudo")

fetch("data.json").then((response)=> {
    response.json().then((data)=> {
             data.map((resultados)=> {
                console.log(resultados)
                divResults.innerHTML += `<div id="resultColor" style="background-color:${resultados.fonte}"><img src="${resultados.icon}" alt="${resultados.category}"><p>${resultados.category}   <b>${resultados.score}</b>/100</p></div>`
             })
        })
    })
