
    let passwordField = document.getElementById('pass');
    
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