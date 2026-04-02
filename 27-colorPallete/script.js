const generateBtn = document.getElementById("generate-btn");
const paletteContainer = document.querySelector(".palette-container");

generateBtn.addEventListener("click", generatePalette);

function generatePalette() {
    const colors = [];
    
    for (let i = 0; i < 5; i++) {
        colors.push(generateRandomColor());
    }
    
    updatePaletteDisplay(colors);
}

function generateRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function updatePaletteDisplay(colors){
    let index = 0;
    const colorBoxes = document.querySelectorAll(".color-box");
    colorBoxes.forEach((box) => { 
        const color = colors[index];
        const colorDiv = box.querySelector(".color");
        const hexValue = box.querySelector(".hex-value");
        
        colorDiv.style.backgroundColor = color;
        hexValue.textContent = color;
        index++;
    });

}
paletteContainer.addEventListener("click", function (e) {
    if(e.target.classList.contains("copy-btn")){
        const hexvalue = e.target.previousElementSibling.textContent;
        navigator.clipboard.writeText(hexvalue).then(() => showCopySuccess(e.target)).catch((err) => console.log(err));
    } else if(e.target.classList.contains("color")){
        const hexvalue = e.target.nextElementSibling.querySelector(".hex-value").textContent;
        navigator.clipboard.writeText(hexvalue).then(() => showCopySuccess(e.target.nextElementSibling.querySelector(".copy-btn"))).catch((err) => console.log(err));
    }});

function showCopySuccess(element){
    element.classList.remove("far", "fa-copy");
    element.classList.add("fas", "fa-check");
    element.style.color = "#48bb78";
    setTimeout(() => {
        element.classList.remove("fas", "fa-check");
        element.classList.add("far", "fa-copy");
        element.style.color = "";
    }, 1500);
}

