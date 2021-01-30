
const title = () => {
    let title = document.createElement('h1')
    title.setAttribute('class', 'centered')
    title.innerText = 'Lakeside Coffee';
    return title;
}
const paragraph = () => {
    let p = document.createElement('p');
    p.setAttribute('id', 'blurb')
    p.setAttribute('class', 'bordered')
    p.innerText = 'Welcome to Lakeside Coffee, a coffee shop on the LSU lakes that features scenic views and a drink for everyone.'
    return p;
}
const newDiv = () => {
    let div = document.createElement('div');
    div.setAttribute('class', 'centered')
    div.setAttribute('id', 'pDiv')
    return div;
}

export {title, paragraph, newDiv}
