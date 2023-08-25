const images = [
    {
      image: 'img/01.webp',
      title: "Marvel's Spiderman Miles Morale",
      text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    },
    {
      image: 'img/02.webp',
      title: 'Ratchet & Clank: Rift Apart',
      text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    },
    {
      image: 'img/03.webp',
      title: 'Fortnite',
      text: 'Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.',
    },
    {
      image: 'img/04.webp',
      title: 'Stray',
      text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    },
    {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
    },
];



const buttonUp = document.getElementById('button_up');
const buttonDown = document.getElementById('button_down');
const jumboFilm = document.getElementById('jumbo_film');

let imgEl="";
let titleEl="";
let textEl="";



// con variabili appoggio definisco il template da inserire nel jumbo
for(const picture of images){

        
    for(const attribute in picture){

        imgEl = picture.image;
        titleEl= picture.title;
        textEl= picture.text;

    }
    // inserico il templates
    const filmEl = `
    <div class="card d-none">
        <img src="${imgEl}" alt=""> 
        <div class="caption px-5">               
            <h4 id="title_picture">${titleEl}</h4>
            <p id="text_picture">${textEl}</p>
        </div>
    </div>`

    jumboFilm.innerHTML += filmEl;
    
}

// recupero il'immagine del primo templates e remove d-none
const picture = document.querySelector('.card.d-none')
picture.classList.remove('d-none')


const pictures = document.querySelectorAll('.card')
console.log(pictures)

// bottoni up/down per scorrere il'immagine selezionata

let countSlides = 0

buttonDown.addEventListener('click', () =>{

    pictures[countSlides].classList.add('d-none')
    countSlides++

    pictures[countSlides].classList.remove('d-none')
    
    if(countSlides == pictures.length - 1){
        pictures[countSlides].classList.add('d-none')
        countSlides = 0

        pictures[countSlides].classList.remove('d-none')
        
    } 
    })





