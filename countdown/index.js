const t = "1 Jan 2024";



const days =document.querySelector('.days');
const hours =document.querySelector('.hours');
const min =document.querySelector('.min');
const sec =document.querySelector('.sec');

function f(i){
    return i>9? i : '0'+i;
}
function update(){
    
    const target = new Date(t);
    const current = new Date();

    const secleft = (target - current)/1000;
    if(secleft<=0){
        alert("Happy New Year");
        return
    }

    const daysl = Math.floor(secleft/3600/24);
    const hrsl = Math.floor(secleft/3600)%24;
    const minl = Math.floor(secleft/60)%60;
    const secl = Math.floor(secleft)%60;
    days.innerText = f(daysl);
    hours.innerText = f(hrsl);
    min.innerText = f(minl);
    sec.innerText = f(secl);
    setTimeout(() => {
        update();
    }, 500);
}
update();