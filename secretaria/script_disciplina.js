var formDisciplina = document.querySelector(".formDisciplina");
document.addEventListener("DOMContentLoaded", function () {
  formDisciplina.addEventListener("submit", function (e) {
    e.preventDefault();
    cadastrarDisciplina();
  });
});

function cadastrarDisciplina() {
  var nomeDisciplina = document.querySelector(".nomeDisciplina").value;
  var disciplinasCadastradas =
    JSON.parse(localStorage.getItem("disciplinas")) || [];
  var novaDisciplina = {
    nome: nomeDisciplina,
  };
  disciplinasCadastradas.push(novaDisciplina);
  localStorage.setItem("disciplinas", JSON.stringify(disciplinasCadastradas));
  formDisciplina.reset();
  alert("Disciplina cadastrada com sucesso!");

}
