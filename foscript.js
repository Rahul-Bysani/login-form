const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')

form.addEventListener('submit',(e) =>{
    e.preventDefault();

    checkInputs();
});

function checkInputs(){
    //get the valuse from the inputs
    const usernamevalue = username.value.trim();
    const emailvalue = email.value.trim();
    const passwordvalue = password.value.trim();
    const password2value = password2.value.trim();
    
    if(usernamevalue === ''){
        //show error 
        //add error clas
        setErrorFor(username,'usernamee cannot be blank');
}   else{
    //add sucess class
    setSuccessFor(username);
}
if(emailvalue === ''){
    setErrorFor(email,'email cannot be blank');
}

}

function setErrorFor(input, messaage){
    const formcontrol = input.parentelement; //.form-control
    const small = formcontrol.queryselector('small');

    //add error message inside small
    small.innerText = message;

    //add error class
    formcontrol.className = 'form-control error';
}

function setSuccessFor(input) {
    const formcontrol = input.parentElement;
    formcontrol.className = 'form-control success';

}

function isemail(email){
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}