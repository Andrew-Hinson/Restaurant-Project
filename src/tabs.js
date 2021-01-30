let tabs = () => {
    const ul = document.createElement('ul');
    let createList = () => {
        ul.setAttribute('id', 'tabs');
        ul.setAttribute('class', 'centered')
    }
    let createListItem = (text) => {
        let li = document.createElement('li');
        li.setAttribute('class', 'tab');
        li.innerText = text
        return li
    }
    createList()
    let home = createListItem('Home')
    let menu = createListItem('Menu')
    let about = createListItem('About')
    ul.appendChild(home)
    ul.appendChild(menu)
    ul.appendChild(about)
    return ul;
}
export {tabs}