const next=document.querySelector('.r');
const prev=document.querySelector('.l');

let currimg= 1;
let  click =false;
next.addEventListener("click",()=>{
    currimg++;
    updateimg(true);
})
prev.addEventListener("click",()=>{
    currimg--;
    updateimg(true);
})
const el= document.querySelector(".cont")
function updateimg(click){
    if(currimg>5){
        currimg=1;
    }
    else if(currimg<=0){
        currimg=5;
    }
    el.style.transform = `translateX(-${(currimg-1)*400 + 'px'})`

    if(!click) f();
}

function f(){
    setTimeout(() => {
        currimg++;
        updateimg();
    }, 3000);
}
updateimg();