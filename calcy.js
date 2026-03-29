


let listButtons=document.querySelector('.buttonArea');
console.log("listButtons",listButtons);


let displatButt=document.querySelector('.displayArea');
console.log("displatButt",displatButt);

let iddd=document.getElementById('displayTotal');
console.log("iddd",iddd);


let previousValue="";
let nextValue="";
let totalValue=0;
let operators=["+","-","*","/"];
    let controlers=["AC","C","&#8592"];
    let numbers=["0","1","2","3","4","5","6","7","8","9","."]
listButtons.addEventListener("click",function(event){
     console.log("event ",event);
    console.log("event target",event.target);
    console.log("event target text content",event.target.textContent);

    let currentClickedElement=event.target.textContent.trim();


previousValue=previousValue+currentClickedElement;
console.log("preious va;lu",previousValue);
displatButt.textContent=previousValue;
if(previousValue.length>2){
let ifoperatorValue=previousValue.length-2;

// if(operators.includes()){}
let previousValueTransfromToArray=previousValue.split("");
console.log("previousValueTransfromToArray",previousValueTransfromToArray);
console.log("real previous balue",previousValue);



if(operators.includes(previousValueTransfromToArray[previousValueTransfromToArray.length-2])){

    let splitedArray=previousValueTransfromToArray[previousValueTransfromToArray.length-2];
    console.log("splittedArray",splitedArray)
    let newValue=previousValue.split(/([+\-*/])/);
     console.log("newValue",newValue);
      let firstValue=newValue[0];
      let lastValue=newValue[newValue.length-1];
      let middleOperator=newValue[newValue.length-2];
      if(middleOperator==="+"){
   
   let totVal=     additionOperator(firstValue,lastValue);
   console.log("totVal",totVal);
   iddd.textContent=totVal
      }
    

}


}



    
// if(operators.includes(currentClickedElement)){
//     //let operatorValue=operators.includes(currentClickedElement);
//     //console.log("operator value",operatorValue);
//  console.log("operators inside");

//  if(currentClickedElement==="+"){
//     addition(previousValue,nextValue); 
//  }

// }else if(controlers.includes(currentClickedElement)){
//  console.log("controllers inside");
// }else if(numbers.includes(currentClickedElement)){
//     previousValue=previousValue+currentClickedElement;
//     console.log("previousValue",previousValue);
// }

})



function additionOperator(firstValue,lastValue){

    totalValue=totalValue+Number(firstValue);

    totalValue=totalValue+Number(lastValue);
    console.log("total valye",totalValue);
      
return totalValue;
}