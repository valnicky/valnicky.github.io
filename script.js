init();

function init() {
    const changelightbleu = document.querySelector('.light-bleu.square');
    const changedarkbleu = document.querySelector('.dark-bleu.square');
    const changereddark = document.querySelector('.red-dark.square');
    const changegreen = document.querySelector('.green.square');

    const lightbleu = "#02b3e4";
    const darkbleu = "#2d3c49";
    const reddark = "#b3311c";
    const green = "#235300";
    const selecttexth1 = document.querySelector('.container .header .texto h1');
    const selecttexth2 = document.querySelector('.container .header .texto h2');
    const selecthr = document.querySelector('.container .container__center .container2 hr');
    const borderimg = document.querySelector('.header__img img');

    changelightbleu.addEventListener('click', () => { changecolor(lightbleu) });
    changedarkbleu.addEventListener('click', () => { changecolor(darkbleu) });
    changereddark.addEventListener('click', () => { changecolor(reddark) });
    changegreen.addEventListener('click', () => { changecolor(green) });

    function changecolor(color) {

        selecttexth1.style.color = color;
        selecttexth2.style.color = color;
        selecthr.style.backgroundColor = color;
        borderimg.style.border = '4px solid' + color;
        // console.log(color);
    }




}