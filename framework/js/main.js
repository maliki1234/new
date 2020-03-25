const navbar = document.querySelector("#navbar-purple")
// const navbar= document.querySelector('')
const navbarSocial = document.querySelector("#navbar-social")
const back_top = document.querySelector(".back-to-top");

const overlay = document.querySelector('#media .over-overlay')
const gallery = document.querySelector('#media .gallery')
const generateHtml = ([h, v]) => {
    const html = `
    <div class="item h${h} v${v}">
        <img src="media/gallery/${generateRandomNumber(30)}.jpg" alt="">
        <div class="item_overlay">
            <button>view -></button>
        </div>
    </div> `;
    return html
}
const generateRandomNumber = (limit) => {
    const randomNumber = Math.floor(Math.random() * limit) + 1
    while (generateRandomNumber > randomNumber) {
        Math.floor(Math.random() * limit) + 1
    }
    return randomNumber
}
const arrayfrom = Array.from({
    length: 20
}, () => [generateRandomNumber(4), generateRandomNumber(4)]).concat([
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1]
])

const viewImg = (e) => {
    const img = e.currentTarget.querySelector('img')
    const imgView = img.src
    overlay.style.display = 'grid'
    const imgToDisplay = overlay.querySelector('.inner_overlay img').src = imgView
    
    const removeGalleryOve = e.currentTarget.querySelector('.item_overlay').style.transform = 'translateY(100%)'

    navbar.syle.display = "none"
}
const closer = () => {
    overlay.style.display = 'none'
    navbar.style.display  = 'block'
}
const html = arrayfrom.map(generateHtml).join('')
gallery.innerHTML = html
const item = document.querySelectorAll('.item')
item.forEach(item => item.addEventListener('click', viewImg))
const close = overlay.querySelector('.inner_overlay .close')
close.addEventListener('click', closer)






window.onscroll = function(){
    // console.log(this.scrollY)
    if(this.scrollY > 20){
        
        navbarSocial.classList.remove("navbar-sticky")
        // console.log(navbar)
        navbar.classList.add("navbar-sticky")
        // navbar.style.position = 'sticky'
        // navbar.style.backround

    }
    else{
        navbar.classList.remove("navbar-sticky")
        // navbarSocial.classList.add("navbar-sticky")
    }


    if(this.scrollY > 500){
        back_top.style.display = "block";
    }
    else{
        back_top.style.display = "none"
    }


}


back_top.onclick = ()=>{
    // console.log("maliki")
    window.scrollTo({
        top: 0,
        left: 100,
        behavior: 'smooth'
    })
}