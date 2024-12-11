function validate(event) {
  //prevenir o envio imediato do formulario
  event.preventDefault();

  let isValid = true;

  //Limpando as mensagens de erro de inicio
  document.getElementById("error-n").textContent = "";
  document.getElementById("error-lastname").textContent = "";
  document.getElementById("error-email").textContent = "";
  document.getElementById("error-password").textContent = "";

  //Pegando os dados dos formulários
  const firstName = document.getElementById("n").value.trim();
  const lastName = document.getElementById("lastname").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const gender = document.querySelector("input[name=gender]:checked");

  //Alertando o usuario que todos os campos estão em branco
  if (!firstName && !lastName && !email && !password && !gender) {
    alert("Por favor, preencha os campos.");
    return false; // Interrompe a validação para evitar exibição de mensagens adicionais
  }

  //validando o primeiro nome
  if (!firstName) {
    document.getElementById("error-n").textContent =
      "Por favor, insira seu primeiro nome";
    isValid = false;
  }

  //validando o sobrenome
  if (!lastName) {
    document.getElementById("error-lastname").textContent =
      "Por favor, insira seu sobrenome";
    isValid = false;
  }

  //validando o email
  if (!email) {
    document.getElementById("error-email").textContent =
      "Por favor, insira seu email.";
    idValid = false;
  } else if (!validateEmail(email)) {
    document.getElementById("error-email").textContent =
      "Por favor, insira seu email válido.";
    isValid = false;
  }
  //validando a senha
  if (!password) {
    document.getElementById("error-password").textContent =
      "Por favor, insira sua senha.";
    isValid = false;
  }

  //Validando o gênero
  if (!gender) {
    alert("Por favor, selecione um gênero.");
    isValid = false;
  }
  //se o form estiver validado, redirecione para outra pagina
  if (isValid) {
    // Habilitar o novo botão
    document.getElementById("newButton").disabled = false;
  }

  //Previne erros de submissão caso algo esteja errado
  return isValid;
}

//função que verifica se o email é válido
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Função para redirecionar ao clicar no novo botão, depois de validar o formulário
function redirectToNewPage() {
  window.location.href = "/inicial/home_gen.html"; // Substitua pelo caminho desejado
}
