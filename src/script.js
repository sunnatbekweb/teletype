import utilis from "./assets/utilis.js";
import { signIn, signUp } from "./assets/auth.js"
let { $$, $ } = utilis;

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
showContent(localStorage.getItem("tabNumber") || 0)

// ------------------------ Modal actions --------------------------

$("#openModal").addEventListener("click", () => {
    $(".modal_wrapper").classList.add("grid")
    $(".modal_wrapper").classList.remove("hidden")
})

$("#closeModal").addEventListener("click", () => {
    $(".modal_wrapper").classList.add("hidden")
    $(".modal_wrapper").classList.remove("grid")
})

// ----------------------- Modal actions end ---------------------------

// ----------------------- authorization actions -----------------------

$('#signup').addEventListener('click', (e) => {

    // e.preventDefault();

    const signUpForm = {
        full_name: $('#full_name').value,
        password: $('#password').value,
        username: $('#user_name').value
    }

    if ($('#confirm_password').value.trim() === signUpForm.password.trim()) {
        $("#password").classList.add("border", 'border-2', 'border-green-500');
        $("#confirm_password").classList.add("border", 'border-2', 'border-green-500');

        signUp(signUpForm)
            .then((resp) => resp.json())
            .then((data) => console.log(data))
            .catch((err) => console.log(err.message))

    } else {
        $("#password").classList.add("border", 'border-2', 'border-red-500');
        $("#confirm_password").classList.add("border", 'border-2', 'border-red-500');
    }
});


// ----------------------- authorization actions end --------------------

$("#signin").addEventListener("click", (e) => {
    e.preventDefault()

    const signInForm = {
        username: $("#login_user").value,
        password: $("#login_password").value
    }

    signIn(signInForm)
        .then((resp) => resp.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err.message))
})