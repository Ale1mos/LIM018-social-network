export default() => {
  const viewRegister = `
  <h2>Bienvenida iniciar sesion</h2>
  <section class="login">
  <h2>bienvenidos a login</h2>

  <img id="logoPeruvian" src="./images/depositphotos_59216213-stock-illustration-peruvian-food-illustration.jpg" alt="">
  <div id="form">
    <input type="" id="password" placeholder="Nombre">
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
  `

  const divElement = document.createElement('div')
  divElement.innerHTML = viewRegister;

  return divElement
}