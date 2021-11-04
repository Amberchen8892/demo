const showContent = document.getElementById("threeSeconds");
const banner = document.getElementById("text-banner");
const page = document.getElementsByClassName("whole-page")
const sectionThree = document.getElementById("Review");
const sectionFour = document.getElementById("Pricing");
const url = window.location.pathname;

const email= document.getElementById("email");
console.log(email.innerHTML)
// TweenMax.to('.overlay', 2, {
//     delay: 7,
//     top: '-200%',
//     ease: Expo.easeInOut,
//   });

setTimeout(function(){
    
    
    if (showContent.classList.contains('hidden')) {
        showContent.classList.remove('hidden');
        setTimeout(function () {
          showContent.classList.remove('visuallyhidden');
        }, 2);
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

}, 1000);
setTimeout(function(){
    sectionThree.style.display = "block";
    sectionFour.style.display = "block";

}, 2000);

if(url === "/demo/brandon/"){
  email.innerHTML = "brandon@wype.io"

} else if(url === "/demo/tyson/"){
  email.innerHTML = "tyson@wype.io"
}else if(url === "/demo/kyle/"){
  email.innerHTML = "kyle@wype.io"
} 

