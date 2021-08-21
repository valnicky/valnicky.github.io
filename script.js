init();

function init() {
    const changelightbleu = document.querySelector('.light-bleu.square');
    const changedarkbleu = document.querySelector('.dark-bleu.square');
    const changebleugris = document.querySelector('.bleugris.square');
    const changegreen = document.querySelector('.green.square');


    const lightbleu = "#02b3e4";
    const darkbleu = "#2d3c49";
    const bleugris = "#7d97ad";
    const green = "#235300";
    const selecttexth1 = document.querySelector('.container .header .texto h1');
    const selecttexth3 = document.querySelector('.container .header .texto h3');
    const selecthr = document.querySelector('.container .container__center .container2 hr');
    const borderimg = document.querySelector('.header__img img');

    changelightbleu.addEventListener('click', () => { changecolor(lightbleu) });
    changedarkbleu.addEventListener('click', () => { changecolor(darkbleu) });
    changebleugris.addEventListener('click', () => { changecolor(bleugris) });
    changegreen.addEventListener('click', () => { changecolor(green) });

    function changecolor(color) {

        selecttexth1.style.color = color;
        selecttexth3.style.color = color;
        selecthr.style.backgroundColor = color;
        borderimg.style.border = '4px solid' + color;
        // console.log(color);
    }




}