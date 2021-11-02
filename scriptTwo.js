const showContent = document.getElementById("threeSeconds");
const banner = document.getElementById("text-banner");
const page = document.getElementsByClassName("whole-page")
const sectionThree = document.getElementById("Review");
const sectionFour = document.getElementById("Pricing");
TweenMax.to('.overlay', 2, {
    delay: 7,
    top: '-200%',
    ease: Expo.easeInOut,
  });

setTimeout(function(){
    
    
    if (showContent.classList.contains('hidden')) {
        showContent.classList.remove('hidden');
        setTimeout(function () {
          showContent.classList.remove('visuallyhidden');
        }, 1000);
      } else {
        showContent.classList.add('visuallyhidden');    
        showContent.addEventListener('transitionend', function(e) {
          showContent.classList.add('hidden');
        }, {
          capture: false,
          once: true,
          passive: false
        });
      }

}, 8000);
setTimeout(function(){
    sectionThree.style.display = "block";
    sectionFour.style.display = "block";

}, 6000);


