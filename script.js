
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
      items: 2,
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
          items: 1.5,
        },
        576: {
          items: 2.8,
        },
        768: {
          items: 3.6,
        },
        992: {
          items: 4.6,
        },
        1200: {
          items: 5.2,
        },
        1400: {
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
          items: 1.5,
        },
        576: {
          items: 2.5,
        },
        768: {
          items: 4,
        },
        992: {
          items: 5,
        },
        1200: {
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
          items: 1.5,
        },
        576: {
          items: 2.5,
        },
        768: {
          items: 4,
        },
        992: {
          items: 5,
        },
        1200: {
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
          items: 1.5,
        },
        576: {
          items: 3,
        },
        850: {
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
        576: {
          items: 2,
        },
       768: {
          items: 4,
        },
        992: {
          items: 4.5,
        },
       1200: {
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

  // Footer accordion functionality for mobile
$(document).ready(function() {
  // Only apply accordion behavior on mobile screens
  if ($(window).width() < 768) {
      $('.footer-heading').click(function() {
          // Toggle current accordion
          $(this).toggleClass('active');
          $(this).parent('.footer-accordion').toggleClass('active');
          
          // Close other accordions
          $('.footer-heading').not(this).removeClass('active');
          $('.footer-accordion').not($(this).parent('.footer-accordion')).removeClass('active');
      });
  }
  
  // Update behavior on window resize
  $(window).resize(function() {
      if ($(window).width() >= 768) {
          // Remove accordion behavior on larger screens
          $('.footer-heading').removeClass('active');
          $('.footer-accordion').removeClass('active');
          $('.footer-links, .contact-info').css('max-height', '');
      }
  });
});

// Mobile menu functionality
$(document).ready(function() {
  // Toggle mobile menu
  $('.mobile-menu-toggle').click(function() {
      $(this).toggleClass('active');
      $('.mobile-side-menu').toggleClass('active');
      $('.mobile-menu-overlay').toggleClass('active');
      $('body').toggleClass('menu-open');
  });
  
  // Close mobile menu
  $('.close-mobile-menu, .mobile-menu-overlay').click(function() {
      $('.mobile-menu-toggle').removeClass('active');
      $('.mobile-side-menu').removeClass('active');
      $('.mobile-menu-overlay').removeClass('active');
      $('body').removeClass('menu-open');
  });
  
  // Toggle submenu
  $('.mobile-submenu-toggle').click(function() {
      $(this).siblings('.mobile-submenu').slideToggle();
      if ($(this).text() === '+') {
          $(this).text('-');
      } else {
          $(this).text('+');
      }
  });
  
  // Close menu on window resize if going to desktop size
  $(window).resize(function() {
      if ($(window).width() > 991) {
          $('.mobile-menu-toggle').removeClass('active');
          $('.mobile-side-menu').removeClass('active');
          $('.mobile-menu-overlay').removeClass('active');
          $('body').removeClass('menu-open');
      }
  });
});


$(document).ready(function() {
  // ========== Mega Menu Functionality ==========
  
  // Function to handle mega menu interactions
  function handleMegaMenuInteractions() {
      const megaMenuTriggers = $(".has-megamenu");
      const megaMenus = $(".mega-menu");
      let hoverTimeout;
      
      // On mouseenter, show the corresponding mega menu
      megaMenuTriggers.on("mouseenter", function() {
          const targetMenu = $(this).data("megamenu-target");
          
          // Clear any existing timeout
          clearTimeout(hoverTimeout);
          
          // Hide all mega menus first
          megaMenus.removeClass("active");
          
          // Show the target menu
          $(targetMenu).addClass("active");
          
          // Activate first tab by default if no tab is active
          if ($(targetMenu).find(".p-tab.active").length === 0) {
              $(targetMenu).find(".p-tab").first().addClass("active");
              const firstTabId = $(targetMenu).find(".p-tab").first().data("tab");
              $(`#${firstTabId}`).addClass("active");
          }
          
          // Add active class to current nav item
          megaMenuTriggers.removeClass("active-nav-item");
          $(this).addClass("active-nav-item");
      });
      
      // On mouseleave from nav item, set timeout to hide menu
      megaMenuTriggers.on("mouseleave", function() {
          const targetMenu = $(this).data("megamenu-target");
          
          hoverTimeout = setTimeout(function() {
              if (!$(targetMenu).is(":hover")) {
                  $(targetMenu).removeClass("active");
                  megaMenuTriggers.removeClass("active-nav-item");
              }
          }, 200); // Small delay to allow moving mouse to mega menu
      });
      
      // On mouseenter mega menu, clear timeout
      megaMenus.on("mouseenter", function() {
          clearTimeout(hoverTimeout);
      });
      
      // On mouseleave mega menu, hide it
      megaMenus.on("mouseleave", function() {
          const menuId = $(this).attr("id");
          const navItem = $(`[data-megamenu-target="#${menuId}"]`);
          
          hoverTimeout = setTimeout(function() {
              if (!navItem.is(":hover")) {
                  $(this).removeClass("active");
                  navItem.removeClass("active-nav-item");
              }
          }.bind(this), 200);
      });
      
      // Close mega menu when clicking outside
      $(document).on("click", function(e) {
          if (!$(e.target).closest(".has-megamenu, .mega-menu").length) {
              megaMenus.removeClass("active");
              megaMenuTriggers.removeClass("active-nav-item");
          }
      });
  }
  
  // ========== Tab System in Mega Menu ==========
  
  // Function to handle tab system inside mega menus
  function handleMegaMenuTabs() {
      // Set up tab behavior
      $(document).on("mouseenter", ".p-tab", function() {
          // Get parent mega menu
          const megaMenu = $(this).closest(".mega-menu");
          
          // Remove active class from all tabs in this menu
          megaMenu.find(".p-tab").removeClass("active");
          megaMenu.find(".p-content").removeClass("active");
          
          // Add active class to current tab
          $(this).addClass("active");
          
          // Show corresponding content
          const tabId = $(this).data("tab");
          $(`#${tabId}`).addClass("active");
      });
  }
  
  // ========== Mobile Menu Functionality ==========
  
  // Function to setup mobile menu behavior
  function setupMobileMenu() {
      // Toggle mobile menu visibility
      $(".mobile-menu-toggle").on("click", function() {
          $(this).toggleClass("active");
          $(".mobile-side-menu").toggleClass("active");
          $(".mobile-menu-overlay").toggleClass("active");
          $("body").toggleClass("menu-open");
      });
      
      // Close mobile menu
      $(".close-mobile-menu, .mobile-menu-overlay").on("click", function() {
          $(".mobile-menu-toggle").removeClass("active");
          $(".mobile-side-menu").removeClass("active");
          $(".mobile-menu-overlay").removeClass("active");
          $("body").removeClass("menu-open");
      });
      
      // Toggle submenu in mobile view
      $(".mobile-submenu-toggle").on("click", function(e) {
          e.preventDefault();
          e.stopPropagation();
          
          $(this).toggleClass("active");
          $(this).siblings(".mobile-submenu").slideToggle();
          
          // Toggle plus/minus icon
          if ($(this).text() === "+") {
              $(this).text("-");
          } else {
              $(this).text("+");
          }
      });
  }
  
  // ========== Responsive Handling ==========
  
  // Function to handle responsive behavior
  function handleResponsive() {
      function checkScreenSize() {
          if (window.matchMedia("(max-width: 991px)").matches) {
              // Mobile view
              megaMenus.removeClass("active");
              
              // Remove hover events for mobile
              $(".has-megamenu, .mega-menu").off("mouseenter mouseleave");
              
              setupMobileMenu();
          } else {
              // Desktop view
              $(".mobile-menu-toggle").removeClass("active");
              $(".mobile-side-menu").removeClass("active");
              $(".mobile-menu-overlay").removeClass("active");
              $("body").removeClass("menu-open");
              
              // Re-enable hover events for desktop
              handleMegaMenuInteractions();
              handleMegaMenuTabs();
          }
      }
      
      // Initial check
      checkScreenSize();
      
      // Check on resize
      $(window).on("resize", function() {
          checkScreenSize();
      });
  }
  
  // Initialize all functionality
  const megaMenus = $(".mega-menu");
  
  handleMegaMenuInteractions();
  handleMegaMenuTabs();
  setupMobileMenu();
  handleResponsive();
});