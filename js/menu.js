const menuLateral = document.querySelector(".menu-lateral");
const botaoMenu = document.querySelector(".botao-menu");

botaoMenu.addEventListener("click", () => {
  menuLateral.classList.toggle("ativo");
  botaoMenu.classList.toggle("ativo");
});
