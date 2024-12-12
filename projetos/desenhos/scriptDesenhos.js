// Função para carregar os projetos do JSON
fetch("./projetosDesenhos.json")
  .then(response => response.json())
  .then(data => {
    const projetos = data.projetos;
    const container = document.getElementById('cartoesProjetos');

    // Loop para criar os cards dinamicamente
    projetos.forEach(projeto => {
      const card = document.createElement('a');
      card.href = projeto.url;
      card.innerHTML = `
            <div class="cardDesenho">
              <img class="desenhos" src="${projeto.src}" alt="Imagem do Desenho">
            </div>
          `;
      container.appendChild(card);
    });
  })
  .catch(error => console.error('Erro ao carregar os projetos:', error));