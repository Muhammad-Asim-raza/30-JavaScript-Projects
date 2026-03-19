function createToaster(config) {

    const parent = document.querySelector(".parent");

    // set position once
    parent.classList.add(
        config.positionX === "right" ? "right-5" : "left-5",
        config.positionY === "bottom" ? "bottom-5" : "top-5"
    );

    return function (str) {

        let div = document.createElement("div");

        div.textContent = str;

        div.className = `
            inline-block 
            ${config.theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-100 text-black"} 
            px-6 py-3 rounded shadow-lg 
            transition-opacity duration-300
        `;

        parent.appendChild(div);

        setTimeout(() => {
            div.remove();
        }, config.duration * 1000);
    };
}
let toaster = createToaster({
    positionX: "right",
    positionY: "bottom",
    theme: "dark",
    duration: 5,
});

toaster("Download done ✅");