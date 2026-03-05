let scrollcontainer= document.querySelector(".images");
let NextBtn= document.getElementById("nextBtn");
let backBtn= document.getElementById("backBtn");
scrollcontainer.addEventListener("wheel", (evt) =>{
    evt.preventDefault();
    scrollcontainer.scrollLeft += evt.deltaY;
    scrollcontainer.style.scrollBehavior= "auto";
});
NextBtn.addEventListener("click", ()=>{
    scrollcontainer.style.scrollBehavior= "smooth";
    scrollcontainer.scrollLeft += 900;

});
backBtn.addEventListener("click", ()=>{
    scrollcontainer.style.scrollBehavior= "smooth";
    scrollcontainer.scrollLeft -= 900;

});

