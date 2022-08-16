/* eslint-disable default-case */
/* eslint-disable no-undef */
import { createUserWithEmailAndPassword, auth } from '../lib/firebase.js';
//import { changeview } from '../view-controller/index-controller.js';

export default () => {
  const viewRegister = `
  <h2>Bienvenida regístrate</h2>
  <section class="login">

  <img id="logoPeruvianHome" src="./images/depositphotos_59216213-stock-illustration-peruvian-food-illustration.jpg" alt="">
  <div id="errorMessage">
  </div>
  <div id="form">
    <input type="" id="" placeholder="Nombre">
    <br><br>
    <input type="text" id="email" placeholder="Correo">
    <br><br>
    <input type="password" id="password" placeholder="Contraseña">
    <br><br>
    <button type="button" id="btnRegister">Registrarse</button>
    <br><br>
    <button type="button" id="btnIniciar"><a href="#/login">Iniciar sesión</a></button>
    <img id="google" src="./images/logoGoogle.png" alt="">
  </div>
  </section>
  `;

  const divElement = document.createElement('div');
  divElement.innerHTML = viewRegister;

  divElement.querySelector('#btnRegister').addEventListener('click', () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    console.log(email, password);
    createUserWithEmailAndPassword(auth, email, password)
      .then((x) => { window.location.href = '#/login'; })
    // .catch(function(error){console.log("hola",error)})
      .catch((error) => {
        const errorM = error.message;
        errorMessage.setAttribute('class', 'errorMe');
        switch (errorM) {
          case 'Firebase: Error(auth/invalid-email).': {
            errorMessage.textContent = 'Ingrese un correo electrónico válido';
            break;
          }
          case 'Firebase: Error(auth/wrong-password).': {
            errorMessage.textContent = 'Ingrese una clave válida';
            break;
          }
        }
      });
  });
  return divElement;
};

// const email = document.getElementById("email").value
// const password = document.getElementById("password").value

// document.getElementById("btnRegister").addEventListener("click", function(){

// })
