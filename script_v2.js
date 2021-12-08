var tasks = JSON.parse(localStorage.getItem("tasks"));

window.onload = () => {
    listarTodasTarefas();
  }

  function listarTodasTarefas() {
  
    var lista = document.getElementById("lista");
    lista.innerHTML = "";
  
    tasks.forEach (function (value, position) {
      var modeloItem = document.getElementById("modeloItem");
      var novoItem = modeloItem.content.cloneNode(true);
  
      var li = novoItem.querySelector('li');
      li.value = position
      li.append(value); ''
  
      lista.append(novoItem);
    })
  }
  
  function adicionarTarefa() {
  
    var novaTarefa = document.getElementById("nova-tarefa");
  
    tasks.push(novaTarefa.value);
    listarTodasTarefas();
  
    novaTarefa.value = "";
    save();
  }
  
  function remover(elemento) {
    var posicao = elemento.parentElement.value;
    tasks.splice(posicao, 1);
    listarTodasTarefas();
  }

function save(){
  localStorage.setItem("tasks", JSON.stringify(tasks));
}