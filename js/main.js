$(function () {
  $('#toggle').click(function () {
    $('.nav__menu').addClass('show-menu');
  });
  $('#nav-close,  .nav__link').click(function () {
    $('.nav__menu').removeClass('show-menu');
  });
  function scrollHeader() {
    const header = document.getElementById('header');
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 50) header.classList.add('header-scroll');
    else header.classList.remove('header-scroll');
  }
  window.addEventListener('scroll', scrollHeader);

  $('.slider')
    .slick({
      infinite: true,
      slidesToShow: 1,
      dots: false,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2000,
    })
    .slickAnimation();

  $('.reviews__slider').slick({
    infinite: true,
    slidesToShow: 3,
    dots: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1180,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 808,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
  let toggle = false;
  $('#toggle-btn').click(function () {
    $(this).toggleClass('active');
    $('#toggle-example').slideToggle();
    toggle=!toggle;
    if(toggle){
      $(this).text('Сховати');
    } else{
      $(this).text('Розгорнути');
    }
  });
});

$('#form').submit(function (e) {
  e.preventDefault();
  let first_name = $('#first_name').val();
  let phone = $('#phone').val();
  let nik_telegram = $('#tg').val();

  $('.form__error').remove();

  if (first_name.length <= 2) {
    $('.form__label--name').after(
      '<span class="form__error">Ім\'я має бути більше 2 символів</span>'
    );
  } else {
    let pattern = /^[?!,.а-яА-ЯёЁґєіїҐЄІЇ0-9\s]+$/;
    let validPassword = pattern.test(first_name);
    if (!validPassword) {
      $('.form__label--name').after(
        '<span class="form__error">Тільки кирилиця </span>'
      );
    }
  }

  if (phone.length < 1) {
    $('.form__label--phone').after(
      '<span class="form__error">Введіть номер телефону</span>'
    );
  }

  if (nik_telegram.length < 1) {
    $('.form__label--tg').after(
      '<span class="form__error">Введіть нік телеграм</span>'
    );
  }


  setTimeout(() => {
    $('.form__error').remove();
  }, 4000);
});

let $inputItem = $('.js-inputWrapper');
$inputItem.length &&
  $inputItem.each(function () {
    let $this = $(this),
      $input = $this.find('.form__input');
    ($placeholder = $this.find('.form__placeholder')),
      $input.val().length
        ? $this.addClass('active')
        : $this.removeClass('active'),
      $input
        .on('focusout', function () {
          $input.val().length
            ? $this.addClass('active')
            : $this.removeClass('active');
        })
        .on('focus', function () {
          $this.addClass('active');
        });
  });

  const smoothLinks = document.querySelectorAll('a[href^="#"]');
  for (let smoothLink of smoothLinks) {
      smoothLink.addEventListener('click', function (e) {
          e.preventDefault();
          const id = smoothLink.getAttribute('href');
  
          document.querySelector(id).scrollIntoView({
              behavior: 'smooth',
              block: 'start'
          });
      });
  };

  $('.faq li').click(function(){
    $(this).find('p').slideToggle(300);
    $(this).toggleClass('active');
  });