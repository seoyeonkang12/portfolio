$(function(){

  let isScrolling = false;

  $('.gnb a').click(function(e) {
    e.preventDefault();

    $('.gnb li').removeClass('active');
    $(this).parent('li').addClass('active');

    let target = $(this).attr('href');
    let offsetTop = $(target).offset().top;

    isScrolling = true;

    $('html, body').stop().animate({
      scrollTop: offsetTop
    }, 600, function() {
      isScrolling = false;
    });
  });

  $(window).scroll(function() {
    if(isScrolling) return;
    
    let scrollTop = $(window).scrollTop();
    let windowHeight = $(window).height();
    let scrollMiddle = scrollTop + windowHeight / 2;

    $('section').each(function() {
      let sectionTop = $(this).offset().top;
      let sectionBottom = sectionTop + $(this).outerHeight();
      let id = $(this).attr('id');

      if(scrollMiddle >= sectionTop && scrollMiddle < sectionBottom) {
        $('.gnb li').removeClass('active');

        $('.gnb a[href="#' + id + '"]').parent('li').addClass('active');
      }
    });

    if(scrollTop + windowHeight >= $(document).height() - 10) {
      $('.gnb li').removeClass('active');
      $('.gnb a[href="#contact"]').parent('li').addClass('active');
    }
  });

  let swiper = new Swiper('.mySwiper', {
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 0,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  $('.projects_logo > div').not('.line').click(function() {
    let index = $('.projects_logo > div').not('.line').index(this);

    $('.projects_logo > div').removeClass('active');
    $(this).addClass('active');

    swiper.slideToLoop(index, 500);
  });

  swiper.on('slideChange', function() {
    let activeIndex = this.realIndex;

    $('.projects_logo > div').removeClass('active');
    $('.projects_logo > div').not('.line').eq(activeIndex).addClass('active');
  });

  $('.work_btn').click(function() {
    $(this).next('.work_txt').slideToggle(300);
    $(this).toggleClass('active');
    
    if($(this).hasClass('active')){
      $(this).html('<i class="fa-solid fa-chevron-down"></i>주요 업무 내용 가리기');
    } else {
      $(this).html('<i class="fa-solid fa-chevron-down"></i>주요 업무 내용 보기');
    }
  });

});