import { initMenuHamburguesa } from "./src/components/menu";
import { initCarrito } from "./src/components/cart";
import { initFiltros } from "./src/components/filter";
import { initFormulario } from "./src/components/formulario";


// Inicialización de eventos
const init = () => {

  // Inicializar productos
  initMenuHamburguesa();
  initCarrito();
  initFiltros();
  initFormulario();

};

// Inicializa la aplicación
init();
