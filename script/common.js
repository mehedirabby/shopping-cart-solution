function getTextElementValueById (elementId){
    const phoneTotalElement = document.getElementById(elementId);
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString);
    return currentPhoneTotal;
}

function calculateSumTotal(){
       //calculate total
   const currentPhoneTotal = getTextElementValueById('phone-total')
   const currentCaseTotal = getTextElementValueById('case-total');
   const currentSubTotal = currentPhoneTotal + currentCaseTotal;
   const subTotalElement = document.getElementById('sub-total');
   subTotalElement.innerText = currentSubTotal;
}