const voltar = document.querySelector('.topo')

window.addEventListener("scroll", function (event) {
    if (this.window.scrollY == 0) {
        voltar.classList.remove('visible');

    } else {
        voltar.classList.add('visible')
    }
})

