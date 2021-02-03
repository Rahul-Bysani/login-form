window.onload = function () {
    


const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
//const password = document.getElementById('password')
//const password2 = document.getElementById('password2')

function setErrorFor(input, message){
    const formcontrol = input.parentElement; //.form-control
    const small = formcontrol.queryselector('small');

    //add error message inside small
    small.innerText = message;

    //add error class
    formcontrol.small = 'small';

    // formcontrol.small = 'form-control error';
}

function setSuccessFor(input) {
    const formcontrol = input.parentElement;
    formcontrol.small = 'form-control success';

}

function isemail(email){
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


function checkInputs(){
    //get the valuse from the inputs
    const usernamevalue = username.value.trim();
    const emailvalue = email.value.trim();
    //const passwordvalue = password.value.trim();
    //const password2value = password2.value.trim();
    
    if(usernamevalue === ''){
        //show error 
        //add error clas
        setErrorFor(username,'username cannot be blank');
}   else{
    //add sucess class
    setSuccessFor(usernamevalue);
}
if(emailvalue === ''){
    setErrorFor(email,'email cannot be blank');
}
 else{
     setSuccessFor(email);
 }
}



form.addEventListener('submit',(e) =>{
    // if (e){
        console.log(e.preventDefault());
       e.preventDefault();

    // } 
   
     checkInputs();
});

}