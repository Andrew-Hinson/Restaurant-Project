import styles from "./styles.css";
import title from './initial'

function addToPage(){
    const content = document.querySelector('#content')
    content.appendChild(title())
}
addToPage()