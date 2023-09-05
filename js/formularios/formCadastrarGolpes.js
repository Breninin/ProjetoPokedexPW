// Formulario de: Pedro Henrique

const inputsCheckLength = document.querySelectorAll("[data-check-length]");
const inputsOnlyDigits = document.querySelectorAll("[data-only-digits]");
const inputsRequiredSelect = document.querySelectorAll("[data-required-select]");

var boolGolpeType = false;

inputsCheckLength.forEach((element) => {
    element.addEventListener("blur", (event) => {
        const spanError = event.target.parentNode.querySelector("[data-span-error]");

        switch (event.target.name) {
            case "golpeName":
                spanError.textContent = checkLength(event.target.value.length, 3, 20);
                break;
            case "golpeDano":
            case "golpePP":
            case "golpePrecisao":
                spanError.textContent = checkLength(event.target.value.length, 1, undefined);
                break;
            case "golpeDesc":
                spanError.textContent = checkLength(event.target.value.length, 10, undefined);

                if (spanError.textContent == "") {
                    boolGolpeDesc = true;
                } else {
                    boolGolpeDesc = false;
                }
                break;
        }
    });
});

//* Verifica os espaços de números sem virgulas
inputsOnlyDigits.forEach((element) => {
    element.addEventListener("keypress", (event) => {
        var char = String.fromCharCode(event.which);

        if (!/[0-9]/.test(char)) {
            event.preventDefault();
        }
    });
});

// Verifica os selects
inputsRequiredSelect.forEach((element) => {
    element.addEventListener("change", (event) => {
        const spanError =
            event.target.parentNode.querySelector("[data-span-error]");

        var selectedOption = event.target.options[event.target.selectedIndex];

        if (selectedOption.value == 0) {
            spanError.textContent = "Selecione uma opção diferente";

            if (event.target.name === "golpeType") {
                boolGolpeType = false;
            } else if (event.target.name === "golpeType") {
                boolGolpeType = false;
            }
        } else {
            spanError.textContent = "";

            if (event.target.name === "golpeType") {
                boolGolpeType = true;
            } else if (event.target.name === "golpeType") {
                boolGolpeType = true;
            }
        }

    });
});

//* Verifica a quantidade de caracteres
function checkLength(length, minLength, maxLength) {
    if (length === 0) {
      return "*";
    } else if (maxLength != undefined && length === maxLength) {
      return "Maximo de caracteres: " + maxLength;
    } else if (length < minLength) {
      return "Minimo de caracteres: " + minLength;
    } else {
      return "";
    }
  }

  //! Verificar envio do formulário
const form = document.querySelector("#formGolpes");

form.addEventListener("submit", (event) => {
  const buttonSpanError = document.querySelector("#buttonSpan");

  if (boolGolpeType === true) {
    
    buttonSpanError.textContent = "";
  } else {
    buttonSpanError.textContent = "Erro ao enviar o formulario. Preencha os campos corretamente.";
  }
});