const btnNext = document.querySelector('form .btn .submit');
const btnPrev = document.querySelector('form .btn .prev');
const btnSub = document.getElementById('next-btn');
const secondHistory = document.getElementById('step-twoB');
const firstHistory = document.getElementById('step-twoA');
const steps = document.getElementById('indicator');
const indicator = document.querySelector('.indicator .line span');
const indicatorItems = document.querySelectorAll('.indicator p');
const indicatorText = document.querySelectorAll('.indicator h5');
const form = document.querySelector('form');
const allTab = document.querySelectorAll('form .tab');
//console.log(allTab)
let i = 0;
allTab[i].classList.add("show");
indicatorItems[i].classList.add('active')
indicatorText[i].classList.add('active')
indicator.style.width = i;
// if(i === 0){
//     btnPrev.style.display='none';
// }else{
//     btnPrev.style.display='block';
// };
if(i === 1){
    btnSub.style.display='block';
}else{
    btnSub.style.display='none';
};




btnNext.addEventListener('click', function(){
    i += 1;
    if(i >= allTab.length){

    }else{
        for (let j=0; j < allTab.length; j++){
            allTab[j].classList.remove("show");
            indicatorItems[j].classList.remove('active');
            indicatorText[j].classList.remove('active');
            
        }
        for (let j=0; j < i; j++){
            indicatorItems[j].classList.add('active');
            indicatorText[j].classList.add('active');
        }
        allTab[i].classList.add("show");
        if(i=== 2){
            indicator.style.width = `${i * 36}%`;

        } else {
            indicator.style.width = `${i * 34}%`;

        }
       
        indicatorItems[i].classList.add('active');
        indicatorText[i].classList.add('active');
    };
    // if(i === 0){
    //     btnPrev.style.display='none';
    // }else{
    //     btnPrev.style.display='block';
    // }
    if( i === 1){
        btnNext.style.display = "none"
    }else{
        btnNext.style.display = "block"
    };
    if(i === 1){
        btnSub.style.display='block';
    }else{
        btnSub.style.display='none';
    };
    if(i === 3){
        btnNext.style.display='none';
        steps.style.display='none'
    };
    
    
    
    
});

function myFunction() {
    btnNext.style.display = "block";
    btnSub.style.display = "none";
    firstHistory.style.display = "none";
    secondHistory.style.display="block"

  }
// btnPrev.addEventListener('click', function(){
//     i -= 1;
//         for (let j=0; j < allTab.length; j++){
//             allTab[j].classList.remove("show");
//             indicatorItems[j].classList.remove('active');
//             indicatorText[j].classList.remove('active');
            
//         }
//         for (let j=0; j < i; j++){
//             indicatorItems[j].classList.add('active');
//             indicatorText[j].classList.add('active');
//         }
//         allTab[i].classList.add("show");
//         if(i === 2){
//             indicator.style.width = `${i * 36}%`;

//         } else {
//             indicator.style.width = `${i * 34}%`;
//         }
        
//         indicatorItems[i].classList.add('active');
//         indicatorText[i].classList.add('active');
//         if(i === 0){
//             btnPrev.style.display='none';
//         }else{
//             btnPrev.style.display='block';
//         }
// }) 
   

