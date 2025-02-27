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

const storageCards = [
  {
    name: "Eduard Delputte",
    link: "https://images.unsplash.com/photo-1740137660661-274c804a891d?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Ciudad del cabo",
    link: "https://images.unsplash.com/photo-1740021546242-8b718a3e0459?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Pierpaolo Pellegrino",
    link: "https://images.unsplash.com/photo-1739775225955-ba1ba496d28d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Nebulosa",
    link: "https://images.unsplash.com/photo-1740094714220-1b0c181be46d?q=80&w=2083&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Parque Nacional de Yosemite",
    link: "https://images.unsplash.com/photo-1739993655680-4b7050ed2896?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Isla Guadalupe",
    link: "https://images.unsplash.com/photo-1740175919285-451699588f1b?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

class AddCards {
  constructor(titulo, imagen, id) {
    this.element = cardTemplate.cloneNode(true).firstElementChild;
    const cardName = this.element.querySelector(".card__name");
    const cardImage = this.element.querySelector(".card__image");
    const eliminador = this.element.querySelector(".icono-basura");

    cardName.textContent = titulo;
    cardImage.src = imagen;

    eliminador.addEventListener("click", () => {
      this.removeCard();
      storageCards.splice(id, 1);
      cardsContainer.innerHTML = "";
      recorrerArreglo(storageCards, (card, index) => {
        new AddCards(card.name, card.link, index);
      });
    });

    cardsContainer.prepend(this.element);
  }
  removeCard() {
    this.element.remove();
  }
}

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
  if (nuevoNombreValor && nuevoAcercaValor) {
    topic.textContent = nuevoAcercaValor;
    Name.textContent = nuevoNombreValor;
    formEditVisibility();
  }
}

function addCardAction() {
  const titulo = addInputTitulo.value.trim();
  const imagen = addInputImagen.value.trim();

  if (titulo && imagen) {
    formAddVisibility();
    /* new AddCards(titulo, imagen); */
    storageCards.push({ name: titulo, link: imagen });
    cardsContainer.innerHTML = "";

    recorrerArreglo(storageCards, (card, index) => {
      new AddCards(card.name, card.link, index);
    });

    addInputTitulo.value = "";
    addInputImagen.value = "";
  }
}

function recorrerArreglo(array, callback) {
  array.forEach(callback /* (item, index) => callback(item, index) */);
}

recorrerArreglo(storageCards, (card, index) => {
  new AddCards(card.name, card.link, index);
});

editInputs.forEach((input) => {
  input.addEventListener("input", toggleEditButton);
});

addInputs.forEach((input) => {
  input.addEventListener("input", toggleAddButton);
});

userEdit.addEventListener("click", formEditVisibility);
closeEdit.addEventListener("click", formEditVisibility);

addCard.addEventListener("click", formAddVisibility);
closeAdd.addEventListener("click", formAddVisibility);

document
  .querySelector(".add__form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Evita el envío tradicional
    addCardAction();
  });

document
  .querySelector(".edit__form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Evita el envío tradicional
    renovarValoresusuario();
  });

cardsContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("card__info-like")) {
    cardActionLike(event.target);
  }
});

cardsContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("card__image")) {
    const contenedorImagen = document.createElement("div");
    contenedorImagen.classList.add("contenedor__imagen-grande");

    const backgroundContenedorGranImagen = document.createElement("div");
    backgroundContenedorGranImagen.classList.add("cover__imagen-grande");

    const nuevaImagen = document.createElement("img");
    nuevaImagen.src = event.target.src;
    nuevaImagen.classList.add("imagen-grande");

    const textoNuevaImagen = document.createElement("div");
    textoNuevaImagen.textContent =
      event.target.parentNode.querySelector(".card__name").textContent;
    textoNuevaImagen.classList.add("texto-nueva-imagen");

    const cerrador = document.createElement("img");
    cerrador.src = "../images/CloseIcon.png";
    cerrador.alt = "Cerrar";
    cerrador.classList.add("cerrar__imagen-grande");

    document.body.appendChild(contenedorImagen);
    contenedorImagen.appendChild(backgroundContenedorGranImagen);
    contenedorImagen.appendChild(nuevaImagen);
    contenedorImagen.appendChild(textoNuevaImagen);
    contenedorImagen.appendChild(cerrador);

    backgroundContenedorGranImagen.addEventListener("click", () => {
      contenedorImagen.remove();
    });
    cerrador.addEventListener("click", () => {
      contenedorImagen.remove();
    });
  }
});
