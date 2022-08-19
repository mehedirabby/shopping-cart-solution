function updatePhoneNumber (isIncrease){
    const phoneNumberField = document.getElementById('phone-number-field');
    const phoneNumberString = phoneNumberField.value;
    const previousPhoneNumber = parseInt(phoneNumberString );


    let newPhoneNumber ;
    if(isIncrease){
       newPhoneNumber = previousPhoneNumber + 1;
    }
    else{
        newPhoneNumber = previousPhoneNumber - 1;
    }
    phoneNumberField.value = newPhoneNumber;
    return newPhoneNumber;

}
function updatePhoneNumberPrice(newPhoneNumber){
    const phoneTotalElement = document.getElementById('phone-total');
    const phoneTotalPrice =newPhoneNumber* 1280;
    phoneTotalElement.innerText = phoneTotalPrice;
}



document.getElementById('btn-phone-plus').addEventListener('click',function(){
   const newPhoneNumber = updatePhoneNumber (true);
   updatePhoneNumberPrice(newPhoneNumber);
   calculateSumTotal();

  
})
document.getElementById('btn-phone-minus').addEventListener('click',function(){
    const newPhoneNumber= updatePhoneNumber(false);
    updatePhoneNumberPrice(newPhoneNumber);
    calculateSumTotal();
})