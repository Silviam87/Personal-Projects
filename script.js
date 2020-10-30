let navbar = document.querySelector('#navbar')
let navbarBrand = document.querySelector('#navbarBrand')
let navbarCTAScroll = document.querySelector('#navbarCTAScroll')
let title = document.querySelector('title')

if(window.innerHeight > 576) {

    document.addEventListener('scroll', ()=> {
        if (window.pageYOffset > 20) {
            navbar.classList.remove('bg-black')
            navbar.classList.add('bg-yellow', 'border-bottom-main')
            navbarBrand.src = "./media/rotate.png"
        } else {
            navbar.classList.remove('bg-yellow', 'border-bottom-main')
            navbar.classList.add('bg-black')
            navbarBrand.src = "./media/kisspng-root-beer-beer-glassware-clip-art-beer-images-5a889cdde3b3c5.7728157015189024939327 (2).png"
        }
        
        


    
    })
  
    document.addEventListener('scroll', ()=> {
        if (window.pageYOffset > 40) {
            navbar.classList.add( 'border-bottom-main')
            
        } else {
            navbar.classList.remove('border-bottom-main')
           
           
        }
        
        


    
    })


} 

let final = new Date('December 31, 2020')

let giorniMancanti = document.querySelector('#giorniMancanti')
let oreMancanti = document.querySelector('#oreMancanti')
let minutiMancanti = document.querySelector('#minutiMancanti')
let secondiMancanti = document.querySelector('#secondiMancanti')

function timer() {
    let today = new Date()
    let diff = final - today

    let secondi = Math.floor(diff/1000 % 60) 
    let minuti = Math.floor((diff/(1000 * 60) % 60 ))
    let ore = Math.floor((diff/(1000 * 60 * 60)) % 24)
    let giorni = Math.floor((diff/ (1000 * 60 * 60 * 24)))

    giorniMancanti.innerHTML = (giorni > 9 ) ? giorni : "0" + giorni
    oreMancanti.innerHTML = (ore > 9 ) ? ore: "0" + ore
    minutiMancanti.innerHTML = (minuti > 9 ) ? minuti : "0" + minuti
    secondiMancanti.innerHTML = (secondi > 9 ) ? secondi : "0" + secondi


}

setInterval(timer, 1000)


var words = ['Il primo birrificio artigianale in Italia', '50 anni di esperienza', 'valori', 'positive vibes.'];
var counter = 0;
var word = document.getElementById("carousel-words");
setInterval(update_carousel_words, 2000);
function update_carousel_words(){
    word.innerHTML = words[counter];
    counter++;
    if(counter >= words.length){
        counter = 0;
    }
}


    
    
    




