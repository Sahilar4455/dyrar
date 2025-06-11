// source --> https://www.deyaar.ae/wp-content/themes/deyaar/custom-assets/scripts/script.js?v=1&amp;ver=1 
// document.addEventListener("DOMContentLoaded", function () {
//   const titleElement = document.querySelector(".banner-title");
//   const buttonElement = document.querySelector(".register-btn-primary");
//   const interestButton = document.querySelector(".register_your_interest_button");

//   // Check for both English and Arabic titles
//   const matchingTitles = ["Rivage by Deyaar", "ريفاج من ديار"];

//   if (titleElement && matchingTitles.includes(titleElement.textContent.trim())) {
//     if (buttonElement) buttonElement.style.display = "none";

//     if (interestButton) {
//       interestButton.style.margin = "0";
//       interestButton.style.marginLeft = "0";
//       interestButton.style.marginRight = "0";
//     }
//   }
// });



jQuery(document).ready(function($) {

  var optionsToShowEnglish = {
	  'aya-beachfront-residences':['1 Bedroom', '2 Bedrooms','3 Bedrooms', 'Duplex – 3 Bedrooms','Duplex – 4 Bedrooms','Penthouse','Sky Villas'],
	  'park-five':['Studios', '1 Bedroom', '2 Bedrooms', '3 Bedrooms'],
	  'rivage-by-deyaar': ['1 Bedroom', '2 Bedrooms', '3 Bedrooms', 'Duplexes', 'Sky Palaces', 'Sky Villas'],
      'eleve-by-deyaar': ['Studios', '1 Bedroom', '2 Bedrooms', '3 Bedrooms', 'Garden Apartments'],
      'jannatmidtown': ['Studios', '1 Bedroom', '2 Bedrooms', '3 Bedrooms'],
      'rosalia-residences': ['1 Bedroom', '2 Bedrooms', '3 Bedrooms'],
      'amalia': ['1 Bedroom', '2 Bedrooms', '3 Bedrooms'],
      'talia': ['1 Bedroom', '2 Bedrooms'],
      'mar-casa': ['1 Bedroom', '2 Bedrooms', '3 Bedrooms', 'Penthouse – 3 Bedrooms','Penthouse – 4 Bedrooms'],
      'tria': ['Studios', '1 Bedroom', '2 Bedrooms', '3 Bedrooms', 'Duplex – 3 Bedrooms', 'Townhouse – 3 Bedrooms', 'Penthouse'],
      'ragalia': ['Studios', '1 Bedroom', '2 Bedrooms', '3 Bedrooms', 'Duplex – 2 Bedrooms', 'Townhouse – 3 Bedrooms', 'Penthouse – 4 Bedrooms'],
      'central-park': ['Studios', '1 Bedroom', '2 Bedrooms', '3 Bedrooms', 'Duplex – 2 Bedrooms', 'Duplex – 3 Bedrooms', 'Penthouse'],
      'bella-rose': ['Studios', '1 Bedroom', '2 Bedrooms'],
      'mont-rose': ['1 Bedroom', '2 Bedrooms', '3 Bedrooms', '4 Bedrooms'],
      'the-atria': ['Studios', '1 Bedroom', '2 Bedrooms'],
      'burlington': ['Offices'],
      'the-citadel': ['Offices'],
      'the-metropolis': ['Offices'],
      'hamilton-residency': ['1 Bedroom'],
      'fifty-one': ['Offices'],
      'fairview-residency': ['Studios', '1 Bedroom', '2 Bedrooms'],
      'mayfair-residency': ['1 Bedroom', '2 Bedrooms'],
      'mayfair-tower': ['1 Bedroom', '2 Bedrooms'],
      'clayton-residency': ['1 Bedroom'],
      'oxford-tower': ['Offices'],
      'madison-residency': ['Studios', '1 Bedroom', '2 Bedrooms'],
      'al-dana-towers': ['1 Bedroom', '2 Bedrooms'],
      'al-seef-tower': ['1 Bedroom', '2 Bedrooms', '3 Bedrooms', 'Penthouse'],
      'al-seef-2-tower': ['1 Bedroom', '2 Bedrooms', '3 Bedrooms', 'Penthouse'],
      'oakwood-residency': ['1 Bedroom', '2 Bedrooms'],
      'sapphire-residence': ['1 Bedroom', '2 Bedrooms', '3 Bedrooms'],
      'ruby-residence': ['1 Bedroom', '2 Bedrooms', '3 Bedrooms'],
      'jade-residence': ['1 Bedroom', '2 Bedrooms', '3 Bedrooms'],
      'coral-residence': ['1 Bedroom', '2 Bedrooms', '3 Bedrooms'],
      
  };
  var optionsToShowArabic = {
 'rivage-by-deyaar': ['فلل سماوية','قصور سماوية','دوبلكس', 'ثلاث غرف نوم', 'غرفتان نوم', 'غرفة نوم واحدة'],
    'eleve-by-deyaar': ['استوديو', 'غرفة واحدة', 'غرفتين', 'ثلاث غرف', 'Garden Apartments'],
    'jannatmidtown': ['استوديو', 'غرفة واحدة', 'غرفتين', 'ثلاث غرف'],
    'rosalia-residences': ['غرفة واحدة', 'غرفتين', 'ثلاث غرف'],
    'amalia': ['غرفة واحدة', 'غرفتين', 'ثلاث غرف'],
    'talia': ['غرفة واحدة', 'غرفتين'],
    'mar-casa': ['غرفة واحدة', 'غرفتين', 'ثلاث غرف', 'بنتاهاوس – ثلاث غرف','بنتاهاوس – أربع غرف'],
    'tria': ['استوديو', 'غرفة واحدة', 'غرفتين', 'ثلاث غرف', 'دوبلكس – ثلاث غرف', 'تاون هاوس – ثلاث غرف', 'بنتاهاوس'],
    'ragalia': ['استوديو', 'غرفة واحدة', 'غرفتين', 'ثلاث غرف', 'دوبلكس – غرفتين', 'تاون هاوس – ثلاث غرف', 'بنتاهاوس – أربع غرف'],
    'central-park': ['استوديو', 'غرفة واحدة', 'غرفتين', 'ثلاث غرف', 'دوبلكس – غرفتين', 'دوبلكس – ثلاث غرف', 'بنتاهاوس'],
    'bella-rose': ['استوديو', 'غرفة واحدة', 'غرفتين'],
    'mont-rose': ['غرفة واحدة', 'غرفتين', 'ثلاث غرف', 'أربع غرف'],
    'the-atria': ['استوديو', 'غرفة واحدة', 'غرفتين'],
    'burlington': ['مكتب'],
    'the-citadel': ['مكتب'],
    'the-metropolis': ['مكتب'],
    'hamilton-residency': ['غرفة واحدة'],
    'fifty-one': ['مكتب'],
    'fairview-residency': ['استوديو', 'غرفة واحدة', 'غرفتين'],
    'mayfair-residency': ['غرفة واحدة', 'غرفتين'],
    'mayfair-tower': ['غرفة واحدة', 'غرفتين'],
    'clayton-residency': ['غرفة واحدة'],
    'oxford-tower': ['مكتب'],
    'madison-residency': ['استوديو', 'غرفة واحدة', 'غرفتين'],
    'al-dana-towers': ['غرفة واحدة', 'غرفتين'],
    'al-seef-tower': ['غرفة واحدة', 'غرفتين', 'ثلاث غرف', 'بنتاهاوس'],
    'al-seef-2-tower': ['غرفة واحدة', 'غرفتين', 'ثلاث غرف', 'بنتاهاوس'],
    'oakwood-residency': ['غرفة واحدة', 'غرفتين'],
    'sapphire-residence': ['غرفة واحدة', 'غرفتين', 'ثلاث غرف'],
    'ruby-residence': ['غرفة واحدة', 'غرفتين', 'ثلاث غرف'],
    'jade-residence': ['غرفة واحدة', 'غرفتين', 'ثلاث غرف'],
    'coral-residence': ['غرفة واحدة', 'غرفتين', 'ثلاث غرف'],
    
};

function getLanguageFromUrl() {
  var path = window.location.pathname; // Get the current path
  if (path.startsWith('/ar/properties')) {
      return 'ar';
  } else if (path.startsWith('/en/properties')) {
      return 'en';
  }
  return 'en'; 
}

function getOptionsForCurrentLanguage() {
  var language = getLanguageFromUrl();
  return language === 'ar' ? optionsToShowArabic : optionsToShowEnglish;
}

function updateSelectOptions(selectedProject) {
  var select = $('#interested_in');
  select.empty();
  
  var language = getLanguageFromUrl();
  var placeholderText = language === 'ar' ? 'مهتم ب' : 'Interested in';
  if (language === 'ar') {
    select.addClass('text-right');
  } else {
    select.removeClass('text-right');
  }
  select.append('<option value="" disabled selected>' + placeholderText + '</option>');

  var optionsToShow = getOptionsForCurrentLanguage();
  if (optionsToShow[selectedProject]) {
    $.each(optionsToShow[selectedProject], function(index, value) {
      select.append('<option value="' + value + '">' + value + '</option>');
    });
  }
  
  if(selectedProject == 'park-five'){
	 $("#location option[value='Abudhabi']").remove();$("#location option[value='Sharjah']").remove();
  }
}

  function getCurrentProject() {
      var currentSlug = window.location.pathname.split('/').filter(function(el) { return el.length > 0; }).pop();
      switch (currentSlug) {
		  case 'aya-beachfront-residences':
              return 'aya-beachfront-residences';
		  case 'park-five':
              return 'park-five';
			  case 'rivage-by-deyaar':
              return 'rivage-by-deyaar';
          case 'rosalia-residences':
              return 'rosalia-residences';
          case 'eleve-by-deyaar':
              return 'eleve-by-deyaar';
          case 'jannatmidtown':
              return 'jannatmidtown';
          case 'amalia':
              return 'amalia';
          case 'talia':
              return 'talia';
          case 'mar-casa':
              return 'mar-casa';
          case 'tria':
              return 'tria';
          case 'ragalia':
              return 'ragalia';
          case 'central-park':
              return 'central-park';
          case 'bella-rose':
              return 'bella-rose';
          case 'mont-rose':
              return 'mont-rose';
          case 'the-atria':
              return 'the-atria';
          case 'burlington':
              return 'burlington';
          case 'the-citadel':
              return 'the-citadel';
          case 'the-metropolis':
              return 'the-metropolis';
          case 'hamilton-residency':
              return 'hamilton-residency';
          case 'fifty-one':
              return 'fifty-one';
          case 'fairview-residency':
              return 'fairview-residency';
          case 'mayfair-residency':
              return 'mayfair-residency';
          case 'mayfair-tower':
              return 'mayfair-tower';
          case 'clayton-residency':
              return 'clayton-residency';
          case 'oxford-tower':
              return 'oxford-tower';
          case 'madison-residency':
              return 'madison-residency';
          case 'al-dana-towers':
              return 'al-dana-towers';
          case 'al-seef-tower':
              return 'al-seef-tower';
          case 'al-seef-2-tower':
              return 'al-seef-2-tower';
          case 'oakwood-residency':
              return 'oakwood-residency';
          case 'sapphire-residence':
              return 'sapphire-residence';
          case 'ruby-residence':
              return 'ruby-residence';
          case 'jade-residence':
              return 'jade-residence';
          case 'coral-residence':
              return 'coral-residence';
          default:
              return null; 
      }
  }

  var currentProject = getCurrentProject();
  if (currentProject) {
      updateSelectOptions(currentProject);
  }

});
jQuery(document).ready(function($) {
  jQuery('#load-more-btn').click(function() {
      page = page + 1; // Initialize or get the current page
      category = 'financial-results';
        
      var button = jQuery(this)
          data = {
              'action': 'load_more_financial_results',
              'limit': limit,
              'page': page,
              'category': category,
           };

      jQuery.ajax({
          url: "/wp-admin/admin-ajax.php",// Correct usage with localized script variable
          type: 'POST',
          data: data,
          dataType: "html",
        
          beforeSend: function() {
              button.text('Loading...');
              button.append('<i class="fa fa-spinner fa-spin"></i>');
          },
          success: function(data) {
              if (data) { // Check for a non-empty response
                button.text('Load More').before(data);
                page++;

                  // Ensure max_page is defined. For example, it could be localized along with your script.
                  if (page >= max_page) {
                      button.remove();
                  }
              } else {
                  button.remove(); // Remove the button if no response or finished loading all pages
              }
          },
          error: function() {
              console.log('AJAX load more failed.'); // For debugging purposes
          }
      });
  });
});



jQuery(document).ready(function () {
  jQuery('.construction-slider .construction-container').each(function() {
    jQuery(this).slick({
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: jQuery(this).parent().find('.slider-prev'),
        nextArrow: jQuery(this).parent().find('.slider-next'),
        // Responsive settings
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }, 
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});

  // Initialize Fancybox for lightbox
  jQuery('.construction-slider .construction-container .image-layer a').fancybox({
      // Fancybox options
      loop: true,
      // You can customize the appearance and behavior of the lightbox here
  });

   // Initialize Fancybox
  jQuery('[data-fancybox="gallery"]').fancybox({
    buttons: ["slideShow", "fullScreen", "thumbs", "close"],
    loop: true, // Enable looping
    arrows: true, // Show navigation arrows
    infobar: true, // Display image info
    protect: true, // Prevent right-click and dragging
    transitionEffect: "fade", // Set the transition effect
});

});


(function ($) {
  'use strict'
  // Dom Ready
 
  

  $(function () {
      $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
          $('.secondary-menu').addClass('stick-up');
          $('.primary-menu').addClass('stick-up');
        
          // $('.prop-name-section').addClass('sticky-down');
        } else {
          $('.secondary-menu').removeClass('stick-up');
          $('.primary-menu').removeClass('stick-up');
        
          // $('.prop-name-section').removeClass('sticky-down');
        }
        if (scroll >= 400) {
          $('.property-filter-section').addClass('sticky');
        } else {
          $('.property-filter-section').removeClass('sticky');
        }
      });
      
      $("img").each(function(){
        $(this).append("<span class=\'cls-img-overlay\'></span>");
      });

      $(document).ready(function() {

          AOS.init({
            duration: 800,
            once: true,
          })

          $(document).on("click","a",function(e) {
            var val = $(this).attr('href');
            if(val == '#'){
              e.preventDefault();
            }
          });

          /* Submenu Open and Close */
          $(document).on("click",".menu-list .menu-item a",function(e) {
            // e.preventDefault();
            $(this).parent('.menu-item').toggleClass('active');
            if($(this).parent('.menu-item').find('.sub-menu-wrap').outerHeight() > 500){
              $(this).parent('.menu-item').find('.sub-menu-wrap').addClass('column-cnt-2');
            }
            $(this).parent('.menu-item').find('.sub-menu-wrap').slideToggle();
            $(this).parent('.menu-item').siblings().removeClass('active');
            $(this).parent('.menu-item').siblings().find('.sub-menu-wrap').slideUp();
          });
      
          /* Mobile SubMenu Open */
          $(document).on("click",".mobile-menu-icon",function(e) {
            $('header').toggleClass('active')
            $('body').toggleClass('cls-overflow-hidden');
            $('.primary-menu').toggleClass('stick-up');
          });
          
          /* Language Open and Close */
          $(document).on("click",".menu-lang .lang-item a",function() {            
              $(this).next('.lang-submenu-list').slideDown();
          });
        
          /* Range Select open */
          $(document).on("click",".size-select",function() {            
            $(this).find('.range-select').slideDown();
          });

          /* Range Select Reset */
          $(document).on("click",".size-select .reset-link",function() {            
              $('.min-range select, .max-range select').prop('selectedIndex',0);
          });

          /* Footer Menu Expand */
          $(document).on("click",".more-link a",function(e) {      
            e.preventDefault();
            $(this).parent('.more-link').hide();
            $(this).parents('.sub-menu-list').parents('li').find('.more-links-div').slideDown();
          });

          /* Register Button Scroll */
          $(document).on('click', '.cta-scroll-register-btn', function (event) {
              if(!($(this).hasClass('no-form-redirect'))){
					 event.preventDefault();        
				$('html, body').animate({
				  scrollTop: $('.register-interest-form-section').offset().top
				}); 
			  }
          });

          /* Register Button Scroll */
			jQuery(document).on('click', '.register_your_interest_button', function (event) {
				  if(!($(this).hasClass('no-form-redirect'))){
					 event.preventDefault();        
				$('html, body').animate({
				  scrollTop: $('.register-interest-form-section').offset().top
				}); 
			  }
			});

            /* Register Button Scroll */
            jQuery(document).on('click', '.register_your_interest_button', function (event) {
              if(!($(this).hasClass('no-form-redirect'))){
					 event.preventDefault();        
				$('html, body').animate({
				  scrollTop: $('.register-interest-form-section').offset().top
				}); 
			  }
            });

           /* Register Button Scroll */
            jQuery(document).on('click', '.register_your_interest_button_inner', function (event) {
              event.preventDefault();        
              jQuery('html, body').animate({
                scrollTop: jQuery('.register-interest-form-section').offset().top - 200
              });
            });

          /* Investor Relation Page*/
          $(document).on('click', '.fn-list-item a', function (e) {     
            $(this).parent('li').addClass('active');
            $(this).parent('li').siblings().removeClass('active');
            var currentEle = $(this).parent('li').index()+1;
            $(this).parents('.fn-list-item').next('.fn-list-content').find('.list-content').fadeOut();
            $(this).parents('.fn-list-item').next('.fn-list-content').find('.list-content:nth-child('+currentEle+')').fadeIn();
          });

          /* Contact Us page focus */
          $(document).on('click', '.contactus-section .list-item-layer a', function (event) {
            event.preventDefault();        
            $('html, body').animate({
              scrollTop: $('.list-content-layer').offset().top-150
            });
          });

          /* Dropdown Close */
          $(document).mouseup(function(e){
                var menulang = $(".lang-submenu-list");
                var submenu = $(".sub-menu-wrap");
                var menusection = $('.menu-main-menu-container')
                var rangeselect = $(".range-select");
                /* Language Close */
                if (!menulang.is(e.target) && menulang.has(e.target).length === 0) 
                {
                  menulang.slideUp();
                }
                /* SubMenu Close */
                if (!submenu.is(e.target) && submenu.has(e.target).length === 0 && !menusection.is(e.target) && menusection.has(e.target).length === 0) 
                {
                    submenu.slideUp();
                    submenu.parents('.menu-item').removeClass('active');
                }
                /* Range Select close */
                if (!rangeselect.is(e.target) && rangeselect.has(e.target).length === 0) 
                {
                  rangeselect.slideUp();
                }
          });

        

          
          jQuery(document).ready(function(){

              /* Mutliselect */
          jQuery('.location-multiselect').multiselect({
            numberDisplayed:1,
            includeSelectAllOption: true,
            nonSelectedText: locationMultisele(),
            selectAllText: updateMultiselectOptions()
          });
                        
           
            function get_current_lang() {
                return $('html').attr('lang');
                
              }
  
            function locationMultisele() {
              var selectedLanguage = get_current_lang();
              if(selectedLanguage == 'en-GB') selectedLanguage =  'en';
              var translations = {
                ar: 'الموقع', // Arabic translation
                en: 'Location'   // English translation
              };

              return translations[selectedLanguage] || translations['en'];
            }
            function updateMultiselectOptions() {
              var selectedLanguage = get_current_lang();
              if (selectedLanguage === 'en-GB') selectedLanguage = 'en';
          
              var translations = {
                ar: 'تحديد الكل', // Arabic translation for "Select All"
                en: 'Select All'  // English translation for "Select All"
              };
              return translations[selectedLanguage] || translations['en'];
            }   

          });

        

          jQuery(document).ready(function(){
                        
            jQuery('.bedroom-multiselect').multiselect({
              numberDisplayed:1,
              includeSelectAllOption: true,
              nonSelectedText: bedroomMultisele(),
              selectAllText: updateMultiselectOptions()
            });

            function get_current_lang() {
                return $('html').attr('lang');
                
              }  
            function bedroomMultisele() {
              var selectedLanguage = get_current_lang();
              if(selectedLanguage == 'en-GB') selectedLanguage =  'en';
              var translations = {
                ar: 'غرفة نوم', // Arabic translation
                en: 'Bedroom'   // English translation
              };
              return translations[selectedLanguage] || translations['en'];
            }

            function updateMultiselectOptions() {
              var selectedLanguage = get_current_lang();
              if (selectedLanguage === 'en-GB') selectedLanguage = 'en';
          
              var translations = {
                ar: 'تحديد الكل', // Arabic translation for "Select All"
                en: 'Select All'  // English translation for "Select All"
              };
              return translations[selectedLanguage] || translations['en'];
            }      

          });
                

          $(document).on('click', '.multiselect', function () {
            // $('.btn-group')
            $(this).parent().toggleClass('open')
          })
          $('body').on('click', '*:not( .dropdown-menu )', function () {
            $('.btn-group').removeClass('open')
          });

          // Iframe Height Calculation
          $('.EurolandTool').EurolandIFrameAutoHeight();
      });
  });
})(jQuery);


jQuery(document).ready(function ($) {
    // Initialize Isotope
    var $container = $('.retail-filter-listings');
    $container.isotope({
        itemSelector: '.item',
        layoutMode: 'fitRows'
    });

    // Click event handler for filter buttons
    $('.filter-button-group ul li').on('click', function () {
        var filterValue = $(this).attr('data-filter');
        $container.isotope({ filter: filterValue });
    });


    // Select all images with a data-src attribute
const lazyImages = document.querySelectorAll('img[data-src]');

// Create an Intersection Observer
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const lazyImage = entry.target;
            lazyImage.src = lazyImage.dataset.src;
            lazyImage.removeAttribute('data-src');
            observer.unobserve(lazyImage);
        }
    });
});

// Observe each lazy image
lazyImages.forEach(image => {
    observer.observe(image);
});


});



jQuery(document).ready(function($) {
  $('.wpcf7-form').on('input', '.wpcf7-phonetext', function() {
      var maxLength = parseInt($(this).attr('maxlength'));
      var text = $(this).val();
      
      if (text.length > maxLength) {
          $(this).val(text.substr(0, maxLength));
      }
  });
});

(function($) {
  $(document).ready(function() {
      $(".wpcf7-phonetext").each(function() {
          var $input = $(this);

          $input.intlTelInput({
              autoHideDialCode: false,
              autoPlaceholder: "off",
              nationalMode: false,
              separateDialCode: false,
              hiddenInput: "full_number",
              initialCountry: "ae",
              preferredCountries: ['ae']
          });

          function updatePlaceholder() {
              var selectedCountryData = $input.intlTelInput("getSelectedCountryData");
              if (selectedCountryData && selectedCountryData.dialCode) {
                  $input.attr('placeholder', `+${selectedCountryData.dialCode}`);
              }
          }

          function updateCountryCode() {
              var selectedCountryData = $input.intlTelInput("getSelectedCountryData");
              if (selectedCountryData && selectedCountryData.iso2) {
                  var selectedCountryCode = selectedCountryData.iso2.toUpperCase();
                  $("#Country_Code_Property, #Country_Code_Sales, #Country_Code_Leasing, #Country_Code_AM, #Country_Code_DCM").val(selectedCountryCode);
              }
          }

          function setDialCode() {
              var selectedCountryData = $input.intlTelInput("getSelectedCountryData");
              if (selectedCountryData && selectedCountryData.dialCode) {
                  var dialCode = selectedCountryData.dialCode;
                  var value = $input.val();
                  var newValue = value.replace(/^\+\d+/, '');
                  if (!newValue.startsWith(dialCode)) {
                      $input.val('+' + dialCode + newValue);
                  } else {
                      $input.val('+' + dialCode + newValue.substring(dialCode.length));
                  }
              }
          }

          updatePlaceholder();
          updateCountryCode();

          $input.on("countrychange", function() {
              updatePlaceholder();
              updateCountryCode();
              setDialCode(); 
          });

          $input.on("input", function() {
              var value = $input.val();
              var selectedCountryData = $input.intlTelInput("getSelectedCountryData");
              if (selectedCountryData && selectedCountryData.dialCode) {
                  var dialCode = selectedCountryData.dialCode;
                  var newValue = value.replace(/^\+\d+/, '');
                  if (!value.startsWith('+' + dialCode)) {
                      $input.val('+' + dialCode + newValue);
                  }
              }
          });

          $input.on("paste", function() {
              setTimeout(function() {
                  var value = $input.val();
                  var selectedCountryData = $input.intlTelInput("getSelectedCountryData");
                  if (selectedCountryData && selectedCountryData.dialCode) {
                      var dialCode = selectedCountryData.dialCode;
                      var newValue = value.replace(/^\+\d+/, '');

                      if (!value.startsWith('+' + dialCode)) {
                          $input.val('+' + dialCode + newValue);
                      }
                  }
              }, 100);
          });

          $input.on("focus", function() {
              if (!$input.val()) {
                  $input.val($input.attr('placeholder'));
              }
              var value = $input.val();
              $input.val('').val(value); // This moves the cursor to the end
          });
      });
  });
})(jQuery);



jQuery(document).ready(function() {
  jQuery('.form-outer-layer .nav-link').click(function(e) {
      e.preventDefault();

      // Remove 'active' class from all tabs and tab contents
      jQuery('.form-outer-layer .nav-link').removeClass('active');
      jQuery('.tab-pane').removeClass('show active');

      jQuery(this).addClass('active');
      jQuery(jQuery(this).attr('href')).addClass('show active');
  });
});

/************************** contact form 7 integration */
document.addEventListener('DOMContentLoaded', function() {
  var inputs = document.querySelectorAll('input[name="First_Name"],input[name="Last_Name"]');
  inputs.forEach(function(input) {
      input.addEventListener('input', function() {
          this.value = this.value.replace(/\d+/g, '');
      });
  });
});
document.addEventListener('DOMContentLoaded', function() {
  var numberInputs = document.querySelectorAll('input[name="Mobile_Number"]');
  numberInputs.forEach(function(input) {
      input.addEventListener('input', function() {
          this.value = this.value.replace(/[^\d+]/g, '');
      });
  });
});

jQuery(document).ready(function($) {
  jQuery('#apartment-type').hide();

  jQuery('#interested-in').change(function() {
      var selectedOption = jQuery(this).val();
      if (selectedOption === 'Apartment') {
          jQuery('#apartment-type').slideDown();
      } else {
          jQuery('#apartment-type').slideUp();
      }
  });
});




document.addEventListener('DOMContentLoaded', function() {
  var emailInput = document.querySelector('input[name="Email"]');
  if (emailInput) {
      var errorMessageDiv = document.createElement('div');
      errorMessageDiv.className = 'wpcf7-not-valid-tip';
      emailInput.parentNode.insertBefore(errorMessageDiv, emailInput.nextSibling);
      emailInput.addEventListener('input', function() {
          var emailValue = this.value;
          var domainParts = emailValue.split('@')[1];
          if (domainParts) {
              var domain = domainParts.split('.');
              var validExtensions = ["com", "org", "net"];
              var extension = domain[domain.length - 1];
              if (!validExtensions.includes(extension)) {
                  this.setCustomValidity("Please use an email address with a valid extension: .com, .org, .net");
                  errorMessageDiv.textContent = this.validationMessage;
                  errorMessageDiv.style.display = 'block';
              } else {
                  this.setCustomValidity("");
                  errorMessageDiv.style.display = 'none';
              }
          }
      });
      emailInput.addEventListener('invalid', function() {
          this.setCustomValidity("Please enter a valid email address.");
          errorMessageDiv.textContent = this.validationMessage;
          errorMessageDiv.style.display = 'block';
      });
      emailInput.form.addEventListener('submit', function(event) {
          if (!emailInput.validity.valid) {
              event.preventDefault();
              errorMessageDiv.style.display = 'block';
          } else {
              errorMessageDiv.style.display = 'none';
          }
      });
  }
});


jQuery(document).ready(function($) {
	 jQuery('.home .contact-form').removeClass('wpcf7-form');
  function getLanguageFromUrl() {
      var path = window.location.pathname; 
      if (path.startsWith('/ar')) {
          return 'ar';
      } else if (path.startsWith('/en')) {
          return 'en';
      }
      return 'en'; 
  }
  jQuery.fn.cf7Validate = function() {
      var isValid = true;
      this.find('.wpcf7-not-valid').removeClass('wpcf7-not-valid'); 

      this.find('.wpcf7-validates-as-required').each(function() {
          var $field = $(this);
          if ($field.val().trim() === '') {
              $field.addClass('wpcf7-not-valid'); 
              isValid = false;
          }
      });

      return isValid; 
  };


  $('form.wpcf7-form').on('submit', function(e) {
	 var excludefrm = false;
    e.preventDefault();

    var $form = $(this);
    if ($form.data('submitted') === true) {
        return false;
    }
    $form.data('submitted', true);

    var isValid = $form.cf7Validate();
    if (!isValid) {
        $form.find('.wpcf7-not-valid').first().focus(); 
        $form.data('submitted', false); 
        return false; 
    }

      var formData = new FormData($form[0]);
      var formDataObject = {};
      formData.forEach(function(value, key) {
          formDataObject[key] = value;
		  if(key == 'exclude_SF')
			  excludefrm = true;
      });

      var currentLanguage = getLanguageFromUrl(); 
      var successUrl = currentLanguage === 'ar'
        ? 'https://deyaar.ae/ar/success/'
        : 'https://deyaar.ae/en/success/';
      var failedUrl = currentLanguage === 'ar'
        ? 'https://deyaar.ae/ar/failed/'
        : 'https://deyaar.ae/en/failed/';
	if(excludefrm){
		window.location.href = successUrl;
		
	}
		else{
      var external_keys = $form.find('input[name="External_Key2"]').val() || $form.find('input[name="External_Key"]').val();
	  if(external_keys!='dds.parkfive'){
      jQuery.ajax({
          url: SalesforceAjaxObject.ajax_url,
          //url: "/wp-admin/admin-ajax.php",
          method: 'POST',
          dataType: 'json',  
          data: {
              action: 'send_salesforce_email',
              formData: JSON.stringify(formDataObject),
              external_key: external_keys,
              nonce: SalesforceAjaxObject.nonce,
          },
          success: function(response) {
            console.log('AJAX response:', response); 
            if (response && response.success) {
                window.location.href = successUrl;
            } else {
				window.location.href = failedUrl;
            }
        },
          error: function(xhr, status, error) {
              console.error('Error: ' + error);
              window.location.href = failedUrl;
          }
      });}
	}
  });
  
});