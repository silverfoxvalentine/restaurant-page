import './base.css'
import {home} from './home'
import {menu} from './menu'
import {about} from './about'
import {removeChildren} from './removeChildren'

home()

const buttonNav = document.querySelectorAll('.nav')

buttonNav.forEach((button) => {
    button.addEventListener('click', (e) => {
        removeChildren()
        buttonNav.forEach((button) => {
        button.classList.remove('active')
        })
        e.target.classList.add('active')
        switch (e.target.id) {
            case 'home':
                home()
                break
            case 'menu':
                menu()
                break
            case 'about':
                about()
                break
        }
    })
})