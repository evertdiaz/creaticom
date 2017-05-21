(function(jQuery) {
    'use strict';
    jQuery(document).ready(function() {

	

        /* ============== DETECT MOBILE DEVICES ============== */
		var isMobile = {
            Android: function() {
                return navigator.userAgent.match(/Android/i);
            },
            BlackBerry: function() {
                return navigator.userAgent.match(/BlackBerry/i);
            },
            iOS: function() {
                return navigator.userAgent.match(/iPhone|iPad|iPod/i);
            },
            Opera: function() {
                return navigator.userAgent.match(/Opera Mini/i);
            },
            Windows: function() {
                return navigator.userAgent.match(/IEMobile/i);
            },
            any: function() {
                return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
            }
        };
        
            
            /*================ FLIP ANIMATION HEIGHT ADJUST ==================*/
             jQuery('.flip').each(function(){
                 jQuery(this).css('height', jQuery(this).children().height() + 'px');
             });
             
            
            /* ============== MOBILE MENU ============== */
            jQuery('.mobile-menu-toggle').on('click', function(){
                jQuery('.mobile-menu').slideToggle();
            });
            jQuery(window).on('resize', function(){
                if(window.matchMedia('screen and (min-width : 1200px)').matches&&jQuery('.mobile-menu').css('display')==='block'){
                    jQuery('.mobile-menu').toggle();
                }
            });
            /* ============== FOOTER TOGGLE ============== */
            jQuery('a.footer-toggle').on('click', function(e){
                e.preventDefault();
                jQuery('#footer-toggle').slideToggle();
                jQuery(this).children('i').toggleClass('fa-angle-down fa-angle-up');
                var height = jQuery(window).scrollTop() + jQuery('#footer-toggle').height();
                jQuery('body, html').animate({scrollTop : height + 'px'});
            });
            /* ============== DROP TOGGLE ============== */
            jQuery('.drop-toggle-2').on('click', function(e){
                e.preventDefault();
                jQuery(this).siblings('.drop-menu-2').toggle();
            });
            /* ============== DROP ANIMATION ============== */
            jQuery('.drop-toggle').on('click', function(e){
                e.preventDefault();
                jQuery(this).siblings('.drop-menu').slideToggle();
                jQuery(this).find('i').toggleClass('fa-angle-down fa-angle-up');
            });
            /* ============== TOGGLE ================*/
            jQuery('.toggle > nav').on('click', function(){
                jQuery(this).children('i').toggleClass('fa-angle-down fa-angle-up');
                jQuery(this).siblings('div').slideToggle();
                    
            });
            /* ================ ACCORDION =============== */
            jQuery('.accordion > .item > nav').on('click',function(){
                //aditional condition for clicking active item
                if(!jQuery(this).parent('.item').hasClass('active')){
                    jQuery(this).parents('.accordion').children('.item.active').children('nav').children('i').toggleClass('fa-angle-down fa-angle-up');
                    jQuery(this).parents('.accordion').children('.item.active').children('div').slideToggle();
                    jQuery(this).parents('.accordion').children('.item.active').toggleClass('active');
                }
                jQuery(this).parent('.item').toggleClass('active');
                jQuery(this).children('i').toggleClass('fa-angle-down fa-angle-up');
                jQuery(this).siblings('div').slideToggle();
            });
            /* ============= TABS ===============*/
            jQuery('.select-table > nav a').on('click', function(event){
                event.preventDefault();
                var id = '#' + jQuery(this).parents('.select-table').attr('id');
                jQuery(id + ' li.active').toggleClass('active');
                jQuery(this).parent('li').toggleClass('active');
                jQuery(id + ' ' + jQuery(this).attr('href')).toggleClass('active');
            });
            /* ============ FORM AMMOUNT ============*/
            jQuery('.ammount input[type=text]').attr('disabled','disabled');
            jQuery('.ammount button').on('click', function(e){
                e.preventDefault();
                if(jQuery(this).text()==='+'){
                    jQuery(this).siblings('input[type=text]').val(parseInt(jQuery(this).siblings('input[type=text]').val())+1);
                }
                else if(parseInt(jQuery(this).siblings('input[type=text]').val())>1){
                    jQuery(this).siblings('input[type=text]').val(parseInt(jQuery(this).siblings('input[type=text]').val())-1);
                }
            });
            
            /* ============ FORM RATE ============*/
            jQuery('.form-rate a').on('click', function(e){
                e.preventDefault();
                if(!jQuery(this).parent('li').hasClass('active')){
                    jQuery(this).parent('li').siblings('.active').children('a').children('i').toggleClass('fa-star fa-star-o');
                    jQuery(this).parent('li').siblings('.active').toggleClass('active');
                }
                jQuery(this).parent('li').toggleClass('active');
                jQuery(this).parents('.form-rate').siblings('#form-rate').children('input[type=hidden]').val(jQuery(this).parent('li').index()+1);
            });
            jQuery('.form-rate a').on('mouseover mouseout', function(){
                if(!jQuery(this).parent('li').hasClass('active')){
                    jQuery(this).children('i').toggleClass('fa-star fa-star-o');
                }
            });
            
            /*================ SLIDE ANIMATION ======== */
            jQuery('.slide-toggle').on('click', function(){
                if(jQuery(this).siblings('.slide-menu').css('right')!='-240px'){
                    jQuery(this).siblings('.slide-menu').toggle('width');
                }
                else{                        
                    jQuery(this).siblings('.slide-menu').toggle('width');
                }
            });
            
            /* ============== MAIN MENU SEARCH ============== */
            jQuery('.main-menu-search').on('click', function(){
                if(jQuery('#search-container').css('display')=='none'){
                    jQuery('.main-menu').find('#menu-main').fadeToggle( function(){
                        jQuery('#search-container').fadeToggle();
                        jQuery('#search-container').css('display', 'table');
                        jQuery('#search-container').find('input').focus();
                        if(jQuery(window).scrollTop()==0){jQuery('.main-menu').css('background-color', '#ffffff');}
                    });
                }
                else{
                    jQuery('#search-container').fadeToggle(function(){
                        jQuery('.main-menu').find('#menu-main').fadeToggle();
                        if(jQuery(window).scrollTop()==0){jQuery('.main-menu').css('background-color', 'transparent');}
                    });
                }
                
            });
            
            /* ============== SIDE MENU ============== */
            jQuery('.toggle-1-button').on('click', function(){
                if(jQuery('#toggle-1').css('display') == 'none')
                {
                    jQuery('#toggle-1').css('display', 'block');
                    jQuery('#wrapper-1').animate({left: '-300px'}, 500);
                    if(navigator.userAgent.indexOf("Safari") <= -1)jQuery('body').css('overflow', 'hidden');
                    jQuery('.main-menu').animate({left: '-300px'}, 500);
                    jQuery('#toggle-1').animate({right: '0px'}, 500,function(){
                        jQuery('#toggle-1').css('overflow', 'auto');
                    });
                }
                else{
                    jQuery('#wrapper-1').animate({left: '0px'}, 500);
                    if(navigator.userAgent.indexOf("Safari") <= -1)jQuery('body').css('overflow', 'auto');
                    jQuery('.main-menu').animate({left: '0px'}, 500);
                    jQuery('#toggle-1').animate({right: '-300px'}, 500,function(){
                        jQuery('#toggle-1').css('display', 'none');
                        jQuery('#toggle-1').css('overflow', 'hidden');
                    });
                }
            });
            
            /* ============== HOME SLIDER ============== */
            jQuery('#revslider .fullwidthbanner').revolution({
                    delay: 10000,
                    autoplay: false,
                    hideThumbs:10,
                    navigationType:'none',
                    hideTimerBar:'on',
                    fullWidth: 'on',
                    startwidth: 1340
            });
            jQuery('#revslider .banner').revolution({
                    delay: 10000,
                    autoplay: false,
                    hideThumbs:10,
                    navigationType:'none',
                    hideTimerBar:'on',
                    fullWidth: 'off',
                    startwidth: 1340
            });
            jQuery('#revslider-2 .fullwidthbanner').revolution({
                    delay: 10000,
                    autoplay: false,
                    hideThumbs:10,
                    navigationType:'none',
                    hideTimerBar:'on',
                    fullWidth: 'off',
                    fullScreen: 'on',
                    startwidth: 1340
            });

            /* ============== PARALLAX ============== */
            if(!isMobile.any()) {
                jQuery('.parallax').each(function() {
                        jQuery(this).parallax('50%', 0.15);
                });
                 jQuery('.parallax-thight').each(function() {
                        jQuery(this).parallax('50%', 0.15);
                });
                jQuery(window).on('resize',function(){
                    if(jQuery(this).width()<1024){
                        if(jQuery('.parallax').length > 0 && !isMobile.any()) {
                            jQuery('.parallax').each(function() {
                                jQuery(this).parallax('50%', 0);
                            });
                        }
                        if(jQuery('.parallax-thight').length > 0 && !isMobile.any()) {
                            jQuery('.parallax-thight').each(function() {
                                    jQuery(this).parallax('50%', 0);
                            });
                        }
                    }
                    else{
                        if(jQuery('.parallax').length > 0 && !isMobile.any()) {
                            jQuery('.parallax').each(function() {
                                jQuery(this).parallax('50%', 0.15);
                            });
                        }
                        if(jQuery('.parallax-thight').length > 0 && !isMobile.any()) {
                            jQuery('.parallax-thight').each(function() {
                                    jQuery(this).parallax('50%', 0.15);
                            });
                        }
                    }
                });
            }
            
            /* ============== STICKY MENU ============== */
            if(!isMobile.any()){
                jQuery('.main-menu').sticky({ topSpacing: 0 });
                //height change
                jQuery( window ).on('scroll',function(){
                    if((jQuery(this).scrollTop()>=jQuery('.main-menu').offset().top||jQuery('body').css('top').replace('px', '')<0)&&jQuery(this).scrollTop()!=0){
                        jQuery('.menu-center').css('height', '78px');
                        jQuery('.menu-center').css('min-height', '78px');
                        jQuery('.main-menu .navbar-right .nav > li > a').css('height', '78px');
                        jQuery('.main-menu .navbar-right .nav > li > a').css('line-height', '78px');
                        jQuery('#main-menu-2.main-menu').css('background-color', '#ffffff');
                    }
                    else
                    {
                        jQuery('.menu-center').css('height', '98px');
                        jQuery('.menu-center').css('min-height', '98px');
                        jQuery('.main-menu .navbar-right .nav > li > a').css('height', '98px');
                        jQuery('.main-menu .navbar-right .nav > li > a').css('line-height', '98px');
                        jQuery('#main-menu-2.main-menu').css('background-color', 'transparent');
                    }
                });
                // page refresh fix
                jQuery( window ).trigger('scroll');
            }
            
            /* ============== HOVER FIX ============= */
            if(isMobile.any()){
                jQuery('a').on('touchstart',function(){
                    jQuery(this).toggleClass('hover');
                });
                jQuery('div').on('touchstart',function(){
                    jQuery(this).toggleClass('hover');
                });
            }
            
            /* ============== OWL CAROUSEL ============= */
            var loopActive;
            if(isMobile.any()){loopActive = false;}
            else {loopActive = true;}
            jQuery('#carousel-1').owlCarousel({
                nav:true,
                dots:false,
                items:1,
                animateOut: 'fadeOut',
                animateIn: 'fadeIn',
                smartSpeed:1000,
                navContainer: '#carousel-1-nav',
                navText: ['',''],
                loop: loopActive,
                center: true
            });
            jQuery('#carousel-2').owlCarousel({
                autoplay:true,
                autoplayTimeout:5000,
                autoplayHoverPause:true,
                loop: loopActive,
                items:1,
                animateOut: 'fadeOut',
                animateIn: 'fadeIn',
                smartSpeed:1000,
                dotsEach:true
            });



            /* ============== PORTFOLIO CAROUSEL ============= */
            if(jQuery('.portfolio-carousel').length > 0) {
                    jQuery('.portfolio-carousel').each(function() {
                            jQuery(this).owlCarousel({
                                autoplay:true,
                                autoplayTimeout:5000,
                                autoplayHoverPause:true,
                                loop: loopActive,
                                responsive:{
                                    0:{
                                        items:1
                                    },
                                    420:{
                                        items:2
                                    },
                                    767:{
                                        items:4
                                    }
                                },
                                smartSpeed:1000,
                                nav:false
                            });
                            jQuery(this).on('resized.owl.carousel', function(event) {
                                jQuery(window).trigger('resize');
                            });
                    });
            }
            /* ============== CLIENTS ============= */
            if(jQuery('.clients-carousel').length > 0) {
                    jQuery('.clients-carousel').each(function() {
                            jQuery(this).owlCarousel({
                                autoplay:true,
                                autoplayTimeout:5000,
                                autoplayHoverPause:true,
                                loop: loopActive,
                                responsive:{
                                    0:{
                                        items:2
                                    },
                                    540:{
                                        items:4
                                    }
                                },
                                smartSpeed:1000,
                                nav:false
                            });
                    });
            }
            /* ============== TESTIMONIALS ============= */
            if(jQuery('.testimonials, .testimonials2').length > 0) {
                    jQuery('.testimonials, .testimonials2').each(function() {
                            jQuery(this).owlCarousel({
                                autoplay:true,
                                autoplayTimeout:5000,
                                autoplayHoverPause:true,
                                loop: loopActive,
                                items:1,
                                animateOut: 'fadeOut',
                                animateIn: 'fadeIn',
                                smartSpeed:1000,
                                dotsEach:true
                            });
                    });
            }
            /* ============== SLIDE SHOW ============= */
            if(jQuery('.slideshow').length > 0) {
                    jQuery('.slideshow').each(function() {
                            jQuery(this).owlCarousel({
                                autoplay:true,
                                autoplayTimeout:5000,
                                autoplayHoverPause:true,
                                loop: loopActive,
                                items:1,
                                animateOut: 'fadeOut',
                                animateIn: 'fadeIn',
                                smartSpeed:1000,
                                dots: false,
                                nav: true,
                                navText: ['','']
                            });
                    });
            }

            /*================ LETTER ANIMATION ==================*/
             jQuery('.la-hover').on( 'mouseenter' , function() {
                var item = jQuery(this).children('.letter-animation');
                if(!item.data('active')){
                    item.data('active', true);
                    var text = item.text();
                    var speed = item.data('speed');
                    var characters = text.length;
                    var iteration = 0;
                    var fn = function(){
                        var output = "";
                        for(var i=0; i<characters; i++){
                            if(iteration<=i){
                                output += String.fromCharCode(Math.random()*128);
                            }
                            else output += text.charAt(i);
                        }
                        item.text(output);
                        if(iteration <= characters){
                            setTimeout(fn, 50);
                            setTimeout(function(){iteration++;}, speed/characters);
                        }
                        else item.data('active', false);
                    };
                    fn();
                }
            });
            /*================ COUNT DOWN ==================*/
            jQuery('.number-container').appear(function() {
                    var count_element = jQuery('.number', this).html();
                    jQuery('.number', this).countTo({
                                    from: 0,
                                    to: count_element,
                                    speed: 2500,
                                    refreshInterval: 50
                    });
            });
            
            
            /* ============== PIE CHART ============== */
            if(jQuery('.chart').length > 0) {
                jQuery('.chart').each(function(){
                    jQuery(this).appear(function(){
                        var chart = jQuery(this);
                        chart.easyPieChart({
                            lineWidth: 7,
                            scaleColor: false,
                            trackColor: '#e4e4e4',
                            barColor: chart.css('border-left-color'),
                            size: 160,
                            onStep: function(from, to, percent) {
                                chart.children('div').children('.percent').text(Math.round(percent));
                            }
                        });
                    });
                });
            };
            /* ============== COVERBOXES ============== */
            jQuery('.coverbox').on('mouseenter', function() {
                if(window.matchMedia('screen and (min-width : 991px)').matches){
                    var index = jQuery(this).parent().index();
                    jQuery(this).parents('.coverboxes').children('.active').animate({marginLeft: "0"}, {duration: 400, queue: false});
                    jQuery(this).parents('.coverboxes').children('.active').toggleClass('active');
                    jQuery(this).parents('.coverboxes').children().eq(index+1).animate({marginLeft: jQuery(this).parent().width()+29},{duration: 400, queue: false});
                    jQuery(this).parents('.coverboxes').children().eq(index+1).toggleClass('active');
                }
            });
            jQuery(window).on('resize', function(){
                var item = jQuery('.coverboxes').children('.active');
                item.css('margin-left', item.eq(item.index()-1).width()+29);
            });
            jQuery('.coverboxes').children('div').eq(0).children('.coverbox').trigger('mouseenter');
            
            /* ============== VOLUME BAR ============== */
            jQuery('.volume .bar').on('mousedown', function(e){
                e.preventDefault();
                var position = e.pageX - jQuery(this).offset().left;
                var fill = jQuery(this).children('.bar-fill');
                if(position<(parseInt(fill.css('margin-left').replace('px', '')) + parseInt(fill.css('width').replace('px', '')) +7.5)
                        &&position>(parseInt(fill.css('margin-left').replace('px', '')) + parseInt(fill.css('width').replace('px', '') -7.5))){
                    jQuery(this).data('draggedmax', true);
                }
                else if(position<(parseInt(fill.css('margin-left').replace('px', ''))+7.5)&&position>(parseInt(fill.css('margin-left').replace('px', '')))-7.5){
                    jQuery(this).data('draggedmin', true);
                }
                else if(position>=0&&position<jQuery(this).width()){
                    if(position > fill.css('margin-left').replace('px','')){
                        fill.css('width', position-fill.css('margin-left').replace('px','') + 'px');
                    }
                    else{
                        fill.css('width', fill.css('width').replace('px','') - (position - fill.css('margin-left').replace('px','')) + 'px');
                        fill.css('margin-left', position + 'px');
                    }
                    var min = (jQuery(this).data('max')-jQuery(this).data('min'))*(fill.css('margin-left').replace('px', '')/jQuery(this).width());
                    var max = min + (jQuery(this).data('max')-jQuery(this).data('min'))*(fill.css('width').replace('px', '')/jQuery(this).width());
                    jQuery(this).parent().siblings('.min').text(parseInt(min));
                    jQuery(this).parent().siblings('.max').text(parseInt(max));
                }
            });
            jQuery(document).on('mouseup', function(){
                jQuery('.bar').data('draggedmin',false);
                jQuery('.bar').data('draggedmax',false);
            });
            jQuery(document).on('mousemove', function(e){
                jQuery('.bar').each(function(){
                    if(jQuery(this).data('draggedmin')===true){
                        var position = e.pageX - jQuery(this).offset().left;
                        var fill = jQuery(this).children('.bar-fill');
                        if(position<0)position=0;
                        if(position>jQuery(this).width())position=jQuery(this).width();
                        fill.css('width', fill.css('width').replace('px','') - (position - fill.css('margin-left').replace('px','')) + 'px');
                        fill.css('margin-left', position + 'px');
                        var min = (jQuery(this).data('max')-jQuery(this).data('min'))*(fill.css('margin-left').replace('px', '')/jQuery(this).width());
                        var max = min + (jQuery(this).data('max')-jQuery(this).data('min'))*(fill.css('width').replace('px', '')/jQuery(this).width());
                        jQuery(this).parent().siblings('.min').text(parseInt(min));
                        jQuery(this).parent().siblings('.max').text(parseInt(max));
                    }
                    else if(jQuery(this).data('draggedmax')===true){
                        var position = e.pageX - jQuery(this).offset().left;
                        var fill = jQuery(this).children('.bar-fill');
                        if(position<0)position=0;
                        if(position>jQuery(this).width())position=jQuery(this).width();                            
                        fill.css('width', position-fill.css('margin-left').replace('px','') + 'px');
                        var min = (jQuery(this).data('max')-jQuery(this).data('min'))*(fill.css('margin-left').replace('px', '')/jQuery(this).width());
                        var max = min + (jQuery(this).data('max')-jQuery(this).data('min'))*(fill.css('width').replace('px', '')/jQuery(this).width());
                        jQuery(this).parent().siblings('.min').text(parseInt(min));
                        jQuery(this).parent().siblings('.max').text(parseInt(max));
                    }
                });
            });

            
            /* ============== PROGRESS BAR ============== */
            jQuery('.progress-bar').appear(function() {
                var progress = jQuery(this).data('progress');
                jQuery(this).find('.bar-fill').animate({ width: progress + '%'}, 2000);
                jQuery(this).find('output > span').countTo();
            });

            /*================ ANIMATIONS ==================*/
            jQuery('.my-animation').appear(function() {
                    jQuery(this).addClass('animated');
            });
            
            /*================ MESSAGES ==================*/
            jQuery('.message > button').on('click', function() {
                    jQuery(this).parent('.message').slideToggle();
            });
            
            /*================== CONTACT ====================*/
            var personal = jQuery('input[name="name"]');
            var email = jQuery('input[name="email"]');
            var subject = jQuery('input[name="subject"]');
            var message = jQuery('textarea[name="message"]');
            var errors;

            function validateEmail(sEmail) {
                var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)jQuery/;
                if (filter.test(sEmail))
                    return true;
                else
                    return false;
            }

            
            if (jQuery('.contact').length > 0){
                jQuery('.contact')[0].reset();
                jQuery('.contact button[type="submit"], .contact input, .contact textarea').removeAttr('disabled');
            };

            jQuery('#contact').submit(function() {
                errors = 0;
                var formInput = jQuery(this).serialize();
                if (personal.val() == '') {
                    personal.addClass('error');
                    errors++;
                }
                else {
                    personal.removeClass('error');
                }
                if (subject.val() == '') {
                    subject.addClass('error');
                    errors++;
                }
                else {
                    subject.removeClass('error');
                }


                if (email.val() == '' || !validateEmail(email.val())) {
                    email.addClass('error');
                    errors++;
                }
                else {
                    email.removeClass('error');
                }

                if (message.val() == '') {
                    message.addClass('error');
                    errors++;
                }
                else {
                    message.removeClass('error');
                }
                // Success validate
                if (errors == 0) {
                    jQuery('.contact button[type="submit"], .contact input, .contact textarea').attr('disabled', 'disabled');
                    jQuery.ajax({
                        type: "POST",
                        url: 'assets/php/contact_form/',
                        data: formInput,
                        success: function(response) {
                            if (response == "success")
                            {
                                jQuery(".contact > div").slideUp(500, function(){
                                    jQuery("#success-message").slideDown(500);
                                });
                            }
                            else {
                                jQuery("#error-message").slideDown(500);
                            }
                        }
                    });
                }
                return false;
            });

            /*================== FLICKR ====================*/
            
            function FlickrPhotoSet(count, userid, container, api_key) {
                //SET API CALL BASED ON INPUT
                var apiCall = "https://api.flickr.com/services/rest/?format=json&method=flickr.people.getPublicPhotos&user_id=" + userid + "&per_page=" + count + "&page=1&api_key=" + api_key + "&jsoncallback=?";

                //SEND API CALL AND RETURN RESULTS TO A FUNCTION
                if(count != '' && userid != '' && container != '' && api_key != '') {
                        jQuery.getJSON(apiCall, function (data) {
                                //LOOP THROUGH DATA
                                var flickr_container = jQuery(this);
                                jQuery.each(data.photos.photo, function (i, photo) {

                                        //LINK TO IMAGE SOURCE
                                        var img_src = "https://farm" + photo.farm + ".static.flickr.com/" + photo.server + "/" + photo.id + "_" + photo.secret + "_" + "s.jpg";

                                        //LINK TO IMAGE PAGE (REQUIRED BY FLICKR TOS)
                                        var a_href = "https://www.flickr.com/photos/" + userid + "/" + photo.id + "/";


                                        //PLACE IMAGE IN IMAGE TAG AND APPEND TO IMAGES DIV 
                                        jQuery("<img/>").attr("src", img_src).appendTo(container)

                                                        //WRAP IN LINK
                                                        .wrap(("<a href='" + a_href + "'></a>"));
                                });
                        });
            }
        }
        ;



        if (jQuery('.flickr-container').length > 0) {
            jQuery('.flickr-container').each(function () {
                if(jQuery(this).data('count')&&jQuery(this).data('userid')&&jQuery(this).data('apikey')){
                    var count = jQuery(this).data('count');
                    var userid = jQuery(this).data('userid');
                    var api_key = jQuery(this).data('apikey');
                    var container = jQuery(this);
                    FlickrPhotoSet(count, userid, container, api_key);
                }
            });
        }
	});
	
	
	// When page is ready
	jQuery(window).load(function() {
            
                /* ============== FOOTER HOVER ============== */
                var wrap_footer = function(){
                    jQuery('#wrapper-1').css('height','auto');
                    jQuery('#wrapper-2').css('height','auto');
                    if(jQuery(window).height()>=jQuery('#footer').height()){
                        jQuery('#wrapper-1').css('height',jQuery(document).height() + jQuery('#footer').height() + 'px');
                        jQuery('#wrapper-2').css('height',jQuery(document).height() + jQuery('#footer').height() + 'px');
                        jQuery('#footer').css('position','fixed');
                    }
                    else{
                        jQuery('#footer').css('position','static');
                    }
                };
                jQuery(window).on('resize', wrap_footer);
                wrap_footer();
                jQuery('footer').css({display:'block'});
                /* ============== SMOTH SLIDE ============== */
                jQuery('.smooth-scroll').on('click', function(event){
                    event.preventDefault();
                    var id = jQuery(this).attr('href');
                    var position = parseInt(jQuery(document).find(id).offset().top);
                    jQuery('html, body').animate({scrollTop: position});
                });
                /* ============== SCROLL TOP ============== */
                jQuery(window).on('scroll', function(){
                    if(jQuery(this).scrollTop()>jQuery(this).height()/2)jQuery('.scroll-top').css('opacity', 0.7);
                    else jQuery('.scroll-top').css('opacity',0);
                });
                jQuery('.scroll-top').on('click', function(event){
                    event.preventDefault();
                    jQuery('html, body').animate({scrollTop: 0});
                });
                
                /* ============== GALLERY =================*/
                jQuery('.sp-wrap').smoothproducts();
                
                /* ============== ISOTOPE ============== */
                if(jQuery('.isotope').length > 0) {
                    jQuery('.isotope').each(function() {
                        var isotop = jQuery(this);
                        jQuery(window).on('resize', function(){
                            setTimeout(function(){
                                isotop.isotope('layout');
                            }, 300);
                        });
                        isotop.isotope({
                            itemSelector: '.item',
                            masonry: {
                                columnWidth: '.item',
                                layoutMode: 'masonry',
                            }
                        });
                        isotop.siblings('.isotope-menu').find('a').on('click', function(){
                            isotop.siblings('.isotope-menu').find('.active').removeClass('active');
                            jQuery(this).addClass('active');
                            var type = '.' + jQuery(this).text().toLowerCase();
                            if(type=='.all'){
                                type='*';
                            }
                            else{
                            }
                            isotop.isotope({filter: type});
                        });
                        jQuery('#load-more').on('click', function(){
                            jQuery(this).toggle();
                            var newItems = jQuery(this).siblings('.more-items').html();
                            isotop.isotope('insert', jQuery(newItems));
                            jQuery(window).trigger('resize');
                            return false;
                        });
                    });
                    
                };
                 /*=============== ISOTOPE INFO ===============*/
                if(navigator.userAgent.search('MSIE 8.0')>=0){
                    jQuery('.fg-button').css('left', '25%');
                    document.body.onresize = function () {
                        jQuery('.hover-info').each(function(){
                            jQuery(this).css('width', (jQuery(this).parent().width()-20) + 'px');
                            jQuery(this).css('height', (jQuery(this).parent().height()-20) + 'px');
                            jQuery(this).css('margin-top', '-' + (jQuery(this).parent().height()-10) + 'px');
                        });
                    };
                    setTimeout(function(){
                        jQuery('.hover-info').each(function(){
                            jQuery(this).css('width', (jQuery(this).parent().width()-20) + 'px');
                            jQuery(this).css('height', (jQuery(this).parent().height()-20) + 'px');
                            jQuery(this).css('margin-top', '-' + (jQuery(this).parent().height()-10) + 'px');
                            jQuery(this).css('margin-left', '10px');
                        });
                    },1000);
                }
                else{
                    jQuery( window ).on('resize',(function(){
                        jQuery('.hover-info').each(function(){
                            jQuery(this).css('width', (jQuery(this).parent().width()-20) + 'px');
                            jQuery(this).css('height', (jQuery(this).parent().height()-20) + 'px');
                            jQuery(this).css('margin-top', '-' + (jQuery(this).parent().height()-10) + 'px');
                        });
                    }));
                    jQuery('.hover-info').each(function(){
                    jQuery(this).css('width', (jQuery(this).parent().width()-20) + 'px');
                    jQuery(this).css('height', (jQuery(this).parent().height()-20) + 'px');
                    jQuery(this).css('margin-top', '-' + (jQuery(this).parent().height()-10) + 'px');
                    jQuery(this).css('margin-left', '10px');
                });
                }
                
                /*=============== HOVER EFFECT INFOBOX ===============*/
                jQuery('.hoverdir').hoverdir({
                        hoverElem: '.block',
                        easing: 'ease'
                });
                
                
                /* ========= GOOGLE MAP ======== */
                if(typeof google === 'object' && typeof google.maps === 'object'){
                    var stylesArray = [{"featureType":"landscape","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","stylers":[{"saturation":-100},{"lightness":51},{"visibility":"simplified"}]},{"featureType":"road.highway","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"road.arterial","stylers":[{"saturation":-100},{"lightness":30},{"visibility":"on"}]},{"featureType":"road.local","stylers":[{"saturation":-100},{"lightness":40},{"visibility":"on"}]},{"featureType":"transit","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"administrative.province","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":-25},{"saturation":-100}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]}];
                
                    var styledMap = new google.maps.StyledMapType(stylesArray,
                    {name: "Styled Map"});
                    var drag = (jQuery(window).height()>450);
                    
                    jQuery(window).on('resize', function(){
                        map.setCenter({lat: 38.981, lng: -77.136});//coordinates where map is centered after you resize window
                    });
                    
                    var mapOptions = {
                        center: { lat: 38.981, lng: -77.136},//coordinates where map is centered
                        zoom: 14,
                        scrollwheel: false,
                        backgroundColor:'#ffffff',
                        draggable: drag,
                        disableDefaultUI: true,
                        zoomControl: true
                    };
                    var map = new google.maps.Map(document.getElementById('google-map'), mapOptions);
                    var infowindow = new google.maps.InfoWindow();
                    map.mapTypes.set('map_style', styledMap);
                    map.setMapTypeId('map_style');
                    
                    // here starts code where you make points which are placed on map
                    var marker = new google.maps.Marker({
                        position: {lat: 38.977, lng: -77.134},
                        map: map,
                        icon: 'http://www.hilld.studio-themes.com/assets/img/contact/marker.png',
                        title: '1'
                    });
                    google.maps.event.addListener(marker, 'click', function() {
                        infowindow.setContent("first");
                        infowindow.open(map, this);
                    }); 
                    // point declaratioon end
                    
                    var marker = new google.maps.Marker({
                        position: {lat: 38.987, lng: -77.119},
                        map: map,
                        icon: 'http://www.hilld.studio-themes.com/assets/img/contact/marker.png',
                        title: '2'
                    });
                    google.maps.event.addListener(marker, 'click', function() {
                        infowindow.setContent("second");
                        infowindow.open(map, this);
                    }); 
                    var marker = new google.maps.Marker({
                        position: {lat: 38.985, lng: -77.162},
                        map: map,
                        icon: 'http://www.hilld.studio-themes.com/assets/img/contact/marker.png',
                        title: '3'
                    });
                    google.maps.event.addListener(marker, 'click', function() {
                        infowindow.setContent("third");
                        infowindow.open(map, this);
                    }); 
                }
        });
	
})(jQuery);