// Função para carregar os projetos do JSON
fetch("./projetosMobile.json")
  .then(response => response.json())
  .then(data => {
    const projetos = data.projetos;
    const container = document.getElementById('cartoesProjetos');

    // Loop para criar os cards dinamicamente
    projetos.forEach(projeto => {
      const card = document.createElement('a');
      card.href = projeto.url;
      card.innerHTML = `
       <a target="_blank" href="${projeto.url}">
            <div class="card">
              <img class="mobile" src="${projeto.imagem}" alt="Imagem do Projeto">
              <h3>${projeto.titulo}</h3>
              <p>${projeto.descricao}</p>
              <a  target="_blank" class="codigoProjeto" href="${projeto.codigo}">Código</a>
            </div>
            </a>
          `;
      container.appendChild(card);
    });
  })
  .catch(error => console.error('Erro ao carregar os projetos:', error));