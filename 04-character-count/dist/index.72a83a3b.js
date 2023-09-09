"use strict";
const textarea = document.querySelector(".textarea");
const count = document.querySelector(".count");
function countCharacters(event) {
    count.textContent = `${event.target.value.length}/150`;
    if (event.target.value.length >= 150) {
        textarea.style.border = "3px solid var(--wrong-input)";
        textarea.style.color = "var(--wrong-input)";
        count.style.color = "var(--wrong-input)";
    } else if (event.target.value.length < 150) {
        textarea.style.border = "3px solid var(--active-border-color)";
        textarea.style.color = "#000";
        count.style.color = "#000";
    }
    if (event.target.value.length === 0) textarea.style.border = "3px solid var(--border-color)";
}
textarea.addEventListener("input", countCharacters);

//# sourceMappingURL=index.72a83a3b.js.map
