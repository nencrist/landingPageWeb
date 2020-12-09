window.addEventListener('load', function(){

    const timeline = gsap.timeline({repeat: -1, repeatDelay: 2});
    
    timeline.to('.promo__cap', {rotation: 5, duration: .2});
    timeline.to('.promo__cap', {rotation:-5, duration: .2});
    timeline.to('.promo__cap', {rotation: 3, duration: .2});
    timeline.to('.promo__cap', {rotation: 0, duration: .2});

});

