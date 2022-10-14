const menu = document.querySelector('.ham');
const list = document.querySelector('.nav-list')
const closeMenu = document.querySelector('.close')
menu.addEventListener('click', ()=>{
    list.style.display = 'block';
    menu.style.display = 'none';
    setTimeout( closeMenu.classList.add('animate'), 2000)
})
closeMenu.addEventListener('click', ()=>{
    setTimeout( closeMenu.classList.add('animate'), 2000)

    list.style.display = 'none';
    menu.style.display = 'block';
 
})

// delete later

//removing duplicate records
//set
let letters = [ 'a', 'b', 'b', 'c', 'd', 'e', 'd','d','d','b'];
let uniqueLetters = [...new Set(letters)];

console.log(uniqueLetters);

//map

let people = [

    {
        id: 1, name: 'grace'
    },
    {
        id: 1, name: 'lily'
    },
    {
        id: 2, name: 'favor'
    },
    {
        id: 3, name: 'shammah'
    },
]
//  const peopleArray = people.map((p)=>[p.id, p])

//  const newPeople = new Map(peopleArray);

//  const runThrough = newPeople.values();

// const unique = [...runThrough]

// console.log(unique);
 
const unique = [...new Map(people.map((p)=>[p.id, p])).values()];
console.log(unique);

