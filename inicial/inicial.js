function validateTextarea(){
    
    const textarea = document.getElementById('description');
    const errorMessage = document.getElementById('error-message');
    const value = textarea.value.trim();
   //não tem nada no campo
    if(!value){
        errorMessage.textContent = "Este campo é obrigatório.";
        return false;
    }
    //texto menor que 10 caracteres
    if(value.legth < 10){
        errorMessage.textContent = "A descrição deve ter no mínimo 10 caracteres."
        return false;
    }
    //texto maior que 50 carcteres
    if(value.legth > 50){
        errorMessage.textContent = "A descrição não pode exceder 50 caracteres."
        return false;
    }

    errorMessage.textContent = ""; //Limpa a mensagem de erro
    return true;
}