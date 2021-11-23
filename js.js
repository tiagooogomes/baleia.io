function h1(){

    let h1 = document.querySelector("#capa h1")
    h1.innerHTML = "GIGANTE DOS MARES"
    h1.appendChild(h1)
}

function button1(){

    let button1 = document.querySelector("#capa button")
    button1.innerHTML = "SAIBA MAIS"
    button1.appendChild(button1)
}



function lista(){

    let p = document.querySelector("#sobre p")
    p.innerHTML = "As baleias são animais incluídos na ordem Cetacea, a qual inclui mamíferos como baleias, golfinhos e botos. Os cetáceos apresentam duas subordens com organismos viventes, Mysticeti e Odontoceti, sendo a ordem Mysticeti a que reúne as baleias-verdadeiras, também conhecidas como baleias-de-barbatana. Os Odontoceti incluem os golfinhos e as chamadas baleias com dentes, como o cachalote. É muito comum encontrarmos a denominação de baleia sendo usada tanto para os cetáceos com barbana como para os grandes cetáceos com dentes."
    p.appendChild(p)
}

function h2(){

    let h2 = document.querySelector("#sobre h2")
    h2.innerHTML = "BALEIA"
    h2.appendChild(h2)
}

function button2(){

    let button = document.querySelector("#sobre button")
    button.innerHTML = "VER MAIS"
    button.appendChild(h2)
}

function link2(){

    let link2 = document.querySelector("#sobre a")
    link2.href = 'https://www.cienciasresumos.com.br/animais/especies-de-baleias-tudo-sobre/https://youtu.be/IlV7RhT6zHs';
    link2.appendChild(link2)
}

function curiosidade(){

    let  curiosidade = document.querySelector("#curiosidade h2")
    curiosidade.innerHTML = "O MAIOR ANIMAL DA TERRA VIVE NA ÁGUA"
    curiosidade.appendChild(curiosidade)
}

function footer(){

    let footer = document.querySelector("footer h3")
    footer.innerHTML = "by. Aspirante Tiago Santos de Jesus"
    footer.appendChild(footer)
}

function eu(){

    let eu = document.querySelector("#perfil img")
    eu.setAttribute('src', 'img/eu.jpg');
    eu.appendChild(eu)
}

function texto(){

    let texto = document.querySelector("#eu p")
    texto.innerHTML = "Olá, meu nome é Tiago Santos de Jesus, tenho 20 anos e sou da Bahia. As baleias são animais muito innterrantes e sempre tenho curiosidade para saber mais sobre elas. "
    texto.appendChild(texto)
}

function nome(){

    let nome = document.querySelector("#eu h2")
    nome.innerHTML = "Tiago Santos"
    nome.appendChild(nome)
}



window.addEventListener("load", h1)
window.addEventListener("load", h2)
window.addEventListener("load", lista)
window.addEventListener("load", button1)
window.addEventListener("load", button2)
window.addEventListener("load", link2)
window.addEventListener("load", curiosidade)
window.addEventListener("load", eu)
window.addEventListener("load", nome)
window.addEventListener("load", texto)
window.addEventListener("load", footer)


















// let igredientesitens = ["oléo", "arroz", "feijão", "coisa"]

// let igredientelist = document.querySelector(".igredientes")


    // for (let index = 0; index < igredientesitens.length; index++){
    //     let id = igredientesitens[index]
    
    //     let idListItens = document.createElement("li")
    
    //     idListItens.innerText = igredientesitens
    
    //     igredientelist.appendChild(idListItens)
    // }