const watch = document.querySelector('.watch');
const cross = document.querySelector('.cross');
const vid = document.querySelector('.vid');
const play = document.querySelector('.play');
watch.addEventListener("mouseover", (e)=>{
    console.log(e.pageX - watch.offsetLeft); 
    console.log(e.pageY - watch.offsetTop); // now inside watch coord will be from 0
    const x=e.pageX - watch.offsetLeft;
    const y=e.pageY - watch.offsetTop;

    watch.style.setProperty("--xPos" , x+"px");
    watch.style.setProperty("--yPos" , y+"px");
})
watch.addEventListener("click",()=>{
    setTimeout(() => {
        play.play()
    }, 2000);
    vid.classList.add('active');
    if(play.currentTime != 0 ){
        let c= confirm("Do you want to continue watching?");
        if(!c){
            play.currentTime =0;
        }
    }
})
cross.addEventListener('click',()=>{
    play.pause();
    vid.classList.remove('active');
})
