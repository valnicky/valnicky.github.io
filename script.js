init();




function init() {
    const changelightbleu = document.querySelector('.light-bleu.square');
    const changedarkbleu = document.querySelector('.dark-bleu.square');
    const changebleu = document.querySelector('.bleu.square');
    const lightbleu = "#02b3e4";
    const darkbleu = "#2d3c49";
    const bleugris = "#7d97ad";

    const selecttexth1 = document.querySelector('.container .header .texto h1');
    const selecttexth3 = document.querySelector('.container .header .texto h3');
    const selecthr = document.querySelector('.container .main hr');

    changelightbleu.addEventListener('click', () => { changecolor(lightbleu) });
    changedarkbleu.addEventListener('click', () => { changecolor(darkbleu) });
    changebleu.addEventListener('click', () => { changecolor(bleugris) });

    function changecolor(color) {

        selecttexth1.style.color = color;
        selecttexth3.style.color = color;
        selecthr.style.backgroundColor = color;
        console.log(color);
    }




}