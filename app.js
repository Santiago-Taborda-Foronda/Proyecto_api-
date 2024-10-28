const url='https://rickandmortyapi.com/api/character'

const getCharacter = async (URL) =>{
    const response=await fetch(URL)
    const data= await response.json()
    console.log(data.results.length)

    runs(data)
  
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
