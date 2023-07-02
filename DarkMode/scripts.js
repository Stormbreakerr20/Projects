const body = document.querySelector("body");
const b = document.querySelector(".b");
let x=-50;
let y=-50;
b.style.setProperty("--xPos" , x+"%");
b.style.setProperty("--yPos" , y+"%");

b.addEventListener("click", ()=>{
    if(x==-50){
        x=150;
        body.style.backgroundColor="black";
        b.style.backgroundColor="white";

    }
    else{
        x=-50;
        body.style.backgroundColor="white";
        b.style.backgroundColor="black";
    }
    b.style.setProperty("--xPos" , x+"%");
    b.style.setProperty("--yPos" , y+"%");

})