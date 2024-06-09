// Animação de Transição com o Scroll

const sections = document.querySelectorAll(".animacao_scroll");

const options = {
  root: null,
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    } else {
      entry.target.classList.remove("visible");
    }
  });
});

sections.forEach((section) => observer.observe(section, options));

// Botão de Voltar ao Topo

const voltar = document.querySelector(".topo");

window.addEventListener("scroll", function (event) {
  if (this.window.scrollY == 0) {
    voltar.classList.remove("visible");
  } else {
    voltar.classList.add("visible");
  }
});

// Botão de Menu

const menuLateral = document.querySelector(".menu-lateral");
const botaoMenu = document.querySelector(".botao-menu");

botaoMenu.addEventListener("click", () => {
  menuLateral.classList.toggle("ativo");
  botaoMenu.classList.toggle("ativo");
});
