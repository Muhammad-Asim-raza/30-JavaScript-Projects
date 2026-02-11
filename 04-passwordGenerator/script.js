function generatePassword() {
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$";
    let password = "";

    for (let i = 0; i < 8; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    document.getElementById("password").value = password;
}

document.getElementById("generateBtn").addEventListener("click", generatePassword);
document.getElementById("copyBtn").addEventListener("click", copyPassword);

function copyPassword() {
    const passwordInput = document.getElementById("password");

    if (passwordInput.value === "") {
        alert("Generate a password first!");
        return;
    }

    navigator.clipboard.writeText(passwordInput.value);
    alert("Password copied!");
}
