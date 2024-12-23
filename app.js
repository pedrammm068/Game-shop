
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
function ed(editing){

}















