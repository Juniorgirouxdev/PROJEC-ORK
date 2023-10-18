document
  .getElementById("formulario")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const repetir = document.getElementById("repetir").value;
    const msgSpan = document.getElementById("nameError");

    if (name || email || senha || repetir) {
      document.getElementById("nameError").textContent =
        "Cadastro realizado com sucesso";
      return;
    } else {
      document.getElementById("nameError").textContent = "Todos os campos são obricatórios.";
    }
  });

document.getElementById("name").addEventListener("input", botaoDesabilitado);
document.getElementById("email").addEventListener("input", botaoDesabilitado);
document.getElementById("senha").addEventListener("input", botaoDesabilitado);
document.getElementById("repetir").addEventListener("input", botaoDesabilitado);

let btn = document.getElementById("botao");
function botaoDesabilitado() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let senha = document.getElementById("senha").value;
  let repetir = document.getElementById("repetir").value;

  if (name && email && senha && repetir) {
    btn.setAttribute("disabled", "true");
    btn.setAttribute('style', 'background-color:#6083ff')
  } else {
    btn.removeAttribute("disabled");
    btn.setAttribute('style', 'background-color:#9db2fc')
  }

  if (name && email && senha && repetir) {
    
  }
}
