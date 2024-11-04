const url='https://rickandmortyapi.com/api/character'
let allCharacters = [];
const getCharacter = async (url) =>{
    try {
        const response = await fetch(url)
        const data = await response.json()
        allCharacters = data.results; 
        
        
        document.querySelector('main').innerHTML = '';
        
        data.results.forEach(character => {
            makecard(character)
        });
    } catch (error) {
        console.log("ERROR "+ error);
    }
}


getCharacter(url)


window.addEventListener('DOMContentLoaded', getCharacter)

function makecard(card) {
    
    const container = document.createElement('div'); 
    container.id = 'container'
    container.classList.add('card');

    const imgCard = document.createElement('img')
    imgCard.src = card.image
    imgCard.alt= card.name

    const containerDescription = document.createElement('div')
    containerDescription.id = 'container-title'


    const firstTitleCard  = document.createElement('h2');
    firstTitleCard.textContent= card.name

    const SecondTitleCard  = document.createElement('h3');
    SecondTitleCard.textContent= card.species

    const ThirdTitleCard  = document.createElement('h4');
    ThirdTitleCard.textContent= card.status

    container.appendChild(imgCard)
    container.appendChild(containerDescription)

    containerDescription.appendChild(firstTitleCard)
    containerDescription.appendChild(SecondTitleCard)
    containerDescription.appendChild(ThirdTitleCard)


    document.querySelector('main').appendChild(container)
    

}

function runs (data){
    data.results.forEach(character => {
        makecard(character)
    });
}

function filterCharacters(searchTerm) {
   
    if (!searchTerm) {
        document.querySelector('main').innerHTML = '';
        allCharacters.forEach(character => makecard(character));
        return;
    }

   
    const filtered = allCharacters.filter(character => 
        character.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

   
    document.querySelector('main').innerHTML = '';

    filtered.forEach(character => makecard(character));
}


document.getElementById('site-search').addEventListener('input', (show) => {
    filterCharacters(show.target.value);
});
