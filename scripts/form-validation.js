/*
<p>
The checkMissing() function checks all elements with the class "required".
If any required fields are empty, it counts them and updates the span
with the id "missing-count". It returns true if missing fields exist.
</p>
*/

function checkMissing() {
    let requiredFields = document.querySelectorAll(".required");
    let missing = 0;

    requiredFields.forEach(function(field) {
        if (field.value.trim() === "") {
            missing++;
        }
    });

    let messageSpan = document.getElementById("missing-count");

    if (missing > 0) {
        messageSpan.textContent = missing + " required field(s) are missing.";
        return true;
    } else {
        messageSpan.textContent = "";
        return false;
    }
}

/*
<p>
The validateEmail() function checks whether the email input contains
at least 8 characters. If the email is invalid, it adds the
"invalid-email" class to highlight the field in red.
If valid, it removes the red border and restores the normal required styling.
It returns true if the email is invalid.
</p>
*/

function validateEmail() {
    let emailField = document.getElementById("email");

    if (emailField.value.length < 8) {
        emailField.classList.add("invalid-email");
        return true;
    } else {
        emailField.classList.remove("invalid-email");
        return false;
    }
}

/*
<p>
The combinedValidation() function runs both checkMissing()
and validateEmail(). If either function returns true,
form submission is blocked and an alert is displayed.
</p>
*/

function combinedValidation() {
    let missingFields = checkMissing();
    let invalidEmail = validateEmail();

    if (missingFields || invalidEmail) {
        alert("Form submission blocked. Please complete all required fields correctly.");
    } else {
        alert("Form submitted successfully!");
    }
}

/* Event Listener */

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("submit-btn")
        .addEventListener("click", combinedValidation);
});