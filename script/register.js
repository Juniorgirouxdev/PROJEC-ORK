document
  .getElementById("formulario")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
    let repetir = document.getElementById("repetir").value;

    if (!name || !email || !senha || !repetir) {
      document.getElementById('nameError').textContent =
        "Todos os campos são obricatórios.";
      return;
    } else {
      document.getElementById('nameError').textContent = "";
    }
  });
  