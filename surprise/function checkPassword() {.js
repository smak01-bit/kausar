function checkPassword() {
  const passwordInput = document.getElementById("password").value;
  const correctPassword = "01011999"; // Replace with her date of birth (DDMMYYYY)

  if (passwordInput === correctPassword) {
    document.getElementById("password-protection").style.display = "none";
    document.getElementById("content").style.display = "block";
  } else {
    document.getElementById("error-message").textContent = "Incorrect password. Please try again.";
  }
}