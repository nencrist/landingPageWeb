const interactiveImage = document.querySelector('.image__interactive');
const colorBtns = document.querySelectorAll('.btn__mini');

function colorHandle(event) {
    var color = event.target.getAttribute('name');
    if(color == "black"){
        interactiveImage.setAttribute('src', "/Images/persoCapBlack.png");
    }
    if(color == "red"){
        interactiveImage.setAttribute('src', "/Images/persoCapRed.png");
    }
    if(color == "blue"){
        interactiveImage.setAttribute('src', "/Images/persoCapBlue.png");
    }
    if(color == "green"){
        interactiveImage.setAttribute('src', "/Images/persoCapGreen.png");
    }
    if(color == "yellow"){
        interactiveImage.setAttribute('src', "/Images/persoCapYellow.png");
    }
    if(color == "orange"){
        interactiveImage.setAttribute('src', "/Images/persoCapOrange.png");
    }
    if(color == "brown"){
        interactiveImage.setAttribute('src', "/Images/persoCapBrown.png");
    }
    if(color == "white"){
        interactiveImage.setAttribute('src', "/Images/persoCap.png");
    }
    console.log('click', color);
}

colorBtns.forEach(function (elem, index) {
 elem.addEventListener('click', colorHandle);
});
