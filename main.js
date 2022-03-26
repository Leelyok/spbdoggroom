$('.hamburger-button').click(function(){
    $('.mobile-menu').fadeToggle(100);
    $(this).toggleClass('active');
  });

  $('.mobile-menu a').click(function(){
    $('.mobile-menu').fadeOut(100);
    $(".hamburger-button").removeClass('active');
  });




  // Slick slider
  $('.slider-container').slick({
    // Setting name: setting-value
  });


  $('.testimon-slider-container').slick({
    autoplay: true,        // Do we want it to autoplay? true or false
    autoplaySpeed: 3000,   // How long between each slide when autoplaying
    speed: 500,            // How fast is the transition 
    arrows: false,          // Do you want to show arrows to trigger each slide
    accessibility: true,   // Enables tabbing and arrow key navigation 
    dots: true,            // Enables the dots below to show how many slides
    fade: false,           // Changes the animate from slide to fade if true
    infinite: true,       // When true, means that it will scroll in a circle
    pauseOnHover: true,   // When true means the autoplay pauses when hovering
    pauseOnDotsHover: true // Pauses the autoplay when hovering over the dots
  });
  
  $(".testimonial-slider-container").slick({
      autoplay: true,
      autoplaySpeed: 2e3,
      speed: 500,
      arrows: true,
      accessibility: true,
      dots: true,
      fade: false,
      infinite: false,
      pauseOnHover: false,
      pauseOnDotsHover: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [{
          breakpoint: 768,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
          }
      }]
  });

  // Animate on scroll
  AOS.init ({
    // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
      initClassName: 'aos-init', // class applied after initialization
      animatedClassName: 'aos-animate', // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) so that even though we arrive at the original location the element is not scrolling in straight away
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 1000, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    });

    lightGallery(document.getElementById('lightgallery'), {
      speed: 500,
      download: false
  });