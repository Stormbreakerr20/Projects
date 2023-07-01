
const main =document.querySelector('.main')
const join =document.querySelector('.join')
const cross =document.querySelector('.cross')
const pop =document.querySelector('.pop')


join.addEventListener("click",()=>{
    main.classList.add("active");
    pop.classList.remove("off");
})
cross.addEventListener("click",()=>{
    main.classList.remove("active");
    pop.classList.add("off");
})