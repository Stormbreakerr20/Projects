const main= document.querySelector(".main")

// const ele = document.querySelector(".ele")
// console.log(ele);

for (let index = 0; index < 30; index++) {
    const x= document.createElement('div');
    x.classList.add('ele');
    main.appendChild(x);    
}
const ele1=document.querySelectorAll('.ele');                       // with all it gets list but without it give only 1 element
console.log(ele1); // list of all div with class ele

const randomgen=()=>{
    const char="0123456789abcdef";
    var y="#";
    for(let i=0;i<6;i++){
        var x1= Math.floor(Math.random()*char.length);
        y+=char.substring(x1,x1+1);
    }
    return y;
}

const gen=()=>{
    ele1.forEach(i => {
        var x=randomgen();
        i.style.backgroundColor = x;
        i.innerText = x;
    });
}
gen();

