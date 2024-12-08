let nomeUsuario = "";
let elemento = document.querySelector("#nome-usuario");

while(nomeUsuario == "") {
    nomeUsuario = prompt("Qual seu Nome?");
}

if (nomeUsuario == null) {
    elemento.textContent = "Usuário Anônimo"
} else {
    elemento.textContent = nomeUsuario;
}