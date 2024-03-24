// scroll sections

let menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
let sections= document.querySelectorAll('.section');  
let navLinks =document.querySelectorAll('header nav a'); 

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
        navLinks.forEach(links =>{
            links.classList.remove('active');
            document.querySelector('header nav a[href*=' +  id + ']').classList.add('active');
        
        });
        // active sections for animate on scroll
        sec.classList.add('show-animate');

 }
        // repeats animation on scroll
        else{
            sec.classList.remove('show-animate');
        }
    });

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

}










// slider
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById( 'next' );
let prev = document.getElementById( 'prev' );
let thumbnails = document.querySelectorAll('.thumbnail .item');

let countitem = items.length;
let itemActive = 0;

next.onclick = function(){
    itemActive = itemActive + 1;
    if(itemActive >= countitem){
        itemActive = 0
    }
    showSlider();
}
prev.onclick = function(){
    itemActive = itemActive - 1;
    if (itemActive < 0) {
        itemActive = countitem - 1;
    }
    showSlider()
}

let refreshInterval = setInterval(() => {
    next.click();
}, 5000)

function showSlider(){
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active')
    itemActiveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');

    items[itemActive].classList.add("active");
    thumbnails[itemActive].classList.add("active");

    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click();
    }, 5000)

}

thumbnails.forEach((thumbnail, index)=>{
    thumbnail.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    })
})