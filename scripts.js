let userEdit = document.querySelector(".user__edit");
let formEdit = document.querySelector(".edit");
let closeEdit = formEdit.querySelector(".edit__close");
let editInputs = formEdit.querySelectorAll("input");
let editButton = document.getElementById("edit__button-save");
let cards = document.querySelectorAll(".card");

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

function cardActionLike(imgElement) {
  const currentSrc = imgElement.getAttribute("src");
  const newSrc =
    currentSrc === "./images/Corazon.svg"
      ? "./images/CorazonActive.png"
      : "./images/Corazon.svg";
  imgElement.setAttribute("src", newSrc);

  /* let cardLikeSwitch = event.currentTarget.querySelector(".card__info-like");

  if (cardLikeSwitch.src.includes("Corazon.svg")) {
    cardLikeSwitch.src = "./images/CorazonActive.png";
    cardLikeSwitch.style.height = "21px";
    cardLikeSwitch.style.paddingTop = "5px";
  } else {
    cardLikeSwitch.src = "./images/Corazon.svg";
    cardLikeSwitch.style.height = "";
    cardLikeSwitch.style.paddingTop = "";
  } */
  if (newSrc === "./images/CorazonActive.png") {
    imgElement.style.height = "21px";
    imgElement.style.paddingTop = "5px";
  } else {
    imgElement.style.height = "";
    imgElement.style.paddingTop = "";
  }
}

cards.forEach((card) => {
  card.addEventListener("dblclick", () => {
    const img = card.querySelector(".card__info-like");
    if (img) {
      cardActionLike(img);
    }
  });
});

const likeImages = document.querySelectorAll(".card__info-like");

likeImages.forEach((img) => {
  img.addEventListener("click", () => {
    cardActionLike(img);
  });
});
