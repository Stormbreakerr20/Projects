const arr = ["Web developer","IITian","Badminton Player","Coder"]

const txt = document.querySelector(".txt");
txt.innerHTML = `<h1>I am a Web Developer</h1>`

let i=0;
let pos=0;
update();
function update(){
    if(i=== arr.length){
        i=0;
    }
    txt.innerHTML = `<h1>I am ${arr[i].slice(0,1)==='I'?"an":"a"} ${arr[i].slice(0,pos)}</h1>`;
    pos++;
    setTimeout(() => {
        update();
    }, 400);
    if(pos === arr[i].length+1){        
        setTimeout(() => {
            i++;
            pos=0;
        }, 500);
    }

}
