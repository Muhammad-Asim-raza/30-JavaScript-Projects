         // https://randomuser.me/api/?results=5000
// Above api is for generating multiple random user data. We will use
// this api to create user cards.
fetch("https://randomuser.me/api/?results=5")
.then((response) => response.json())
.then((data) => {
    console.log(data.results);
    data.results.forEach((user) => {
       // Parent div
const card = document.createElement("div");
card.className = "bg-gray-800 rounded-lg shadow-md p-4 max-w-xs w-full mx-auto";
card.className += " hover:scale-105 transition-transform duration-300";
// Image
const img = document.createElement("img");
img.src = user.picture.medium; // Using medium size picture from API
img.alt = "User Avatar";
img.className = "w-16 h-16 rounded-full mx-auto mb-2";

// Name
const name = document.createElement("h2");
name.className = "text-lg font-semibold text-center text-white";
name.innerText = user.name.first + " " + user.name.last;

// Role
const role = document.createElement("p");
role.className = "text-center text-gray-400 text-sm mt-1 break-words";
role.innerText = user.email; // Using email as role for demonstration

// Description
const desc = document.createElement("p");
desc.className = "text-center text-gray-500 text-xs mt-2";
desc.innerText = "Passionate about creating beautiful and functional web applications.";

// Button container
const btnContainer = document.createElement("div");
btnContainer.className = "flex gap-2 mt-4";

// Follow button
const followBtn = document.createElement("button");
followBtn.innerText = "Follow";
followBtn.className = "flex-1 bg-blue-600 hover:bg-blue-700 text-white text-sm py-1.5 rounded-md";


// Message button
const messageBtn = document.createElement("button");
messageBtn.className = "flex-1 bg-gray-700 hover:bg-gray-600 text-gray-200 text-sm py-1.5 rounded-md";
messageBtn.innerText = "Message";

// Append buttons to container
btnContainer.appendChild(followBtn);
btnContainer.appendChild(messageBtn);

// Append all elements to card
card.appendChild(img);
card.appendChild(name);
card.appendChild(role);
card.appendChild(desc);
card.appendChild(btnContainer);

// Finally add card to body (or any container)
document.querySelector(".cards").appendChild(card);
    });
});