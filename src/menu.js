import Picture from "./coffeemachine1.jpg";
import {tabs} from "./tabs.js"
const menu = () => {
    let div = document.createElement('div');
    const newDiv = () => {
        div.setAttribute('class', 'centered')
        div.setAttribute('id', 'homePageDiv')
        return div;
    }
    const title = () => {
        let title = document.createElement('h1')
        title.setAttribute('class', 'centered')
        title.innerText = 'Lakeside Coffee';
        return title;
    }
    const appendPic = () => {
        const coffeeshop = new Image();
        coffeeshop.src = Picture;
        coffeeshop.setAttribute('id', 'menupic')
        return coffeeshop
    }
    const menuItems = () => {
        const subDiv = document.createElement('div');
        subDiv.setAttribute('id', 'drinks');
        const createIcon = () => {
            let icon = document.createElement('i')
            icon.setAttribute('class', 'fas fa-coffee');
            
        }
    }
    newDiv()
    div.appendChild(title());
    div.appendChild(tabs());
    div.appendChild(appendPic());
}

//<i class="fas fa-coffee"></i>