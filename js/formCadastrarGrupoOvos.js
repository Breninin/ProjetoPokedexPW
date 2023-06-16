const input = document.querySelector("#egg"),
  span = document.querySelector("#eggSpan"),
  form = document.querySelector("#formUser"), 
  spanTitle = document.querySelector("#spantitle");

var check = false;

input.addEventListener("blur", (event) => {
  var value = event.target.value;
  if (value.length == 0) {
    check = false;
    span.textContent = "";
  } else if (value.length < 3) {
    check = false;
    span.textContent = "Insira mais que 3 caracteres";
  } else {
    check = true;
    span.textContent = "";
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (check) location.reload();
  else
    spanTitle.textContent =
      "Erro ao enviar o formulario. Prncha os campos corretamente.";
});
