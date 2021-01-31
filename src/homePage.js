import Picture from "./coffeeshop1.png"
const homePage = () => {
    let div = document.createElement('div');
    const newDiv = () => {
        div.setAttribute('class', 'centered')
        div.setAttribute('id', 'homePageDiv')
        return div;
    }
    const appendPic = () => {
        const coffeeshop = new Image();
        coffeeshop.src = Picture;
        coffeeshop.setAttribute('id', 'mainpic')
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
    div.appendChild(appendPic());
    div.appendChild(paragraph());
    return div;
}
export  { homePage }
