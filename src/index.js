import styles from "./styles.css";
import title from './initial';
import Picture from './coffeeshop1.jpg';
const content = document.querySelector('#content')



function mainDiv() {
    const element = document.createElement('div');
    const coffeeshop = new Image();
    coffeeshop.src = Picture;
    coffeeshop.setAttribute('id', 'mainpic')

    element.appendChild(coffeeshop);
    return element;
}
content.appendChild(title())
content.appendChild(mainDiv())


