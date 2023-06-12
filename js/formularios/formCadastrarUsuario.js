//* Verificar o nome de usuário

const inputUserName = document.querySelector("#userName");
var boolUserName = false;

inputUserName.addEventListener("blur", (event) => {
  const errorMsg = document.querySelector("#nameSpan");
  var value = event.target.value;

  if (value.length === 0) {
    errorMsg.textContent = "*";
    boolUserName = false;
  } else if (value.length < 5 || value.length > 30) {
    errorMsg.textContent = "Insira um nome entre 3 e 30 caracteres";
    boolUserName = false;
  } else if (value === users.find(element => element.userName === value)) {
    errorMsg.textContent = "Este nome já está sendo utilizado";
    boolUserName = false;
  } else {
    errorMsg.textContent = "";
    boolUserName = true;
  }
});

//* Verificar o nome real

const inputUserRealName = document.querySelector("#userRealName");
var boolUserRealName = true;

inputUserRealName.addEventListener("blur", (event) => {
  const errorMsg = document.querySelector("#realNameSpan");
  var value = event.target.value;

  if (value.length > 0 && value.length < 5) {
    errorMsg.textContent = "Insira o nome completo";
    boolUserRealName = false;
  } else {
    errorMsg.textContent = "";
    boolUserRealName = true;
  }
});

//* Verificar o email
const inputUserEmail = document.querySelector("#userEmail");
var boolUserEmail = false;

inputUserEmail.addEventListener("blur", (event) => {
  const errorMsg = document.querySelector("#emailSpan");
  var value = event.target.value;

  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (value.length === 0) {
    errorMsg.textContent = "*";
    boolUserEmail = false;
  } else if(!value.match(validRegex)){
    errorMsg.textContent = "Insira um email válido";
    boolUserEmail = false;
  } else {
    errorMsg.textContent = "";
    boolUserEmail = true;
  }
});

//* Verificar o telefone
const inputUserPhone = document.querySelector("#userPhone");
var boolUserPhone = true;

inputUserPhone.addEventListener("keypress", (event) => {
  var char = String.fromCharCode(event.which);

  if (!/[0-9|| ||-]/.test(char)) {
    event.preventDefault();
  }

  let inputLength = inputUserPhone.value.length;

  if (inputLength === 2) {
    inputUserPhone.value += " ";
  } else if (inputLength === 8) {
    inputUserPhone.value += "-";
  }
});

inputUserPhone.addEventListener("blur", (event) => {
  const errorMsg = document.querySelector("#phoneSpan");
  var value = event.target.value;

  digits = value.replace(/\D/g, "");

  if (digits.length > 0 && digits.length != 11) {
    errorMsg.textContent = "Insira um número válido";
    boolUserPhone = false;
  } else if (digits.length > 0 && (value.charAt(2) != " " || value.charAt(8) != "-")) {
    errorMsg.textContent = "Formatação inválida";
    boolUserPhone = false;
  } else {
    errorMsg.textContent = "";
    boolUserPhone = true;
  }
});

//* Verificar a data de nascimento
const inputUserDate = document.querySelector("#userDate");
var boolUserDate = true;

inputUserDate.addEventListener("blur", (event) => {
  const errorMsg = document.querySelector("#dateSpan");
  let value = Date.parse(event.target.value);

  if (value > Date.now()) {
    errorMsg.textContent = "Data inválida";
    boolUserDate = false;
  } else {
    errorMsg.textContent = "";
    boolUserDate = true;
  }
});

//* Verificar a senha
const inputUserPass = document.querySelector("#userPass");
var boolUserPass = false;

inputUserPass.addEventListener("blur", (event) => {
  const errorMsg = document.querySelector("#passSpan");
  var value = event.target.value;
  
  if (value.length === 0) {
    errorMsg.textContent = "*";
    boolUserPass = false;
  } else if (value.length < 8) {
    errorMsg.textContent = "Insira uma senha com mais de 8 caracteres";
    boolUserPass = false;
  } else if (value.search(/[a-z]/) < 0) {
    errorMsg.textContent = "Insira uma senha com pelo menos um caractere minusculo";
    boolUserPass = false;
  } else if (value.search(/[A-Z]/) < 0) {
    errorMsg.textContent = "Insira uma senha com pelo menos um caractere maiusculo";
    boolUserPass = false;
  } else if (value.search(/[0-9]/) < 0) {
    errorMsg.textContent = "Insira uma senha com pelo menos um digito";
    boolUserPass = false;
  } else {
    errorMsg.textContent = "";
    boolUserPass = true;
  }
});

//* Confirmar a senha
const inputUserConfPass = document.querySelector("#userConfPass");
var boolUserConfPass = false;

inputUserConfPass.addEventListener("blur", (event) => {
  const errorMsg = document.querySelector("#confPassSpan");
  var value = event.target.value;

  if (value.length === 0) {
    errorMsg.textContent = "*";
    boolUserConfPass = false;
  } else if (value != inputUserPass.value) {
    errorMsg.textContent = "A senha inserida esta incorreta";
    boolUserConfPass = false;
  } else {
    errorMsg.textContent = "";
    boolUserConfPass = true;
  }
});

//! Verificar envio do formulário
const form = document.querySelector("#formUser");
const users = JSON.parse(localStorage.getItem("users")) || [];

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const buttonSpanError = document.querySelector("#buttonSpan");

  if (boolUserName === true &&
    boolUserRealName === true &&
    boolUserEmail === true &&
    boolUserPhone === true &&
    boolUserDate === true &&
    boolUserPass === true &&
    boolUserConfPass === true) {

    buttonSpanError.textContent = "";

    const user = users.find(element => element.userName === inputUserName.value)

    const userStorage = {
      userName: inputUserName.value,
      userRealName: inputUserRealName.value,
      userEmail: inputUserEmail.value,
      userPhone: inputUserPhone.value,
      userDate: inputUserDate.value,
      userPass: inputUserPass.value,
    };

    if (user) {
      buttonSpanError.textContent = "Este usuário já esta cadastrado.";
      return;
    } else {
      users.push(userStorage);
    }
    
    localStorage.setItem("users", JSON.stringify(users));

    location.reload();
  } else {
    buttonSpanError.textContent = "Erro ao enviar o formulario. Preencha os campos corretamente.";
  }
});