'use strict';
 
document.querySelector('.form').addEventListener('submit', (event) => {
  event.preventDefault();
 
  const storedUsername = "testuser@email.com";
  const storedPassword = "password123";
 
  const username = document.querySelector('.email').value;
  const password = document.querySelector('.password').value;
 
  if (username === storedUsername && password === storedPassword) {
    localStorage.setItem('isLoggedIn', true);
    window.location.href = 'home.html';
  } else {
    document.querySelector('.login-error').textContent = 'Incorrect username or password';
  }
});
