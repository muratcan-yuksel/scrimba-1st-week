//get bill input
const bill= document.querySelector("#bill_value");
//get people input
const people= document.querySelector("#people_value")
//get tip input
const tip= document.querySelector("#tip_value")
//get total result area
const result= document.querySelector("#total")
//get per person area
const perPerson= document.querySelector("#per_person")
//change event to the bill
function calculate (){
 
    if (tip.value !=0 || tip.value >0 ){
       //calculate the total result 
        let totalResult=  parseFloat(((bill.value / 100) * tip.value)).toFixed(1)
        let total= Number(totalResult) + Number(bill.value)
        result.textContent= "$" + total ;
        //divide it by the amount of people specified
        perResult= total / Number(people.value)
        perPerson.textContent= "$" + perResult.toFixed(1)
         //get rid of the infinity bug
        if(result.textContent== "$Infinity"){
            result.textContent="$"
        }else if ( perPerson.textContent=="$Infinity"){
            perPerson.textContent="$"
        }
    }
} 
