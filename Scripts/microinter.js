window.addEventListener('load', function(){

    const timeline = gsap.timeline({repeat: -1, repeatDelay: 2});
    
    timeline.to('.promo__cap', {rotation: 5, duration: .2});
    timeline.to('.promo__cap', {rotation:-5, duration: .2});
    timeline.to('.promo__cap', {rotation: 3, duration: .2});
    timeline.to('.promo__cap', {rotation: 0, duration: .2});

});

//interaccion popUp

const btnOpenRed = document.querySelector('.redCap');
const btnOpenBlue = document.querySelector('.blueCap');
const btnOpenWhite = document.querySelector('.whiteCap');
const btnOpenOrange = document.querySelector('.orangeCap');
const overlay = document.querySelector('.overlay');
const popUpRed = document.querySelector('.popUp');
const popUpBlue = document.querySelector('.popUp--blue');
const popUpWhite = document.querySelector('.popUp--white');
const popUpOrange = document.querySelector('.popUp--orange');

const closeRed = document.querySelector('.closePopUp');
const closeBlue = document.querySelector('.closePopUp--blue');
const closeWhite= document.querySelector('.closePopUp--white');
const closeOrange = document.querySelector('.closePopUp--orange');



btnOpenRed.addEventListener('click', function(event){

    event.preventDefault();
    overlay.classList.add('active');
    popUpRed.classList.add('active');

});
btnOpenBlue.addEventListener('click', function(event){

    event.preventDefault();
    overlay.classList.add('active');
    popUpBlue.classList.add('active');

});
btnOpenWhite.addEventListener('click', function(event){

    event.preventDefault();
    overlay.classList.add('active');
    popUpWhite.classList.add('active');

});
btnOpenOrange.addEventListener('click', function(event){

    event.preventDefault();
    overlay.classList.add('active');
    popUpOrange.classList.add('active');

});

closeRed.addEventListener('click', function(event){

    event.preventDefault();
    overlay.classList.remove('active');
    popUpRed.classList.remove('active');
});

closeBlue.addEventListener('click', function(event){

    event.preventDefault();
    overlay.classList.remove('active');
    popUpBlue.classList.remove('active');

});


closeWhite.addEventListener('click', function(event){

    event.preventDefault();
    overlay.classList.remove('active');
    popUpWhite.classList.remove('active');

});

closeOrange.addEventListener('click', function(event){

    event.preventDefault();
    overlay.classList.remove('active');
    popUpOrange.classList.remove('active');

});