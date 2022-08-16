const btHome = document.querySelectorAll('.btHome')

function active(element) {
    btHome.forEach(elemento=> {
        elemento.classList.remove('actived')
        elemento.children[1].style.color = 'black'
    })
    element.target.parentElement.classList.add('actived')
    element.target.parentElement.children[1].style.color = '#69AB3D'
}

btHome.forEach(elemet => {
    elemet.children[0].addEventListener('click', active)
    elemet.children[1].addEventListener('click', active)
})