const inputEggName = document.querySelectorAll("input[type=text]");
const span = document.querySelectorAll("span[class=spanError]");
const spanTittle = document.querySelector("span[class=spanErrorTittle]");
const form = document.querySelector("form[class=flexUser]");
var boolEggName = false;

inputEggName.addEventListener("blur", (event) => {
  var value = event.target.value;
  if (value.length === 0) {
    span.textContent = "";
    boolEggName = false;
  } else if (value.length < 3 || value.length > 30) {
    span.textContent = "Insira um nome entre 3 e 30 caracteres";
    boolEggName = false;
  } else {
    span.textContent = "";
    boolEggName = true;
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (boolEggName) {
    location.reload();
  } else {
    span.textContent = "prencha esse campo";
    spanTittle.textContent = "Erro ao enviar o formulario. Prncha os campos corretamente.";
  }
});
