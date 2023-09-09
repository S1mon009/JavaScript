"use strict";
const inputs = document.querySelectorAll("input");
const background = document.querySelector(".background");
const btnCopyClipboard = document.querySelector("button");
const icon = document.querySelector("i");
const code = document.querySelector("code");
let red = 255, green = 255, blue = 255, alpha = 1;
function changeBackgroundColor() {
    const color = `rgba(${red},${green},${blue},${alpha})`;
    background.style.background = color;
    code.textContent = color;
}
function updateColors(index, value) {
    switch(index){
        case 0:
            red = value;
            break;
        case 1:
            green = value;
            break;
        case 2:
            blue = value;
            break;
        case 3:
            alpha = value;
            break;
    }
}
async function copyText(text) {
    try {
        await navigator.clipboard.writeText(text);
    } catch (err) {
        alert("Failed to copy: ", err);
    }
}
inputs.forEach((input, index)=>{
    input.addEventListener("input", function() {
        updateColors(index, input.value);
        changeBackgroundColor();
    });
});
btnCopyClipboard.addEventListener("click", function() {
    icon.className = "bi bi-check-lg";
    copyText(code.innerHTML);
    setTimeout(()=>{
        icon.className = "bi bi-clipboard";
    }, 1500);
});

//# sourceMappingURL=index.72a83a3b.js.map
