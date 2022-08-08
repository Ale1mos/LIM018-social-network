import { componentes } from "../view/index-view.js"

const changeview = (route) => {
  const container = document.getElementById("container")
  container.innerHTML = ''
  switch (route){
    case '#/':
      {return container.appendChild( componentes.login())}
    case '#/':
      {return container.appendChild( componentes.ho())}
    case '#/user':
      {return container.appendChild( componentes.user())}
    case  '#/out':
      {return container.appendChild( componentes.login())}
    default:
      break;
  }
  console.log(route)
}

export{changeview}