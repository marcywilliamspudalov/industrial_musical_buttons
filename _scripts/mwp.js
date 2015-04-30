

jQuery(document).ready(function() {
    var offset = 250;
    var duration = 300;
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.back-to-top').fadeIn(duration);
        } else {
            jQuery('.back-to-top').fadeOut(duration);
        }
    });

    jQuery('.back-to-top').click(function(event) {
        event.preventDefault();
        jQuery('html, body').animate({scrollTop: 0}, duration);
        return false;
    })
});


Webflow.push(function () {
    var fulls = $('.full-page');
    var win = $(window);
    Webflow.resize.on(function () {
      fulls.height(win.height());
    });
  });

$(document).ready(function(){
                $(".contactLink").click(function(){
                    if ($("#contactForm").is(":hidden")){
                        $("#contactForm").slideDown("slow");
                    }
                    else{
                        $("#contactForm").slideUp("slow");
                    }
                });
            });
            function closeForm(){
                $("#messageSent").show("slow");
                setTimeout('$("#messageSent").hide();$("#contactForm").slideUp("slow")', 2000);
           }

$(document).ready(function() {
  function filterPath(string) {
    return string
      .replace(/^\//,'')
      .replace(/(index|default).[a-zA-Z]{3,4}$/,'')
      .replace(/\/$/,'');
  }
  $('a[href*=#]').each(function() {
    if ( filterPath(location.pathname) == filterPath(this.pathname)
    && location.hostname == this.hostname
    && this.hash.replace(/#/,'') ) {
      var $targetId = $(this.hash), $targetAnchor = $('[name=' + this.hash.slice(1) +']');
      var $target = $targetId.length ? $targetId : $targetAnchor.length ? $targetAnchor : false;
       if ($target) {
         var targetOffset = $target.offset().top;
         $(this).click(function() {
           $('html, body').animate({scrollTop: targetOffset}, 1000);
           var d = document.createElement("div");
        d.style.height = "101%";
        d.style.overflow = "hidden";
        document.body.appendChild(d);
        window.scrollTo(0,scrollToM);
        setTimeout(function() {
        d.parentNode.removeChild(d);
            }, 10);
           return false;
         });
      }
    }
  });
});