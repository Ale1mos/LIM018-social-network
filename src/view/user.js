// import { async } from 'regenerator-runtime';
import { getUser } from '../lib/firebase.js';

// console.log(idUser);

export default () => {
  const viewUser = `
  <ul id="barra">
          <img id="logoPeruvianHome" src="./images/depositphotos_59216213-stock-illustration-peruvian-food-illustration.jpg" alt="hola">
            <li><a href="#/home">Inicio</a></li>
            <li><a id="btnProfile" href="#/user">Perfil</a></li>
            <li><a href="#/out">Salir</a></li>
  </ul>
  <div id = "containerProfile">
  <img id="userPhoto" src="">
  <h2 id="userProfile"></h2>
  <p id="userEmail"></p>
  <textarea id="bioProfile" placeholder="Cuéntame algo de ti"></textarea>
  </div>
  `;

  const divElement = document.createElement('div');
  divElement.innerHTML = viewUser;
  promiseGetUser(divElement);
  // const userProfile = divElement.querySelector('#userProfile');
  // console.log(userProfile.textContent);
  // getUser(idUser).then((e)=>console.log(e))

  return divElement;
};

{ /* <h2>Bienvenida aquí al viewUser</h2>
  <img src="./images/logoGoogle.png" alt=""></img> */ }

async function promiseGetUser(viewUser) {
  const userProfile = viewUser.querySelector('#userProfile');
  const userPhoto = viewUser.querySelector('#userPhoto');
  const userEmail = viewUser.querySelector('#userEmail');


  const idUser = JSON.parse(sessionStorage.getItem('USER'));
  console.log(idUser);
  // getUser(idUser).then((element)=>console.log(element.data()));
  const usuario = await getUser(idUser);
  userProfile.textContent = usuario.name;
  userPhoto.src = usuario.photo;
  userEmail.textContent = usuario.email;


  // console.log(usuario);

}
