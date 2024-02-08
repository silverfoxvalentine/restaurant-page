import './home.css';

import end from './end.png';

export const home = function() {
    const content = document.querySelector('#content')
    const homeBut = document.querySelector('#home')
    homeBut.classList.add('active')
    const home = document.createElement('div')
    home.classList.add('home')
    const headline = document.createElement('h2')
    headline.textContent = 'Welcome!'
    const text1 = document.createElement('div')
    const text2 = document.createElement('div')
    const text3 = document.createElement('div')
    const endImg = new Image()
    endImg.src = end
    text1.textContent = 'Pon Guan Cake House is a bakery run by women with a tasty variety of homemade baked cakes and treats. All of them are made completely from scratch, without any artificial or pre made products.' 
    text2.textContent = 'Visit us and treat yourself tasting a extraordinary piece of cake with a gourmet specialty coffee. We have, as part of our menu, traditional tastes since key lemon pie and cheesecake to our marvelous cakes with homemade ingredients like our Manjar (milk caramel), meringue and jams. You are already invited to share our flavors.'
    text3.textContent = 'Feel always welcome!'
    home.appendChild(headline)
    home.appendChild(text1)
    home.appendChild(text2)
    home.appendChild(text3)
    home.appendChild(endImg)
    content.appendChild(home)
}

