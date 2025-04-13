console.log('code is working')
const admin = {
	userName: 'Parrot',
	password: 'Parrot',
}

// Получаем элементы формы
const signupForm = document.getElementById('signupForm')
const valueName = document.getElementById('name')
const valuePassword = document.getElementById('password')

// Обработчик события для отправки формы
signupForm.addEventListener('submit', function (event) {
	event.preventDefault() // Не отправляем форму сразу

	const name = valueName.value
	const password = valuePassword.value

	// Проверяем, совпадает ли введённый логин и пароль с правильными данными
	if (name === admin.userName && password === admin.password) {
		// Если логин и пароль совпадают, перенаправляем на другую страницу
		window.location.href = 'main.html' // Переход на страницу main.html
	} else {
		// Если данные не совпадают, выводим ошибку
		alert('Invalid username or password. Please try again.')
	}
})
