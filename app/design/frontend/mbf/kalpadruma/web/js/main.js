var setScreen = function(){
	var winH = jQuery(window).height(),
        winW = jQuery(window).width(),
		$heroId = jQuery("#hero-section");

	$heroId.height(winH);	
     
    jQuery('.category-box').each(function(){
        if(jQuery(this).hasClass('flip')){    
            jQuery(this).find('.category-box-content').insertBefore(jQuery(this).find('.image-box'));            
        }else{
            jQuery(this).find('.category-box-content').insertAfter(jQuery(this).find('.image-box'));
        }
    });  

    if(winW <= 1024) {
      jQuery('.account').appendTo(jQuery('nav'));
      jQuery('.subscribe').insertAfter(jQuery('.footer-nav-blk')); 
      jQuery('.copy-right').insertAfter(jQuery('.social-icon')); 
    } else {
      jQuery('.account').prependTo(jQuery('header')); 
      jQuery('.copy-right').insertBefore(jQuery('.footer-nav-blk'));
        jQuery('.subscribe').insertAfter(jQuery('.social-icon')); 
    } 

    if(winW <= 640) {
        jQuery('.category-box').each(function(){
        if(jQuery(this).hasClass('flip')){    
            jQuery(this).find('.category-box-content').insertAfter(jQuery(this).find('.image-box'));            
        }
    });  
    }
} 

// Ready function 

jQuery(function(){


  // dropdown //
  jQuery('.dropdown').on('click', function(){
        jQuery('#flag-overlay').slideDown(.0);
        jQuery('body').addClass('hidden');
        return false;
    });

  // click  //

      jQuery('.close-flag').on('click', function(){
            jQuery('#flag-overlay').slideUp(.0);
            jQuery('body').removeClass('hidden');
        });
        jQuery('.flag-image').on('click', function(){
            jQuery(this).addClass('active');
            jQuery('.flag-image').not(this).removeClass('active');

            var thisImg = jQuery(this).find('img').attr('src');
            var thisText = jQuery(this).text();
            var symbol = jQuery(this).find('span').attr('data-symbol');
            jQuery('.dropdown .country').text(thisText);
            jQuery('.dropdown img').attr('src', thisImg);
            jQuery('.dropdown .country-label').text(symbol);

            jQuery('#flag-overlay').slideUp();
            jQuery('body').removeClass('hidden');
            return false;
        });



// overlay //
 jQuery('.close-overlay').on('click', function(){
        jQuery('html').removeClass('blurred');
        jQuery('#search-overlay').removeClass('active', function(){
            jQuery('#search-overlay').slideUp();
        });
    });



	/* Featured product slider */
	jQuery('#featured-products').slick({
	  infinite: true,
	  slidesToShow: 3,
	  slidesToScroll: 3,
      dots: true,
	  nextArrow:"<div class='slick-arrow slick-next'></div>",
	  prevArrow:"<div class='slick-arrow slick-prev'></div>",
	  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
     
    
      }
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
	});

  jQuery('.category-box:nth-child(3n+2)').addClass('flip');
  //jQuery('.flip').find('.category-box-content:first').addClass('flip-content'); 
    

	// menu open
  var $overlayDiv = jQuery('#menu-overlay'), $menuLink = jQuery('.menu a'), $menuUl = jQuery('.menu ul'), $prevCloseBtn = jQuery('.previous-menu'), $searchTrigger = jQuery('.search-icon'), $searchOverlay = jQuery('#search-overlay');
  // Mobile menu
  var $nav = jQuery('nav');
  jQuery('.main-menu ul').prev('a').addClass('kd-with-ul');
  jQuery('#navTrigger').on('click', function () {
     $nav.addClass('open-nav');
     jQuery('.account').fadeIn(1000);
     jQuery('html').addClass('menu-opened');
  });
  jQuery('.main-menu ul').each(function(){
    var $parentTitle = jQuery(this).prev('.kd-with-ul').text();
    jQuery(this).prev('.kd-with-ul').parent().prepend('<span class="menu-arrow" />');
    jQuery(this).prev('.kd-with-ul').next('ul').prepend('<li class="back-to-main">'+$parentTitle+'</li>');
  });
  $nav.on('click', '.menu-arrow', function(){
    jQuery(this).parent('li').find('>ul').addClass('sub-opened');
  });
  $nav.on('click', '.back-to-main', function(){
    jQuery(this).parent().removeClass('sub-opened');
  });
  // Search action
  $searchTrigger.on('click', function(){
      $searchOverlay.addClass('active');
      $('#search-tag').focus();
      alert('s');
  });
  
  jQuery('#search-tag').keyup(function(){
      var sval=jQuery(this).val();
      if(sval==''){   
      jQuery('#search-result').slideUp(); 
      }else{ 
      jQuery('#search-result').slideDown();
      }
  });
  
  // Close menu
  jQuery('.close-menu').on('click', function(){
      $prevCloseBtn.hide(); 
      $overlayDiv.removeClass('active');
      $searchOverlay.removeClass('active');
  });

  // Set sticky header
  jQuery(window).scroll(function() { 
      var scroll = jQuery(window).scrollTop();
      if (scroll > 10) {
          jQuery('header').addClass("secondary-header");
          jQuery('#sub-page header').removeClass("secondary-header");
      } else {
          jQuery('header').removeClass("secondary-header");          
      }
  });


   /* product slider */ 
  jQuery('.product-slid').slick({
      slidesToShow: 1, 
      slidesToScroll: 1, 
      arrows: false,
      dots: true
  }); 

  /* Jquery UI*/ 
  jQuery('.radio').buttonset();
  jQuery( ".checkBox" ).buttonset();
  jQuery(".select-drop-down").selectmenu();
  jQuery('.equalHeight > div').matchHeight();
  jQuery('.product-listing h4').matchHeight();
  jQuery('.accordion').accordion({
    heightStyle: "content",
    collapsible: true
  });

  /* Global Error Message */
  jQuery('.close-button').on('click', function(){
      jQuery(this).parent().slideUp(); 
  });

  /* show & hide the placeholder */
  jQuery('input,textarea').focus(function(){
     jQuery(this).data('placeholder',jQuery(this).attr('placeholder'))
            .attr('placeholder','');
  }).blur(function(){
     jQuery(this).attr('placeholder',jQuery(this).data('placeholder'));
  }); 


  /* shoping cart */
  jQuery('#discount-button').click(function(){
  jQuery(".apply-voucher span").text(jQuery('#coupon_code').val());
      jQuery(this).next('.preloader-black').fadeIn(500, function(){
          jQuery('.preloader-black').delay(1000).fadeOut();            
          jQuery('#voucherInner .voucherCodeFiled').fadeOut(function(){
              jQuery('#discountAmount').fadeIn();
          });
      }); 
  }); 

  jQuery('.remov-icon').click(function(){
      jQuery('#discountAmount').fadeOut(function(){
          jQuery('#voucherInner .voucherCodeFiled').fadeIn();
      });
  });

   jQuery('.close-btn').on('click', function () {
       jQuery('nav').removeClass('open-nav');
       jQuery('.account').hide();
       jQuery('html').removeClass('menu-opened');
       setTimeout(function(){
        jQuery('.sub-opened').removeClass('sub-opened');
       }, 300);
   });

  /* Pop up */
  jQuery('.open-popup-link').magnificPopup({
    type:'inline',
    midClick: true,
    // Delay in milliseconds before popup is removed
    removalDelay: 300,

    // Class that is added to popup wrapper and background
    // make it unique to apply your CSS animations just to this exact popup
    mainClass: 'mfp-fade'
  }); 

  /* table */
  jQuery('table tr td').each(function(index, element) {
      var th = jQuery('table tr:first-child th').eq(jQuery(this).index()).text();
      jQuery(this).attr('data-title', th);
  });

  

  /* Jump to next frame */
  jQuery('.dropArrow').on('click', function(){
      jQuery('html, body').animate({
          scrollTop : (jQuery('#category').offset().top - (jQuery('header').innerHeight()) - 110)
      }, 800);
  });
  
  jQuery('.add-cart-btn').on('click', function(){
     jQuery(this).fadeOut(500, function(){
        jQuery('.loader-sec').fadeIn(800, function(){
           jQuery(this).fadeOut(1200, function(){
              jQuery('.cart-success').fadeIn(); 
           });
        });
     });
  });
 
  // Product filter
  var $filterTargetLink = jQuery('.filter-category');
  var $filterList = jQuery('.filter-list');
  var $filterLabelLink = jQuery('.filter-labels');
  var $filterTrigger = jQuery('.filter-trigger');
  var $filterDisplay = jQuery('#filter-display');
  // Set filter tab
  $filterTargetLink.on('click', function(){
    var $targetId = jQuery(this).data('tab');
    $filterTargetLink.removeClass('current');
    jQuery(this).addClass('current');
    jQuery('.filter-result').hide();
    $filterList.not('#'+$targetId).slideUp();
    jQuery('#'+$targetId).slideDown();
  });

  // class toggling
  $filterLabelLink.on('click', function(){
    var $this = jQuery(this);
    if ($this.hasClass('active') ) {
      $this.removeClass('active');
    }
    else {
      $this.addClass('active');
    }
    // Filter button
    var $activeLength = jQuery('.filter-content .active').length;
    if($activeLength > 0) {
      $filterTrigger.show();
    } else {
      $filterTrigger.hide();
    }
    // Set filter while clicking on filter button
    $filterTrigger.on('click', function(){
      jQuery(this).hide();
      $filterList.hide();
      $filterTargetLink.removeClass('current');
      jQuery('.filter-result').show();
    });
    $filterDisplay.empty();
    // clone method for filter display
    var clone = 'clone';
    var cloneId = 0; // because cloning an id attr just wrong :>
    jQuery('li.active').each(function() {
      cloneId++;
      jQuery(this).clone().appendTo($filterDisplay).attr('id',clone+cloneId).addClass('clone');
    });
    jQuery('li.clone').on('click', function() {
      jQuery(this).remove();
      var lengthLi = jQuery('#filter-display li').length;
      if(lengthLi < 1) {
        jQuery('.filter-clear').hide();
      }
    });
  });

	/*********************** 
	==== Init functions ====
	************************/
	setScreen();
});
jQuery(window).resize(function(){
    setScreen();
  });

if(!Modernizr.touch) { 
	jQuery(window).resize(function(){
		setScreen();
	});
}

    //  my js //

