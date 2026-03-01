/*
Name: Crystal Michelle Boswell
Date: March 1, 2026
Project: Form Validation Project
*/

/*
<p>
The checkMissing() function loops through all elements with the class
"required" and checks whether they are empty. It counts the number of
missing fields and updates the span with the id "missing-count".
The function returns true if any required fields are missing.
</p>
*/

function checkMissing() {
    const requiredFields = document.querySelectorAll(".required");
    let missing = 0;

    requiredFields.forEach(function(field) {
        if (field.value.trim() === "") {
            missing++;
        }
    });

    const messageSpan = document.getElementById("missing-count");

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
The validateEmail() function checks whether the email field
contains at least 8 characters. If the email is invalid,
the function adds the "invalid-email" class to highlight
the field with a red border. If valid, it removes the
"invalid-email" class and restores normal styling.
The function returns true if the email is invalid.
</p>
*/

function validateEmail() {
    const emailField = document.getElementById("email");
    const emailValue = emailField.value.trim();

    if (emailValue.length < 8) {
        emailField.classList.add("invalid-email");
        return true;
    } else {
        emailField.classList.remove("invalid-email");
        return false;
    }
}

/*
<p>
The runValidation() function combines both checkMissing()
and validateEmail(). If either function detects an error,
form submission is blocked and an alert message is shown.
If no errors exist, a success alert is displayed.
</p>
*/

function runValidation() {
    const hasMissing = checkMissing();
    const emailInvalid = validateEmail();

    if (hasMissing || emailInvalid) {
        alert("Form submission blocked. Please complete all required fields correctly.");
    } else {
        alert("Form submitted successfully!");
    }
}

/* Event Listener */

document.addEventListener("DOMContentLoaded", function() {
    const submitButton = document.getElementById("submit-btn");
    submitButton.addEventListener("click", runValidation);
});