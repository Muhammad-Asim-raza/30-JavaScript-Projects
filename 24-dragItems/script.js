const items = document.querySelectorAll(".item");
const columns = document.querySelectorAll(".column");

let draggedItem = null;

// 🔹 ITEM EVENTS
items.forEach(item => {

    item.addEventListener("dragstart", () => {
        draggedItem = item;
        item.classList.add("dragging");
        console.log("dragstart");
    });

    item.addEventListener("drag", () => {
        console.log("dragging...");
    });

    item.addEventListener("dragend", () => {
        item.classList.remove("dragging");
        draggedItem = null;
        console.log("dragend");
    });

});


// 🔹 COLUMN EVENTS
columns.forEach(column => {

    column.addEventListener("dragenter", () => {
        column.classList.add("hover");
        console.log("dragenter");
    });

    column.addEventListener("dragover", (e) => {
        e.preventDefault(); // MUST
        console.log("dragover");
    });

    column.addEventListener("dragleave", () => {
        column.classList.remove("hover");
        console.log("dragleave");
    });

    column.addEventListener("drop", () => {
        column.classList.remove("hover");
        column.appendChild(draggedItem);
        console.log("drop");
    });

});