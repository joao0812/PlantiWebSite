const menuOutline = document.getElementById('menuOutline')
const text = document.querySelectorAll('.textoToolBar')
const setting = document.getElementById('setting')
const help = document.getElementById('help')
const logo = document.getElementById('logoIMG')

function slide() {
    let largura = $('#toolMenu').width()
    if (largura > 68) {
        $('#toolMenu').animate({ width: '68px' }, 550)
        setting.style.opacity = '0'
        help.style.opacity = '0'
        logo.style.display = 'none'
        $('#menuOutlineClose').css("transform", "scale(1)")
        $('#menuOutlineOpen').css("transform", "scale(0)")
        text.forEach(element => {
            element.style.display = 'none'
        })
    } else {
        $('#toolMenu').animate({ width: '20%' }, 550)
        setting.style.opacity = '1'
        help.style.opacity = '1'
        $('#menuOutlineClose').css("transform", "scale(0)")
        setTimeout(() => {
            text.forEach(element => {
                element.style.display = 'inline'
            })
            logo.style.display = 'flex'
            
            $('#menuOutlineOpen').css("transform", "scale(1)")
        }, 450)

    }
}

menuOutline.addEventListener('click', slide)