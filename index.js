const password = document.querySelector("#password")
const confirmPassword = document.querySelector("#confirm-password")

const passwordInputs = document.querySelectorAll(".password-input")

const errorParagraphs = document.querySelectorAll(".error-message")

function validatePasswords(password1, password2) {
    let errorMessage = "";
    let isValid = false
    if (password1.length < 8) {
        isValid = false
        errorMessage = "Password is too short"
    } else if (password1 !== password2) {
        isValid = false
        errorMessage = "Passwords doesn't match"
    } else if (password1 === password2 && password1.length >= 8) {
        isValid = true
    }
    
    return [errorMessage, isValid]
}

function toggleValidity() {
    password.classList.toggle("error")
    password.classList.toggle("correct")

    confirmPassword.classList.toggle("error")
    confirmPassword.classList.toggle("correct")

    
    errorParagraphs.forEach((elem) => {
        elem.classList.toggle("invisible")
    })
}

function setError(message) {
    errorParagraphs.forEach((elem) => {
        elem.textContent = message
    })
}

passwordInputs.forEach(function(elem) {
    elem.addEventListener("input", () => {
        [errorMessage ,isValid] = validatePasswords(password.value, confirmPassword.value)
        
        if (isValid) {
            !!password.classList.contains("error") && toggleValidity() 
        } else {
            !!password.classList.contains("correct") && toggleValidity()
        }
        setError(errorMessage)
    })
})