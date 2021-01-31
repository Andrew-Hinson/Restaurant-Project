import Picture from "./coffeemachine1.jpg";

const menu = () => {
    let div = document.createElement('div');
    const newDiv = () => {
        div.setAttribute('class', 'centered')
        div.setAttribute('id', 'menuPageDiv')
        return div;
    }
    const appendPic = () => {
        const coffeeMachine = new Image();
        coffeeMachine.src = Picture;
        coffeeMachine.setAttribute('id', 'menupic')
        return coffeeMachine
    }
    const menuTitle = () => {
        const menuHeader = document.createElement('h2')
        menuHeader.innerText = 'Our Coffee'
        return menuHeader;
    }
    const menuItems = () => {
        const drinks = document.createElement('div');
        drinks.setAttribute('id', 'drinks');
    

        const createDrink = (title, text) => {
            const drinkDiv = document.createElement('div');
                drinkDiv.setAttribute('class', 'drink');
            let subTitle = document.createElement('h3');
            let description = document.createElement('p');
                subTitle.innerText = title
                description.innerText = text
                drinkDiv.appendChild(subTitle)
                drinkDiv.appendChild(description)
            return drinkDiv;
        }

        const darkRoast = createDrink('Dark Roast', 'Our classic dark roast, which is lower in caffeine than lighter roasts and perfect for drinking after dinner or into the evening.')
        const mediumRoast = createDrink('Medium Roast', 'Our perfect medium roast highlights the flavor of the beans while still delivering the roasted nutty flavors that coffee drinkers love.')
        const decaf = createDrink('Decaf', 'Enjoy the smooth richness of coffee without a kick in the pants. Great for after dinner if caffeine affects your sleep.')
        const iceCoffee = createDrink('Iced Coffee', 'Our medium roast cold brewed, typically mixed with your choice of dairy for a refreshing drink.')
        const latte = createDrink('Latte', 'Our espresso combined with steamed milk and served with our baristas signiture finish')
        const mocha = createDrink('Mocha', "Do you like Chocolate? Do you like Latte's? Then do we have a drink for you!")
        
        drinks.appendChild(darkRoast)
        drinks.appendChild(mediumRoast)
        drinks.appendChild(decaf)
        drinks.appendChild(iceCoffee)
        drinks.appendChild(latte)
        drinks.appendChild(mocha)
        
        return drinks;
    }
    newDiv()
    div.appendChild(appendPic());
    div.appendChild(menuTitle())
    div.appendChild(menuItems())
    return div
}
export { menu }

//<i class="fas fa-coffee"></i>