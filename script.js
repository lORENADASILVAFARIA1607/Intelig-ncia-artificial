*JavaScript (script.js)
function iniciarMissao() {
 const missaoDiv = document.getElementById('missao');
 missaoDiv.innerHTML = 
 <h2>Quiz de IA</h2>
 <p>Qual é o objetivo da IA?</p>
 <button id="resposta-1">Aumentar a produtividade</button>
 <button id="resposta-2">Reduzir custos</button>
 <button id="resposta-3">Melhorar a vida humana</button>
}

// Função para verificar a resposta
function verificarResposta(respostaUsuario) {
 const respostaCorreta = 'Melhorar a vida humana';
 if (respostaUsuario === respostaCorreta) {
 alert('Resposta correta!');
 } else {
 alert('Tente novamente!');
 }
}

// Adicionar evento de clique ao botão de iniciar missão
document.getElementById('iniciar-missao').addEventListener('click', iniciarMissao);

// Adicionar evento de clique às respostas
document.addEventListener('click', (e) => {
 if (e.target.id === 'resposta-1' || e.target.id === 'resposta-2' || e.target.id === 'resposta-3') {
 verificarResposta(e.target.textContent);
 }
}
*README.md 
* Autor: [Lorena]
* Contato: farialorena1607@gmail.com