//get bill input
const bill= document.querySelector("#bill_value");
//get tip input
const tip= document.querySelector("#tip_value")
//get total result area
const result= document.querySelector("#total")
//change event to the bill
function billFunction (){
    console.log(bill.value)
} 

//change event to the tip
function tipFunction(){
    
if (tip.value !=0 || tip.value >0 ){
    result.textContent= "$" + (bill.value / tip.value).toFixed(1);

}
}
