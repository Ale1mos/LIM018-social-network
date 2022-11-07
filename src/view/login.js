// import { signInWithEmailAndPassword, auth } from '../lib/firebase.js';
// import { changeview } from '../view-controller/index-controller.js';
import {
  signInWithEmailPassword, singGoogle, userCollection, GoogleAuthProvider,
} from '../lib/firebase.js';
// import { async } from 'regenerator-runtime';

export default () => {
  const viewLogin = `
  
  <section class="containerLogin">
  <h3 id="nameApp">PERUVIAN TASTE</h3>
  <div id="form">
    <div class="messageText"></div>
    <input type="text" id="email" placeholder="Correo">
    <br><br>
    <input type="password" id="password" placeholder="Contraseña">
    <br><br>
      <button id="login" value="iniciar" class="btns">Iniciar Sesión</button>
      <h3>---- O ----</h3>
      <img id="btnGoogle" src="./images/logoGoogle.png" alt="">
    <button id="register" value="registrarse" class="btns"><a href="#/register">Registrarse</a>
    </button>
  </div>
  </section>
  `;

  const divElement = document.createElement('div');
  divElement.innerHTML = viewLogin;

  divElement.querySelector('#btnGoogle').addEventListener('click', (e) => {
    e.preventDefault();

    singGoogle()
      .then((result) => {
        // disconnect();
        sessionStorage.clear();
        // console.log(result)
        // de dónde sale el credentialFromResult'
        GoogleAuthProvider.credentialFromResult(result);

        const user = result.user;
        // console.log(user);
        const nameGloogle = user.displayName;
        // console.log(nameGloogle)
        const emailGoogle = user.email;
        // console.log(emailGoogle)
        const idUserRegister = user.uid;
        // console.log(idUserRegister)
        const photoGoogle = user.photoURL;
        // console.log(photoGoogle)

        // CREAR Y ALMACENAR USUARIO
        userCollection(idUserRegister, nameGloogle, photoGoogle, emailGoogle);
        sessionStorage.setItem('USER', JSON.stringify(idUserRegister));

        window.location.href = '#/home';
      });
  });

  // LOGEARSE CON CORREO

  divElement.querySelector('#login').addEventListener('click', () => {
    if (email.value !== '' && password.value !== '') {
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      // console.log(email, password);
      signInWithEmailPassword(email, password)
        .then((objectUser) => {
          // console.log('objectUser', objectUser);
          // console.log(objectUser.user.uid);
          const uidUser = objectUser.user.uid;
          sessionStorage.setItem('USER', JSON.stringify(uidUser));

          window.location.href = '#/home';
        // console.log(x)
        // email.innerHTML =
        });
    } else {
      const messageText = divElement.querySelector('.messageText');
      messageText.textContent = 'Por favor llene los campos';
    }

    // .catch((error) => { console.log('hola', error); });
    // .catch(error)=>{console.log(error)}
  });
  return divElement;
};
