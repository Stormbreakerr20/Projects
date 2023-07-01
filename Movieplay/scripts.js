const watch=document.querySelector(".watch");
const vid=document.querySelector(".vid");
const cross=document.querySelector(".cross");
const play=document.querySelector(".play");

// for coordinats where clicking use mouseover
watch.addEventListener("mouseover", (e)=>{
    console.log(e.pageX - watch.offsetLeft); 
    console.log(e.pageY - watch.offsetTop); // now inside watch coord will be from 0
    const x=e.pageX - watch.offsetLeft;
    const y=e.pageY - watch.offsetTop;

    watch.style.setProperty("--xPos" , x+"px");
    watch.style.setProperty("--yPos" , y+"px");
})

watch.addEventListener("click",()=>{
    vid.classList.add("active");
    play.play();
})
cross.addEventListener("click",()=>{
    vid.classList.remove("active");
    play.pause();
    
})