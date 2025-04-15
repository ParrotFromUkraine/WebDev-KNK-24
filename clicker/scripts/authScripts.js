const signupForm = document.getElementById('signupForm')
const valueName = document.getElementById('name')
const valuePassword = document.getElementById('password')

const admin = {
  userName: 'Parrot',
  password: 'Parrot',
}

// Обработчик события для отправки формы
signupForm.addEventListener('submit', function (event) {
  event.preventDefault() // Не отправляем форму сразу

  const name = valueName.value
  const password = valuePassword.value

  // Проверяем, совпадает ли введённый логин и пароль с правильными данными
  if (name === admin.userName && password === admin.password) {
    // Если логин и пароль совпадают, перенаправляем на другую страницу
    window.location.href = '../html/clicker.html' // Переход на страницу main.html
  } else {
    // Если данные не совпадают, выводим ошибку
    alert('Invalid username or password. Please try again.')
  }
})
