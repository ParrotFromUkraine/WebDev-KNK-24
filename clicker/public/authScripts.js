document.getElementById('signupForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const username = document.getElementById('name').value;
  const password = document.getElementById('password').value;

  const res = await fetch('/sign-up', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  });

  const data = await res.json();
  alert(data.message);
});

// Опціонально: функція перемикання пароля
function togglePassword() {
  const passwordInput = document.getElementById('password');
  passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
}
