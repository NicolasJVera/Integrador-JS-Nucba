const menuIcon = document.querySelector(".menu-label");
const navList = document.querySelector(".nav-list");
const overlay = document.querySelector(".overlay")
const cartBtn = document.querySelector('.cart-label');
const cartMenu = document.querySelector('.cart')

// Logica Menu Carrito
const toggleCart = () => {
  cartMenu.classList.toggle("open-cart");
  if (navList.classList.contains("open-menu")) {
    navList.classList.remove("open-menu");
    return;
  }
  overlay.classList.toggle("visible");
};

// Función para mostrar/ocultar el menú
const ToggleMenu = () => {
  navList.classList.toggle("open-menu");
  if (cartMenu.classList.contains("open-cart")) {
    cartMenu.classList.remove("open-cart");
    return;
  }
  overlay.classList.toggle("visible");
};

// Cierra el menú y carrito cuando se hace un scroll (overlay)
const closeMenuAndCart = () => {
  cartMenu.classList.remove("open-cart");
  navList.classList.remove("open-menu");
  overlay.classList.remove("visible");
};

// Funcion exportadora
export const initMenuHamburguesa = () => {
  cartBtn.addEventListener("click", toggleCart);
  menuIcon.addEventListener("click", ToggleMenu);
  overlay.addEventListener("click", closeMenuAndCart);
};
