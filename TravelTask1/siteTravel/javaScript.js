
 let offSet = 0;   
    let slider = document.querySelector(`.slider`);
    let radioAll = document.querySelectorAll('input[type="radio"]');

// Движение менюшки от бургера

let burgerButton = document.querySelector(`#burger`);
let burger_menu = document.querySelector(`.burger_menu`);
let backColor_burger = document.querySelector(`.backColor_burger`);
let buttons_burger_menu = document.querySelectorAll(`.button_Mob_ver`);

for (let elem of buttons_burger_menu) {
    elem.addEventListener(`click`, function () {
        offSet = -165;
        burger_menu.style.right = offSet + `px`;
        backColor_burger.classList.toggle (`none`);
    })
}

backColor_burger.addEventListener(`click`, function () {
    offSet = -165;
    burger_menu.style.right = offSet + `px`;
    backColor_burger.classList.toggle (`none`);
});


burgerButton.addEventListener(`click`, function () {
    
    if (burgerButton.checked === true) {
        offSet = 0;
        burger_menu.style.right = offSet + `px`;
        backColor_burger.classList.toggle (`none`);
    }

    
});

let closeBurgerButton = document.querySelector(`.closeBurger`);

closeBurgerButton.addEventListener(`click`, function () {
    offSet = -165;
    burger_menu.style.right = offSet + `px`;
    backColor_burger.classList.toggle (`none`);
})


// Слайдер для версии Desktop

    // 1 Движение по нажатию на картинки

let slideSingle = document.querySelectorAll('.slide-single');
let slideSingleArr = [];

for (let el of slideSingle) {
    slideSingleArr.push(el);
} 
    
    slideSingleArr[0].addEventListener (`click`, function(){
        arrRadioAll[0].nextElementSibling.className = `spanRadioOn1`;
        arrRadioAll[1].nextElementSibling.className = `spanRadio`;
        arrRadioAll[2].nextElementSibling.className = `spanRadio`;
        offSet = 60;
        slider.style.left = offSet + `%`;
    });

    slideSingleArr[1].addEventListener (`click`, function(){
        arrRadioAll[0].nextElementSibling.className = `spanRadio`;
        arrRadioAll[1].nextElementSibling.className = `spanRadioOn1`;
        arrRadioAll[2].nextElementSibling.className = `spanRadio`;
        offSet = 0;
        slider.style.left = offSet + `%`;
    });

    slideSingleArr[2].addEventListener (`click`, function(){
        arrRadioAll[0].nextElementSibling.className = `spanRadio`;
        arrRadioAll[1].nextElementSibling.className = `spanRadio`;
        arrRadioAll[2].nextElementSibling.className = `spanRadioOn1`;
        offSet = -60;
        slider.style.left = offSet + `%`;
    });




    // 2 Движение по нажатию на шарики



let arrRadioAll = [];


for (let elem of radioAll) {
    arrRadioAll.push(elem);
}

for (let i = 0; i < arrRadioAll.length; i++) {
    if (arrRadioAll[i].checked === true) {
        arrRadioAll[i].nextElementSibling.className = `spanRadioOn1`;
    }
    

    arrRadioAll[i].addEventListener (`click`, function(){
        if (arrRadioAll[i].checked === true) {
            arrRadioAll[i].nextElementSibling.className = `spanRadioOn1`;}
            for (let j = 0; j < arrRadioAll.length; j++) {
                if (arrRadioAll[j].checked === false) {
                    arrRadioAll[j].nextElementSibling.className = `spanRadio`;
            }
        }    
    })   
    
    arrRadioAll[i].addEventListener (`click`, function () {
        if (arrRadioAll[i].checked == true && arrRadioAll[i].id == `radiom_elem1`) {
            offSet = 60;
            slider.style.left = offSet + `%`;
        } else if (arrRadioAll[i].checked == true && arrRadioAll[i].id == `radiom_elem2`) {
            offSet = 0;
            slider.style.left = offSet + `%`;
        } else if (arrRadioAll[i].checked == true && arrRadioAll[i].id == `radiom_elem3`) {
            offSet = -60;
            slider.style.left = offSet + `%`;
        }
    }
    )

   
}


// Движение слайдера для мобилки

let buttonRight = document.querySelector('.btScrollR');
let buttonLeft = document.querySelector('.btScrollL');
let path1 = document.querySelector('.pow1');
let path2 = document.querySelector('.pow2');



    if (screen.width < 421) {
    let offSet = 100.5;

    


    arrRadioAll[0].checked = true;
    arrRadioAll[1].checked = false;
    arrRadioAll[0].nextElementSibling.className = `spanRadioOn1`;
    arrRadioAll[1].nextElementSibling.className = `spanRadio`;

    let counter = 0;

    buttonRight.addEventListener (`click`, function () {
        if (offSet == 100.5) {
            path1.id = `poww1`;
            path2.id = `poww1`;
        } else if (offSet == 0) {
            path1.id = `poww1`;
            path2.id = `poww2`;
  
        };   
        
            
            if (offSet != -100.5){
                arrRadioAll[counter +1].nextElementSibling.className = `spanRadioOn1`;
                arrRadioAll[counter].nextElementSibling.className = `spanRadio`;
                counter += 1;
                
                offSet = offSet - 100.5;
                slider.style.left = offSet + `%`; 
               return 
            }

            
        })

    buttonLeft.addEventListener (`click`, function () {
         if (offSet == 0) {
            path1.id = `poww2`;
            path2.id = `poww1`;
  
        }   else if (offSet == -100.5) {
            path1.id = `poww1`;
            path2.id = `poww1`;
            
        }
            
            if (offSet != 100.5){
                arrRadioAll[counter - 1].nextElementSibling.className = `spanRadioOn1`;
                arrRadioAll[counter].nextElementSibling.className = `spanRadio`;
                counter -= 1;
                offSet = offSet + 100.5;
                slider.style.left = offSet + `%`; 
            return 
            
            }     
            
        })    

        for (let i = 0; i < arrRadioAll.length; i++) {
        slider.style.left = offSet + `%`;
       
        arrRadioAll[i].addEventListener (`click`, function () {
            if (arrRadioAll[i].checked == true && arrRadioAll[i].id == `radiom_elem1`) {
                slider.style.left = 100.5 + `%`;
                path1.id = `poww2`;
                path2.id = `poww1`;
            } else if (arrRadioAll[i].checked == true && arrRadioAll[i].id == `radiom_elem2`) {
            slider.style.left = 0 + `%`;
                path1.id = `poww1`;
                path2.id = `poww1`;
            } else if (arrRadioAll[i].checked == true && arrRadioAll[i].id == `radiom_elem3`) {
                path1.id = `poww1`;
                path2.id = `poww2`;
            slider.style.left = -100.5 + `%`;
            }
        });
        }
    }

    // Появление и закрытие панельки для логина Desktop
    let popUp2 = document.querySelector(`.popUp2`);
    let popUp = document.querySelector(`.popUp`);
    let logIn = document.querySelector(`.login`);
    let backColor_login = document.querySelector(`.backColor_login`);

    logIn.addEventListener (`click`, function () {
        popUp.classList.toggle(`Show`);
        backColor_login.classList.toggle (`none`);
    });

    backColor_login.addEventListener(`click`, function() {
        popUp.classList.toggle (`Show`);
        popUp.classList.remove (`none`);
        backColor_login.classList.toggle (`none`);
        popUp2.classList.remove (`Show2`);
    });

    // Появление и закрытие панельки для логина мобилки
    
    let burgerButtons = document.querySelectorAll(`.button_Mob_ver`);
    
    burgerButtons[4].addEventListener(`click`, function () {
        popUp.classList.toggle (`Show`);
        backColor_burger.classList.toggle (`none`);
    })
    
    backColor_burger.addEventListener(`click`, function () {
        popUp.classList.toggle (`Show`);
        popUp2.classList.remove (`Show2`);
    })

    // Вывод алертом почты и пароля

    let passwordInput = document.querySelector(`.passwordInput`);
    let emailInput = document.querySelector(`.emailInput`);
    let buttonPop = document.querySelector(`.buttonPop`);

    buttonPop.addEventListener (`click`, function () {
        
    alert (`Ваша почта: ${emailInput.value} 
    Ваш пароль:${passwordInput.value} `);
    popUp.classList.toggle (`Show`);
    if (screen.width >= 421) {
        backColor_login.classList.toggle (`none`);
    };
    if (screen.width < 421) {
        backColor_burger.classList.toggle (`none`);
    };
    emailInput.value = ``; 
    passwordInput.value = ``; 
    
    })


    // Смена окна регистрации на окно входа

    let registerLink = document.querySelector(`.registerLink`);
    
 
    

    registerLink.addEventListener (`click`, function () {
            popUp.classList.toggle (`none`);
            popUp2.classList.toggle (`Show2`);
        
        
    });

    // Смена окна входа на окно регистрации

    let registerLink2 = document.querySelector(`.registerLink2`);
    

    registerLink2.addEventListener (`click`, function () {
        popUp.classList.toggle (`none`);
        popUp2.classList.toggle (`Show2`);
    });