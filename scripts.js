let userEdit = document.querySelector(".user__edit");
let formEdit = document.querySelector(".edit");
let closeEdit = formEdit.querySelector(".edit__close");
let editInputs = formEdit.querySelectorAll("input");
let editButton = document.getElementById("edit__button-save");
const cards = document.querySelectorAll(".card");

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

toggleEditButton();

editInputs.forEach((input) => {
  input.addEventListener("input", toggleEditButton); // Usa el nombre correcto de la función
});

function cardActionLike(event) {
  let cardLike = event.currentTarget.querySelector(".card__info-like");

  if (cardLike.src.includes("Corazon.svg")) {
    cardLike.src = "./images/CorazonActive.png";
    cardLike.style.height = "21px";
    cardLike.style.paddingTop = "5px";
  } else {
    cardLike.src = "./images/Corazon.svg";
    cardLike.style.height = "";
    cardLike.style.paddingTop = "";
  }
}

cards.forEach((card) => {
  card.addEventListener("dblclick", cardActionLike);
});
