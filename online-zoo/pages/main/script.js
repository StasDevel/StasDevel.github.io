`use strict`


// Затемнение заднего фона при нажатии на бургер

let brugerButton = document.querySelector(`.burger-menu`);
let darkBackcolor = document.querySelector(`.darkBackcolor`);
let headerContainer2 = document.querySelector(`.headerContainer2`);
let x_icon2 = document.querySelector(`.x_icon2`);

if (document.body.clientWidth <= 640) {
    

    brugerButton.addEventListener(`click`, function () {
        headerContainer2.style.top = `0`;
        darkBackcolor.classList.toggle(`none`);
        
    });
    
    x_icon2.addEventListener(`click`, function () {
        headerContainer2.style.top = `-329px`;
        darkBackcolor.classList.toggle(`none`);
        
    });
    
    darkBackcolor.addEventListener(`click`, function () {
        darkBackcolor.classList.toggle(`none`);
        headerContainer2.style.top = `-329px`;
    });
} 

// Слайд карточек на 1600/////////////////////////////////////////////////////////

let arrow1 = document.querySelector(`.arrow1`);
let arrow2 = document.querySelector(`.arrow2`);
let list1 = document.querySelector(`.list1`);
let list2 = document.querySelector(`.list2`);
let card1 = document.querySelector(`.card1`);
let card2 = document.querySelector(`.card2`);
let card3 = document.querySelector(`.card3`);
let card4 = document.querySelector(`.card4`);
let card5 = document.querySelector(`.card5`);
let card6 = document.querySelector(`.card6`);
let arrows = document.querySelector(`.arrows`);
let relsa = document.querySelector(`.relsa`);
let relsa2 = document.querySelector(`.relsa2`);

let arr0 = [card1, card2, card3,card4, card5, card6];

    let offSet = 0;//1

    function addEl () {


    /// Создается случайные массивы с картинками
        let arr = [];
        for (let el of arr0) {
            arr.push(el.cloneNode(true));
        }


        let arr3 = [];
        let arr4 = [];

        if (document.body.clientWidth <= 960) {
            for(let i = 0; i < 2; i++) {
                function getRandomInt(min, max) {
                return Math.floor(Math.random() * (max - min + 1)) + min;
                }
                arr3.push(arr.splice(getRandomInt(0, 5-i), 1)[0]);
            }
        
            for(let i = 0; i < 2; i++) {
                function getRandomInt(min, max) {
                return Math.floor(Math.random() * (max - min + 1)) + min;
                }
                arr4.push(arr.splice(getRandomInt(0, 2-i), 1)[0]);
            }
        } else {
            for(let i = 0; i < 3; i++) {
                function getRandomInt(min, max) {
                return Math.floor(Math.random() * (max - min + 1)) + min;
                }
                arr3.push(arr.splice(getRandomInt(0, 5-i), 1)[0]);
            }
        
            for(let i = 0; i < 3; i++) {
                function getRandomInt(min, max) {
                return Math.floor(Math.random() * (max - min + 1)) + min;
                }
                arr4.push(arr.splice(getRandomInt(0, 2-i), 1)[0]);
            }
        }

        //Создается дополнительный элемент с картинками в конце

        let ell =  document.createElement(`div`);
        ell.style.display = `flex`;
        ell.style.position = `absolute`;
        ell.style.transitionDuration = `3s`;
        ell.style.left = `1160px`;
        ell.className = `zh` + offSet;
        
        let ellу =  document.createElement(`div`);
        ellу.style.display = `flex`;
        ellу.style.position = `absolute`;
        ellу.style.transitionDuration = `3s`;
        ellу.style.left = `1160px`;
        ellу.className = `zh` + offSet;

        

        relsa.append(ell)
        for(let elem of arr3) {
            ell.append(elem);
        }


        relsa2.append(ellу)
        for(let elem of arr4) {
            ellу.append(elem);
        }
        

        function move () {
            relsa.firstElementChild.style.left = `-1160px`;
            relsa.lastElementChild.style.left = `0px`;

            relsa2.firstElementChild.style.left = `-1160px`;
            relsa2.lastElementChild.style.left = `0px`;
            
            
            setTimeout(function () {
                relsa.firstElementChild.remove();
                relsa2.firstElementChild.remove();
            }, 3000);
        }

        setTimeout(move, 1);
       
        offSet++

        //Отвязывается обработчик и потом привязывается

        this.removeEventListener('click', addEl);
        
        function add () {
            arrow1.addEventListener(`click`, addEl);
        };
        setTimeout (add, 3500);


        arrow2.removeEventListener('click', addEl2);
            
            function add2 () {
                arrow2.addEventListener(`click`, addEl2);
            };
            setTimeout (add2, 3500);
        }
            
    arrow1.addEventListener (`click`, addEl);


    function addEl2 () {


        /// Создается случайные массивы с картинками
            let arr = [];
            for (let el of arr0) {
                arr.push(el.cloneNode(true));
            }
    
    
            let arr3 = [];
            let arr4 = [];
    
            if (document.body.clientWidth <= 960) {
                for(let i = 0; i < 2; i++) {
                    function getRandomInt(min, max) {
                    return Math.floor(Math.random() * (max - min + 1)) + min;
                    }
                    arr3.push(arr.splice(getRandomInt(0, 5-i), 1)[0]);
                }
            
                for(let i = 0; i < 2; i++) {
                    function getRandomInt(min, max) {
                    return Math.floor(Math.random() * (max - min + 1)) + min;
                    }
                    arr4.push(arr.splice(getRandomInt(0, 2-i), 1)[0]);
                }
            } else {
                for(let i = 0; i < 3; i++) {
                    function getRandomInt(min, max) {
                    return Math.floor(Math.random() * (max - min + 1)) + min;
                    }
                    arr3.push(arr.splice(getRandomInt(0, 5-i), 1)[0]);
                }
            
                for(let i = 0; i < 3; i++) {
                    function getRandomInt(min, max) {
                    return Math.floor(Math.random() * (max - min + 1)) + min;
                    }
                    arr4.push(arr.splice(getRandomInt(0, 2-i), 1)[0]);
                }
            }
    
            //Создается дополнительный элемент с картинками в конце
    
            let ell =  document.createElement(`div`);
            ell.style.display = `flex`;
            ell.style.position = `absolute`;
            ell.style.transitionDuration = `3s`;
            ell.style.left = `-1160px`;
            ell.className = `zh` + offSet;
            
            let ellу =  document.createElement(`div`);
            ellу.style.display = `flex`;
            ellу.style.position = `absolute`;
            ellу.style.transitionDuration = `3s`;
            ellу.style.left = `-1160px`;
            ellу.className = `zh` + offSet;
    
            
    
            relsa.prepend(ell)
            for(let elem of arr3) {
                ell.append(elem);
            }
    
    
            relsa2.prepend(ellу)
            for(let elem of arr4) {
                ellу.append(elem);
            }
            
    
            function move () {
                relsa.lastElementChild.style.left = `1160px`;
                relsa.firstElementChild.style.left = `0px`;
    
                relsa2.lastElementChild.style.left = `1160px`;
                relsa2.firstElementChild.style.left = `0px`;
                
                
                setTimeout(function () {
                    relsa.lastElementChild.remove();
                    relsa2.lastElementChild.remove();
                }, 3000);
            }
    
            setTimeout(move, 1);
           
            offSet++
    
            //Отвязывается обработчик и потом привязывается
    
            this.removeEventListener('click', addEl2);
            
            function add2 () {
                arrow2.addEventListener(`click`, addEl2);
            };
            setTimeout (add2, 3500);


            arrow1.removeEventListener('click', addEl);
        
            function add () {
                arrow1.addEventListener(`click`, addEl);
            };
            setTimeout (add, 3500);
    
            }
                
        arrow2.addEventListener (`click`, addEl2);








   






///////////////////////////////////////////////////////////////////

let relsa3 = document.querySelector(`.relsa3`);
let progress = document.querySelector(`.styled-slider`);

let feedbackArr = document.querySelectorAll(`.feedback`);
let arr123 = [];

for(let elem of feedbackArr) {
    for(let i = 0; i <2; i++) {
        arr123.push(elem.cloneNode(true));
    }
    
};



function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}




progress.value = 0;

if (document.body.clientWidth > 1500) {
    progress.addEventListener(`input`, function() {
        
        let arr = [`0`, `-297px`, `-592px`, `-888px`, `-1184px`, `-1480px`, `-1780px`, `-2075px`]
        
        relsa3.style.left = arr[progress.value];
        if(relsa3.children.length != 11) {
            relsa3.append(arr123.splice(arr123[getRandomInt(0, arr123.length-1)], 1)[0]);
        }
        
    });
} else if (document.body.clientWidth <= 1000) {
    progress.max = `8`;
    progress.addEventListener(`input`, function() {
        
        let arr = [`0`, `-285px`, `-592px`, `-888px`, `-1184px`, `-1485px`, `-1785px`, `-2080px`, `-2374px`]
        
        relsa3.style.left = arr[progress.value];

        

        if(relsa3.children.length != 12) {
            relsa3.append(arr123.splice(arr123[getRandomInt(0, arr123.length-1)], 1)[0]);
        }
    });
}


/////////////////////////////////////////////////////////////////

let feedback  = document.querySelectorAll(`.feedback`);
let smallComment = document.querySelectorAll(`.smallComment `);
let x_iconComment =document.querySelectorAll(`.x_iconComment`);
let darkBack2  = document.querySelector(`.darkBack2`);
if (document.body.clientWidth >= 890) {

for(let i = 0; i <= 2; i++) {
    feedback[i].addEventListener(`click`, function () {
        darkBack2.classList.toggle(`none`);
        smallComment[i].classList.toggle(`none`);

        x_iconComment[i].addEventListener (`click`, function () {
            darkBack2.classList.add(`none`);
            smallComment[i].classList.add(`none`);
        });

        darkBack2.addEventListener (`click`, function () {
            darkBack2.classList.add(`none`);
            smallComment[i].classList.add(`none`);
        });
    })
}
};