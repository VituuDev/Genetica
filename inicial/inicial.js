function validateTextarea(event){
     
    const textarea = document.getElementById('description');
    const errorMessage = document.getElementById('error-message');
    const value = textarea.value.trim();
    

//impede o envio do formulario se a validação falhar
event.preventDefault();

   //não tem nada no campo
    if(!value){
        errorMessage.textContent = "Este campo é obrigatório.";
        return false;
    }
    //texto menor que 10 caracteres
    if(value.length < 10){
        errorMessage.textContent = "A descrição deve ter no mínimo 10 caracteres."
        return false;
    }
    //texto maior que 50 carcteres
    if(value.length > 50){
        errorMessage.textContent = "A descrição não pode exceder 50 caracteres."
        return false;
    }

    errorMessage.textContent = ""; //Limpa a mensagem de erro
    alert("Formulário enviado com sucesso!");
    return true;
}
 
    // Associa a função ao evento submit do formulário

    const form = document.getElementById('form');
    form.addEventListener('submit', validateTextarea);
