const nav = document.querySelector('.navbar')
const bottom = document.querySelector('.bottom')


window.addEventListener('scroll', ()=>{
    console.log(window.scrollY);

    if(window.scrollY> bottom.offsetTop - 50 - nav.offsetHeight){
        nav.classList.add('active');
    }
    else{
        nav.classList.remove('active');
    }
})
