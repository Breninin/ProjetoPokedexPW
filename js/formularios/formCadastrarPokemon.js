const inputsOnlyDigits = document.querySelectorAll("[data-only-digits]");
const inputsRequiredSelect = document.querySelectorAll("[data-required-select]");

inputsOnlyDigits.forEach((element) => {
  element.addEventListener("keypress", (event) => {
    var char = String.fromCharCode(event.which);

    if (!/[0-9]/.test(char)) {
      event.preventDefault();
    }
  });
});

inputsRequiredSelect.forEach((element) => {
  element.addEventListener("change", (event) => {
    const spanError = event.target.parentNode.querySelector("[data-span-error]");

    var selectedOption = event.target.options[event.target.selectedIndex];

    if (selectedOption.value == 0) {
      spanError.textContent = `Selecione uma opção diferente`;
    } else {
      spanError.textContent = "";
    }
  });
});