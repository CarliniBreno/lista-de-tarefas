function adicionarT() {
    var areaTemplate = document.getElementById("template");

    var content = document.getElementById("nova-tarefa").value;

    var novoItem = areaTemplate.content.cloneNode(true);

    var li = novoItem.querySelector("li")

    li.appendChild(document.createTextNode(content))

    var lista = document.getElementById("lista");

    lista.appendChild(novoItem);
}

function adicionarItem(){

}