
const todo = document.getElementById("todos");
const box = document.getElementById("ht-box");
const list = document.getElementById("list")
const alling = document.querySelector(".all-cards")
const fil = document.querySelector(".filter")
const onSabad = document.querySelector(".Sabad-kharid")
const onSabadmob = document.querySelector(".Sabad-kharidmob")
const toast = document.createElement("div")
document.body.appendChild(toast)

const seAu = []
const seLa = []
const seGe = []
const Sabd = JSON.parse(localStorage.getItem("Sabd")) || []



function Toast (message, actionText, actionCallback) {
    const stringToast = document.querySelector(".custom-toast")
    if (stringToast) {
        stringToast.remove()
    }
    const toast = document.createElement("div")
    toast.classList.add("custom-toast")
    toast.innerHTML = `
    <button class="toast-action">${actionText}</button>
    <p>${message}</p>
    `
    document.body.appendChild(toast)
    const Btn = toast.querySelector(".toast-action")
  Btn.addEventListener("click" , () => {
    actionCallback()
    toast.remove()
  })
  setTimeout(() => {
    if(toast.parentNode){
    toast.remove()
    }
    } , 5000)
}

function arr(list) {
    if(list.length === 0) {
        setTimeout(() => {
        alling.innerHTML = `
        <p>چیزی یافت نشد</p>
        ` 
        }, 6000) 

        alling.innerHTML = `
    <section>
<div class="loader">
    <span style="--i:1;"></span>
    <span style="--i:2;"></span>
    <span style="--i:3;"></span>
    <span style="--i:4;"></span>
    <span style="--i:5;"></span>
    <span style="--i:6;"></span>
    <span style="--i:7;"></span>
    <span style="--i:8;"></span>
    <span style="--i:9;"></span>
    <span style="--i:10;"></span>
    <span style="--i:11;"></span>
    <span style="--i:12;"></span>
    <span style="--i:13;"></span>
    <span style="--i:14;"></span>
    <span style="--i:15;"></span>
    <span style="--i:16;"></span>
    <span style="--i:17;"></span>
    <span style="--i:18;"></span>
    <span style="--i:19;"></span>
    <span style="--i:20;"></span>

</div>



    </section>
        `
    }
else {

    const all = list.map(book => {
        return `
        
            <div class="card">
            <img src="./imges/${book.imgSrc}" alt="">
        <div>
            <h2>${book.title}</h2>
            <p class="pau">${book.author}</p>
            ${Sabd.includes(book.id) ? (
                ` <div class="sabadckaridiv">
                <button onclick="Remosa(${book.id})" class="sabadre">حذف از سبد خرید</button>
                </div>`
            ) : (
                `   <div class="sabadckaridiv">
                <button onclick="Addsa(${book.id})" class="sabadckarid">اضافه به سبد خرید</button>
                </div>`
            )} 
            
            </div>
            <span class="ta">${book.genre}</span>
            <span class="sa">${book.published_date}</span>
            </div>
            
            `
        }).join("")
        
        alling.innerHTML = all
    }
    }

arr(BOOKS)
// function arr(list , lim = 8) {
    //     const Slidlist = list.slice(0 , lim)
    
//     const all = Slidlist.map(book => {
//         return `
         
//     <div class="card">
//         <img src="./imges/${book.imgSrc}" alt="">
//         <div>
//             <h2>${book.title}</h2>
//             <p class="pau">${book.author}</p>
//               ${Sabd.includes(book.id) ? (
//                ` <div class="sabadckaridiv">
//                 <button onclick="Remosa(${book.id})" class="sabadre">حذف از سبد خرید</button>
//                 </div>`
//               ) : (
//              `   <div class="sabadckaridiv">
//                 <button onclick="Addsa(${book.id})" class="sabadckarid">اضافه به سبد خرید</button>
//                 </div>`
//               )} 
          
//         </div>
//         <span class="ta">${book.genre}</span>
//         <span class="sa">${book.published_date}</span>
//     </div>

//         `
//     }).join("")

//     alling.innerHTML = all

// }
// arr(BOOKS , 8)
function nev(){

    
const ari = []
for (const book of BOOKS) {
   if(!ari.includes(book.author)){
       ari.push(book.author)
   }
   
}
const ckecb = ari.map( arf => {
   
    return `

      <div class="boxtri">
           <label for="${arf}">${arf}</label>
           <input  onchange="handelge(event)"  type="checkbox" value="${arf}" id="${arf}">
       </div>
   `
}).join("")
fil.innerHTML += ckecb

const arin = []
for (const book of BOOKS) {
   if(!arin.includes(book.language)){
       arin.push(book.language)
   }
   
}
const ckecbo = arin.map( aa => {
   return `

      <div class="boxtri bgto">
           <label for="${aa}">${aa}</label>
           <input onchange="handella(event)"  type="checkbox" id="${aa}" value="${aa}">
       </div>
   `
}).join("")
fil.innerHTML += ckecbo

const ar = []
for (const book of BOOKS) {
   if(!ar.includes(book.genre)){
       ar.push(book.genre)
   }


}

const ckecbox = ar.map( a => {
   return `
      <div class="boxtri bgvan">
           <label for="${a}">${a}</label>
           <input onchange="handelau(event)" type="checkbox" id="${a}" value="${a}">
       </div>
   `
}).join("")
fil.innerHTML += ckecbox

}
nev()

function handelau(evt){

  if (evt.target.checked){
seGe.push(evt.target.value)
  } else {
const findall = seGe.findIndex(itme => itme === evt.target.value)
seGe.splice(findall , 1)
  }
  handFil()
}

function handella(evt){
    if (evt.target.checked){
        seLa.push(evt.target.value)
          } else {
        const findall = seLa.findIndex(itme => itme === evt.target.value)
        seLa.splice(findall , 1)
          }
          handFil()
 
}
function Filclick() {
    fil.classList.toggle("hid")
}
function Addsa(id) {
Sabd.push(id)
localStorage.setItem("Sabd" , JSON.stringify(Sabd))
handFil()
RenderAddSabad()
Toast("محصول اضافه شد" , "لغو" , () => {
    const index = Sabd.findIndex(itme => itme === id)
    Sabd.splice(index , 1)
    localStorage.setItem("Sabd" , JSON.stringify(Sabd))
    handFil()
    RenderAddSabad()
    
} )

}
function Remosa(id){
    const fond = Sabd.findIndex(itme => itme === id)
    Sabd.splice(fond , 1)
    localStorage.setItem("Sabd" , JSON.stringify(Sabd))
    handFil()
    RenderAddSabad()
    Toast("محصول از سبد حذف شد" , "لغو" , () => {
       Sabd.push(id)
       localStorage.setItem("Sabd" , JSON.stringify(Sabd))
       handFil()
       RenderAddSabad()
        
    } )
}


function handelge(evt){
if(evt.target.checked){
    seAu.push(evt.target.value)
} else{
   
  const foin =  seAu.findIndex(item => item === evt.target.value)
   seAu.splice(foin , 1)
}
handFil()
 
}
function handFil(){
    let res = [...BOOKS]
    if(seAu.length != 0){
res = res.filter(book => seAu.includes(book.author) )
}
if(seGe.length != 0){
    res = res.filter(book => seGe.includes(book.genre) )
    }
    if(seLa.length != 0){
        res = res.filter(book => seLa.includes(book.language) )
        }
        

arr(res) 

}
function OnclicKSabad() {
    RenderAddSabad()
    onSabad.classList.toggle("hid")
}
function OnclicKSabadmob() {
    RenderAddSabad()
onSabadmob.classList.toggle("hid")
}
function RenderAddSabad(){
    const list = Sabd.map(sab => BOOKS.find(book => book.id === sab))
    const temp = list.map(itme => {
return `

<div class="is">
        <img src="./imges/${itme.imgSrc}" alt="">
        <div>
            <h2>${itme.title}</h2>
            <p class="pau">${itme.author}</p>
            <div class="sabadckaridiv">
                <button onclick="RemosabadAdd(${itme.id})" class="sabadre">حذف از سبد خرید</button>
                </div>
                  </div>
            </div>
          
`
    }).join("")
    onSabad.innerHTML = temp
    onSabadmob.innerHTML = temp
}
RenderAddSabad()
function RemosabadAdd(id){
 const fond = Sabd.findIndex(itme => itme === id)
    Sabd.splice(fond , 1)
    localStorage.setItem("Sabd" , JSON.stringify(Sabd))
    RenderAddSabad(Sabd)
    handFil()

    Toast("محصول از سبد خرید حذف شد" , "لغو" , () => {
       Sabd.push(id)
        localStorage.setItem("Sabd" , JSON.stringify(Sabd))
        handFil()
        RenderAddSabad()
        
    } )

}
