var hr = document.getElementById("hr");
var min = document.getElementById("min");
var sec = document.getElementById("sec");
var ampm = document.getElementById("ampm");


function f(x){
    return x<10? '0'+x.toString(): x;
}
updatet=()=>{
    let x="AM";
    let h= new Date().getHours();
    if(h>12){
        x="PM";
        h=f(h-12);
    }
    hr.innerText = h;
    min.innerText =f( new Date().getMinutes());
    sec.innerText = f( new Date().getSeconds());
    ampm.innerText=x;
    setTimeout(() => {
        updatet();
    },500);

}
updatet();