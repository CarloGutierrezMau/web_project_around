const Name = document.querySelector(".user").querySelector(".name");
const topic = document.querySelector(".user").querySelector(".topic");

const userEdit = document.querySelector(".edit-popup-button");
const addCard = document.querySelector(".add-popup-button");

const popUpEdit = document.querySelector(".edit-popup");
const popUpAdd = document.querySelector(".add-popup");

const editCover = popUpEdit.querySelector(".edit-popup__cover");
const addCover = popUpAdd.querySelector(".add-popup__cover");

const formEdit = popUpEdit.querySelector(".edit-popup__form");
const formAdd = popUpAdd.querySelector(".add-popup__form");

const closeEdit = popUpEdit.querySelector(".close");
const closeAdd = popUpAdd.querySelector(".add-popup__close");

const editInputs = popUpEdit.querySelectorAll(".edit-popup__input");
const editInputNombre = popUpEdit.querySelector(".edit-popup__input_nombre");
const editInputAcerca = popUpEdit.querySelector(".edit-popup__input_acerca");

const addInputs = popUpAdd.querySelectorAll(".add-popup__input");
const addInputTitulo = popUpAdd.querySelector(".add-popup__input_titulo");
const addInputImagen = popUpAdd.querySelector(".add-popup__input_imagen");

const editButton = document.getElementById("edit-popup__button-save");
const addButton = document.querySelector(".add-popup__button-save");

const editSpanNombre = document.querySelector(".edit-popup__span_nombre");
const editSpanAcerca = document.querySelector(".edit-popup__span_acerca");

const addSpanTitulo = document.querySelector(".add-popup__span_titulo");
const addSpanImagen = document.querySelector(".add-popup__span_imagen");

const cardsContainer = document.getElementById("cards");
const cards = document.querySelectorAll(".card");

const cardTemplate = document.getElementById("card-template").content;
const GrandImageTemplate = document.getElementById(
  "grand-image__template"
).content;

const storageCards = [
  {
    name: "Eduard Delputte",
    link: "https://images.unsplash.com/photo-1740137660661-274c804a891d?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    like: null,
  },
  {
    name: "Ciudad del cabo",
    link: "https://images.unsplash.com/photo-1740021546242-8b718a3e0459?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    like: null,
  },
  {
    name: "Pierpaolo Pellegrino",
    link: "https://images.unsplash.com/photo-1739775225955-ba1ba496d28d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    like: null,
  },
  {
    name: "Nebulosa",
    link: "https://images.unsplash.com/photo-1740094714220-1b0c181be46d?q=80&w=2083&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    like: null,
  },
  {
    name: "Parque Nacional de Yosemite",
    link: "https://images.unsplash.com/photo-1739993655680-4b7050ed2896?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    like: null,
  },
  {
    name: "Isla Guadalupe",
    link: "https://images.unsplash.com/photo-1740175919285-451699588f1b?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    like: null,
  },
];

class AddCards {
  constructor(titulo, imagen, id, likeComprovation) {
    this.element = cardTemplate.cloneNode(true).firstElementChild;
    const cardName = this.element.querySelector(".card__name");
    const cardImage = this.element.querySelector(".card__image");
    const eliminador = this.element.querySelector(".icono-basura");
    const like = this.element.querySelector(".card__info-like");
    this.likingCard(like, likeComprovation);

    cardName.textContent = titulo;
    cardImage.src = imagen;

    eliminador.addEventListener("click", () => {
      this.eliminarCartas(id);
      this.renderCards();
    });

    cardImage.addEventListener("click", () => {
      this.createGrandImage(titulo, imagen);
    });

    like.addEventListener("click", () => {
      if (!likeComprovation) {
        likeComprovation = true;
      } else {
        likeComprovation = false;
      }
      this.comfirmatedCard(titulo, likeComprovation);
      this.likingCard(like, likeComprovation);
    });

    cardsContainer.prepend(this.element);
  }

  createGrandImage(titleimage, image) {
    this.grandImageContainer =
      GrandImageTemplate.cloneNode(true).firstElementChild;
    const titleImage = this.grandImageContainer.querySelector(
      ".grand-image__title"
    );
    const grandimage = this.grandImageContainer.querySelector(".grand-image");
    const cerrar = this.grandImageContainer.querySelector(
      ".grand-image__cerrar"
    );
    const cover = this.grandImageContainer.querySelector(".grand-image__cover");

    titleImage.textContent = titleimage;
    grandimage.src = image;

    cerrar.addEventListener("click", () => {
      this.grandImageContainer.remove();
    });
    cover.addEventListener("click", () => {
      this.grandImageContainer.remove();
    });

    document.body.appendChild(this.grandImageContainer);
  }

  renderCards() {
    cardsContainer.innerHTML = "";
    recorrerArreglo(storageCards, (card, index) => {
      new AddCards(card.name, card.link, index, card.like);
    });
  }

  eliminarCartas(id) {
    storageCards.splice(id, 1);
  }

  likingCard(imgElement, likeComprovation) {
    if (!likeComprovation) {
      imgElement.style.height = "";
      imgElement.style.paddingTop = "";
      return (imgElement.src = "./images/Corazon.svg");
    } else {
      imgElement.style.height = "19px";
      imgElement.style.paddingTop = "5px";
      return (imgElement.src = "./images/CorazonActive.png");
    }
  }
  comfirmatedCard(title, like) {
    storageCards.map((elemento) => {
      if (elemento.name === title) {
        return (elemento.like = like);
      }
    });
  }
}

function formEditVisibility() {
  popUpEdit.classList.toggle("edit-popup__visibility__form");
  editInputNombre.placeholder = Name.textContent;
  editInputNombre.value = Name.textContent;
  editInputAcerca.placeholder = topic.textContent;
  editInputAcerca.value = topic.textContent;
  validity(editInputNombre, editSpanNombre);
  validity(editInputAcerca, editSpanAcerca);
}

function formAddVisibility() {
  popUpAdd.classList.toggle("add-popup__visibility__form");
}

function renovarValoresusuario() {
  const nuevoNombreValor = editInputNombre.value.trim();
  const nuevoAcercaValor = editInputAcerca.value.trim();
  if (validity) {
    topic.textContent = nuevoAcercaValor;
    Name.textContent = nuevoNombreValor;
    formEditVisibility();
  }
}

function addCardAction(title, image) {
  const titulo = title.value.trim();
  const imagen = image.value.trim();

  if (titulo && imagen) {
    storageCards.push({ name: titulo, link: imagen });
    cardsContainer.innerHTML = "";

    recorrerArreglo(storageCards, (card, index) => {
      new AddCards(card.name, card.link, index, card.like);
    });

    addInputTitulo.value = "";
    addInputImagen.value = "";
    formAddVisibility();
  }
}

function recorrerArreglo(array, callback) {
  array.forEach((item, index) => callback(item, index));
}

function popUpEsc(popUp, toggle, event, section) {
  if (event.key === "Escape") {
    if (popUp.classList.contains(`${section}-popup__visibility__form`)) {
      toggle();
    }
  }
}

recorrerArreglo(storageCards, (card, index) => {
  new AddCards(card.name, card.link, index, card.like);
});

editInputs.forEach((input) => {
  input.addEventListener("input", () => {
    buttonToggle(
      validity(editInputNombre, editSpanNombre),
      validity(editInputAcerca, editSpanAcerca),
      editButton,
      "edit"
    );
  });
});

addInputs.forEach((input) => {
  input.addEventListener("input", () => {
    buttonToggle(
      validity(addInputTitulo, addSpanTitulo),
      validity(addInputImagen, addSpanImagen),
      addButton,
      "add"
    );
  });
});

userEdit.addEventListener("click", formEditVisibility);
closeEdit.addEventListener("click", formEditVisibility);
editCover.addEventListener("click", formEditVisibility);
document.addEventListener("keydown", (evt) => {
  popUpEsc(popUpEdit, formEditVisibility, evt, "edit");
});

addCard.addEventListener("click", formAddVisibility);
closeAdd.addEventListener("click", formAddVisibility);
addCover.addEventListener("click", formAddVisibility);
document.addEventListener("keydown", (evt) => {
  popUpEsc(popUpAdd, formAddVisibility, evt, "add");
});

addButton.addEventListener("click", (event) => {
  event.preventDefault();
  addCardAction(addInputTitulo, addInputImagen);
});

addInputs.forEach((input) => {
  input.addEventListener("keydown", (evt) => {
    if (evt.key === "Enter") {
      evt.preventDefault();
      addCardAction(addInputTitulo, addInputImagen);
    }
  });
});

formEdit.addEventListener("submit", (event) => {
  event.preventDefault();
  renovarValoresusuario();
});
