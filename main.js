
function crearParrafo (){

    let parrafo = document.createElement("p");

    parrafo.innerHTML= "Activaste un evento gracias al hacer click en el botón";
    parrafo.classList.add("myStyle");
    document.getElementById("myDiv").appendChild(parrafo)

}

let miFormulario      = document.getElementById("formulario");
miFormulario.addEventListener("submit", validarFormulario);

function validarFormulario(e){
        e.preventDefault();
        let formulario = e.target

        console.log(formulario.children[0].value); 
        console.log(formulario.children[1].value);  
}

