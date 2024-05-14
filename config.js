 'use strict'   
    const emailInput = document.querySelector('.email');
    const errorMessage = document.querySelector('.error-message');
    const subButton = document.querySelector('.btn-sub');

  emailInput.addEventListener('input', function(event) {
    if (emailInput.validity.valid) {
      errorMessage.style.display = 'none';
    } else {
      errorMessage.style.display = 'block';
    }
  });

  subButton.addEventListener('click',function(e){
    document.querySelector('.main_section').style.display="none";
    document.querySelector('.after_section').style.display="block";
  
});