import Picture from "./coffeeshop1.png"
import {tabs} from "./tabs.js"
const homePage = () => {
    
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
        coffeeshop.setAttribute('id', 'mainpic')
        coffeeshop.setAttribute('class', 'full-width')
        return coffeeshop
    }
    const paragraph = () => {
        let p = document.createElement('p');
        p.setAttribute('id', 'blurb')
        p.setAttribute('class', 'bordered')
        p.innerText = 'Welcome to Lakeside Coffee, a coffee shop on the LSU lakes that features scenic views and a drink for everyone.'
        return p;
    }
    newDiv()
    div.appendChild(title());
    div.appendChild(tabs());
    div.appendChild(appendPic());
    div.appendChild(paragraph());
    return div;
}
export  { homePage }
