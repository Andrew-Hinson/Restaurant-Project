import Picture from "./coffeecup1.jpg"
const about = () => {
    let div = document.createElement('div');
    const newDiv = () => {
        div.setAttribute('class', 'centered')
        div.setAttribute('id', 'aboutDiv')
        return div;
    }
    const appendPic = () => {
        const coffeecup = new Image();
        coffeecup.src = Picture;
        coffeecup.setAttribute('id', 'mainpic')
        return coffeecup
    }
    const paragraph = () => {
        let p = document.createElement('p');
        p.setAttribute('id', 'aboutP')
        p.setAttribute('class', 'bordered')
        p.innerText = 'Founded in 2021, Lakeside Coffee is a dream achieved by partnering with the LSU lakes foundation, LSU student body, and surrounding communities. Lakeside Coffee is the first commercial establishment to exist directly on the LSU lakes. A portion of the profits from Lakeside Coffee is allocated to upkeep the northern LSU lakes. Employees are part owners of Lakeside Coffee and former students of LSU’s campus and local residents. Please contact us by email at Lakesidecoffee@gmail.com. Thanks for stopping by!'
        return p;
    }
    newDiv()
    div.appendChild(appendPic());
    div.appendChild(paragraph());
    return div;
}
export  { about }