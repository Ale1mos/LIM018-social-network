import register from '../src/view/register.js';
// import indexController from '../src/view-controller/index-controller';
// import * as mainFunctions from '../src/view-controller/index-controller';
jest.mock('../src/lib/firebase.js');

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
