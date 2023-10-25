const listaSuper = document.getElementByIdC ("lista-super" ) ;
const input = document.getE1enentById(" input—tista");
const botonAgregar = document.getElementById ("boton-agegar");

botonAgregar.addEventListener("click", onClickAdd) ;
input.addEventListener("input", onTypeList) ;

function onCtickAdd() {
    const li = createListItem( input.value) ;
    listaSuper.appendChild ( li) ;
    input. value= "";
    botonAgregar.disabled = true;
}
    function onTypeList() {
    botonAgregar.disabled = input. value.length==0}

    