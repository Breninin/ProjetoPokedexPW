const inputEggName = document.querySelector("#eggName");
var boolEggName = false;

inputEggName.addEventListener("blur", (event) => {
  const errorMsg = document.querySelector("#nameSpan");
  var value = event.target.value;

  if (value.length === 0) {
    errorMsg.textContent = "*";
    boolEggName = false;
  } else if (value.length < 3 || value.length > 30) {
    errorMsg.textContent = "Insira um nome entre 3 e 30 caracteres";
    boolEggName = false;
  } else if (value === eggs.find(element => element.eggName === value)) {
    errorMsg.textContent = "Este nome já está sendo utilizado";
    boolEggName = false;
  } else {
    errorMsg.textContent = "";
    boolEggName = true;
  }
});

const form = document.querySelector("#formUser");
const eggs = JSON.parse(localStorage.getItem("eggs")) || [];

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const buttonSpanError = document.querySelector("#buttoValue");

  if (boolEggName === true) {

    buttonSpanError.textContent = "";

    const egg = eggs.find(element => element.eggName === inputEggName.value)

    const eggStorage = {
      eggName: inputEggName.value,
    };

    if (egg) {
      buttonSpanError.textContent = "Este ovo já esta cadastrado.";
      return;
    } else {
        eggs.push(eggStorage);
    }
    
    localStorage.setItem("eggs", JSON.stringify(eggs));

    location.reload();
  } else {
    buttonSpanError.textContent = "Erro ao enviar o formulario. Preencha os campos corretamente.";
  }
});