/* eslint-disable default-case */
/* eslint-disable no-undef */
// import { createUserWithEmailAndPassword, auth } from '../lib/firebase.js';
import { createUserWithEmailPassword, userCollection } from '../lib/firebase.js';

//import { changeview } from '../view-controller/index-controller.js';

export default () => {
  const viewRegister = `
  <h2>Bienvenida regístrate</h2>
  <section class="login">

  
  <div id="form">
    <input type="text" id="userName" placeholder="Nombre">
    <br><br>
    <input type="email" id="email" placeholder="Correo">
    <br><br>
    <input type="password" id="password" placeholder="Contraseña">
    <br><br>
    <div id ="errorM"></div>
    <br><br>
    <button type="button" id="btnRegister">Registrarse</button>
    <br><br>
    <button type="button" id="btnIniciar"><a href="#/login">Iniciar sesión</a></button>
    
  </div>
  </section>
  `;

  const divElement = document.createElement('div');
  divElement.innerHTML = viewRegister;

  divElement.querySelector('#btnRegister').addEventListener('click', () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const userName = document.getElementById('userName').value;
    console.log(email, password);
    createUserWithEmailPassword(email, password)
      .then((userCredential) => {
        console.log(userCredential.user.uid)
        const userId = userCredential.user.uid
        userCollection(userId, userName)

        window.location.href = '#/login'; })
    // .catch(function(error){console.log("hola",error)})
      // .catch((error) => {
      //   const errorM = error.message;
      //   errorMessage.setAttribute('class', 'errorMe');
      //   switch (errorM) {
      //     case 'Firebase: Error(auth/invalid-email).': {
      //       errorMessage.textContent = 'Ingrese un correo electrónico válido';
      //       break;
      //     }
      //     case 'Firebase: Error(auth/wrong-password).': {
      //       errorMessage.textContent = 'Ingrese una clave válida';
      //       break;
      //     }
      //   }
      // });
  });
  return divElement;
};

// const email = document.getElementById("email").value
// const password = document.getElementById("password").value

// document.getElementById("btnRegister").addEventListener("click", function(){

// })
