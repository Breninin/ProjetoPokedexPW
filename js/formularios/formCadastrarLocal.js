// Formulario de: Andrey Medeiros

const inputs = document.querySelectorAll("input[type=text]"),
  spans = document.querySelectorAll("span[class=spanError]"),
  texta = document.querySelector("textarea"),
  spanTexta = document.querySelector("span[class=spanErrorTexta]"),
  combo = document.querySelector("select"),
  spanCombo = document.querySelector("span[class=spanErrorCombo]"),
  form = document.querySelector("form[class=flexUser]"),
  panTittle = document.querySelector("span[class=spanErrorTittle]");

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

texta.addEventListener("blur", (event) => {
  var value = event.target.value;
  if (value.length == 0) {
    spanTexta.textContent = "";
    check = false;
  } else if (value.length < 5) {
    spanTexta.textContent = "Insira mais que 5 caracteres";
    check = false;
  } else {
    spanTexta.textContent = "";
    check = true;
  }
});

combo.addEventListener("blur", (event) => {
  var value = event.target.options[combo.selectedIndex].value;
  if (value.length != null) {
    spanCombo.textContent = "";
    check = true;
  }
});

form.addEventListener("submit", (event) => {

});
