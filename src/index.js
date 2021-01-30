import styles from "./styles.css";
import {title, paragraph} from "./initial"
import Picture from './coffeeshop1.png';
const content = document.querySelector('#content')
content.appendChild(title())
let mainDiv = (() =>  {
        let appendP = () => {
            content.appendChild(paragraph())
        }
        let appendPic = () => {
            const coffeeshop = new Image();
            coffeeshop.src = Picture;
            coffeeshop.setAttribute('id', 'mainpic')
            coffeeshop.setAttribute('class', 'full-width')
            content.appendChild(coffeeshop)
        }
    appendPic();
    appendP();
    return content;
})()





