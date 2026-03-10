var pass= document.getElementById("password");
var p= document.getElementById("message");
var strength= document.getElementById("Strength");
var btn= document.getElementById("btn");
pass.addEventListener('input',()=>{
    if(pass.value.length > 0){
        p.style.display="block";
    }else{
        p.style.display="none";
    }
    if(pass.value.length<=4){
    strength.innerHTML="Weak";
    pass.style.borderColor="red";
    p.style.color="red";
    }else if(pass.value.length>4 && pass.value.length<=8){
        strength.innerHTML="medium";
        pass.style.borderColor="yellow";
     p.style.color="yellow";
    }
    else if(pass.value.length>8){
        strength.innerHTML="Strong";
        pass.style.borderColor="green";
     p.style.color="green";
    }
});
btn.addEventListener("click",()=>{
    if(pass.type==="password"){
        pass.type="text";
    }else{
        pass.type="password";
    }
})
