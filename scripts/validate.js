const ValidationElements = {
  edit: {
    formSelector: ".edit-popup__form",
    contenedorSelector: ".edit-popup__form-contenedor",
    inputSelector: ".edit-popup__input",
    submitButtonSelector: ".edit-popup__button-save",
    inactiveButtonClass: "edit-popup__button-save-unactive",
    inputErrorClass: "edit-popup__input_type_error",
    errorSpanClass: "edit-popup__span",
  },
  add: {
    formSelector: ".add-popup__form",
    contenedorSelector: ".add-popup__form-contenedor",
    inputSelector: ".add-popup__input",
    submitButtonSelector: ".add-popup__button-save",
    inactiveButtonClass: "add-popup__button-save-unactive",
    inputErrorClass: "add-popup__input_type_error",
    errorSpanClass: "add-popup__span",
  },
};

const enableValidation = (input, span, typeError) => {
  if (!input.validity.valid) {
    span.innerText = input.validationMessage;
    input.classList.add(typeError);
    return false;
  } else {
    span.innerText = "";
    input.classList.remove(typeError);
    return true;
  }
};

const buttonToggle = (one, two, button, unactive) => {
  if (one && two) {
    button.removeAttribute("disabled");
    button.classList.add(unactive);
  } else {
    button.setAttribute("disabled", "true");
    button.classList.remove(unactive);
  }
};

editInputNombre.addEventListener("input", () => {
  enableValidation(
    editInputNombre,
    editSpanNombre,
    ValidationElements.edit.submitButtonSelector,
    ValidationElements.edit.inputErrorClass
  );
});

editInputAcerca.addEventListener("input", () => {
  enableValidation(
    editInputAcerca,
    editSpanAcerca,
    ValidationElements.edit.inputErrorClass
  );
});

addInputTitulo.addEventListener("input", () => {
  enableValidation(
    addInputTitulo,
    addSpanTitulo,
    ValidationElements.add.inputErrorClass
  );
});

addInputImagen.addEventListener("input", () => {
  enableValidation(
    addInputImagen,
    addSpanImagen,
    ValidationElements.add.inputErrorClass
  );
});

editInputs.forEach((input) => {
  input.addEventListener("input", () => {
    buttonToggle(
      enableValidation(
        editInputNombre,
        editSpanNombre,
        ValidationElements.edit.inputErrorClass
      ),
      enableValidation(
        editInputAcerca,
        editSpanAcerca,
        ValidationElements.edit.inputErrorClass
      ),
      editButton,
      ValidationElements.edit.inactiveButtonClass
    );
  });
});

addInputs.forEach((input) => {
  input.addEventListener("input", () => {
    buttonToggle(
      enableValidation(
        addInputTitulo,
        addSpanTitulo,
        ValidationElements.add.inputErrorClass
      ),
      enableValidation(
        addInputImagen,
        addSpanImagen,
        ValidationElements.add.inputErrorClass
      ),
      addButton,
      ValidationElements.add.inactiveButtonClass
    );
  });
});
