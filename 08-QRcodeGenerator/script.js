//  https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=
let input = document.getElementById("input");
let Img = document.getElementById("img");
let imgBox = document.getElementById("imgBox");
function generateQR() {
    if (input.value.length > 0) {
        Img.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + input.value;
        imgBox.classList.add("showImg");
    }

}