import register from '../src/view/register.js';
// import indexController from '../src/view-controller/index-controller';
// import * as mainFunctions from '../src/view-controller/index-controller';
jest.mock('../src/lib/firebase.js');

describe('regresar a la vista principal LOGIN', () => {
  it('reconocimiento del btnBackToLoginTest', () => {
    const divElement = document.createElement('div');
    divElement.id = 'container';
    document.body.append(divElement);
    divElement.appendChild(register());
    // document.body.appendChild(register());
    const btnBackToLoginTest = document.querySelector('#btnIniciar');
    // const buttonBackToLoginTest = document.querySelector('#buttonBackToLogin');
    expect(btnBackToLoginTest instanceof HTMLElement).toBe(true);
    // expect(buttonBackToLoginTest instanceof HTMLElement).toBe(true);
  });

  // it('regresar a la vista del login ', () => {
  //   const divElement = document.createElement('div');
  //   divElement.id = 'container';
  //   document.body.append(divElement);
  //   divElement.appendChild(register());
  //   const spy = jest.spyOn(mainFunctions, 'init').mockImplementation(() => null);

  //   const btnBackToLoginTest = document.querySelector('#btnIniciar');
  //   btnBackToLoginTest.click();
  //   expect(spy).toHaveBeenCalledWith('');

  // buttonBackToLoginTest.click();
  // expect(spy).toHaveBeenCalledWith('/');

  // document.body.appendChild(register());
  // const spy = jest.spyOn(mainFunctions, 'navigation').mockImplementation(() => null);

  // const buttonBackToLoginTest = document.querySelector('#buttonBackToLogin');
  // buttonBackToLoginTest.click();
  // expect(spy).toHaveBeenCalledWith('/');
  // });
});

// it('Mensaje de error, por no ingresar los datos', () => {
//   const divElement = document.createElement('div');
//   divElement.id = 'container';
//   document.body.append(divElement);
//   divElement.appendChild(register());

//   const btnRegisterTest = document.querySelector('#btnRegister');
//   const password = document.querySelector('#inputPassword');
//   password.value = '';
//   btnRegisterTest.click();
//   const messageTextTest = document.querySelector('.messageText');

//   expect(messageTextTest.textContent).toEqual('hola');
// });

// function tick() {
//   return Promise.resolve(true);
// }

// it('Deberia cambiar a la pagina login cuando ingrese correo', async () => {
//   const divElement = document.createElement('div');
//   divElement.id = 'container';
//   document.body.append(divElement);
//   divElement.appendChild(register());

//   const buttonRegister = document.querySelector('#btnRegister');

//   const inputEmailTest = document.querySelector('#inputEmail');
//   const inputPasswordTest = document.querySelector('#inputPassword');
//   inputEmailTest.value = 'nombre@gmail.com';
//   inputPasswordTest.value = 'holamundo';

//   buttonRegister.click();

//   await tick();
//   expect(window.location.hash).toBe('');
// });
