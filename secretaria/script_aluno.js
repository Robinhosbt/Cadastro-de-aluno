var formAluno = document.querySelector(".formAluno");
document.addEventListener("DOMContentLoaded", function () {
  formAluno.addEventListener("submit", function (e) {
    e.preventDefault();
    cadastrarAluno();
  });
});

function cadastrarAluno() {
  var nomeAluno = document.querySelector(".nomeAluno").value;
  var alunosCadastrados = JSON.parse(localStorage.getItem("alunos")) || [];
  var novoAluno = {
    nome: nomeAluno,
  };
  alunosCadastrados.push(novoAluno);
  localStorage.setItem("alunos", JSON.stringify(alunosCadastrados));
  formAluno.reset();
  alert("Aluno cadastrado com sucesso!");
}

function limparLocalStorage() {
  localStorage.clear();
  alert("Local Storage foi limpo.");
}
