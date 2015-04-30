$(window).load(function () {

var size = 1;
var button = 1;
var button_class = "gallery-header-center-right-links-current";
var normal_size_class = "gallery-content-center-normal";
var full_size_class = "gallery-content-center-full";
var $container = $('#gallery-content-center');
    
$container.isotope({itemSelector : 'img'});


function check_button(){
	$('.gallery-header-center-right-links').removeClass(button_class);
	if(button==1){
		$("#filter-all").addClass(button_class);
		$("#gallery-header-center-left-title").html('All');
		}
	if(button==2){
		$("#filter-branding").addClass(button_class);
		$("#gallery-header-center-left-title").html('Branding');
		}
	if(button==3){
		$("#filter-graphics").addClass(button_class);
		$("#gallery-header-center-left-title").html('Graphics');
		}	
	if(button==4){
		$("#filter-web").addClass(button_class);
		$("#gallery-header-center-left-title").html('Web');
		}
	if(button==5){
		$("#filter-photography").addClass(button_class);
		$("#gallery-header-center-left-title").html('Photography');
		}
	if(button==6){
		$("#filter-otherartwork").addClass(button_class);
		$("#gallery-header-center-left-title").html('Other Artwork');
		}
}
	
function check_size(){
	$("#gallery-content-center").removeClass(normal_size_class).removeClass(full_size_class);
	if(size==0){
		$("#gallery-content-center").addClass(normal_size_class); 
		$("#gallery-header-center-left-icon").html('<span class="iconb" data-icon="&#xe23a;"></span>');
		}
	if(size==1){
		$("#gallery-content-center").addClass(full_size_class); 
		$("#gallery-header-center-left-icon").html('<span class="iconb" data-icon="&#xe23b;"></span>');
		}
	$container.isotope({itemSelector : 'img'});
}


	
$("#filter-all").click(function() { $container.isotope({ filter: '.all' }); button = 1; check_button(); });
$("#filter-branding").click(function() {  $container.isotope({ filter: '.branding' }); button = 2; check_button();  });
$("#filter-graphics").click(function() {  $container.isotope({ filter: '.graphics' }); button = 3; check_button();  });
$("#filter-web").click(function() {  $container.isotope({ filter: '.web' }); button = 4; check_button();  });
$("#filter-photography").click(function() {  $container.isotope({ filter: '.photography' }); button = 5; check_button();  });
$("#filter-otherartwork").click(function() {  $container.isotope({ filter: '.otherartwork '}); button = 6; check_button();  });

$("#gallery-header-center-left-icon").click(function() { if(size==0){size=1;}else if(size==1){size=0;} check_size(); });


check_button();
check_size();
});