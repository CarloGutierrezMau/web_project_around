let userEdit = document.querySelector(".user__edit");
let formEdit = document.querySelector(".edit");
let closeEdit = formEdit.querySelector(".edit__close");
let editInputs = formEdit.querySelectorAll("input");
let editButton = document.getElementById("edit__button-save");
let cardLike = document.querySelectorAll(".card__info-like");

function formVisibility() {
  formEdit.classList.toggle("Visibility__form");
}

userEdit.addEventListener("click", formVisibility);
closeEdit.addEventListener("click", formVisibility);

function toggleEditButton() {
  const allFilled = Array.from(editInputs).every(
    (input) => input.value.trim() !== ""
  );

  if (allFilled) {
    editButton.removeAttribute("disabled");
    editButton.classList.add("edit__button-save-active"); // Añade la clase activa
  } else {
    editButton.setAttribute("disabled", "true");
    editButton.classList.remove("edit__button-save-active"); // Elimina la clase activa
  }
}

// Llama a toggleEditButton al cargar para establecer el estado inicial del botón
toggleEditButton();

// Añade el event listener correcto para que verifique el contenido en cada cambio
editInputs.forEach((input) => {
  input.addEventListener("input", toggleEditButton); // Usa el nombre correcto de la función
});

cardLike.addEventListener("click", function () {
  cardLike.style.backgroundColor = "black";
});
