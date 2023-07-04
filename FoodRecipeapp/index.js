async function byname(name){
    const resp = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s='+name);
    const resdata = await resp.json();
    return resdata.meals[Math.floor(Math.random()*(resdata.meals.length))];
    
}   
async function byid(id){
    const resp = await fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i='+id);
    const resdata = await resp.json();
    return resdata.meals[0];
}   
async function random(){
    const resp = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
    const resdata = await resp.json();

    return resdata.meals[0];
}  

// Updating Big Image Area

async function getbigimage(name , rand =false){
    const bigpic = document.querySelector('.bigpic');
    const dishname = document.querySelector('.dishname');
    const x = await(rand?random(): byname(name));
    const data=x;
    
    console.log(data);
    bigpic.src = data.strMealThumb;
    dishname.innerText = data.strMeal

    const heart= document.querySelector('.dil');
    heart.addEventListener("click",()=>{
        if(heart.style.color == "purple"){
            heart.style.color = "black";
            removeMealToLS(data.idMeal);
            
        }
        else{
            heart.style.color = "purple";
            addMealToLS(data.idMeal);
        }
        const ul = document.querySelector(".favhere");

        fav();
    })

}
getbigimage("",true);

// Local Storage Part For Fav
function addMealToLS(mealId){
    let mealIds = JSON.parse(localStorage.getItem('mealIds')) === null?[]:JSON.parse(localStorage.getItem('mealIds'));
    console.log(mealId,"This is add");

    localStorage.setItem('mealIds',JSON.stringify([...mealIds,mealId]));
}
function removeMealToLS(mealId){
    let mealIds = JSON.parse(localStorage.getItem('mealIds')) === null?[]:JSON.parse(localStorage.getItem('mealIds'));
    console.log(mealId);
    localStorage.setItem('mealIds',JSON.stringify(mealIds.filter(i=> i !==mealId )));
    
}

// Display fav in fav section
async function fav(){
    let mealIds = JSON.parse(localStorage.getItem('mealIds')) === null?[]:JSON.parse(localStorage.getItem('mealIds'));
    const ul = document.querySelector(".favhere");
    ul.innerHTML='';
    
    for(let i=0;i<mealIds.length;i++){

        const data =await byid(mealIds[i]);

        var li = document.createElement('li');

        li.innerHTML = `<img src="${data.strMealThumb}" alt=""><span>${data.strMeal}</span><i class="fa fa-times fa-x cross" aria-hidden="true"></i>`
        const cross = li.querySelector('.cross')
        cross.addEventListener("click",()=>{
            removeMealToLS(mealIds[i]);
            fav();
        })
        ul.appendChild(li);
    }
}
fav();

// By Search

const searchbtn = document.querySelector(".search");
searchbtn.addEventListener("click",async ()=>{
    const inp =document.querySelector(".inp");
    getbigimage(inp.value,false);
})
