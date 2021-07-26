// When you click the hamburger, a menu appears. When you click the cross, the menu closes
const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close'),
      contactsBtn = document.querySelector('.contacts__btn');

hamburger.addEventListener('click', () => {
    menu.classList.add('menu_active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('menu_active');
});

// Automatic adjustment of the counter
const counters = document.querySelectorAll('.skills__ratings-counter'),
      lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});

//Validate checkbox, add new class tag "span" in block "privacy"
$(document).ready(function(){
    $('.contacts__btn').on('click', function() {
        if (!($('#checkbox').is(':checked'))){
            $('#contacts__policy-span').addClass("contacts__policy-error");
        } else {
            $('#contacts__policy-span').removeClass("contacts__policy-error");
        }
    });
    //Function with validation form
    function formValidate (form) {
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                email: {
                    required: true,
                    email: true
                },
                checkbox: {
                    required: true
                },
                text: {
                    required: true,
                }
            },
            messages: {
                name: {
                    required: "Пожалуйста, введите ваше имя!",
                    minlength: jQuery.validator.format("Кол-во символов должно быть больше  {0}!")
                  },
                email: {
                    required: "Пожалуйста, введите адрес вашего почтового ящика!",
                    email: "Почтовый адрес введён не правильно"
                },
                checkbox: {
                    required: ""
                },
                text: {
                    required: "Пожалуйста, напишите сообщение!",
                    minlength: jQuery.validator.format("Кол-во символов должно быть больше  {0}!")
                },
              },
            errorClass: "form-error"
        });
    }


    formValidate('#contacts-form');

    $('.modal__close').on('click', function() {
        $('.overlay, #thanks').fadeOut('slow');
    });

    //Mailer
    $('form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('.overlay, #thanks').fadeIn('slow');

            $('form').trigger('reset');
        });
        return false;
    });

});