
const todo = document.getElementById("todos");
const box = document.getElementById("ht-box");
const list = document.getElementById("list")


function clice() {
    const val = todo.value

    if (val) {
        const ing = `
        <li id="${val}">
        ${val}
   
         <button style="background-color: red ; border-radius: 6px ; padding: 4px;width: 6%;color: white;text-transform: capitalize;" onclick="del(this)">delete</button>
              <button style="background-color: grey;  border-radius: 6px ;
   padding: 4px;
   width: 6%;
   color: white;
 text-transform: capitalize;" onclick="ed(this)" >edit</button>
               </li>
        `

        list.innerHTML += ing

    }
}




function del(clickdel) {
    clickdel.parentElement.remove()
}
function ed(editing) {

}
// 

const alling = document.querySelector(".all-cards")
const fil = document.querySelector(".filter")

function arr() {
    const all = BOOKS.map(book => {
        return `
         
    <div class="card">
        <img src="./imges/${book.imgSrc}" alt="">
        <div>
            <h2>${book.title}</h2>
            <p>${book.author}</p>
        </div>
        <span class="ta">${book.genre}</span>
        <span class="sa">${book.published_date}</span>
    </div>

        `
    }).join("")

    alling.innerHTML = all
}
arr()
function nev(){
 const ar = []
 for (const book of BOOKS) {
    if(!ar.includes(book.author)){
        ar.push(book.author)
    }
    
 }
const ckecbox = ar.map( a => {
    return `
       <div>
            <label for="${ar}">${ar}</label>
            <input  type="checkbox" id="${ar}">
        </div>

    `
}).join("")
fil.innerHTML = ckecbox
}
nev()














