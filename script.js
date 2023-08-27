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

const buttonPlay = document.getElementById('player_play');
const buttonStop = document.getElementById('stop');
const buttonPlayBackwards = document.getElementById('play_backwards');


let imgEl="";
let titleEl="";
let textEl="";


// con variabili appoggio definisco il template da inserire nel jumbo
for(const picture of images){

    
    let active = picture == images[0] ? 'active' : ''; // in questo modo la prima slide è visibile da subito
        
    for(const attribute in picture){

        imgEl = picture.image;
        titleEl= picture.title;
        textEl= picture.text;

        
    }
    // inserico il templates
    const filmEl = `
    <div class="card ${active}">
        <img src="${imgEl}" alt=""> 
        <div class="caption px-5">               
            <h4 id="title_picture">${titleEl}</h4>
            <p id="text_picture">${textEl}</p>
        </div>
    </div>`

    jumboFilm.innerHTML += filmEl;
    

}

const pictures = document.querySelectorAll('.card')
console.log(pictures)
const borders = document.querySelectorAll('.border')
let activeSilde = 0;
let activeBorder = 0;

buttonUp.addEventListener('click', function(){

    buttonCarosel(activeSilde, pictures, true)

    caroselBorder(activeBorder, borders, true)

    

})

buttonDown.addEventListener('click', function(){

    buttonCarosel(activeSilde, pictures, false)

    caroselBorder(activeBorder, borders, false)

})


const asidePictures = document.querySelectorAll('.picture_film');
console.log(asidePictures)




/** function caroselButton, imposta i tasti di avanti ed indietro in un loop
 *  @param {int} activeSildes regola il counter interno per scorrere l'array
 * @param {array} array l'array che deve scorrere
 * @param {boolean} true se next, prev se false
 * 
 * */ 

function buttonCarosel(activeSildes, array, boolean){

    pictures[activeSilde].classList.remove('active')
    
    boolean ? activeSilde-- : activeSilde++

    if(activeSilde == pictures.length ) activeSilde = 0;
    if(activeSilde < 0) activeSilde = pictures.length -1

    let newActiveSlide = pictures[activeSilde]

    newActiveSlide.classList.add('active')
    
}


function caroselBorder(ActiveBorder, array, boolean){

    
    borders[activeBorder].classList.remove('selected')
    
    boolean ? activeBorder-- : activeBorder++
    
    if(activeBorder == borders.length ) activeBorder = 0;
    if(activeBorder < 0) activeBorder = borders.length -1
    
    let newActiveBorder = borders[activeBorder]
    
    newActiveBorder.classList.add('selected')
}