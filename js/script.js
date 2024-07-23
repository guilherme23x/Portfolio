// De onde começa o Scroll
window.addEventListener('scroll', function () {
  let scroll = this.document.querySelector('.voltarTopo')
  scroll.classList.toggle('active', this.window.scrollY > 50)
})

// Para Onde Ir
function voltaraoTopo() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

// Função do Menu Hamburger

let menuMobile = document.querySelector('.linksNavMobile');

function botaoMenu() {
  menuMobile.classList.toggle('active')
}