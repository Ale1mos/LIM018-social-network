import {
  signInWithEmailPassword, singGoogle, userCollection, disconnect, GoogleAuthProvider,
} from '../lib/firebase.js';
// import { async } from 'regenerator-runtime';

export default () => {
  const viewLogin = `
  <section class="login">
   
  
  <div id="form">
    <h3 id="nameApp">PERUVIAN TASTE</h3>

    <input type="text" id="email" class = "inputData" placeholder="Correo">
    <br><br>
    <input type="password" id="password" class = "inputData" placeholder="Contraseña">

    <br><br>

    <button id="login" value="iniciar" class="btns">Iniciar Sesión</button>
    <img id="btnGoogle" src="./images/logoGoogle.png" alt="">
    <br><br>
    
    <button value="registrarse" id="register" class="btns"><a href="#/register">Registrarse</a></button>
    
  </div>
  </section>
  `;

  const divElement = document.createElement('div');
  divElement.innerHTML = viewLogin;

  // const singInGoogle = () => {
  //     divElement.querySelector('#btnGoogle').addEventListener('click',(e) => {
  //       e.preventDefault();
  //       singGoogle()
  // .then(o) => {
  // console.log("funciona")
  // const credential = GoogleAuthProvider.credentialFromResult(result);
  // const token = credential.accessToken;
  // const user = result.user;
  // userCollection(user.uid, user.displayName, user.email);
  // window.location.hash = '#/home';
  // }

  // })
  // }

  // LOGEARSE CON GOOGLE

  divElement.querySelector('#btnGoogle').addEventListener('click', (e) => {
    e.preventDefault();

    singGoogle()
    // que es el result?
      .then((result) => {
        // disconnect();
        sessionStorage.clear();
        // console.log(result)
        GoogleAuthProvider.credentialFromResult(result);

        const user = result.user;
        console.log(user);
        const nameGloogle = user.displayName;
        console.log(nameGloogle);
        const emailGoogle = user.email;
        console.log(emailGoogle);
        const idUserRegister = user.uid;
        console.log(idUserRegister);
        const photoGoogle = user.photoURL;
        console.log(photoGoogle);

        // CREAR Y ALMACENAR USUARIO
        userCollection(idUserRegister, nameGloogle, photoGoogle, emailGoogle);

        // se está pasando de tipo de dato número a string con stringify?
        sessionStorage.setItem('USER', JSON.stringify(idUserRegister));

        window.location.href = '#/home';
      });
  });

  // LOGEARSE CON CORREO

  divElement.querySelector('#login').addEventListener('click', () => {
    // google.style.display = 'none';
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    console.log(email, password);
    signInWithEmailPassword(email, password)
      .then((objectUser) => {
        console.log(objectUser);
        console.log(objectUser.user.uid);
        const uidUser = objectUser.user.uid;
        sessionStorage.setItem('USER', JSON.stringify(uidUser));

        window.location.href = '#/home';
        // console.log(x)
        // email.innerHTML =
      })
      .catch((error) => { console.log('hola', error); });
    // .catch(error)=>{console.log(error)}
  });
  return divElement;
};
