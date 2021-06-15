//get bill input
const bill= document.querySelector("#bill_value");
//get people input
const people= document.querySelector("#people_value")
//get tip input
const tip= document.querySelector("#tip_value")
//get total result area
const result= document.querySelector("#total")
//change event to the bill
function calculate (){
    console.log(bill.value)
 
    if (tip.value !=0 || tip.value >0 ){
       
        let foo=  parseFloat(((bill.value / 100) * tip.value)).toFixed(1)
        let total= Number(foo) + Number(bill.value)
        result.textContent= "$" + total ;



        //get rid of the infinity bug
        if(result.textContent== "$Infinity"){
            result.textContent="$"
        }
    }
} 
// //change event to the amount of people
// function pplFunction(){
// console.log(people.value)
// if (tip.value !=0 || tip.value >0 ){
//     result.textContent= "$" + ((bill.value / tip.value).toFixed(1) / people.value);

// }

// }

// //change event to the tip
// function tipFunction(){
    
// if (tip.value !=0 || tip.value >0 ){
//     result.textContent= "$" + ((bill.value / tip.value)/ people.value).toFixed(1) ;

// }
// }
