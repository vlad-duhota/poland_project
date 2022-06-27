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
  $('#toggle-btn').click(function () {
    $('#toggle-example').slideToggle();
  });
});

$('#form').submit(function (e) {
  e.preventDefault();
  let first_name = $('#first_name').val();
  let phone = $('#phone').val();

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

var granimInstance = new Granim({
  element: '#canvas-basic',
  direction: 'left-right',
  isPausedWhenNotInView: true,
  states: {
    'default-state': {
      gradients: [
        ['#0191f5', '#28bbc2'],
        ['#f90', '#fee62e'],
      ],
    },
  },
});
