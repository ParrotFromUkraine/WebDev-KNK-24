document.getElementById("registerButton").addEventListener("click", function (event) {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!name || !email || !password) {
    alert("Please fill out all fields.");
    console.log('error register')
    return;
  }

  if (!validateEmail(email)) {
    alert("Please enter a valid email address.");
    console.log('error register')
    return;
  }

  if (password.length < 6) {
    alert("Password should be at least 6 characters.");
    console.log('error register')
    return;
  }

  alert(`Welcome, ${name}! Registration successful.`);
  console.log(`New registor ${name}\n Email: ${email}\n Password: ${password}`)

  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
});
document.getElementById('googleButton').addEventListener('click', function () {
  alert('Google login not worikng')
})

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
