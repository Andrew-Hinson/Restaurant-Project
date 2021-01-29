
const title = () => {
    let title = document.createElement('h1')
    title.innerText = 'Lakeside Coffee';
    return title;
}
const paragraph = () => {
    let p = document.createElement('p');
    p.innerText = 'Welcome to Lakeside Coffee, a coffee shop on the LSU lakes that features scenic views and a drink for everyone.'
    return p;
}

export {title, paragraph}
