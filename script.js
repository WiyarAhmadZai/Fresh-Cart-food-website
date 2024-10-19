const slider = document.querySelector('.slider');
const slides = document.querySelectorAll(".slide");
const prevBnt = document.querySelector(".prev-btn");
const nextBnt = document.querySelector(".next-btn");
const topDealInput = document.querySelector('.email-input');





let slideIndex = 0;

slides[slideIndex].classList.add('active');

prevBnt.addEventListener('click', prevSlide);
nextBnt.addEventListener('click', nextSlide);

function prevSlide(){
    slides[slideIndex].classList.remove('active');
    slideIndex = (slideIndex===0)? slides.length-1 : slideIndex-1;
    slides[slideIndex].classList.add('active');
    slider.style.transform = `translateX(-${slideIndex*100}%)`;
}
function nextSlide(){
    slides[slideIndex].classList.remove('active');
    slideIndex = (slideIndex===slides.length-1)? 0 : slideIndex+1;
    slides[slideIndex].classList.add('active');
    slider.style.transform = `translateX(-${slideIndex*100}%)`;
}

function alert(){
    if(topDealInput.value == false){
        confirm('هی هی یو څه خو ولیکه کنه یاره دا ایمیل به دې پلار اډ کويه');
        // alert("هی هی یو څه خو ولیکه کنه یاره"); 
        console.log("هی هی یو څه خو ولیکه کنه یاره دا ایمیل به دې پلار اډ کوي");
    }
}

topDealInput.addEventListener('blur', alert);

