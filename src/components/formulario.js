// Obtener los elementos del formulario
const formInput = document.getElementById("formContacto");
const nameInput = document.getElementById("nombre");
const emailInput = document.getElementById("email");
const msjInput = document.getElementById("mensaje");

// Función para verificar el nombre
const checkTextInput = (input) => {
  const errorName = document.getElementById("error-nombre");
  if (input.value.length < 3 || input.value.length > 15) {
    input.classList.add("error");
    errorName.textContent = "El nombre debe tener entre 3 y 15 caracteres.";
    errorName.classList.remove("hidden");
  } else {
    input.classList.remove("error");
    errorName.classList.add("hidden");
  }
};

// Función para verificar el email
const checkEmail = (input) => {
  const errorEmail = document.getElementById("error-email");
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailRegex.test(input.value)) {
    input.classList.add("error");
    errorEmail.textContent = "Por favor, ingresa un email válido.";
    errorEmail.classList.remove("hidden");
  } else {
    input.classList.remove("error");
    errorEmail.classList.add("hidden");
  }
};

// Función para verificar el mensaje
const checkMsj = (input) => {
    const errorMsj = document.getElementById("error-mensaje");
    
    // Verificar si el mensaje tiene menos de 5 caracteres
     if (input.value.length < 5) {
      // Verificar si el mensaje tiene más de 100 caracteres
      input.classList.add("input-error");
      errorMsj.textContent = "El mensaje debe contener al menos 5 caracteres.";
      errorMsj.classList.remove("hidden");
    } else if (input.value.length > 70) {
      input.classList.add("input-error");
      errorMsj.textContent = "Llegaste al maximo de caracteres.";
      errorMsj.classList.remove("hidden");
    } else {
      input.classList.remove("input-error");
      errorMsj.classList.add("hidden");
    }
  };

// Función para limpiar errores y el borde rojo
const limpiarErrores = () => {
  document.querySelectorAll(".error-msg").forEach(error => {
    error.classList.add("hidden");
    error.textContent = '';
  });
  document.querySelectorAll('input, textarea').forEach(input => {
    input.classList.remove("error");
  });
};

// Función de validación del formulario al hacer submit
const validateForm = (event) => {
  event.preventDefault(); 

  limpiarErrores();

  let errores = false;

  // Validar campos individuales
  checkTextInput(nameInput);
  checkEmail(emailInput);
  checkMsj(msjInput);

  // Verificar si hubo errores
  if (nameInput.classList.contains("error") || emailInput.classList.contains("error") || msjInput.classList.contains("error")) {
    errores = true;
  }

  // Si hay errores, mostrar mensaje general de error
  if (errores) {
    const errorGeneral = document.getElementById("error-general");
    errorGeneral.textContent = "Por favor, corrige los errores antes de enviar.";
    errorGeneral.classList.remove("hidden");
  } else {
    // Si no hay errores, mostrar mensaje de éxito
    const successMessage = document.getElementById("exito-msg");
    successMessage.textContent = "Formulario enviado correctamente.";
    successMessage.classList.remove("hidden");

    // Limpiar el formulario después de 2 segundos
    setTimeout(() => {
      formInput.reset();
      successMessage.classList.add("hidden");
    }, 2000);
  }
};

// Función de inicialización
export const initFormulario = () => {
  formInput.addEventListener("submit", validateForm);
  nameInput.addEventListener("input", () => checkTextInput(nameInput));
  emailInput.addEventListener("input", () => checkEmail(emailInput));
  msjInput.addEventListener("input", () => checkMsj(msjInput));
};
