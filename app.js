 const buot = document.getElementById("get-ht");
const box = document.getElementById("ht-box");

function clickHt(){
    const inputVal = input.value
    
    const litodo = document.createElement("img")
    litodo.src = inputVal
    box.appendChild(litodo)
}