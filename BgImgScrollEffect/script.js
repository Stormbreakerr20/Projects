const i = document.querySelector('.i')

window.addEventListener("scroll",()=>{
    update();
})

function update(){
    i.style.opacity = 1 - window.scrollY/700;
    i.style.backgroundSize = 120 - (window.scrollY/600)*60 +"%";
}