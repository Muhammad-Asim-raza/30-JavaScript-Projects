
const input = document.getElementById("canvas-input");
const imageContainer = document.querySelector(".image-container");
const imagePlaceholder = document.querySelector(".placeholder.image");   
const canvasctx = imageContainer.getContext("2d");

// button selectors
const resetbtn = document.querySelector(".reset-btn");     
const downloadbtn = document.querySelector(".download-btn"); 

let currentImage = null;
let drawWidth, drawHeight, offsetX, offsetY;



// FILTERS
const parent = document.querySelector(".filters");

const filters = {
    brightness:{ value:100, min:0, max:200, unit:'%' },
    contrast:{ value:100, min:0, max:200, unit:'%' },
    saturation:{ value:100, min:0, max:200, unit:'%' },
    grayscale:{ value:0, min:0, max:100, unit:'%' },
    sepia:{ value:0, min:0, max:100, unit:'%' },
    hueRotate:{ value:0, min:0, max:360, unit:'deg' },
    blur:{ value:0, min:0, max:20, unit:'px' },
    opacity:{ value:100, min:0, max:100, unit:'%' },
    invert:{ value:0, min:0, max:100, unit:'%' }
};

// CREATE SLIDERS
function Filters(name,value,min,max){
    const filterDiv = document.createElement("div");
    filterDiv.className = "filter";

    const label = document.createElement("p");
    label.textContent = name;

    const slider = document.createElement("input");
    slider.type = "range";
    slider.id = name;
    slider.value = value;
    slider.min = min;
    slider.max = max;

    slider.addEventListener("input", () => {
        filters[name].value = slider.value;
        applyFilters();
    });

    filterDiv.appendChild(label);
    filterDiv.appendChild(slider);

    return filterDiv;
}

Object.keys(filters).forEach(key=>{
    const div = Filters(
        key,
        filters[key].value,
        filters[key].min,
        filters[key].max
    );
    parent.appendChild(div);
});

// IMAGE LOAD
input.addEventListener("change", function(e){
    const file = e.target.files[0];
    if (!file) return;

    const Img = new Image();
    Img.src = URL.createObjectURL(file);

    Img.onload = () => {
        currentImage = Img;

        const canvasWidth = 600;
        const canvasHeight = 500;

        imageContainer.width = canvasWidth;
        imageContainer.height = canvasHeight;

        // calculate fit (like object-fit: contain)
        const imgRatio = Img.width / Img.height;
        const canvasRatio = canvasWidth / canvasHeight;

        if (imgRatio > canvasRatio) {
            drawWidth = canvasWidth;
            drawHeight = canvasWidth / imgRatio;
        } else {
            drawHeight = canvasHeight;
            drawWidth = canvasHeight * imgRatio;
        }

        offsetX = (canvasWidth - drawWidth) / 2;
        offsetY = (canvasHeight - drawHeight) / 2;

        canvasctx.clearRect(0, 0, canvasWidth, canvasHeight);
        canvasctx.drawImage(Img, offsetX, offsetY, drawWidth, drawHeight);

        imagePlaceholder.style.display = "none";
        imageContainer.style.display = "block";
    };
});

// APPLY FILTERS
function applyFilters(){
    if (!currentImage) return;

    canvasctx.clearRect(0, 0, imageContainer.width, imageContainer.height);

    canvasctx.filter = `
        brightness(${filters.brightness.value}%)
        contrast(${filters.contrast.value}%)
        saturate(${filters.saturation.value}%)
        grayscale(${filters.grayscale.value}%)
        sepia(${filters.sepia.value}%)
        hue-rotate(${filters.hueRotate.value}deg)
        blur(${filters.blur.value}px)
        opacity(${filters.opacity.value}%)
        invert(${filters.invert.value}%)
    `;

    canvasctx.drawImage(currentImage, offsetX, offsetY, drawWidth, drawHeight);
}
resetbtn.addEventListener("click", () => {
    // Reset each filter value to its default
    Object.keys(filters).forEach(key => {
        if (key === "brightness" || key === "contrast" || key === "saturation" || key === "opacity") {
            filters[key].value = 100;
        } else if (key === "hueRotate") {
            filters[key].value = 0;
        } else {
            filters[key].value = 0;
        }

        // Update the corresponding slider in the DOM
           const slider = document.getElementById(key);
        if (slider) slider.value = filters[key].value;
    });

    applyFilters();
});
downloadbtn.addEventListener("click",()=>{
    const link = document.createElement("a");
    link.download = "filtered-image.png";
    link.href = imageContainer.toDataURL();
    link.click();
});