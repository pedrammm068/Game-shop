
const boxing = [...document.querySelectorAll(".box")]
const cont = document.getElementById("co")
const mod = document.querySelector(".modal")
const modbg = document.querySelector(".modalbg")
const cl = document.querySelector(".click")
const sste = document.querySelector(".sste")

 for(let i = 0; i < boxing.length ; i++){
    const rnd = Math.floor(Math.random() * boxing.length)
    const temp = boxing[rnd]
    boxing [rnd] = boxing[i];
    boxing[i] = temp

}
cont.innerHTML = "" ;
for (const box of boxing) {
    cont.appendChild(box)
    
}

const boxof = []
let cunt = 0;

function boxClick(evt){
    if(boxof.length === 0){
        evt.target.classList.remove("hidden")
        evt.target.classList.add("ice")
        boxof.push(evt.target);

    } else {
        evt.target.classList.remove("hidden")
        boxof.push(evt.target)

        if(boxof[0].innerHTML === boxof[1].innerHTML){
            boxof[0].classList.add("peer")
            boxof[1].classList.add("peer")
            cunt += 2;
            if(cunt === boxing.length){
                setTimeout( () => {
            mod.classList.remove("hidden")

                } , 500 )
                }
            
            boxof.length = 0;
    
        } else {
            iceAll()
            setTimeout(function(){
                boxof[0].classList.add("hidden");
                boxof[1].classList.add("hidden");
                boxof.length = 0
                oniceAll()
            },1000)
        }

    }

}


function iceAll(){
for (const box of boxing) {
    box.classList.add("ice")
    
}
}

function oniceAll(){
    for (const box of boxing) {
        box.classList.remove("ice")
    }
}





    
    function hiddenAll(){
        for (const box of boxing) {
        box.classList.add("hidden")
    }

}

iceAll()

function timeout(){
    hiddenAll()

};

setTimeout(function(){

    hiddenAll()
    oniceAll()
}, 3000);

for (const box of boxing){
    box.addEventListener("click", boxClick)
  
};
function insted() {
    window.location.reload();
    
}

