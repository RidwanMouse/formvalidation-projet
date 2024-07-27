const username = document.querySelector("#username");

const email = document.querySelector("#email");

const password = document.querySelector("#password");

const confirmpassword= document.querySelector("#confirmPassword");

const form = document.querySelector("#form");

const showError = (input,message)=>{

    let parentElement = input.parentElement;
    parentElement.classList = 'form-control error';
    const small =  parentElement.querySelector("small");
    const successIcon = parentElement.querySelectorAll("i")[0];
    const erroIcon = parentElement.querySelectorAll("i")[1];

    erroIcon.style.visibility = 'visible';
    successIcon.style.visibility = 'hidden';
    small.innerText = message;
    
}
const showSuccess = (input)=>{

    let parentElement = input.parentElement;
    parentElement.classList = 'form-control success';
  
    const successIcon = parentElement.querySelectorAll("i")[0];
    const erroIcon = parentElement.querySelectorAll("i")[1];
    erroIcon.style.visibility = 'hidden';
    successIcon.style.visibility = 'visible';  

}

const checkEmpty = (elements)=>{

  elements.forEach((element)=>{
    if(element.value === '') {
    showError(element, 'input required');
    }else{
        showSuccess(element);
    }
  });
}
const checkEmail = (email)=>{
  const reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
 if(reg.test(email.value)){
  showSuccess(email);
 }else{
  showError(email,'Invalid Email');
 }

}
const checkpasswordLength = (input,min,max)=>{
if(input.value.length <min){
  showError(input,`password atleast ${min} character`);
}else if(input.value.length >max){
  showError(input, `password maximum character is ${max}`);
}else{
  showSuccess(input);
}

}

form.addEventListener("submit", (event)=> {

    event.preventDefault();

 checkEmpty( [username,email,password,confirmpassword ]);
 checkEmail(email);

  checkpasswordLength(password,6,10);
  checkpasswordLength(confirmpassword,6,10);

})