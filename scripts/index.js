const Name = document.querySelector(".user").querySelector(".name");
const topic = document.querySelector(".user").querySelector(".topic");

const userEdit = document.querySelector(".edit-button");
const addCard = document.querySelector(".add-button");

const popUpEdit = document.querySelector(".edit");
const popUpAdd = document.querySelector(".add");

const formEdit = popUpEdit.querySelector(".edit__form");
const formAdd = popUpAdd.querySelector(".add__form");

const closeEdit = popUpEdit.querySelector(".close");
const closeAdd = popUpAdd.querySelector(".add__close");

const editInputs = popUpEdit.querySelectorAll(".edit__input");
const editInputNombre = popUpEdit.querySelector(".edit__input-nombre");
const editInputAcerca = popUpEdit.querySelector(".edit__input-acerca");

const addInputs = popUpAdd.querySelectorAll(".add__input");
const addInputTitulo = popUpAdd.querySelector(".add__input-titulo");
const addInputImagen = popUpAdd.querySelector(".add__input-imagen");

const editButton = document.getElementById("edit__button-save");
const addButton = document.getElementById("add__button-save");

const cardsContainer = document.getElementById("cards");
const cards = document.querySelectorAll(".card");

const cardTemplate = document.getElementById("card-template").content;

class addCards {
  constructor(titulo, imagen) {
    this.element = cardTemplate.cloneNode(true);
    const cardName = this.element.querySelector(".card__name");
    const cardImage = this.element.querySelector(".card__image");

    cardName.textContent = titulo;
    cardImage.src = imagen;

    cardsContainer.appendChild(this.element);
  }
}

editInputs.forEach((input) => {
  input.addEventListener("input", toggleEditButton);
});

addInputs.forEach((input) => {
  input.addEventListener("input", toggleAddButton);
});

function formEditVisibility() {
  popUpEdit.classList.toggle("visibility__form");
  editInputNombre.placeholder = Name.textContent;
  editInputNombre.value = Name.textContent;
  editInputAcerca.placeholder = topic.textContent;
  editInputAcerca.value = topic.textContent;
}

function formAddVisibility() {
  popUpAdd.classList.toggle("add__visibility__form");
}

function toggleEditButton() {
  const allFilledEdit = Array.from(editInputs).every(
    (input) => input.value.trim() !== ""
  );

  if (allFilledEdit) {
    editButton.removeAttribute("disabled");
    editButton.classList.add("edit__button-save-active");
  } else {
    editButton.setAttribute("disabled", "true");
    editButton.classList.remove("edit__button-save-active");
  }
}

function toggleAddButton() {
  const allFilledAdd = Array.from(addInputs).every(
    (input) => input.value.trim() !== ""
  );

  if (allFilledAdd) {
    addButton.removeAttribute("disabled");
    addButton.classList.add("add__button-save-active");
  } else {
    addButton.setAttribute("disabled", "true");
    addButton.classList.remove("add__button-save-active");
  }
}

function cardActionLike(imgElement) {
  const currentSrc = imgElement.getAttribute("src");
  const newSrc =
    currentSrc === "./images/Corazon.svg"
      ? "./images/CorazonActive.png"
      : "./images/Corazon.svg";
  imgElement.setAttribute("src", newSrc);

  if (newSrc === "./images/CorazonActive.png") {
    imgElement.style.height = "21px";
    imgElement.style.paddingTop = "5px";
  } else {
    imgElement.style.height = "";
    imgElement.style.paddingTop = "";
  }
}

function renovarValoresusuario() {
  const nuevoNombreValor = editInputNombre.value.trim();
  const nuevoAcercaValor = editInputAcerca.value.trim();
  topic.textContent = nuevoAcercaValor;
  Name.textContent = nuevoNombreValor;
  formEditVisibility();
}

function addCardAction() {
  const titulo = addInputTitulo.value.trim();
  const imagen = addInputImagen.value.trim();

  formAddVisibility();
  new addCards(titulo, imagen);

  addInputTitulo.value = "";
  addInputImagen.value = "";
}

userEdit.addEventListener("click", formEditVisibility);
closeEdit.addEventListener("click", formEditVisibility);

addCard.addEventListener("click", formAddVisibility);
closeAdd.addEventListener("click", formAddVisibility);

cardsContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("card__info-like")) {
    cardActionLike(event.target);
  }
});
cardsContainer.addEventListener("dblclick", (event) => {
  const card = event.target.closest(".card");

  if (card) {
    const likeIcon = card.querySelector(".card__info-like");

    if (likeIcon) {
      cardActionLike(likeIcon);
    }
  }
});

editButton.addEventListener("click", renovarValoresusuario);

editInputNombre.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    editInputAcerca.focus();
  }
});

editInputAcerca.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    renovarValoresusuario();
  }
});

addButton.addEventListener("click", addCardAction);

addInputTitulo.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    addInputImagen.focus();
  }
});

addInputImagen.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addCardAction();
  }
});
