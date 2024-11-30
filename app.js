



const todo = document.getElementById("todos");
const box = document.getElementById("ht-box");
const list = document.getElementById("list")


function clice() {
    const val = todo.value
  
    if (val) {
        const ing = `
        <li id="${val}" style="red">
        ${val}
   
         <button onclick="del(this)">delete</button>
              <button onclick="ed(this)" >edit</button>
               </li>
        `

        list.innerHTML += ing

    }
}



function del(clickdel) {
    clickdel.parentElement.remove()
}
function ed(editing){

}

















// function raded() {
//     const ing = ad.map( rando => {
//     return `
//   <li id="${rando}" style="red">
//         ${rando}
   
//          <button onclick="del(this)">delete</button>
//               <button>edit</button>
//                </li>   `
// })
// }
// const temp = ing.join("/")

// list.innerHTML = ing