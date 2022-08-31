// export default () => {

  import {saveTask, getTasks, onGetTask, deleteTask, getTask, updateTask, userCollection, getUser, onAuthObserver} from '../lib/firebase.js';

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
              <li><a id="btnProfile" href="#/user">Perfil</a></li>
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
            </div>
          </form>
      
          <div id="containerPost"></div>
      
        </body>`;
      const divElement = document.createElement('div');
      divElement.innerHTML = homeTemplate;
      
  
      return divElement;
      
    },
  
    init: () => {
      let currentUser;
  
      // Traer el nombre de usuario, (el observador)
      // function authCallBack(user) {
      // currentUser = user; // Usuario actual
      // console.log(currentUser);
      // const userPerfil = document.querySelector('#currentName');
      // userPerfil.innerHTML = currentUser.displayName;
  
      // const photoUser = document.querySelector('.photo-user');
      // const photoUserPerfil = document.querySelector('.photo-user-perfil');
  
      // photoUser.setAttribute('src', user.photoURL); // Cambia el contenido src x la foto
      // photoUserPerfil.setAttribute('src', user.photoURL);
      // if (user.photoURL == null) {
      //   photoUser.setAttribute('src', '../img/photo-user.png'); // img x defecto
      //   photoUserPerfil.setAttribute('src', '../img/photo-user.png'); // img x defecto
      // }
      // }
      // onAuthObserver(authCallBack);
  
      const containerPost = document.getElementById('containerPost');
  
      // console.log("h")
      // const querySnapshot = await getTasks();
      onGetTask((querySnapshot) => {
        console.log(querySnapshot)
  
        querySnapshot.forEach(async(doc) => {
          const task = doc.data();
          // console.log(doc)
          containerPost.innerHTML = '';
       
        const dataUser = await getUser(task.idUser)
        console.log(dataUser);
          containerPost.innerHTML += `
          <div id="containerComment">
            <div id="photoNameUser">
              <img src="../images/fotoPerfil.webp" alt="">
              <div id ="NameUserPost">${dataUser.name}</div>
            </div>
              <p id="titleComment">${task.title}</p>
              <p id="descripComment">${task.description}</p>
              <button id="deleteBtn" class ='btn-delete' data-id="${doc.id}"><img src="../images/icono_eliminar.png" alt="">
              </button>
              <button class ='btn-edit' data-id="${doc.id}">Editar</button>
              <button class ='btn-like' data-id="${doc.id}">Like</button>
          </div>
          `;
          const btnsDelete = containerPost.querySelectorAll('.btn-delete');
        // console.log(btnsDelete)
          // console.log(doc.data())
          btnsDelete.forEach((button) =>{
            button.addEventListener('click', (e) => {
              // console.log(e.currentTarget.dataset.id);
    
            deleteTask(e.currentTarget.dataset.id);
              // console.log(dataset.id)
              // console.log('hola')
            });
          })
          const btnsEdit = containerPost.querySelectorAll('.btn-edit');
  
        btnsEdit.forEach((btn) => {
          // console.log(btnsEdit)
          // console.log(btn)
          btn.addEventListener('click', (e) => {
          //  console.log(e)
  
            console.log(e.target.dataset.id);
            // console.log(e)
            getTask(e.target.dataset.id).then((doc) => {
              // console.log(doc.data())
              const task = doc.data();
  
              timeLine.postTitle.value = task.title;
              timeLine.post.value = task.description;
  
              editStatus = true;
  
              id = doc.id;
  
              timeLine.btnPublicar.innerText = 'Actualizar';
  
              // timeLine.reset();
            });
            // console.log(doc.data()) (no figura en consola lo esperado)
          });
        });
        
          // console.log(containerPost)
        });
  
  
  
        
  
  
        const likes = {};
        const btnsLike = containerPost.querySelectorAll('.btn-like');
        btnsLike.forEach((btn) => {
          btn.addEventListener('click', ({ target: { dataset } }) => {
            likes[dataset.id] = [currentUser.id];
  
            console.log(likes);
          });
        });
  
        
  
        // const btnProfile = btnProfile.querySelector('#btnProfile');
        // btnProfile.addEventListener('click',()=>{
        //   console.log("hola")
        // })
  
        
  
      // console.log(querySnapshot)
      });
  
      const timeLine = document.getElementById('time-Line');
  
      timeLine.addEventListener('submit', (e) => {
        e.preventDefault();
  
        const title = timeLine.postTitle;
        const description = timeLine.post;
  
        if (!editStatus) {
          const idUser = JSON.parse(sessionStorage.getItem('USER'));
  
          saveTask(title.value, description.value, idUser);
        } if (editStatus){
          updateTask(id, {
  
            title: title.value,
            description: description.value,
  
          });
  
          editStatus = false;
          timeLine.btnPublicar.innerText = 'Publicar';
        }
  
        timeLine.reset();
      });

      // const btnCancelar = document.getElementById("btn-Cancelar")
      // const postCancel = document.getElementById("post")
      // const postTitleCancel=document.getElementById("postTitle")

      // btnCancelar.addEventListener("click", (e)=>{

      //   postCancel.value = " "
      //   postTitleCancel.value =" "


      // })
      
  
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