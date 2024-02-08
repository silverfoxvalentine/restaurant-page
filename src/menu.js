import './menu.css';
import des1 from './des1.jpg'
import des2 from './des2.jpg'
import des3 from './des3.jpg'
import des4 from './des4.jpg'
import des5 from './des5.jpg'
const images = [des1, des2, des3, des4, des5]

export const menu = function() {
    const content = document.querySelector('#content')
    const menu = document.createElement('div')
    menu.classList.add('menu')
    const names = [
        {name: 'Banana Cheesecake', ingridients: 'Chocolate Cookie Crust, Whipped Cream, Chocolate Sauce'},
        {name: 'Key Lime Pie', ingridients: 'Strawberry Sauce, Seasonal Fruit'},
        {name: 'Bourbon Chocolate Cake', ingridients: 'Nutella Frosting, Bourbon Salted Caramel, Vanilla Ice Cream'},
        {name: 'Deep Fried Oreos', ingridients: 'Cookies & Cream Ice Cream, Crispy Rice Cerea'},
        {name: 'Apple Cinnamon Cobbler', ingridients: 'Brown Sugar Oat Crumble, Vanilla Ice Cream, Baked Almond Cream'},
    ]
    for (let n=0; n<names.length; n++) {
        const card = document.createElement('div')
        const h = document.createElement('h3')
        const text = document.createElement('div')
        h.textContent = names[n].name
        text.textContent = names[n].ingridients
        const desImg = new Image()
        desImg.src = images[n]
        card.appendChild(desImg)
        card.appendChild(h)
        card.appendChild(text)
        menu.appendChild(card)
    }
    content.appendChild(menu)
}