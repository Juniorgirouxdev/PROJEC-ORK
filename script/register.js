// document
// .getElementById("formulario")
//   .addEventListener("submit", function (event) {
//     event.preventDefault();

//     const name = document.getElementById("name").value;
//     const email = document.getElementById("email").value;
//     const senha = document.getElementById("senha").value;
//     const repetir = document.getElementById("repetir").value;
//     const msgSpan = document.getElementById("nameError");

//     if (name || email || senha || repetir) {
//       document.getElementById("nameError").textContent =
//         "Cadastro realizado com sucesso";
//       return;
//     } else {
//       document.getElementById("nameError").textContent = "Todos os campos são obricatórios.";
//     }
//   });

//  Ativar e desativar botão //

document.getElementById("name").addEventListener("input", botaoDesabilitado);
document.getElementById("email").addEventListener("input", botaoDesabilitado);
document.getElementById("senha").addEventListener("input", botaoDesabilitado);
document.getElementById("repetir").addEventListener("input", botaoDesabilitado);



function botaoDesabilitado() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let senha = document.getElementById("senha").value;
  let repetir = document.getElementById("repetir").value;
  let btn = document.getElementById("botao");

  if (name && email && senha && repetir) {
    // btn.setAttribute("disabled", "true");
    btn.setAttribute('style', 'background-color:#6083ff')
    btn.style.cursor = 'pointer'
  } else {
    // btn.removeAttribute("disabled");
    btn.setAttribute('style', 'background-color:#9db2fc')
    btn.style.cursor = 'defult'
  }
}


// Validação inputs (Junior) //

let nome = document.getElementById('name')
let spanNome = document.querySelector('.spanName')
let validNome = false

let email = document.getElementById('email')
let spanEmail = document.querySelector('.spanEmail')
let validEmail = false

let senha = document.getElementById('senha')
let spanSenha = document.querySelector('.spanSenha')
let validSenha = false

let repetir = document.getElementById('repetir')
let spanRepetir = document.querySelector('.spanRepetir')
let validRepetir = false


nome.addEventListener('keyup', () => {
  if (nome.value.length <= 2){
    nome.setAttribute('style', 'border-bottom: 1px solid red'),
    spanNome.style.display = "block";
    validNome = false
  } else {
    nome.setAttribute('style', 'border: 1px solid green')
    spanNome.style.display = "none";
    nome.setAttribute('style', 'border-color: green')
    validNome = true
  }

})

email.addEventListener('keyup', () => {
  if (email.value.length <= 2){
    email.setAttribute('style', 'border-bottom: 1px solid red'),
    spanEmail.style.display = "block";
    validEmail = false
  } else {
    email.setAttribute('style', 'border: 1px solid green')
    spanEmail.style.display = "none";
    email.setAttribute('style', 'border-color: green')
    validEmail = true
  }

})

senha.addEventListener('keyup', () => {
  if (senha.value.length < 6){
    senha.setAttribute('style', 'border-bottom: 1px solid red'),
    spanSenha.style.display = "block";
    validSenha = false
  } else {
    senha.setAttribute('style', 'border: 1px solid green')
    spanSenha.style.display = "none";
    senha.setAttribute('style', 'border-color: green')
    validSenha = true
  }

})

repetir.addEventListener('keyup', () => {
  if (senha.value != repetir.value){
    repetir.setAttribute('style', 'border-bottom: 1px solid red'),
    spanRepetir.style.display = "block";
    validRepetir = false
  } else {
    repetir.setAttribute('style', 'border: 1px solid green')
    spanRepetir.style.display = "none";
    repetir.setAttribute('style', 'border-color: green')
    validRepetir = true
  }

})

//  Validação form (Junior) //

function cadastrar(){ 
  if (validNome && validEmail && validSenha && validRepetir){
    alert('Show! seu cadastro foi feito parceiro.')
  }
}


