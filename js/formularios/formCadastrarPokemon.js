const inputsCheckLength = document.querySelectorAll("[data-check-length]");

const inputsOnlyDigits = document.querySelectorAll("[data-only-digits]");
const inputsDigitsAndSpecial = document.querySelectorAll("[data-digits-and-special]");
const inputsRequiredSelect = document.querySelectorAll("[data-required-select]");

inputsCheckLength.forEach((element) => {
  element.addEventListener("blur", (event) => {
    const spanError =event.target.parentNode.querySelector("[data-span-error]");

    switch (event.target.name) {
      case "pokeDescRed":
      case "pokeDescBlue":
      case "pokeDescYellow":
      case "pokeDescGold":
      case "pokeDescSilver":
      case "pokeDescCrystal":
        spanError.textContent = checkLength(event.target.value.length, 10,undefined);
        break;
    }
  });
});

inputsOnlyDigits.forEach((element) => {
  element.addEventListener("keypress", (event) => {
    var char = String.fromCharCode(event.which);

    if (!/[0-9]/.test(char)) {
      event.preventDefault();
    }
  });
});

inputsDigitsAndSpecial.forEach((element) => {
  element.addEventListener("keypress", (event) => {
    var char = String.fromCharCode(event.which);

    if (!/[0-9,]/.test(char)) {
      event.preventDefault();
    }
    console.log(event.target.value.search(/[,]/));
    if (/[,]/.test(char) && event.target.value.search(/[,]/) == -0) {
      event.preventDefault();
    }
  });
});

inputsRequiredSelect.forEach((element) => {
  element.addEventListener("change", (event) => {
    const spanError =
      event.target.parentNode.querySelector("[data-span-error]");

    var selectedOption = event.target.options[event.target.selectedIndex];

    if (selectedOption.value == 0) {
      spanError.textContent = "Selecione uma opção diferente";
    } else {
      spanError.textContent = "";
    }
  });
});

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

function sasn() {

}