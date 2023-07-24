import utilis from "./assets/utilis.js";
let { $$, $ } = utilis

$$(".change_btn").forEach((button, index) => {
    button.addEventListener("click", () => {
        showContent(index)
        localStorage.setItem("tabNumber", index)
    })
})

$$(".tab_item").forEach((tab) => {
    tab.style.display = "none"
})

function hideContent() {
    $$(".tab_item").forEach((tab) => {
        tab.style.display = "none"
    })
}

function showContent(index = 1) {
    hideContent()
    $$(".tab_item")[index].style.display = "block"
}

hideContent()
showContent(localStorage.getItem("tabNumber") || 1)