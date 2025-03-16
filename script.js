// Ajustar tamanho da fonte
function aumentarFonte() {
    document.getElementById("texto-ajustavel").style.fontSize = "22px";
}

function diminuirFonte() {
    document.getElementById("texto-ajustavel").style.fontSize = "16px";
}

// Temporizador ajustável
let tempoRestante = 30;
let intervalo = setInterval(contagem, 1000);

function contagem() {
    if (tempoRestante > 0) {
        tempoRestante--;
        document.getElementById("tempo").innerText = tempoRestante;
    }
}

function pausarTempo() {
    clearInterval(intervalo);
}

function retomarTempo() {
    intervalo = setInterval(contagem, 1000);
}

// Modo de leitura simples
function ativarModoSimples() {
    document.getElementById("conteudo").style.backgroundColor = "#FFF";
    document.getElementById("conteudo").style.color = "#000";
}

function desativarModoSimples() {
    document.getElementById("conteudo").style.backgroundColor = " #e3f2fd";
    document.getElementById("conteudo").style.color = "#212529";
}

function confirmarExclusao() {
    let confirmacao = confirm("Tem certeza que deseja excluir sua conta?");
    if (confirmacao) {
        document.getElementById("mensagem-erro").innerText = "Conta excluída com sucesso!";
    } else {
        document.getElementById("mensagem-erro").innerText = "Ação cancelada.";
    }
}

function verificarSenha() {
    let senha = document.getElementById("senha").value;
    if (senha.length >= 6) {
        document.getElementById("mensagem-seguranca").innerText = "Senha válida!";
    } else {
        document.getElementById("mensagem-seguranca").innerText = "A senha deve ter pelo menos 6 caracteres.";
    }
}

function ativarAltoContraste() {
    document.body.style.backgroundColor = "#000";
    document.body.style.color = "#FFF";
}

function desativarAltoContraste() {
    document.body.style.backgroundColor = "#F8F9FA";
    document.body.style.color = "#212529";
}

function lerTexto() {
    let texto = document.getElementById("texto-leitura").innerText;
    let sintetizador = new SpeechSynthesisUtterance(texto);
    window.speechSynthesis.speak(sintetizador);
}

function aumentarEspacamento() {
    document.getElementById("texto-espacamento").style.lineHeight = "2";
}

function diminuirEspacamento() {
    document.getElementById("texto-espacamento").style.lineHeight = "1.2";
}

function mostrarNotificacao() {
    let notificacao = document.getElementById("notificacao");
    notificacao.style.display = "block";
    setTimeout(() => { notificacao.style.display = "none"; }, 3000);
}

function ativarModoContraste() {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "yellow";
}

function desativarModoContraste() {
    document.body.style.backgroundColor = "#F8F9FA";
    document.body.style.color = "#212529";
}

let area = document.getElementById("gesto-area");
let mensagem = document.getElementById("gesto-mensagem");

let startX = 0;
let endX = 0;

// Eventos para mouse
area.addEventListener("mousedown", startDrag);
area.addEventListener("mouseup", endDrag);

// Eventos para touchscreen
area.addEventListener("touchstart", startTouch, false);
area.addEventListener("touchend", endTouch, false);

function startDrag(e) {
    startX = e.clientX;
}

function endDrag(e) {
    endX = e.clientX;
    detectarMovimento();
}

function startTouch(e) {
    startX = e.touches[0].clientX;
}

function endTouch(e) {
    endX = e.changedTouches[0].clientX;
    detectarMovimento();
}

function detectarMovimento() {
    if (startX - endX > 50) {
        mensagem.innerText = "Você arrastou para a esquerda!";
    } else if (endX - startX > 50) {
        mensagem.innerText = "Você arrastou para a direita!";
    }
}

function confirmarCompra() {
    document.getElementById("mensagem-pagamento").innerText = "Compra realizada com sucesso!";
}
 
function enviarFeedback() {
    document.getElementById("mensagem-feedback").innerText = "Obrigado pelo seu feedback!";
}

function abrirServico() {
    window.open("https://www.gov.br/saude", "_blank");
}

function mostrarTutorial() {
    document.getElementById("tutorial-texto").style.display = "block";
}

function modoEscuro() {
    document.body.style.backgroundColor = "#000";
    document.body.style.color = "#FFF";
}

function modoClaro() {
    document.body.style.backgroundColor = "#F8F9FA";
    document.body.style.color = "#212529";
}

function lerTextoAssistivo() {
    let texto = document.getElementById("texto-assistivo").innerText;
    let sintetizador = new SpeechSynthesisUtterance(texto);
    window.speechSynthesis.speak(sintetizador);
}

if (typeof Symbol === "undefined") {
    document.getElementById("compatibilidade").innerText = "Seu navegador pode não suportar recursos modernos.";
}

function alertaFraude() {
    alert("Nunca compartilhe seus dados pessoais com terceiros.");
}

function compartilhar() {
    let url = encodeURIComponent(window.location.href);
    window.open("https://api.whatsapp.com/send?text=" + url, "_blank");
}


