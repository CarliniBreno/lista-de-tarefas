    var enter = document.getElementById('nova-tarefa');

    enter.addEventListener('keyup', (e) => {

        if (e.key == "Enter") {
            adicionarT()
    }
})

function adicionarT() {
    var content = document.getElementById("nova-tarefa");

    var areaTemplate = document.getElementById("template");

    var newItem = areaTemplate.content.cloneNode(true);

    var listItem = newItem.querySelector("li");
    
    listItem.append(content.value)

    var list = document.getElementById("lista");

    if (content.value == "") {
        alert("Digita alguma coisa aí, mula");
    }
    else {
        var itemNum = list.children.length
        if (itemNum % 2 == 0){
            listItem.style.backgroundColor = "#E4EFF1"
    }
        if (itemNum % 3 == 0) {
            listItem.style.color = "red"
        }
        list.append(newItem);
        content.value = "";
    }
}


function remove(elemento){
    elemento.parentElement.remove()
}