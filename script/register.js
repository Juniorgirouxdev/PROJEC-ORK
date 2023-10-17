

document
  .getElementById("formulario")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
   const email = document.getElementById("email").value;
   const senha = document.getElementById("senha").value;
   const repetir = document.getElementById("repetir").value;


    

    if (!name || !email || !senha || !repetir) {
      document.getElementById('nameError').textContent =
        "Todos os campos são obricatórios.";
      return;
    } else {
      document.getElementById('nameError').textContent = "";
    }
  });

  document.getElementById('name').addEventListener('input', botaoDesabilitado)
  email.addEventListener('input', botaoDesabilitado)
  senha.addEventListener('input', botaoDesabilitado)
  repetir.addEventListener('input', botaoDesabilitado)

  let btn = document.getElementById('botao')
function botaoDesabilitado () {

     
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
    let repetir = document.getElementById("repetir").value;

    if(  name && email && senha && repetir){

        btn.removeAttribute('disabled')

    }
    
    else{
        btn.setAttribute('disabled', 'true')
    }
}
  