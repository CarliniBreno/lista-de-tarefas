function adicionarT() {
    var areaTemplate = document.getElementById("template");

    var content = document.getElementById("nova-tarefa").value;

    var novoItem = areaTemplate.content.cloneNode(true);

    novoItem.querySelector("li").append(content)

    var lista = document.getElementById("lista");

    lista.appendChild(novoItem);
}


function remove(elemento){
    elemento.parentElement.remove()
}