// export default () => {
import { saveTask, getTasks, onGetTask } from '../lib/firebase.js';

const viewHome = {
  template: () => {
    const homeTemplate = `
  
      <section class="">
        <nav>
          <ul id="barra">
          <img id="logoPeruvianHome" src="./images/depositphotos_59216213-stock-illustration-peruvian-food-illustration.jpg" alt="hola">
            <li><a href="#/home">Inicio</a></li>
            <li><a href="#/user">Perfil</a></li>
            <li><a href="#/out">Salir</a></li>
          </ul>
        </nav>
      </section>
      
      <body class="muro">
        <form id="time-Line">

          <input type="text" id = "postTitle" placeholder="Título">
          <textarea id="post" placeholder="Escribe aquí"></textarea><br>
          <button id="btnPublicar">Publicar</button><br>
          <button id="btnCancelar">Cancelar</button>
        </form>
    
        <div id="containerHome"></div>
    
      </body>`;

    const divElement = document.createElement('div');
    divElement.innerHTML = homeTemplate;

    return divElement;
  },

  init: async () => {

    const containerPost = document.getElementById('containerHome');

    // console.log("h")
    // const querySnapshot = await getTasks();
    onGetTask((querySnapshot) =>{

    let html = '';

      querySnapshot.forEach(doc=>{
        const task = doc.data()
        html +=`
        <div id="containerPost">
          <img src="../images/fotoPerfil.webp" alt="">
          <p id="titleComment">${task.title}</p>
          <p id="descripComment">${task.description}</p>
        </div>
        `
        // console.log(doc.data())
        // console.log(containerPost)
      })
      containerPost.innerHTML= html
    // console.log(querySnapshot)
  })

    const timeLine = document.getElementById('time-Line');

    timeLine.addEventListener('submit', (e) => {
      e.preventDefault();

      const title = timeLine.postTitle;
      const description = timeLine.post;

      saveTask(title.value, description.value);

      timeLine.reset();
    });

    

    // console.log(timeLine)
  },
};

export default viewHome;
// export {title}

// }

// const btnPublicar= document.getElementById("btnPublicar")
// const btnCancelar= document.getElementById("btnPublicar")

// btnPublicar.addEventListener("click",() =>{
//   const userPost =
// })
// borrar al final
