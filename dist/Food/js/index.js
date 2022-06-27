"use strict";

window.addEventListener('DOMContentLoaded', () => {

    //Tabs

    const tabContent = document.querySelectorAll('.tabcontent'),
          tabHeaderItem = document.querySelectorAll('.tabheader__item'),
          tabHeaderItems = document.querySelector('.tabheader__items')
          ;
          

    function tabContenHide() {
        tabContent.forEach((item) => {
            item.style.display = "none";
        });

        tabHeaderItem.forEach((item) => {
            item.classList.remove("tabheader__item_active");
        });
    }


    function tabContenShow(i=0) {
        tabContent[i].style.display = "block";
        tabHeaderItem[i].classList.add("tabheader__item_active");

    }
    tabContenHide();
    tabContenShow();
    
    tabHeaderItem.forEach((item, key)=> {
        item.addEventListener('click', (event) => {
            tabContenHide();
            tabContenShow(key);
        });
    });

    //Timer

    
    const endTime =  Date.parse('2022-03-10');

    function timer(endTime) {
  
        const startTime = Date.parse(new Date());
        const total = endTime-startTime;

        if(total <= 0) {
            return {
                "total": 0,
                "days": 0,
                "hours": 0,
                "minutes": 0,
                "seconds": 0
            };
        }

        let days = Math.round(total / (24*60*60*1000)),
            hours = Math.round((total / (60*60*1000) ) % 24 ),
            minutes = Math.round((total / (60*1000)) % 60),
            seconds = Math.round((total / (1000)) % 60);

        return {
            "total": total,
            "days": days,
            "hours": hours,
            "minutes": minutes,
            "seconds": seconds
        };
    }

    function getZero(num) {
        if( num && num < 10) {
            return "0" + num;
        }else {
            return num;
        }
    }


    function updateDateElements() {
        const days = document.getElementById("days"),
              hours = document.getElementById("hours"),
              minutes = document.getElementById("minutes"),
              seconds = document.getElementById("seconds");

        let t = timer(endTime);
       
        days.innerHTML = getZero(t.days);
        hours.innerHTML = getZero(t.hours);
        minutes.innerHTML = getZero(t.minutes);
        seconds.innerHTML = getZero(t.seconds);
    }

    updateDateElements();

    const timeInerval = setInterval(updateDateElements, 1000);


    //Modal window

    const btns = document.querySelectorAll(".btn_modal"),
          modalClose = document.querySelector(".modal__close"),
          modal = document.querySelector(".modal");


    btns.forEach((item, key)=> {
        item.addEventListener("click", ()=> {
            modal.style.display = "block";
        });
    });

    modalClose.addEventListener("click", ()=> {
        modal.style.display = "none";
    });


      ///Menu items

      const menuItemsBlock = document.getElementById('menu__items'); 

      class MenuItems {
          constructor(img, title, descr, total) {
              this.img = img;
              this.title = title;
              this.descr = descr;
              this.total = total;
          }
  
          filling(block) {
              const div = document.createElement('div');
              div.classList.add('menu__item');
              div.innerHTML = `<img src="${this.img}" alt="Image">
              <h3 class="menu__item-subtitle">${this.title}</h3>
              <div class="menu__item-descr">${this.descr}</div>
              <div class="menu__item-divider"></div>
              <div class="menu__item-price">
                  <div class="menu__item-cost">Цена:</div>
                  <div class="menu__item-total"><span>${this.total}</span> грн/день</div>
              </div>
              `;
              block.append(div);
          }
      }
    
      //Заполняем items с помощью запросов на json
    //   const getResource = async (url) => {
    //     const res = await fetch(url);

    //     if (!res.ok) { // Обработка ошибок 404 505  и тд
    //         throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    //     }

    //     return await res.json();
    //   };
    //   getResource('http://localhost:3000/menu')
    //   .then(data => {
    //     data.forEach(({img,  title, descr, price}) => {
    //         new MenuItems(img,  title, descr, price).filling(menuItemsBlock);
    //     });
    //   } );
  
  
    //   const fitnes = new MenuItems('img/tabs/vegy.jpg', 'Меню "Фитнес"',
    //   'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов.Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
    //   '229');
  
    //   const premium = new MenuItems('img/tabs/elite.jpg', 'Меню “Премиум”',
    //   'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
    //   '550');
  
    //   const lean = new MenuItems('img/tabs/post.jpg', 'Меню "Постное"',
    //   'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
    //   '430');
  
  
    //    fitnes.filling(menuItemsBlock);
    //    premium.filling(menuItemsBlock);
    //    lean.filling(menuItemsBlock);
    
  
    //   //Forms  Записываем данные с формы на json файл
    //    const forms = document.querySelectorAll('form');

    //    forms.forEach(item => {
    //        postData(item);
    //    });

    //    const bindPostData = async (url, data) => {
    //        const res = await fetch(url, {
    //         method: 'POST',
    //         headers: {
    //             'Content-type': 'application/json'
    //         },
    //         body: data
    //        });

    //        return await res.json();
    //    };
   
    //    function postData(form) {
    //        form.addEventListener('submit', (e) => {
    //            e.preventDefault();
           
    //            const formData = new FormData(form);
     
    //            const object = {};
    //            formData.forEach(function(value, key){
    //                object[key] = value;
    //            });

    //            //const json = JSON.stringify(Object.fromEntries(formData.entries())); //Превращаем массив массивов, после в объект после в json

    //            bindPostData('http://localhost:3000/requests', JSON.stringify(object))
    //            .then(data => {
    //                console.log(data);
    //            }).catch(() => {
    //                 console.log("Error");
    //            }).finally(() => {
    //                form.reset();
    //            });
    //        });
    //    }

    //Slider

    const sliderWrapper = document.querySelector('.offer__slider-wrapper'),
          width = window.getComputedStyle(sliderWrapper).width,
          slider = document.querySelector('.offer__slider'),
          sliderInner = document.querySelector('.offer__slider-inner'),
          slides = document.querySelectorAll('.offer__slide'),
          btnPrev = document.querySelector('.offer__slider-prev'),
          btnNext = document.querySelector('.offer__slider-next'),
          current = document.getElementById('current'),
          total = document.getElementById('total');


    let  offset = 0,
         index = 1;        
         
    
    function updateValueSlides(value, element) {
        if (value < 10) {
            element.innerText = `0${value}`;
        } else {
            element.innerText = value;
        }
    }

    updateValueSlides(index, current);
    updateValueSlides(slides.length, total);

    sliderWrapper.style.overflow = 'hidden';
    sliderInner.style.display = "flex";
    sliderInner.style.width = 100*slides.length + "%";
    sliderInner.style.transition = '0.5s all';
  

    slides.forEach(item => {
        item.style.width = width;
    });

    slider.style.position = 'relative';

    const indicators = document.createElement('ol'),
          dots =[];

    indicators.classList.add('carousel-indicators');
    indicators.style.cssText = `
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 15;
        display: flex;
        justify-content: center;
        margin-right: 15%;
        margin-left: 15%;
        list-style: none;`;

    slider.append(indicators);

    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li');
        dot.style.cssText = `
            box-sizing: content-box;
            flex: 0 1 auto;
            width: 30px;
            height: 6px;
            margin-right: 3px;
            margin-left: 3px;
            cursor: pointer;
            background-color: #fff;
            background-clip: padding-box;
            border-top: 10px solid transparent;
            border-bottom: 10px solid transparent;
            opacity: .5;
            transition: opacity .6s ease;
        `;
        indicators.append(dot);
        
        dots.push(dot);
    }

    function updateValuesDots(n) {
        dots.forEach((item, key)=> {
            if(key+1 == n) {
                item.style.opacity = "1";
            } else {
                item.style.opacity = "0.5";
            }
        });
    }

    updateValuesDots(index);

   
    dots.forEach((item, key)=> {
        item.addEventListener('click', (e)=> {
            offset = (+width.slice(0, width.length-2)*(key));
            index = key+1;

            sliderInner.style.transform = `translateX(-${offset}px)`;

            updateValueSlides(index, current);
            updateValuesDots(index);
            console.log(offset);
        });
    });
    
    btnNext.addEventListener('click', () => {
        if(offset == (+width.slice(0, width.length-2)*(slides.length-1))) {
            offset = 0;
            index = 1;
        } else {
            offset += +width.slice(0, width.length-2);
            index++;
        }
   
        sliderInner.style.transform = `translateX(-${offset}px)`;
        
        updateValueSlides(index, current);
        updateValuesDots(index);
    });

    
    btnPrev.addEventListener('click', () => {
        if(offset == 0) {
            offset = (+width.slice(0, width.length-2)*(slides.length-1));
            index = slides.length;
        } else {
            offset -= +width.slice(0, width.length-2);
            index--;
        }
        console.log((+width.slice(0, width.length-2)*slides.length));
        console.log(offset);
        sliderInner.style.transform = `translateX(-${offset}px)`;

        updateValueSlides(index, current);
        updateValuesDots(index);
    });


    //Calculate

    const man = document.getElementById('man'),
          woman = document.getElementById("woman"),
          activity = document.querySelectorAll('.calculating__choose_big div'),
          result = document.querySelector('.calculating__result span');


    let height, weight, age, ratio;

    activity.forEach(elem => {
        let elemId = elem.getAttribute('id');

        if (localStorage.getItem("active") === elemId) {
            elem.classList.add('calculating__choose-item_active');
            localStorage.setItem("active", elemId);
            ratio = +elem.getAttribute('data-ratio');
        }
    });


    function updateSex(sex) {
        let elemId = sex.getAttribute('id');
        if (localStorage.getItem('sex') === elemId) {
            sex.classList.add('calculating__choose-item_active');
        }
    }
    
    updateSex(man);
    updateSex(woman);

    man.addEventListener('click', (e) => {
        localStorage.setItem('sex', 'man');
        
       man.classList.add('calculating__choose-item_active');
       woman.classList.remove('calculating__choose-item_active');
       updateResult();  
    });
    woman.addEventListener('click', (e) => {
        localStorage.setItem('sex', 'woman');
         
        woman.classList.add('calculating__choose-item_active');
        man.classList.remove('calculating__choose-item_active');
        updateResult()  ;
     });

     

     activity.forEach((item, key)=> {
        item.addEventListener('click', (e)=> {

            activity.forEach(elem => {
                elem.classList.remove('calculating__choose-item_active');
            });

            let elemId = e.target.getAttribute('id');
            localStorage.setItem("active", elemId);
            item.classList.add('calculating__choose-item_active');
            ratio = +item.getAttribute('data-ratio');
            updateResult();
        });
     });

     function getDynamicInformation(selector) {
        const input = document.querySelector(selector);
        input.addEventListener('input', () => {
            switch(input.getAttribute('id')) {
                case 'height':
                    height = +input.value;
                    break;
                case 'weight':
                    weight = +input.value;
                    break;
                case 'age':
                    age = +input.value;
                    break;
            }
            updateResult();
        })
     }
     getDynamicInformation('#height');
     getDynamicInformation('#weight');
     getDynamicInformation('#age');

     function updateResult() {
         let sex = localStorage.getItem('sex'),
             active  = localStorage.getItem('active');
             console.log(ratio)

             console.log("height " + height + " weight" + weight + " age" + age + " sex" + sex + " active" + active  )
         if (!height || !weight || !age || !sex || !active) {
             result.innerText = "____"
             return;
         }
       
         if (sex === 'woman') {
             result.innerText = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio)
         } else {
            result.innerText = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);
         }
     }
     updateResult();

});

