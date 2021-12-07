window.onload = () => {
    listarTodasTarefas();
  }
  
  var tarefas = ["primeira tarefa", "segunda tarefa"];
  
  function listarTodasTarefas() {
    debugger;
  
    var lista = document.getElementById("lista");
    // lista.innerHTML = "";
  
    for (var posicao = 0; posicao < tarefas.length; posicao++) {
      var textoNovaTarefa = tarefas[posicao]
  
      var modeloItem = document.getElementById("modeloItem");
      var novoItem = modeloItem.content.cloneNode(true);
  
      var li = novoItem.querySelector('li');
      li.append(textoNovaTarefa); ''
  
      lista.append(novoItem);
    }
  }
  
  function adicionarTarefa() {
    debugger;
  
    var novaTarefa = document.getElementById("nova-tarefa");
  
    tarefas.push(novaTarefa.value);
    listarTodasTarefas();
  
    novaTarefa.value = "";
  }
  
  function remover(elemento) {
    elemento.parentElement.remove();
  }
  
  