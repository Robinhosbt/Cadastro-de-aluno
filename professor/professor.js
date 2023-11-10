function adicionarNota() {
    const disciplinaIndex = document.getElementById("disciplinaSelect").selectedIndex;
    const nota = parseFloat(prompt("Digite a nota (entre 0 e 25):"));
    if (isValidNota(nota)) {
        disciplinas [disciplinaIndex].notas.push(nota);
    }
}
function adicionarFrequencia() {
    const disciplinaIndex = document.getElementById("disciplinaSelect").selectedIndex;
    const frequencia = parseInt(prompt("Digite a frequência (entre 0 e 100):"));
    if (isValidFrequencia(frequencia)) {
        disciplinas[disciplinaIndex].frequencias.push(frequencia);   
    }
}
document.getElementById("addNota").addEventListener("click", adicionarNota);
document.getElementById("addFrequencia").addEventListener("click", adicionarFrequencia);

function isValidNota(nota) {
    return !isNaN(nota) && nota >= 0 && nota <= 25;
}

function isValidFrequencia(frequencia) {
    return !isNaN(frequencia) && frequencia >= 0 && frequencia <= 100;

}
function adicionarNota() {
    const disciplinaIndex = document.getElementById("disciplinaSelect").selectedIndex;
    const nota = parseFloat(prompt("Digite a nota (entre 0 e 25):"));
    if (isValidNota(nota))
    
    {
      
        localStorage.setItem("disciplinas", JSON.stringify(disciplinas));
    }
}
function carregarDados() {
    const disciplinasFromStorage = JSON.parse(localStorage.getItem("disciplinas"));
    if (disciplinasFromStorage) {
        disciplinas.push(...disciplinasFromStorage);
    }
}
window.addEventListener("load", carregarDados);


