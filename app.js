const environments = [
    {
        name: "Rick Sanchez",
        status: "Alive",
        species: "Human",
        image: "assets/images/hamster.png"
    },
    {
        name: "Morty Smith",
        status: "Alive",
        species: "Human",
        image: "assets/images/hamster.png"
    }
    // Puedes agregar más personajes aquí
];

window.addEventListener('DOMContentLoaded', makecards)

function makecard(card) {
    const container = document.createElement('div'); 
    container.id = 'container-title'
    container.classList.add('container-title');


    const imgCard = document.createElement('img')
    imgCard.src = card.img
    imgCard.alt= card.Description

    const firstTitleCard  = document.createElement('h2');
    firstTitleCard.textContent= card.title
    
    const SecondTitleCard  = document.createElement('h3');
    SecondTitleCard.textContent= card.title

    const ThirdTitleCard  = document.createElement('h3');
    ThirdTitleCard.textContent= card.title

    container.appendChild(imgCard)
    container.appendChild(firstTitleCard)
    container.appendChild(SecondTitleCard)
    container.appendChild(ThirdTitleCard)
    

    document.querySelector('main').appendChild(container)

    
}


function makecards() {
   for (let index = 0; index < 12; index++) {
        makecard(environments);
        console.log(environments)
        // environments.forEach(card=>makecard(card))
    }
}