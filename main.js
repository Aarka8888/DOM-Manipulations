let boxes = document.querySelectorAll(".btn")
let text = document.querySelector("h1")
let big = document.querySelector(".big");
let A = document.querySelector("#A")
let B = document.querySelector("#B")
let C = document.querySelector("#C")

boxes.forEach(element => {
    element.addEventListener("click", ()=> {

        changecolor(element)
    })
    
});

let changecolor = (colors)=>{

    let bgcolor = getComputedStyle (colors).backgroundColor
    big.style.backgroundColor = bgcolor

}




A.addEventListener("keyup", function(){
    text.style.fontSize = `${A.value}px`;

})

B.addEventListener("keyup", function(){
    big.style.borderRadius = `${B.value}px`;

})

C.addEventListener("keyup", function(){
    text.style.fontWeight = `${C.value}`;

})

function getSelectValue()
{
    var selectedValue = document.getElementById("list").value;
    text.style.fontFamily = `${list.value}`;

    // console.log(selectedValue);

}



// function color(d){
//     let a = getComputedStyle(d)
//     let b = a.backgroundColor;
//     big.style.backgroundColor = d; 
// }
