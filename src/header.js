import {tabs} from "./tabs.js"

const headerModule = () => {
    const content = document.querySelector('#content')
    const title = () => {
        let title = document.createElement('h1')
        title.setAttribute('class', 'centered')
        title.innerText = 'Lakeside Coffee';
        return title;
    }
    content.appendChild(title());
    content.appendChild(tabs());
}
export { headerModule }