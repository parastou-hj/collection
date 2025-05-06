
//baner-carousel
$(function () {
    $("#baner-owl").owlCarousel({
      rtl: true,
      items: 1,
      // nav: true,
      dots: false,
      loop: true,
      animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    smartSpeed: 450,
      autoplay: true,
      autoplayTimeout: 4000,
      autoplayHoverPause: true,
      // navText: [
      //     '<i class="fa-solid fa-chevron-right"></i>',
      //     '<i class="fa-solid fa-chevron-left"></i>'
      // ],
      responsive: {
        0: {
          items: 1,
        },
      },
    });
  });
  $(".nav-right").click(function () {
    $("#banner-owl").trigger("prev.owl.carousel");
  });
  
  $(".nav-left").click(function () {
    $("#banner-owl").trigger("next.owl.carousel");
  });

  $('.current-coin').click(function(){
    $(this).toggleClass('open')
    $('.coin-list').toggleClass('active');
    $('.country-list').removeClass('active');
    $.each($('.city'),function(i,item){
        $(item).css('display','block')
    });
    $('.country-list input').val("");
    $('.destination').removeClass('open');


})
$('.coin-list input').on('input',function(e){
    var searchText=e.target.value;
    $.each($('.coins-item'),function(i,item){
       if ($(item).text().toLowerCase().includes(searchText)){
        $(item).css('display','block')
       }else{
        $(item).css('display','none')
       }
    })
})


$('.country-list input').on('input',function(e){
    var searchText=e.target.value;
    $.each($('.country-item'),function(i,item){
       if ($(item).text().toLowerCase().includes(searchText)){
        $(item).css('display','block')
       }else{
        $(item).css('display','none')
       }
    })
})
var coinItem=$('.coins-item');
coinItem.on('click',function(){
    var headerText=$('.current-coin span');
    headerText.text($(this).text());
    $('.coin-list').removeClass('active');
    $('.coin-list input').val("");
   
})
var countryItem=$('.country-item');
countryItem.on('click',function(){
    var headerText=$('.destination span');
    headerText.text($(this).text());
    $('.country-list').removeClass('active');
    $('.country-list input').val("");
   
})

$('.destination').click(function(){
    $(this).toggleClass('open')
    $('.country-list').toggleClass('active');
    $('.coin-list').removeClass('active');
    $('.coin-list input').val("");
    $('.current-coin').removeClass('open');


})
$('body').on('click',function(e){
    if(!e.target.closest('.res-nav')&&!e.target.closest('.burger-menu')&&!e.target.closest('.search')&&!e.target.closest('.search-nav')&&!e.target.closest('.current-coin')&&!e.target.closest('.destination')&&!e.target.closest('.coin-list')&&!e.target.closest('.ex-city-list')&&!e.target.closest('.choose-class')){
        var offCanvas= $('.res-nav');
        offCanvas.removeClass('show');
        $('.overlay').removeClass('active');
        $('body').css('overflow','auto');
        $('.search-nav').removeClass('show');
        $('.ex-city-list').removeClass('active');
        $('.coin-list').removeClass('active');
        $('.flight-class').removeClass('shown');
        $('destination, .current, .choose-class').removeClass('open')

    }
})

//timer
$(document).ready(function() {
    
    let totalTime = (1 * 60 * 60 * 1000) + (49 * 60 * 1000) + (20 * 1000);
    let countDownDate = new Date().getTime() + totalTime;

    
    let x = setInterval(function() {
        let now = new Date().getTime();
        let distance = countDownDate - now;

        
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);


        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        
        $("#hours").text(hours);
        $("#minutes").text(minutes);
        $("#seconds").text(seconds);

        
        if (distance < 0) {
            clearInterval(x);
            $("#hours").text("00");
            $("#minutes").text("00");
            $("#seconds").text("00");
        }
    }, 1000);
});


$(function () {
    $("#sale-owl").owlCarousel({
      rtl: true,
      items: 1,
      // nav: true,
      dots: false,
      loop: true,
      animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    smartSpeed: 450,
      autoplay: true,
      autoplayTimeout: 4000,
      autoplayHoverPause: true,
      // navText: [
      //     '<i class="fa-solid fa-chevron-right"></i>',
      //     '<i class="fa-solid fa-chevron-left"></i>'
      // ],
      responsive: {
        0: {
          items: 6.5,
        },
      },
    });
  });
  $(".nav-right").click(function () {
    $("#banner-owl").trigger("prev.owl.carousel");
  });
  
  $(".nav-left").click(function () {
    $("#banner-owl").trigger("next.owl.carousel");
  });

  $(function () {
    $("#best-coin-owl").owlCarousel({
      rtl: true,
      items: 1,
      // nav: true,
      dots: false,
      loop: true,
      animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    smartSpeed: 450,
      autoplay: true,
      autoplayTimeout: 4000,
      autoplayHoverPause: true,
      // navText: [
      //     '<i class="fa-solid fa-chevron-right"></i>',
      //     '<i class="fa-solid fa-chevron-left"></i>'
      // ],
      responsive: {
        0: {
          items: 6,
        },
      },
    });
  });
  $(".nav-right").click(function () {
    $("#banner-owl").trigger("prev.owl.carousel");
  });
  
  $(".nav-left").click(function () {
    $("#banner-owl").trigger("next.owl.carousel");
  });


  $(function () {
    $("#best-cash-owl").owlCarousel({
      rtl: true,
      items: 1,
      // nav: true,
      dots: false,
      loop: true,
      animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    smartSpeed: 450,
      autoplay: true,
      autoplayTimeout: 4000,
      autoplayHoverPause: true,
      // navText: [
      //     '<i class="fa-solid fa-chevron-right"></i>',
      //     '<i class="fa-solid fa-chevron-left"></i>'
      // ],
      responsive: {
        0: {
          items: 4,
        },
      },
    });
  });
  $(".nav-right").click(function () {
    $("#banner-owl").trigger("prev.owl.carousel");
  });
  
  $(".nav-left").click(function () {
    $("#banner-owl").trigger("next.owl.carousel");
  });



  $(function () {
    $("#blog-owl").owlCarousel({
      rtl: true,
      items: 1,
      // nav: true,
      dots: false,
      loop: true,
      animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    smartSpeed: 450,
      autoplay: true,
      autoplayTimeout: 4000,
      autoplayHoverPause: true,
      // navText: [
      //     '<i class="fa-solid fa-chevron-right"></i>',
      //     '<i class="fa-solid fa-chevron-left"></i>'
      // ],
      responsive: {
        0: {
          items: 4,
        },
      },
    });
  });
  $(".nav-right").click(function () {
    $("#banner-owl").trigger("prev.owl.carousel");
  });
  
  $(".nav-left").click(function () {
    $("#banner-owl").trigger("next.owl.carousel");
  });


  $(function () {
    $("#customer-owl").owlCarousel({
      rtl: true,
      items: 1,
      // nav: true,
      dots: false,
      loop: true,
      animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    smartSpeed: 450,
      autoplay: true,
      autoplayTimeout: 4000,
      autoplayHoverPause: true,
      // navText: [
      //     '<i class="fa-solid fa-chevron-right"></i>',
      //     '<i class="fa-solid fa-chevron-left"></i>'
      // ],
      responsive: {
        0: {
          items: 5,
        },
      },
    });
  });
  $(".nav-right").click(function () {
    $("#banner-owl").trigger("prev.owl.carousel");
  });
  
  $(".nav-left").click(function () {
    $("#banner-owl").trigger("next.owl.carousel");
  });