// importamos la funcion que vamos a testear
// import { async } from 'regenerator-runtime';
import login from '../src/view/login.js';

jest.mock('../src/lib/firebase.js');

// describe('myFunction', () => {
//   it('debería ser una función', () => {
//     expect(typeof myFunction).toBe('function');
//   });
// });

function tick() {
  return Promise.resolve(true);
}

it('Deberia cambiar a la pagina home cuando ingrese correo', async () => {
  const divElement = document.createElement('div');
  divElement.id = 'container';
  document.body.append(divElement);
  divElement.appendChild(login());

  const buttonLogin = document.querySelector('#login');

  const inputEmail = document.querySelector('#email');
  const inputPassword = document.querySelector('#password');
  inputEmail.value = 'nombre@gmail.com';
  inputPassword.value = 'holamundo';

  buttonLogin.click();

  await tick();
  expect(window.location.hash).toBe('#/home');
});

it('no deberia ingresar porque no esta Registrado', () => {
  const divElement = document.createElement('div');
  divElement.id = 'container';
  document.body.append(divElement);
  document.body.appendChild(login());

  const btnLogin = document.querySelector('#login');
  const loginEmail = document.querySelector('#password');
  const loginPasword = document.querySelector('#email');
  const messageTextTest = document.querySelector('.messageText');

  loginEmail.value = '';
  loginPasword.value = '';

  btnLogin.click();

  expect(messageTextTest.textContent).toBe('Por favor ingresa tu email y password');
});

it('login es una funcion', () => {
  expect(typeof login).toBe('function');
});

// it('Deberia cambiar a la pagina home cuando ingrese correo de google', () => {
//   const divElement = document.createElement('div');
//   divElement.id = 'container';
//   document.body.append(divElement);
//   divElement.appendChild(login());

//   const buttonLogin = document.querySelector('#btnGoogle');

//   buttonLogin.click();
// });
