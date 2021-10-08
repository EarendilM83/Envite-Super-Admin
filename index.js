
    let passwordField = document.getElementById('pass');

    // get validations fields
    let emailValidation = document.getElementById('email-validations');
    let passwordValidation = document.getElementById('password-validations');
    let emailField = document.getElementById('emailField');
    let form = document.getElementById('Form');
    let emailPlaceholder = document.getElementById('emailPlaceholder');
    let passPlaceholder = document.getElementById('passPlaceholder')
    let pattern = /\S+@\S+\.\S+/;

    // show/hide password
    let showHide = () => {
        let show = document.getElementsByClassName('invisible')[0];
        
            show.classList.toggle('visible');

        if ( passwordField.type === 'password' ){

            

            passwordField.type = 'text';
        }
        else{
            passwordField.type = "password"
        }
    }

// email and password validations
form.addEventListener('submit', (e) => {
    let emailErrors= [];
    let passwordErrors = [];

    if(emailField.value === '' || emailField.value == null){
        emailErrors.push('Email field is required')
    }  
    

    
  

    if(passwordField.value === '' || passwordField.value == null){
        passwordErrors.push('Password is required')
    }

    if( passwordField.value.length > 0 && passwordField.value.length <6){
        passwordErrors.push('Password lenght is less than 6 characters')
    }

    if (emailErrors.length > 0 || passwordErrors > 0){
        e.preventDefault()
        emailValidation.innerText = emailErrors.join(', ')
        passwordValidation.innerText = passwordErrors.join(', ')
    }
});


let checkEmail = () => {
    if(emailField.value.match(pattern)){
        emailValidation.innerText = 'Your email is valid';
        emailField.style.borderColor = 'green'
        
     } //else if (!emailField.value.match(pattern) && emailField.value.length == 0){
    //     emailValidation.innerText = 'Your email is invalid';
    //     emailField.style.borderColor = '#F5B118';
    //     emailPlaceholder.style.color = '#F5B118'
   // } 
   else{
        emailPlaceholder.style.color = 'red';
        emailField.style.borderColor = 'red';
    }
   
}

    console.log(emailValidation);
    console.log(passwordValidation);
    console.log(emailField);
    console.log(pass);
    console.log(form);

