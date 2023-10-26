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
    botonAgregar.disabled = input. value.length==0;
}

function guardar(){
    Swat.fire({
    position: 'top—end' ,
    icon: 'success',
    title: 'Producto Agregado Con Éxito' ,
    shovConfirmButton: false,
    timer: 1500
    })
}

function createListIten(name) {
    const listItem = document.createElement (" li") ;
    const heading = document.createElement ("span")
    heading. textContent = name ;
    const botonEliminar= document.createElement ("button");

    listItem.classList.add("list-item");
    botonEliminar.textContent = "X";
    botonEliminar.id = "boton—elininar" ;
    botonEliminar.addEventListener("click",onClickDelete) ;

    listItem.appendChitd ( heading ) ;
    listItem.appendChitd ( botonEliminar) ;
    return listItem;
}

function onClickDelete(){
    this.parentNode.remove();
}

