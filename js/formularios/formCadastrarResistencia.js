const inputsRequiredSelect = document.querySelectorAll("[data-required-select]");
const inputsRequiredCheckbox = document.querySelector("[data-required-checkbox]");

var boolTypeDefender = false;
var boolTypeAttacker = false;
var boolDefenderImmunity = false;

//* Verifica os selects
inputsRequiredSelect.forEach((element) => {
  element.addEventListener("change", (event) => {
    const spanError =
      event.target.parentNode.querySelector("[data-span-error]");

    var selectedOption = event.target.options[event.target.selectedIndex];

    if (selectedOption.value == 0) {
      spanError.textContent = "Selecione uma opção diferente";

      if (event.target.name === "typeDefender") {
        boolTypeDefender = false;
      } else if (event.target.name === "typeAttacker") {
        boolTypeAttacker = false;
      }
    } else {
      spanError.textContent = "";

      if (event.target.name === "typeDefender") {
        boolTypeDefender = true;
      } else if (event.target.name === "typeAttacker") {
        boolTypeAttacker = true;
      }
    }
  });
});

//* verificação do checkbox
inputsRequiredCheckbox.addEventListener("checked", (event) => {
  var checkedImmuni = event.checked[event.target.checked];

  if (checkedImmuni.value === checked) {
    if (event.target.checked === "typeDefenderImmunity") {
      boolDefenderImmunity = true;
    }
  }
});

//! Verificar envio do formulário
const form = document.querySelector("#formResis");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const buttonSpanError = document.querySelector("#buttonSpan");

  if (boolTypeDefender === true && boolTypeAttacker === true) {
    buttonSpanError.textContent = "";

    location.reload();
  } else {
    buttonSpanError.textContent =
      "Erro ao enviar o formulario. Preencha os campos corretamente.";
  }
});
