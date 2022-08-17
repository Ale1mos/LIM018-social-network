// export default () => {

import { saveTask, getTasks, onGetTask, deleteTask, getTask, updateTask } from '../lib/firebase.js';

let editStatus = false;
let id = '';
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
          <div id="containerTitlePost">
            <input type="text" id = "postTitle" placeholder="Título">
            <textarea id="post" placeholder="Escribe aquí"></textarea><br>
          </div>
          <div id="containerbtnPost">
            <button id="btnPublicar">Publicar</button><br>
            <button id="btnCancelar">Cancelar</button>
          </div>
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
        // console.log(doc.id)
        html +=`
        <div id="containerComment">
          <img src="../images/fotoPerfil.webp" alt="">
          <p id="titleComment">${task.title}</p>
          <p id="descripComment">${task.description}</p>
          <button class ='btn-delete' data-id="${doc.id}">Eliminar</button>
          <button class ='btn-edit' data-id="${doc.id}">Editar</button>

        </div>
        `
        // console.log(doc.data())
        // console.log(containerPost)
      });
      containerPost.innerHTML= html

      const btnsDelete = containerPost.querySelectorAll('.btn-delete');
      // console.log(btnDelete)

      btnsDelete.forEach(btn => {
        btn.addEventListener('click',({target:{dataset}})=>{
          deleteTask(dataset.id)
          // console.log(dataset.id)
          // console.log('hola')
        })
      })

      
      const btnsEdit = containerPost.querySelectorAll('.btn-edit');
      btnsEdit.forEach(btn=>{
        btn.addEventListener('click', e =>{
          console.log(e.target.dataset.id)
          // console.log(e)
          getTask (e.target.dataset.id).then(doc=>{
            // console.log(doc.data())
          const task = doc.data()

          timeLine['postTitle'].value = task.title
          timeLine['post'].value = task.description

          editStatus = true

          id = doc.id

          timeLine['btnPublicar'].innerText = 'Actualizar'

          })
          // console.log(doc.data()) (no figura en consola lo esperado)
        })
      })
      

    // console.log(querySnapshot)
  })

    const timeLine = document.getElementById('time-Line');

    timeLine.addEventListener('submit', (e) => {
      e.preventDefault();

      const title = timeLine.postTitle;
      const description = timeLine.post;
      
      if(!editStatus){
        saveTask(title.value, description.value);
      }else{
        updateTask(id,{
          title:title.value,
          description:description.value,
        });
        editStatus = false;
      }

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
