 
function call()
{
 const selected=document.querySelector('input[name="q1"]:checked'); 
 const result= document.querySelector(".result");
 
 //now no needed of loop

 if (selected) {

result.textContent = selected.classList.contains("correct") ?  "correct" : "wrong";
    
 } else {

    result.textContent= "No option selected";
    
 }

 


}


function call1()

{
   const selected=document.querySelector('input[name="q2"]:checked');
   const result2= document.querySelector(".result2");



   if(selected)
   {
      result2.textContent=selected.classList.contains("correct") ? "correct" : "wrong";
   }

   else
   {
      result2.textContent="no option selected";
   }
}


function call3()
{

const selected=document.querySelector('input[name="q3"]:checked');
const result3=document.querySelector(".result3");

if (selected) {
   result3.textContent=selected.classList.contains("correct") ? "correct" : "wrong";
   
} else {
   result3.textContent =" no option selected";
}

}


function call4()
{

const selected=document.querySelector('input[name="q4"]:checked');
const result4=document.querySelector(".result4");

if (selected) {
   result4.textContent=selected.classList.contains("correct") ? "correct" : "wrong";
   
} else {
   result4.textContent =" no option selected";
}

}

function call5()

{

   const selected=document.querySelector('input[name="q5"]:checked');
   const result5=document.querySelector(".result5");


if (selected) {
   result5.textContent =selected.classList.contains("correct") ? "correct" : "wrong";

   
} else {
   
   result5.textContent = " no option selected";

}

}

