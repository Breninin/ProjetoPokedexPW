const inputsDigitsOnly = document.querySelectorAll("[data-onlyDigits]");

inputsDigitsOnly.forEach((element) => {
  element.addEventListener("keypress", (event) => {
    var char = String.fromCharCode(event.which);

    if (!/[0-9|| ||-]/.test(char)) {
      event.preventDefault();
    }
  });
});
