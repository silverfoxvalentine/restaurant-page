import './about.css';
import icon1 from './icon1.jpg'
import icon2 from './icon2.jpg'
import icon3 from './icon3.jpg'
import icon4 from './icon4.jpg'
import icon5 from './icon5.jpg'
const icons = [icon1, icon2, icon3, icon4, icon5]

export const about = function() {
const content = document.querySelector('#content')
const contacts = document.createElement('div')
contacts.classList.add('contacts')
const location = document.createElement('div')
const location1 = document.createElement('div')
const tel = document.createElement('div')
const hours = document.createElement('div')
const social = document.createElement('div')
social.classList.add('social')

location.textContent = 'We\'re located in the heart of New York City on 52nd street between Broadway and 8th Avenue.'
location1.textContent = '228 West 52nd Street, New York, NY 10019'
tel.textContent = 'Phone: (212) 586-5000'
hours.textContent = 'Mon - Fri 11:30AM - 9:30PM'

contacts.appendChild(location)
contacts.appendChild(location1)
contacts.appendChild(tel)
contacts.appendChild(hours)

for (const icon of icons) {
    const iconImg = new Image()
    iconImg.src = icon
    social.appendChild(iconImg)
}


content.appendChild(contacts)
content.appendChild(social)


}