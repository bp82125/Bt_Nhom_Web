document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("loginForm");

  form.addEventListener("submit", function (event) {
    var emailInput = document.getElementById("floatingInput");

    if (!form.checkValidity()) {
      // If the form is not valid
      event.preventDefault(); // Prevent form submission
      event.stopPropagation(); // Stop event propagation
    }

    if (!isValidEmail(emailInput.value)) {
      // If the email is not valid
      event.preventDefault(); // Prevent form submission
    }

    form.classList.add("was-validated");
  });

  function isValidEmail(email) {
    // Regular expression for validating an Email
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }
});
