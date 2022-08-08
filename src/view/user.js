export default() => {
  const viewUser = `
  <h2>Bienvenida aquí</h2>
  <img src="./images/logoGoogle.png" alt="">`

  const divElement = document.createElement('div')
  divElement.innerHTML = viewUser;

  return divElement;
}