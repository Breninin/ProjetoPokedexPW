const inputs = document.querySelectorAll("[data-get-inputs]"),
  spans = document.querySelectorAll("[data-span-error]"),
  inputNumber = document.querySelector("[data-only-digits]"),
  spanNumber = document.querySelector("[data-span-error-number]"),
  combo = document.querySelector("select"),
  spanCombo = document.querySelector("span[class=spanErrorCombo]"),
  form = document.querySelector("form[class=flexUser]"),
  spanTittle = document.querySelector("span[class=spanErrorTittle]");

var check = false;

for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("blur", (event) => {
    var value = event.target.value;
    if (value.length == 0) {
      spans[i].textContent = "*";
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
    spanTexta.textContent = "*";
    check = false;
  } else if (value.length < 5) {
    spanTexta.textContent = "Insira mais que 5 caracteres";
    check = false;
  } else {
    spanTexta.textContent = "";
    check = true;
  }
});

inputNumber.addEventListener("blur", (event) => {
  var value = event.target.value;
  if (value.length == 0) {
    spanNumber.textContent = "*";
    check = false;
  } else {
    spanNumber.textContent = "";
    check = true;
  }
});

combo.addEventListener("blur", (event) => {
  var value = event.target.options[combo.selectedIndex].value;
  if (value.length != null) {
    spanCombo.textContent = "";
    check = true;
  } else {
    spanCombo.textContent = "*";
    check = false;
  }
});

inputNumber.addEventListener("keypress", (event) => {
  var char = String.fromCharCode(event.which);
  if (!/[0-9]/.test(char)) {
    event.preventDefault();
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (check) location.reload();
  else
    spanTittle.textContent =
      "Erro ao enviar o formulario. Preencha os campos corretamente.";
});
