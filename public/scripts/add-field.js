//Procurar o botao
document.querySelector("#add-time")

//quando clickar no botao 
.addEventListener('click', cloneField)

//executar uma acao 
function cloneField(){

    //duplicar o campo, que campo? 
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    //pegar os campos. Que campos? 
    const fields = newFieldContainer.querySelectorAll('input')

    //para cada campo, limpar.
    fields.forEach(function(field){
        //pegar o field do momento e limpa 
        field.value = ""
    })
    //colocar na pagina, onde? 
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
} 
    
    