document
  .getElementById("meuFormulario")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let checkboxes = document.querySelectorAll('input[type="checkbox"]');

    let checkedOne = Array.prototype.slice
      .call(checkboxes)
      .some((x) => x.checked);
    if (!checkedOne) {
      alert("Por favor, marque pelo menos uma área de interesse.");
      return false;
    }

    let formData = new FormData(event.target);
    let data = Object.fromEntries(formData);
    console.log(data);

    return true;
  });
