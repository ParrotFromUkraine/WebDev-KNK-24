fetch('http://localhost:3000/sign-up', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    email,
    password
  })
}).then(response => {
  return response.json()
}).then(data => {
  console.log(data)
})
