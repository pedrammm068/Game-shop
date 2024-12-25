const imagesAddress = ['imges/large_cb8024b6-2830-4a2c-aac9-ade9395d47b2.webp', 'imges/large_aecce3ea-d89e-4006-89a6-2b29d3271b6f.webp',
    'imges/large_017a4268-c872-43dd-910e-6c2e8caa0300.webp', 'imges/large_7d095156-68ed-437b-80ed-2a90b689724c.webp',
    'imges/large_b12e80ef-b4c3-48c6-aa71-a0c547f5ea8e.webp',
]


function imgrandom() {
    const rndImage = Math.floor(Math.random() * imagesAddress.length)


    document.body.style = `background-image: url(${imagesAddress[rndImage]}) ;  background-size :cover ; background-repeat :no-repeat ; `


};
imgrandom()

//
// 


const boxing = [...document.querySelectorAll(".box")]
const cont = document.getElementById("co")
const mod = document.querySelector(".modal")
const modbg = document.querySelector(".modalbg")
const cl = document.querySelector(".click")

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
    console.log("hi")
    window.location.reload();
    
}

