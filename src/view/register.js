/* eslint-disable default-case */
/* eslint-disable no-undef */
// import { createUserWithEmailAndPassword, auth } from '../lib/firebase.js';
import { createUserWithEmailPassword, userCollection } from '../lib/firebase.js';

// import { changeview } from '../view-controller/index-controller.js';

export default () => {
  const viewRegister = `
  <section class="login">
  <h3 id="nameApp">PERUVIAN TASTE</h3>
  <div id="form">
    <div class="messageText"></div>
    <input type="text" id="inputUserName" placeholder="Nombre">
    <br><br>
    <input type="email" id="inputEmail" class = "inputData" placeholder="Correo">
    <br><br>
    <input type="password" id="inputPassword" placeholder="Contraseña">
    <br><br>
    <div id ="errorM"></div>
    <br><br>
    <button type="button" id="btnRegister" class="btns">Registrarse</button>
    <br><br>
    <button type="button" id="btnIniciar" class="btns"><a href="#/login">Iniciar sesión</a></button>
  </div>
  </section>
  `;

  const divElement = document.createElement('div');
  divElement.innerHTML = viewRegister;

  divElement.querySelector('#btnRegister').addEventListener('click', () => {
    if (inputEmail.value !== '' && inputPassword.value !== '' && inputUserName.value !== '') {
      const email = document.getElementById('inputEmail').value;
      const password = document.getElementById('inputPassword').value;
      const userName = document.getElementById('inputUserName').value;
      const messageText = divElement.querySelector('.messageText');

      // console.log(email, password, userName);
      createUserWithEmailPassword(email, password)
        .then((userCredential) => {
          messageText.textContent = 'Tu usuario ha sido creado';
          // console.log(userCredential.user.uid);
          const userId = userCredential.user.uid;
          // console.log(userId);
          userCollection(userId, userName, '../images/fotoPerfil.webp', email);

          window.location.href = '#/login';
        });
    } else {
      const messageText = divElement.querySelector('.messageText');
      messageText.textContent = 'Por favor llene los campos';
    }
  });
  return divElement;
};

// const email = document.getElementById("email").value
// const password = document.getElementById("password").value

// document.getElementById("btnRegister").addEventListener("click", function(){

// })
