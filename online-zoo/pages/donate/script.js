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



let arrRadio = document.querySelectorAll(`.radionLine`);
let arrLabel = document.querySelectorAll(`label`);
let color1 = `#FE9013`;
let color2 = `#333B41`;
let inputMoney = document.querySelector(`.inputMoney`);



inputMoney.addEventListener(`focus`, function() {
    for(let elem of arrRadio) {
        elem.checked = false;
            for(let el of arrLabel) {
                    el.style.color = color2;
            }
        } 
})


inputMoney.addEventListener(`input`, function() {
    for(let elem of arrRadio) {
        elem.checked = false;
            for(let el of arrLabel) {
                    el.style.color = color2;
            }
        } 
    for(let elem of arrRadio) {
        
        if(inputMoney.value == elem.value) {
            elem.checked = true;
            for(let el of arrLabel) {
                if (elem.checked && el.className == elem.id) {
                    el.style.color = color1;
                }
                    if (elem.checked && el.className == elem.id) {
                        el.style.color = color1;
                } else {
                    el.style.color = color2;
                }
            }
        } 
            
        
    }
})


for(let elem of arrRadio) {
    elem.addEventListener(`click`, function() {
        if (elem.checked) {
            inputMoney.value = elem.value
        }
    })
    
}





for(let elem of arrRadio) {
    
    for(let el of arrLabel) {
        if (elem.checked && el.className == elem.id) {
            el.style.color = color1;
    }
        elem.addEventListener (`click`, function (){
            if (elem.checked && el.className == elem.id) {
                el.style.color = color1;
        } else {
            el.style.color = color2;
        }
        })
    }
};



let elem = document.querySelector(`.inputMoney`);

function numberLimitation (inp, limit) {
    var t = typeof inp === "string" ? document.querySelector (inp) : inp,
    f = function (e) {
        var v = t.value.split ("");
        if (v.length > limit) {
              t.value = v.slice(0, limit).join("");
        }
    };
    t.addEventListener ("input", f);
}
window.addEventListener ("load", function () {
  numberLimitation ("#inp", 5);
});

numberLimitation(elem,4);