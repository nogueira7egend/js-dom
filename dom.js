// const elementImage = document.getElementsByClassName("card-image")[0];
// const elementSubtitle = document.getElementsByClassName("card-subtitle")[0];
// const elementTitle = document.getElementsByClassName("card-title")[0];
// const elementText = document.getElementsByClassName("card-text")[0];
// const elementButton = document.getElementsByClassName("card-button")[0];

// // alterar imagem
// elementImage.src = "https://dummyimage.com/600x400/000/fff";
// // alterar subtitulo
// elementSubtitle.innerHTML = "4 days ago";
// // alterar titulo
// elementTitle.innerHTML = "Post One"
// // alterar texto
// elementText.innerHTML = "lorem ipsum aºpsdasdhjasbd jsdhasjdh asjdbdhdh2  bj2e2hh.";
// // alterar texto do botao
// elementButton.innerHTML = "Ver mais"
// // alterar link do botao
// elementButton.href = "https://www.google.pt"

// variables
const productsDivElement = document.getElementById("products");

/**
 * Array de objectos, que contém informações sobre produtos
 * 
 * Estrutura do objecto:
 * - image
 * - title
 * - subtitle
 * - text
 * - buttonText
 * - buttonLink
 * 
 * 
 * Array = []
 * Objecto = {}
 */
const productsList = [
  {
    image: "https://dummyimage.com/600x400/000/fff",
    title: "Post One 1",
    subtitle: "4 days ago",
    text: "lorem ipsum aºpsdasdhjasbd jsdhasjdh asjdbdhdh2  bj2e2hh.",
    buttonText: "Ver mais",
    buttonLink: "https://www.google.pt"
  },
  {
    image: "https://dummyimage.com/600x400/000/fff",
    title: "Post One 2",
    subtitle: "8 days ago",
    text: "lorem ipsum aºpsdasdhjasbd jsdhasjdh asjdbdhdh2  bj2e2hh.",
    buttonText: "Ver mais",
    buttonLink: "https://www.google.pt"
  },
  {
    image: "https://dummyimage.com/600x400/000/fff",
    title: "Post One 3",
    subtitle: "8 days ago",
    text: "lorem ipsum aºpsdasdhjasbd jsdhasjdh asjdbdhdh2  bj2e2hh.",
    buttonText: "Ver mais",
    buttonLink: "https://www.google.pt"
  }
]

/**
 * 1 - Para injetar no HTML, como a nossa variavel **productsList** é do tipo Array, temos de percorrer esse array / lista;
 *  - percorrer o array
 *  - em cada elemento, adicionar a uma variavel, que contem todo o html
 *  - no final, essa variavel, injecta no productsDivElement;
 */
let html = [];

function cardClick(index) {
  // percorrer a lista de children, e remover a class active
  for (let index = 0; index < productsDivElement.children.length; index++) {
    const element = productsDivElement.children[index];

    // verifica se o element contém a class "active"
    if (element.classList.contains("active")) {
      element.classList.remove("active");
    }
  }

  // adicionar ao card especifico através do index, a class active.
  productsDivElement.children[index].classList.add("active");
}

for (let index = 0; index < productsList.length; index++) {
  const element = productsList[index];
  // const cardActive = index === 1 ? "active" : "";

  // push é apenas para variáveis do tipo array, 
  // sendo que a variável tem de começar com um array vazio (ex: html = [])
  html.push(`<div onclick="cardClick(${index})" class="card">
    <img class="card-image" src="${element.image}">
    <div class="card-content">
      <span class="card-subtitle">${element.subtitle}</span>
      <h2 class="card-title">${element.title}</h2>
      <p class="card-text">${element.text}</p>
    </div>
    <a class="card-button" href="${element.buttonLink}">${element.buttonText}</a>
  </div>`)

  // html += `<div onclick="cardClick(${index})" class="card">
  //   <img class="card-image" src="${element.image}">
  //   <div class="card-content">
  //     <span class="card-subtitle">${element.subtitle}</span>
  //     <h2 class="card-title">${element.title}</h2>
  //     <p class="card-text">${element.text}</p>
  //   </div>
  //   <a class="card-button" href="${element.buttonLink}">${element.buttonText}</a>
  // </div>`
}

productsDivElement.innerHTML = html;

// if normal
// if (chuva === true) { 
  // usar guarda chuva
// } else (senao) {
  // deixar o guarda chuva em casa.
// }

// if ternario
// chuva === true ? usar guarda chuva : deixar o guarda chuva em casa.
