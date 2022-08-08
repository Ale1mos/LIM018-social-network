export default() => {
  const viewHome = `
  <h2>Bienvenida</h2>
  <section class="muro">

  </section>
  <img src="./images/depositphotos_59216213-stock-illustration-peruvian-food-illustration.jpg" alt="hola">`

  const divElement = document.createElement('div')
  divElement.innerHTML = viewHome;

  return divElement
}