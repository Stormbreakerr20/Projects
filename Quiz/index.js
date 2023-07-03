
const m = [{question:"Who is Luv", a:"IITian",b:"Cricketer",c:"WWE Player",d:"Football Player" ,correct: "a"},{question:"Who is Messi", a:"Cricketer",b:"IITian",c:"WWE Player",d:"Football Player" ,correct: "d"}]
const opt = document.getElementsByName("answer")
const submit = document.querySelector(".submit");
const que =document.querySelector('.que');
const a =document.querySelector('.a');
const b =document.querySelector('.b');
const c =document.querySelector('.c');
const d =document.querySelector('.d');
const main =document.querySelector('.main');

let current =0;
function quiz(){
    let data= m[current];
    que.innerHTML = data.question;
    a.innerHTML = data.a;
    b.innerHTML = data.b;
    c.innerHTML = data.c;
    d.innerHTML = data.d;
}
quiz();
let score=0;
submit.addEventListener("click",()=>{
    let optselected=false;
    for(let i=0;i<opt.length;i++){

        if(opt[i].checked){
            if(opt[i].value == m[current].correct){
                score++;
            }
            optselected=true;
            opt[i].checked=false;
            
            break;
        }

    }
    if(!optselected){
        alert("Select one of the Option!");
        return;
    }
    current++;
    if(current == m.length){
        main.innerHTML = `<span class="k">You Completed the quiz! your score = ${score}/2...</span>`
        main.classList.add("score")
    }
    else{
        
        quiz();
    }
})
