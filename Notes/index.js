
const add =document.querySelector(".add");



add.addEventListener("click",()=>{
    addnote();
})
function addnote(){
    const note = document.createElement('div');
    note.classList.add('note');
    note.innerHTML = `    <div class="note">
                        <div class="tools">
                            <i class="fa-solid fa-pen-to-square edit"></i>
                            <i class="fa-solid fa-trash del"></i>
                        </div>
                        <div class="main"></div>
                        <textarea name="" id="" cols="30" rows="10" class="txt hidden" ></textarea>
                    </div>`;

    const main =note.querySelector(".main");
    const textarea =note.querySelector("textarea");
    const edit =note.querySelector(".edit");
    const del =note.querySelector(".del");

    edit.addEventListener("click",()=>{
        main.classList.toggle("hidden");
        textarea.classList.toggle("hidden");
        if(main.classList.contains("hidden")){
            edit.style.backgroundColor = "white";
        }
        else{
            edit.style.backgroundColor = "";
        }

    })

    del.addEventListener("click",()=>{
        document.body.removeChild(note);
    })

    textarea.addEventListener('input', (e)=>{
        // e.target is <textarea name="" id="" cols="30" rows="10" class="txt"></textarea>  
        // e.target.value is content 
        const {value} = e.target; // get value from it

        main.innerHTML = marked(value);
    })
    document.body.appendChild(note);
}


