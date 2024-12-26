
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
const seAu = []
const seLa = []
const seGe = []

function arr(list) {
    const all = list.map(book => {
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
arr(BOOKS)
function nev(){
 const ar = []
 for (const book of BOOKS) {
    if(!ar.includes(book.author)){
        ar.push(book.author)
    }


 }

const ckecbox = ar.map( a => {
    return `
       <div class="boxvan">
            <label for="${a}">${a}</label>
            <input onchange="handelau(event)" type="checkbox" id="${a} value="${a}">
        </div>
    `
co
}).join("")
fil.innerHTML = ckecbox


const arin = []
for (const book of BOOKS) {
   if(!arin.includes(book.language)){
       arin.push(book.language)
   }
   
}
const ckecbo = arin.map( aa => {
   return `

      <div class="boxtoo">
           <label for="${aa}">${aa}</label>
           <input onchange="handella(event)"  type="checkbox" id="${aa}" value="${aa}">
       </div>
   `
}).join("")
fil.innerHTML += ckecbo


const ari = []
for (const book of BOOKS) {
   if(!ari.includes(book.genre)){
       ari.push(book.genre)
   }
   
}
const ckecb = ari.map( ar => {
   return `

      <div class="boxtri">
           <label for="${ar}">${ar}</label>
           <input  onchange="handelge(event)"  type="checkbox" id="${ar}" value="${ar}">
       </div>
   `
}).join("")
fil.innerHTML += ckecb
}
nev()

function handelau(evt){
  if (evt.target.checked){
seAu.push(evt.target.value)
  } else {
const findall = seAu.findIndex(itme => itme === evt.target.value)
seAu.splice(findall , 1)
  }
  handFil()

}

function handella(evt){
    if (evt.target.checked){
        seLa.push(evt.target.value)
          } else {
        const findall = seLa.findIndex(itme => itme === evt.target.value)
          }
}

function handelge(evt){
    if (evt.target.checked){
        seGe.push(evt.target.value)
          } else {
            // seGe = seGe.filter(i => i !== evt.target.value)
        const findall = seGe.findIndex(itme => itme === evt.target.value)
          }
}
function handFil(){
const authorsfil = BOOKS.filter(book => seAu.includes(book.author) )
console.log(authorsfil)
return authorsfil
}







