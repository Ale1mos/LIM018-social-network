// importamos la funcion que vamos a testear
import login from '../src/view/login';

jest.mock('../src/lib/firebase.js');

// describe('myFunction', () => {
//   it('debería ser una función', () => {
//     expect(typeof myFunction).toBe('function');
//   });
// });

function tick() {
  return new Promise((resolve) => {
    setTimeout(resolve, 0);
  });
}

it("Deberia cambiar a la pagina home cuando ingrese correo", () => {

  const divElement = document.createElement('div');
  divElement.id = 'container'
  document.body.append(divElement);
  divElement.appendChild(login());

  const buttonLogin = document.querySelector('#login');

  const inputEmail = document.querySelector('#email');
  const inputPassword = document.querySelector('#password');
  inputEmail.value = 'nombre@gmail.com';
  inputPassword.value = 'holamundo';

  buttonLogin.click();

  // await tick();
  expect(window.location.hash).toBe('#/home');


});

it ('Deberia cambiar a la pagina home cuando ingrese correo de google', ()=>{
  const divElement = document.createElement('div');
  divElement.id = 'container'
  document.body.append(divElement);
  divElement.appendChild(login());

  const buttonLogin = document.querySelector('#btnGoogle');

  buttonLogin.click();
  
})


