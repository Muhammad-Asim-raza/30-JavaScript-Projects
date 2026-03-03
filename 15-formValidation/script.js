let Name = document.getElementById("name-error");
let phone= document.getElementById("tel-error");
let email= document.getElementById("email-error");
let messagerror= document.getElementById("message-error");
let submit= document.getElementById("submit-error");

function namevalidate(){
     var nameError=document.getElementById("name").value;
     if(nameError.length==0){
        Name.innerHTML='Name is required';
        return false;
     }
     if(!nameError.match(/^[A-Za-z]+(\s+[A-Za-z]+)+$/)){
        Name.innerHTML='Full Name is required';
        return false;
     }
      Name.innerHTML='<i class="fa-solid fa-circle-check"></i>';
        return true;
}
function telValidate(){
    var contact= document.getElementById("telephone").value;
    if(contact.length==0){
         phone.innerHTML='Contact No is required';
        return false;
    }
    if(contact.length!==10){
          phone.innerHTML='Contact No should be 10 digits';
        return false;
    }
    if(!contact.match(/^[0-9]{10}$/)){
          phone.innerHTML='Contact No is invalid';
        return false;
    }
      phone.innerHTML='<i class="fa-solid fa-circle-check"></i>';
        return true;
}
function emailValidate(){
    var Email= document.getElementById("email").value;
    if(Email.length==0){
         email.innerHTML='Email is required';
        return false;
    }
   if (!Email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
        email.innerHTML='Email is Invalid';
        return false;
    }
       email.innerHTML='<i class="fa-solid fa-circle-check"></i>';
        return true;
}
function textValidate(){
  Message=document.getElementById("message").value;
  let letters=30;
  let words=30-Message.length;
  if(words>0){
    messagerror.innerHTML= words + ' more characters required';
    return false;
  }
   messagerror.innerHTML= '<i class="fa-solid fa-circle-check"></i>';
    return true;
}
function validateForm(){
  if(!namevalidate() || !telValidate() || !emailValidate() || !textValidate()){
    submit.innerHTML="Please Fix Errors";
    return false;
  }
}
