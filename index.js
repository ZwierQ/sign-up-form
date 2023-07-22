const password = document.querySelector("#password")
const confirmPassword = document.querySelector("#confirm-password")

const passwordInputs = document.querySelectorAll(".password-input")

const errorParagraphs = document.querySelectorAll(".error-message")

function validatePasswords(password1, password2) {
    let errorMessage = "";
    let isValid = false
    //  return (password1 === password2 && password1.length >= 8) ? true : false
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

passwordInputs.forEach(function(elem) {
    elem.addEventListener("input", () => {
        [errorMessage ,isValid] = validatePasswords(password.value, confirmPassword.value)
        
        if (isValid) {
            password.classList.remove("error")
            password.classList.add("correct")
            
            confirmPassword.classList.remove("error")
            confirmPassword.classList.add("correct")
            
            errorParagraphs.forEach((elem) => {
                elem.textContent = errorMessage
                elem.classList.add("invisible")
            })
            
        } else {
            password.classList.remove("correct")
            password.classList.add("error")
    
            confirmPassword.classList.remove("correct")
            confirmPassword.classList.add("error")
            
            errorParagraphs.forEach((elem) => {
                elem.textContent = errorMessage
                elem.classList.remove("invisible")
            })
        }
    })
})