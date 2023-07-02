const next=document.querySelector('.r');
const prev=document.querySelector('.l');

let currimg= 1;

next.addEventListener("click",()=>{
    currimg++;
    updateimg();
})
prev.addEventListener("click",()=>{
    currimg--;
    updateimg();
})
const el= document.querySelector(".cont")
function updateimg(){
    if(currimg>5){
        currimg=1;
    }
    else if(currimg<=0){
        currimg=5;
    }
    el.style.transform = `translateX(-${(currimg-1)*400 + 'px'})`
    setTimeout(() => {
        currimg++;
        updateimg();
    }, 3000);
}
updateimg();