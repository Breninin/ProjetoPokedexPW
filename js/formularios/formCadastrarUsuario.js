const inputs = document.querySelectorAll('[data-getInput]');

inputs.forEach((elemento)=>{
    elemento.addEventListener('blur',(evento)=>{
        validaCampo(evento.target);
    });
});

console.log(inputs);

function validaCampo(campo)
{
    const msnErro = campo.parentNode.querySelector('[data-erro]');
    if(campo.name ==='userName')
    {
        if(campo.value.length < 5)
        {
            msnErro.textContent = 'Digite o nome completo';

        }else{
            msnErro.textContent ="";
        }
    }
}