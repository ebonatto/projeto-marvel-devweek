/* 
1: quando passar o mouse em cima do personagem temos que:
    1.1: colocar classe selecionado no personagem para adicionar animação nele
    1.2: retirar classe selecionado do personagem que está selecionado

2: quando passar o mouse em cima do personagem trocar a imagem e nome do personagem grande
    2.1: alterar imagem do jogador 1
    2.2: alterar o nome do jogador 1

*/

const personagens = document.querySelectorAll('.personagem');

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {
        const idSelecionado = personagem.attributes.id.value;

        if(idSelecionado === 'ultron') return;

        const personagemSelecionado = document.querySelector('.selecionado');
        personagemSelecionado.classList.remove('selecionado');

        personagem.classList.add('selecionado');

        const imagemJogador1 = document.getElementById('personagem-jogador-1');
        imagemJogador1.src = `./src/imagens/${idSelecionado}.png`;

        const nomeJogador1 = document.getElementById('nome-jogador-1');
        nomeJogador1.innerHTML = personagem.getAttribute('data-name');
        
    })
})