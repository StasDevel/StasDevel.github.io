`use strict`


let pictures = document.querySelector(`.pictures`);
let slideWindow = document.querySelector(`.cont.example .descText`);
let buttonL = document.querySelector(`.button.Left` );
let buttonR = document.querySelector(`.button.Right`);
let examplesWork = document.querySelectorAll(`.examplesWork`);
let width = examplesWork[0].width;


let offSet = 0;

buttonL.addEventListener(`click`, function func() {    
    if (offSet != 0) {
        offSet +=width
        pictures.style.left =  offSet + `px`;
    }  
});



buttonR.addEventListener(`click`, function funcc() { 
    if (offSet != -width) {
        offSet -=width
        pictures.style.left =  offSet + `px`;
    }    
});


let modalWindow = document.querySelector(`.modal`);
let buttonClose = document.querySelector(`.modalDialog__button`);

let timerModaWindow = setTimeout (() => {
    modalWindow.classList.add(`show`);
    document.body.style.overflow = `hidden`; 
}, 2000);

modalWindow.addEventListener (`click`, (e) => {
    if (e.target == buttonClose) {
        modalWindow.classList.remove(`show`);
        document.body.style.overflow = `visible`; 
    }
});