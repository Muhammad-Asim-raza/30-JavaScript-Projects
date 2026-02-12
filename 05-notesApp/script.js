const container = document.querySelector(".container-box");
const button = document.querySelector(".Btn");
let notes = document.querySelectorAll("input-Box");
function showNotes() {
    container.innerHTML = localStorage.getItem("notes");
}
showNotes();
function updateStorage() {
    localStorage.setItem("notes", container.innerHTML);
}
button.addEventListener("click", () => {
    let inputbox = document.createElement("p");
    let img = document.createElement("img");
    inputbox.className = "input-Box";
    inputbox.setAttribute("contenteditable", "true");
    img.src = "./images/delete.png";
    container.appendChild(inputbox).appendChild(img);
})
container.addEventListener("click", function (e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    }
});
document.addEventListener("keyup", function (e) {
    if (e.target.classList.contains("input-Box")) {
        updateStorage();
    }
});
