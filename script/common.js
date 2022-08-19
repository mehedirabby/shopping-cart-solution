function getTextElementValueById (elementId){
    const phoneTotalElement = document.getElementById(elementId);
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString);
    return currentPhoneTotal;
}
function setTextElementValuById (elementId,value){
    const subTotalElement = document.getElementById(elementId);
   subTotalElement.innerText = value;
}

function calculateSumTotal(){
       //calculate total
   const currentPhoneTotal = getTextElementValueById('phone-total')
   const currentCaseTotal = getTextElementValueById('case-total');
   const currentSubTotal = currentPhoneTotal + currentCaseTotal;
   setTextElementValuById('sub-total',currentSubTotal);
   


   //calculate tax
   const taxAmountString = (currentSubTotal * 0.02).toFixed(2);
   const taxAmount = parseFloat(taxAmountString);

   setTextElementValuById('tax-amount',taxAmount);
   const finalAmount = currentSubTotal+taxAmount;
   setTextElementValuById('final-total',finalAmount);
}