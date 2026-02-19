let toastBox = document.getElementById("toastBox");
let success ='<i class="fa-solid fa-circle-check"></i> Successfully Submited';
let error =  '<i class="fa-solid fa-circle-xmark"></i> Fix Your Error!';
let invalid = '<i class="fa-solid fa-circle-exclamation"></i> Invalid, Try Again';
function showToast(msg){
   let toast= document.createElement('div');
   toast.classList.add("toast");
   toast.innerHTML= msg ;
   toastBox.appendChild(toast);
   if(msg.includes('Error')){
    toast.classList.add('red');
   }
   if(msg.includes('Invalid')){
    toast.classList.add('yellow');
   }
   setTimeout(()=>{
     toast.remove();
   },6000);
}