// index.js
const btnYes = document.getElementById('btnYes')
const btnNo = document.getElementById('btnNo')

btnNo.addEventListener('click', () => {
    let buttonWidth = btnNo.offsetWidth;
    let buttonHeight = btnNo.offsetHeight;
    
    let maxX = window.innerWidth - buttonWidth;
    let maxY = window.innerHeight - buttonHeight;

    let randomX = Math.floor(Math.random() * maxX);
    let randomY = Math.floor(Math.random() * maxY);

    document.getElementById('btnNo').style.top = randomY + 'px';
    document.getElementById('btnNo').style.left = randomX + 'px';
});

btnYes.addEventListener('click', () => {
    // Получаем ссылку на изображение
    const img = document.querySelector('.second-gif-wrapper img');
    const titleChange = document.querySelector('.title_game')
    titleChange.innerHTML = 'Я тебя люблю'
    
    
    // Меняем путь к изображению
    img.src = 'https://tenor.com/ru/view/tkthao219-bubududu-panda-gif-22639190.gif';
    btnYes.style.display = 'none';
    btnNo.style.display = 'none'
});