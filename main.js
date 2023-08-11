let saudacao = "";
const horaAtual = new Date().getHours();
const imagem = document.getElementById("imagem");

if (horaAtual >= 6 && horaAtual < 12) {
    saudacao = "Bom dia!";
    imagem.src = "imagem-dia.jpg"; 
} else if (horaAtual >= 12 && horaAtual < 18) {
    saudacao = "Boa tarde!";
    imagem.src = "imagem-tarde.jpg"; 
} else {
    saudacao = "Boa noite!";
    imagem.src = "imagem-noite.jpg"; 
}

document.getElementById("resultado").textContent = saudacao;
