window.onload = init;
function init(){
    botonEnvio = document.querySelector('[type="button"]');
    nuevoItem = document.querySelector('[type="text"]');
    listaCompra = document.getElementById("listaCompra");
    botonEnvio.disabled=true;
    botonEnvio.addEventListener("click",anadir);
}

function anadir(){
    var lista = document.createElement("li");
    lista.innerHTML = nuevoItem.value;
    lista.addEventListener("dblclick",eliminarLi);
    listaCompra.appendChild(lista);
    nuevoItem.value = "";
}
function eliminarLi(){
    this.parentNode.removeChild(this);
}

function es_vacio()
{
    if (nuevoItem.value=="")
    {
        botonEnvio.disabled=true;
    }
    else
    {
        botonEnvio.disabled=false;
    }
}
