const voltar = document.querySelector('.topo')

window.addEventListener("scroll", function (event) {
    if (this.window.scrollY == 0) {
        voltar.classList.remove('visible');

    } else {
        voltar.classList.add('visible')
    }
})

window.addEventListener('scroll', function () {
    var content = document.getElementById('Projetos');
    var contentPosition = content.getBoundingClientRect().top;
    var screenPosition = window.innerHeight;

    if (contentPosition < screenPosition) {
        content.classList.add('mostrar');
        content.classList.remove('ocultar');
    } else {
        content.classList.remove('mostrar');
        content.classList.add('ocultar');
    }
});
