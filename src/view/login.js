export default() => {
  const viewLogin = `
  <h2>Bienvenida iniciar sesion</h2>
  <section class="login">

  </section>
  `

  const divElement = document.createElement('div')
  divElement.innerHTML = viewLogin;

  return divElement
}