import {tabs} from "./tabs.js"

const headerModule = () => {
    const header = document.querySelector('#header')
    const title = () => {
        let title = document.createElement('h1')
        title.setAttribute('class', 'centered')
        title.innerText = 'Lakeside Coffee';
        return title;
    }
    header.appendChild(title());
    header.appendChild(tabs());
}
export { headerModule }