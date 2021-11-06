(function ($) {
	

    jQuery(document).ready(function($){

        
        $('.case-study-carousel').owlCarousel({
           
           items: 3,
           autoplay: false,
           margin:30,
           loop: true,
         
          
    
       })
        
        $('.testimonial-carousel').owlCarousel({
           
           items: 1,
           autoplay: false,
           margin:30,
           loop: true,
            dots:true,
       })
        $('.logo-carousel').owlCarousel({
           
           items: 6,
           autoplay: false,
           margin:30,
           loop: true,
            dots:false,
            nav:false,
       })
       
        
    });
    


    jQuery(window).load(function(){
        
    });
}(jQuery));