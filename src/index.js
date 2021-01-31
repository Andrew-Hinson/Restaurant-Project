import styles from "./styles.css";
import { headerModule } from "./header.js"
import { homePage } from "./homePage.js"
import { menu } from "./menu.js"
import { about } from "./about.js"
headerModule();

const content = document.querySelector('#content');

content.appendChild(homePage())

const homeBtn = document.querySelector('#Home')
const menuBtn = document.querySelector('#Menu')
const aboutBtn = document.querySelector('#About')

menuBtn.addEventListener('click', () => {
    const contentParent = document.querySelector('#contentParent')
    const content = document.querySelector('#content');
    contentParent.removeChild(content)
    const createContent = () => {
        let content = document.createElement('div')
        content.setAttribute('id', 'content')
        content.appendChild(menu())
        return content;
    }
   return contentParent.appendChild(createContent())
})
homeBtn.addEventListener('click', () => {
    const contentParent = document.querySelector('#contentParent')
    const content = document.querySelector('#content');
    contentParent.removeChild(content)
    const createContent = () => {
        let content = document.createElement('div')
        content.setAttribute('id', 'content')
        content.appendChild(homePage())
        return content;
    }
   return contentParent.appendChild(createContent())
})
aboutBtn.addEventListener('click', () => {
    const contentParent = document.querySelector('#contentParent')
    const content = document.querySelector('#content');
    contentParent.removeChild(content)
    const createContent = () => {
        let content = document.createElement('div')
        content.setAttribute('id', 'content')
        content.appendChild(about())
        return content;
    }
  return contentParent.appendChild(createContent())
})




