/* =====================================================
   FORM VALIDATION
   ===================================================== */

const registrationForm = document.getElementById("registrationForm");

if (registrationForm) {
  registrationForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form values
    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const event = document.getElementById("event").value;
    const message = document.getElementById("message").value.trim();
    const terms = document.getElementById("terms").checked;

    // Clear previous errors
    clearErrors();

    // Validate
    let isValid = true;

    if (!fullName) {
      showError("fullName", "Full name is required");
      isValid = false;
    }

    if (!email || !isValidEmail(email)) {
      showError("email", "Valid email is required");
      isValid = false;
    }

    if (!phone) {
      showError("phone", "Phone number is required");
      isValid = false;
    }

    if (!event) {
      showError("event", "Please select an event");
      isValid = false;
    }

    if (!terms) {
      showError("terms", "You must agree to the terms");
      isValid = false;
    }

    // If valid, submit to backend
    if (isValid) {
      submitRegistration(fullName, email, phone, event, message);
    }
  });
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function showError(fieldId, message) {
  const field = document.getElementById(fieldId);
  if (field) {
    field.classList.add("error");
    field.style.borderColor = "#FF0000";

    // Create error message
    const errorDiv = document.createElement("div");
    errorDiv.className = "error-message";
    errorDiv.textContent = message;
    errorDiv.style.color = "#DC143C";
    errorDiv.style.fontSize = "0.85rem";
    errorDiv.style.marginTop = "5px";

    field.parentElement.appendChild(errorDiv);
  }
}

function clearErrors() {
  const errorMessages = document.querySelectorAll(".error-message");
  errorMessages.forEach((msg) => msg.remove());

  const errorFields = document.querySelectorAll(".error");
  errorFields.forEach((field) => {
    field.classList.remove("error");
    field.style.borderColor = "";
  });
}

function submitRegistration(fullName, email, phone, event, message) {
  // Submit to backend API
  const formData = {
    full_name: fullName,
    email: email,
    phone: phone,
    event_id: event,
    message: message,
  };

  // For now, just show success (backend API call will be added later)
  showSuccessMessage();

  // Reset form
  if (registrationForm) {
    registrationForm.reset();
  }
}

function showSuccessMessage() {
  const formContainer = document.querySelector(".form-container");
  if (formContainer) {
    const successMsg = document.createElement("div");
    successMsg.className = "success-message";
    successMsg.innerHTML = `
      <h3 style="color: #DC143C; margin-bottom: 10px;">✓ Registration Successful!</h3>
      <p style="color: white;">Thank you for registering. We'll contact you soon!</p>
    `;
    successMsg.style.cssText = `
      background-color: rgba(220, 20, 60, 0.1);
      border: 2px solid #DC143C;
      padding: 20px;
      border-radius: 8px;
      margin-bottom: 20px;
      animation: slideInBottom 0.6s ease-out;
    `;

    formContainer.insertBefore(successMsg, registrationForm);

    // Remove success message after 5 seconds
    setTimeout(() => {
      successMsg.remove();
    }, 5000);
  }
}
