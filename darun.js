let img_darun = document.querySelector('.img_darun');
let btns = document.querySelectorAll('button');

let images = {
    natural: './img/natural.png',
    white: './img/white.png',
    black: './img/black.png'
};

btns.forEach(btn => {
    btn.onclick = () => {
        let key = btn.innerText
        img_darun.style.backgroundImage = `url(${images[key]})`
    }
})

