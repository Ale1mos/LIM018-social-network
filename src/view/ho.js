export default() => {
  const viewHome = `
  <h2>Bienvenida</h2>
  <section class="muro">
    <nav>
      <ul id="barra">
        <img src="" alt="">
        <li><a href="#/home">Inicio</a></li>
        <li><a href="#/user">Perfil</a></li>
        <li><a href="#/out">Salir</a></li>
      </ul>
    </nav>

  </section>
  <img src="./images/depositphotos_59216213-stock-illustration-peruvian-food-illustration.jpg" alt="hola">`

  const divElement = document.createElement('div')
  divElement.innerHTML = viewHome;

  return divElement
}