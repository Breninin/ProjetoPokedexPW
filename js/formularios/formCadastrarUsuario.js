// Formulario de: Breno Alcides

const inputs = document.querySelectorAll("[data-get-inputs]");

const userPhone = document.querySelector("#userPhone");
const userPass = document.querySelector("#userPass");

var boolUserEmail = false;
var boolUserPhone = false;
var boolUserDate = false;
var boolUserPass = false;
var boolUserConf = false;

inputs.forEach((element) => {
  element.addEventListener("blur", (event) => {
    const spanError = event.target.parentNode.querySelector("[data-span-error]");

    switch (event.target.name) {
      case "userName":
        spanError.textContent = checkLength(event.target.value.length, 5, 30);
        break;
      case "userRealName":
        spanError.textContent = checkLength(event.target.value.length, 5, 50);
        break;
      case "userEmail":
        spanError.textContent = checkEmail(event.target.value);
        if (boolUserEmail) {
          spanError.textContent = checkLength(event.target.value.length, 10, 100);
        }
        break;
      case "userPhone":
        spanError.textContent = checkPhone(event.target.value);
        break;
      case "userDate":
        spanError.textContent = checkDate(event.target.value);
        break;
      case "userPass":
        spanError.textContent = checkPassword(event.target.value);
        if (boolUserPass) {
          spanError.textContent = checkLength(event.target.value.length, 8, undefined);
        }
        break;
      case "userConfPass":
        spanError.textContent = confirmPassword(event.target.value);
        break;
    }
  });
});

//* Verificar o preenchimento de um campo
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

//* Verificar o email
function checkEmail(email) {
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (!email.match(validRegex)) {
    boolUserEmail = false;
    return "Insira um email válido";
  } else {
    boolUserEmail = true;
  }
}

//* Verificar o telefone
userPhone.addEventListener("keypress", (event) => {
  var char = String.fromCharCode(event.which);

  if (!/[0-9|| ||-]/.test(char)) {
    event.preventDefault();
  }

  let inputLength = event.target.value.length;

  if (inputLength === 2) {
    event.target.value += " ";
  } else if (inputLength === 8) {
    event.target.value += "-";
  }
});

function checkPhone(phone) {
  var digits = phone.replace(/\D/g, "");

  if (phone.length === 0) {
    boolUserPhone = false;
    return "*";
  } else if (digits.length != 11) {
    boolUserPhone = false;
    return "Insira um número válido";
  } else if (phone.length === 13 &&(phone.charAt(2) != " " || phone.charAt(8) != "-")) {
    boolUserPhone = false;
    return "Formatação inválida";
  } else {
    boolUserPhone = true;
    return "";
  }
}

//* Verificar a data de nascimento
function checkDate(date) {
  let dateValue = Date.parse(date);

  if (dateValue > Date.now()) {
    boolUserDate = false;
    return "Data inválida";
  } else {
    boolUserDate = true;
    return "";
  }
}

//* Verificar a senha
function checkPassword(password) {
  if (password.search(/[a-z]/) < 0) {
    boolUserPass = false;
    return "Insira uma senha com pelo menos um caractere minusculo";
  } else if (password.search(/[A-Z]/) < 0) {
    boolUserPass = false;
    return "Insira uma senha com pelo menos um caractere maiusculo";
  } else if (password.search(/[0-9]/) < 0) {
    boolUserPass = false;
    return "Insira uma senha com pelo menos um digito";
  } else {
    boolUserPass = true;
  }
}

//* Confirmar a senha
function confirmPassword(confPassword) {
  if (confPassword.length === 0) {
    boolUserConf = false;
    return "*";
  } else if (confPassword != userPass.value) {
    boolUserConf = false;
    return "A senha inserida esta incorreta";
  } else {
    boolUserConf = true;
    return "";
  }
}

//! Verificar envio do formulário
const form = document.querySelector("#formUser");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const buttonSpanError = document.querySelector("#buttonSpan");

  if (boolUserEmail === true &&
    boolUserPhone === true &&
    boolUserDate === true &&
    boolUserPass === true &&
    boolUserConf === true) {
    
    buttonSpanError.textContent = "";

    location.reload();
  } else {
    buttonSpanError.textContent = "Erro ao enviar o formulario. Preencha os campos corretamente.";
  }
});