// Formulario de: Breno Alcides

const inputsCheckLength = document.querySelectorAll("[data-check-length]");

const inputsOnlyDigits = document.querySelectorAll("[data-only-digits]");
const inputsDigitsAndSpecial = document.querySelectorAll("[data-digits-and-special]");
const inputsRequiredSelect = document.querySelectorAll("[data-required-select]");

var boolPokeSize = false;
var boolPokeWeight = false;
var boolPokeChanceM = false;
var boolPokeChanceF = false;
var boolPokeType = false;
var boolPokeEgg = false;

inputsCheckLength.forEach((element) => {
  element.addEventListener("blur", (event) => {
    const spanError = event.target.parentNode.querySelector("[data-span-error]");
    
    switch (event.target.name) {
      case "pokeName":
        spanError.textContent = checkLength(event.target.value.length, 3, 40);
        break;
      case "pokeDexNumber":
      case "pokeStatHp":
      case "pokeStatSpeed":
      case "pokeStatAtk":
      case "pokeStatDef":
      case "pokeStatSpAtk":
      case "pokeStatSpDef":
        spanError.textContent = checkLength(event.target.value.length, 1, undefined);
        break;
      case "pokeSize":
        spanError.textContent = checkCommas(event.target.value);
        
        if (spanError.textContent == "") {
          boolPokeSize = true;
        } else {
          boolPokeSize = false;
        }
        break;
      case "pokeWeight":
        spanError.textContent = checkCommas(event.target.value);
        
        if (spanError.textContent == "") {
          boolPokeWeight = true;
        } else {
          boolPokeWeight = false;
        }
        break;
      case "pokeChanceMasc":
        spanError.textContent = checkCommas(event.target.value);
        
        if (spanError.textContent == "") {
          boolPokeChanceM = true;
        } else {
          boolPokeChanceM = false;
        }
        break;
      case "pokeChanceFem":
        spanError.textContent = checkCommas(event.target.value);
        
        if (spanError.textContent == "") {
          boolPokeChanceF = true;
        } else {
          boolPokeChanceF = false;
        }
        break;
      case "pokeDescRed":
      case "pokeDescBlue":
      case "pokeDescYellow":
      case "pokeDescGold":
      case "pokeDescSilver":
      case "pokeDescCrystal":
        spanError.textContent = checkLength(event.target.value.length, 10, undefined);
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

//* Verifica os espaços de números com virgulas
inputsDigitsAndSpecial.forEach((element) => {
  element.addEventListener("keypress", (event) => {
    var char = String.fromCharCode(event.which);

    if (!/[0-9,]/.test(char)) {
      event.preventDefault();
    }
  });
});

//* Verifica os selects
inputsRequiredSelect.forEach((element) => {
  element.addEventListener("change", (event) => {
    const spanError =
      event.target.parentNode.querySelector("[data-span-error]");

    var selectedOption = event.target.options[event.target.selectedIndex];

    if (selectedOption.value == 0) {
      spanError.textContent = "Selecione uma opção diferente";

      if (event.target.name === "pokeTypePrimary") {
        boolPokeType = false;
      } else if (event.target.name === "pokeEggPrimary") {
        boolPokeEgg = false;
      }
    } else {
      spanError.textContent = "";

      if (event.target.name === "pokeTypePrimary") {
        boolPokeType = true;
      } else if (event.target.name === "pokeEggPrimary") {
        boolPokeEgg = true;
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

//* Verifica a quantidade de virgulas de um campo
function checkCommas(inputValue) {
  var commas = inputValue.replace(/[0-9]/g, "");

  if (inputValue.length === 0) {
    return "*";
  } else if (commas.length > 1) {
    return "Insira apenas uma virgula";
  } else {
    return "";
  }
}

//! Verificar envio do formulário
const form = document.querySelector("#formPoke");

form.addEventListener("submit", (event) => {

  const buttonSpanError = document.querySelector("#buttonSpan");

  if (boolPokeSize === true &&
    boolPokeWeight === true &&
    boolPokeChanceM === true &&
    boolPokeChanceF === true &&
    boolPokeType === true &&
    boolPokeEgg === true) {
    
    buttonSpanError.textContent = "";
  } else {
    buttonSpanError.textContent = "Erro ao enviar o formulario. Preencha os campos corretamente.";
  }
});