import { appState } from "../data/data";

// Filtros
const productsContainer = document.getElementById("lista-productos");
const mostrarMas = document.querySelector(".btn-products");
const categoriasContainer = document.querySelector(".categorias");
const categoriasList = document.querySelectorAll(".categoria");

// Función para crear el template HTML de los productos
const crearProductTemplate = (producto) => {
  const { id, name, price, img } = producto;
  return `
              <div class="producto">
                  <img src="${img}" alt="${name}">
                  <h3>${name}</h3>
                  <p>$${price.toFixed(2)}</p>
                  <button class="btn-agregar"
                  data-id='${id}'
                  data-name='${name}'
                  data-price='${price}'
                  data-img='${img}'
                  >Add To Cart</button>
              </div>
          `;
};

// Función para renderizar productos
function renderizarProductos(products) {
  productsContainer.innerHTML += products.map(crearProductTemplate).join("");
}

// Función para ver más productos
const mostrasMasProductos = () => {
  appState.currentProductsIndex += 1;

  let { products, currentProductsIndex, productsLimit } = appState;

  renderizarProductos(products[currentProductsIndex]);

  if (currentProductsIndex === productsLimit - 1) {
    mostrarMas.classList.add("hidden");
  }
};

//////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////           LOGICA PARA FILTRAR PRODUCTOS          ////////////////

//////////////////////////////////////////////////////////////////////////////////////////////

// Funcion principal de los filtros
const applyFilter = (categoriaSeleccionada) => {
  const productosFiltrados = filtrarProductos(categoriaSeleccionada);

  if (categoriaSeleccionada === "all") {
    manejarAllProducts(productosFiltrados);
  } else {
    manejarCategoriaEspecifica(productosFiltrados);
  }
};

// Funcion de Filtros
const filtrarProductos = (categoriaSeleccionada) => {
  return appState.products.flat().filter((product) => {
    return (
      categoriaSeleccionada === "all" ||
      product.categoria === categoriaSeleccionada
    );
  });
};

// Función para reiniciar el estado cuando se selecciona all products
const reiniciarProductosAll = () => {
  appState.currentProductsIndex = 0;
  productsContainer.innerHTML = "";
};

// Función para renderizar los primeros productos
const mostrarPrimerosProductos = (productosFiltrados) => {
  const start = appState.currentProductsIndex * 6;
  const end = (appState.currentProductsIndex + 1) * 6;
  renderizarProductos(productosFiltrados.slice(start, end));
};

// Función para mostrar/ocultar el botón ver más
const manejarBotonVerMas = (productosFiltrados) => {
  if (productosFiltrados.length > 6) {
    mostrarMas.classList.remove("hidden");
    mostrarMas.onclick = () => mostrasMasProductos();
  } else {
    mostrarMas.classList.add("hidden");
  }
};

// Función para manejar cuando se selecciona all products
const manejarAllProducts = (productosFiltrados) => {
  reiniciarProductosAll();
  mostrarPrimerosProductos(productosFiltrados);
  manejarBotonVerMas(productosFiltrados);
};

// Función para manejar cuando se selecciona una categoría distinta de all products
const manejarCategoriaEspecifica = (productosFiltrados) => {
  productsContainer.innerHTML = "";
  renderizarProductos(productosFiltrados);
  mostrarMas.classList.add("hidden");
};

// Función para manejar el click en las categorías
const handleCategoryClick = (event) => {
  const categoriaElemento = event.target.closest(".categoria");
  if (!categoriaElemento) return;

  const categoriaSeleccionada = categoriaElemento.getAttribute("data-category");

  applyFilter(categoriaSeleccionada);

  // Remover la clase 'active' de todas las categorías y agregarla solo a la seleccionada
  categoriasList.forEach((categoria) => categoria.classList.remove("active"));
  categoriaElemento.classList.add("active");
};

// Funcion exportadora
export const initFiltros = () => {
  renderizarProductos(appState.products[0]);
  mostrarMas.addEventListener("click", mostrasMasProductos);
  categoriasContainer.addEventListener("click", handleCategoryClick);
};
