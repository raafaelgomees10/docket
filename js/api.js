//consultando api para pegar as imagens
const linkApi = "https://picsum.photos/v2/list";

const container = document.querySelector("#card-2-projectsList");
let contentHTML = '';

fetch(linkApi)
  .then(response => response.json())
  .then(data => {

    for (const results of data) {
      contentHTML += `
      <li class="card-2-listContent">
    <img class="card-2-projectImages" src="${results.download_url}">
    </li>`
    }
    container.innerHTML = contentHTML;
  })