const btn=document.querySelector(".btn");

// for coordinats where clicking use mouseover
btn.addEventListener("mouseover", (e)=>{
    console.log(e.pageX - btn.offsetLeft); 
    console.log(e.pageY - btn.offsetTop); // now inside btn coord will be from 0
    const x=e.pageX - btn.offsetLeft;
    const y=e.pageY - btn.offsetTop;

    btn.style.setProperty("--xPos" , x+"px");
    btn.style.setProperty("--yPos" , y+"px");
})