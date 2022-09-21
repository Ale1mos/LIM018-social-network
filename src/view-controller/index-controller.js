/* eslint-disable no-fallthrough */
import { componentes } from '../view/index-view.js';
// export {}

const changeview = (route) => {
  const container = document.getElementById('container');
  container.innerHTML = '';
  // console.log(route)
  switch (route) {
    case '':
    { return container.appendChild(componentes.login()); }
    case '#/login':
    { return container.appendChild(componentes.login()); }
    case '#/register':
    { return container.appendChild(componentes.register()); }
    case '#/home':
    { container.appendChild(componentes.home.template()); componentes.home.init(); break;
    }
    case '#/user':
    { return container.appendChild(componentes.user()); }

    default:
      break;
  }
  console.log(route);
};

export { changeview };