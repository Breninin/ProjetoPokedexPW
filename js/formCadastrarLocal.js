const inputs = document.querySelectorAll("input[type=text]");
const spans = document.querySelectorAll("span[class=spanError]");
var check = false;

for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("blur", (event) => {
    var value = event.target.value;
    if (value.length == 0) {
      spans[i].textContent = "";
      check = false;
    } else if (value.length < 3) {
      spans[i].textContent = "Insira mais que 3 caracteres";
      check = false;
    } else {
      spans[i].textContent = "";
      check = true;
    }
  });
}

const texta = document.querySelector("textarea");
const spanTexta = document.querySelector("span[class=spanErrorTexta]");

texta.addEventListener("blur", (event) => {
  var value = event.target.value;
  if (value.length == 0) {
    spanTexta.textContent = "";
    check = false;
  } else if (value.length < 3) {
    spanTexta.textContent = "Insira mais que 3 caracteres";
    check = false;
  } else {
    spanTexta.textContent = "";
    check = true;
  }
});

const combo = document.querySelector("select");
const spanCombo = document.querySelector("span[class=spanErrorCombo]");

combo.addEventListener("blur", (event) => {
  var value = event.target.options[combo.selectedIndex].value;
  if (value.length == 0) {
    check = false;
  } else {
    spanCombo.textContent = "";
    check = true;
  }
});

const form = document.querySelector("form[class=flexUser]");
const spanTittle = document.querySelector("span[class=spanErrorTittle]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  spanCombo.textContent = "";

  if (check && combo.options[combo.selectedIndex].value != 0) {
    location.reload();
  } else {
    spanTittle.textContent =
      "Erro ao enviar o formulario. Preencha os campos corretamente.";

    if (texta.value.length == 0) spanTexta.textContent = "prencha esse campo";

    if (combo.options[combo.selectedIndex].value == 0)
      spanCombo.textContent = "Selecione um jogo.";

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].value.length == 0)
        spans[i].textContent = "prencha esse campo";
    }
  }
});
