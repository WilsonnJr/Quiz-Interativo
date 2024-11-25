// Adiciona um evento ao botão para processar o envio do quiz
document.getElementById("enviarQuiz").addEventListener("click", function () {
    let pontuacao = 0; // Variável para armazenar a pontuação do usuário
  
    // Verifica a resposta da Pergunta 1
    const q1 = document.querySelector('input[name="q1"]:checked'); 
    if (q1 && q1.value === "1") pontuacao++; // Incrementa a pontuação se a resposta estiver correta
  
    // Verifica a resposta da Pergunta 2
    const q2 = document.querySelector('input[name="q2"]:checked'); 
    if (q2 && q2.value === "1") pontuacao++; // Incrementa se a resposta estiver correta
  
    // Verifica a resposta da Pergunta 3
    const q3 = document.getElementById("q3").value; 
    if (q3 === "1") pontuacao++; // Incrementa se a resposta estiver correta
  
    // Mostra o resultado ao usuário
    const secaoResultado = document.getElementById("secaoResultado");
    const mensagemResultado = document.getElementById("mensagemResultado");
  
    // Exibe mensagens diferentes com base na pontuação
    if (pontuacao === 3) {
      mensagemResultado.textContent = "Parabéns! Você acertou todas as perguntas!";
    } else {
      mensagemResultado.textContent = `Você acertou ${pontuacao} de 3 perguntas. Tente novamente!`;
    }
  
    secaoResultado.style.display = "block"; // Torna a seção de resultado visível
  });
  