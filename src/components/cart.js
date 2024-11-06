// Carrito
const cartProducts = document.querySelector(".cart-container");
const cartBubble = document.querySelector(".cart-bubble");

// Total
const cartTotalElement = document.querySelector(".cart-total");

// Botones de vaciar carrito y comprar
const vaciarCarritoBtn = document.querySelector(".btn-delete");
const comprarBtn = document.querySelector(".btn-buy");

// Guardar los productos del carrito en el Local Storage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Funcion para guardar el carrito en el Local Storage
const saveCartToLocalStorage = () => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

//////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////           LOGICA DEL CARRITO DE COMPRAS         ////////////////

//////////////////////////////////////////////////////////////////////////////////////////////

// Función principal para actualizar el carrito
const updateCart = () => {
  saveCartToLocalStorage();
  renderCartProducts();
  updateCartTotal();
  updateCartBubble();
  updateStateButtons();
};

// Función para obtener los datos del producto desde los atributos del botón
const getProductData = (e) => {
  return {
    id: e.target.getAttribute("data-id"),
    name: e.target.getAttribute("data-name"),
    price: parseFloat(e.target.getAttribute("data-price")),
    img: e.target.getAttribute("data-img"),
    quantity: 1,
  };
};

// Funcion para agregar el producto al carrito
const addProduct = (e) => {
  if (e.target.classList.contains("btn-agregar")) {
    const product = getProductData(e);
    addOrUpdateProductInCart(product);
  }
};

// Función para mostrar el modal con animación
const showModal = () => {
  const modal = document.querySelector(".modal");
  modal.classList.remove("hidden"); // Mostrar modal
  modal.classList.add("show"); // Activar animación

  // Ocultar modal después de 2 segundos
  setTimeout(() => {
    modal.classList.remove("show");
    setTimeout(() => modal.classList.add("hidden"), 200); // Asegura que se oculta después de la animación
  }, 2000);
};

// Función para agregar o actualizar la cantidad de un producto en el carrito
const addOrUpdateProductInCart = (product) => {
  const existingProduct = cart.find((item) => item.id === product.id);

  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    cart.push(product);
  }

  updateCart();
  showModal();
};

// Función para crear el template HTML de un producto en el carrito
const crearCartProductTemplate = ({ id, name, price, img, quantity }) => {
  return `
      <div class="cart-product">
          <img src="${img}" alt="${name}">
          <h4>${name}</h4>
          <p>Precio: $${price.toFixed(2)}</p>
          <div class="quantity-control">
              <button class="btn-decrease" data-id="${id}">-</button>
              <span class="quantity">${quantity}</span>
              <button class="btn-increase" data-id="${id}">+</button>
          </div>
      </div>
    `;
};

// Función para calcular el total del carrito
const calculateCartTotal = () => {
  const total = cart.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );
  cartTotalElement.textContent = `Total: $${total.toFixed(2)}`;
};

const updateCartBubble = () => {
  cartBubble.textContent = cart.reduce((acc, cur) => acc + cur.quantity, 0);
};

// Función para renderizar los productos en el carrito
const renderCartProducts = () => {
  cartProducts.innerHTML = "";

  if (cart.length === 0) {
    cartProducts.innerHTML =
      '<p class="cart-msg">No hay productos en el carrito.</p>';
    cartTotalElement.textContent = "Total: $0.00";
    return;
  }

  // Renderizar productos en el carrito
  cartProducts.innerHTML = cart.map(crearCartProductTemplate).join("");

  calculateCartTotal();
  updateCartBubble();
};

// Función para actualizar el total del carrito
const updateCartTotal = () => {
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  cartTotalElement.textContent = `Total: $${total.toFixed(2)}`;
};

// Función para cambiar la cantidad de un producto
const changeProductQuantity = (id, change) => {
  const product = cart.find((item) => item.id === id);
  if (product) {
    product.quantity += change;

    // Eliminar producto si la cantidad llega a 0
    if (product.quantity === 0) {
      cart = cart.filter((item) => item.id !== id);
    }

    updateCart();
  }
};

// Función para manejar el evento de clic en aumentar o disminuir la cantidad
const handleQuantityChange = (e) => {
  e.stopPropagation();
  if (e.target.classList.contains("btn-decrease")) {
    const id = e.target.getAttribute("data-id");
    changeProductQuantity(id, -1);
  }

  if (e.target.classList.contains("btn-increase")) {
    const id = e.target.getAttribute("data-id");
    changeProductQuantity(id, 1);
  }
};

// Función para vaciar el carrito
const vaciarCarrito = () => {
  cart = [];
  updateCart();
};

// Función para manejar el clic en el botón de vaciar carrito
const handleVaciarCarrito = () => {
  // console.log("Intento de vaciar el carrito");
  if (cart.length === 0) {
    alert("El carrito ya está vacío.");
    return;
  }
  vaciarCarrito();
  alert("Carrito vaciado con éxito.");
};

// Función para manejar la compra
const comprar = () => {
  // console.log("Intento de compra");
  if (cart.length === 0) {
    alert("No hay productos en el carrito para comprar.");
    return;
  }

  const confirmacion = confirm(
    "¿Estás seguro de que deseas comprar los productos en tu carrito?"
  );
  if (confirmacion) {
    vaciarCarrito();
    alert("¡Compra realizada con éxito!");
  }
};

// Función para habilitar o deshabilitar botones
const updateStateButtons = () => {
  vaciarCarritoBtn.disabled = false;
  comprarBtn.disabled = false;
};

// Funcion exportadora
export const initCarrito = () => {
  cartProducts.addEventListener("click", handleQuantityChange);
  vaciarCarritoBtn.addEventListener("click", handleVaciarCarrito);
  comprarBtn.addEventListener("click", comprar);
  document.addEventListener("click", addProduct);
  updateStateButtons(); 
};
