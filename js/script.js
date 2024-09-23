const player = document.querySelector('.player');
const crate = document.querySelector('.crate');
const clouds = document.querySelector('.clouds');
let isJumping = false; // verificar se o jogador está no ar

const jump = () => {
    if (!isJumping) { // Se o jogador não estiver no ar
        isJumping = true; // Define como no ar
        player.classList.add('jump'); // Adiciona a classe de salto

        // Remover a classe 'jump' após o tempo do salto e permitir novo salto
        setTimeout(() => {
            player.classList.remove('jump'); // Remove a classe 'jump' após o salto
            isJumping = false; // Permite que o jogador salte novamente
        }, 500); // Ajuste o tempo de acordo com a duração do salto (em ms)
    }
}

const loop = setInterval(() => {

    const cratePosition = crate.offsetLeft;
    const playerPosition = +window.getComputedStyle(player).bottom.replace('px', '');
    const cloudsPosition = clouds.offsetLeft;
    
    if(cratePosition <= 110 && cratePosition > 0 && playerPosition < 80) {

        crate.style.animation = 'none'
        crate.style.left = `${cratePosition}px`
         
        player.style.animation = 'none'
        player.style.bottom = `${playerPosition}px`

        clouds.style.animation = 'none'
        clouds.style.left = `${cloudsPosition}px`

        player.src = './sprites/player/dead.png'
           player.style.bottom = `${playerPosition}px`
           player.style.left = '-25px '


        
       
    
        clearInterval(loop)
    }

}, 10)

document.addEventListener('keydown', (event) => {
    if (event.key === ' ' || event.key === 'w') { // Verifica se a tecla pressionada foi espaço ou 'w'
        jump(); // Chama a função de salto
    }
});
