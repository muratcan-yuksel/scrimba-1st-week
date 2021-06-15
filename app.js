//get bill input
const bill= document.querySelector("#bill_value");
//get tip input
const tip= document.querySelector("#tip_value")
//get total result area
const result= document.querySelector("#total")
//change event to the bill
function billFunction (e){
    console.log(e.target.value)
} 
// bill.addEventListener("change", (e)=>{
//     console.log(e.target.value)
// })
//change event to the tip
function tipFunction(){
    // console.log(e.target.value)
    result.textContent= tip.value;
    
}
// tip.addEventListener("onkeyup", e=>{
//     console.log(e.target.value)
//     result.textContent= e.target.value
// })