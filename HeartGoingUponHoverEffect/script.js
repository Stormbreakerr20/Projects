const body = document.querySelector('body');

body.addEventListener('mousemove' , (e)=>{
    console.log(e.offsetX)
    var xpos = e.offsetX;
    var ypos = e.offsetY;

    const span = document.createElement('span');
    span.style.left = xpos + 'px';
    span.style.top = ypos + 'px';

    x=Math.random()*300
    span.style.height =x + 'px';
    span.style.width = x + 'px';

    body.appendChild(span);
    
    setTimeout(() => {
        span.remove()
    }, 3000);
})