const nome = document.getElementById("name");
const submitButton = document.getElementById("submitButton");

nome.addEventListener("input", () => {
  submitButton.disabled = nome.value.trim() === "";
});
