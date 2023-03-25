$(document).ready(function(){
    $(this).scrollTop(0);
});

jQuery(document).ready(function($){
	var $timeline_block = $('.cd-timeline-block');

	//hide timeline blocks which are outside the viewport
	$timeline_block.each(function(){
		if($(this).offset().top > $(window).scrollTop()+$(window).height()*0.75) {
			$(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
		}
	});

	// timeline animation
	$(window).on('scroll', function(){
		$timeline_block.each(function(){
			if( $(this).offset().top <= $(window).scrollTop()+$(window).height()*0.75 && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) {
				$(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
			}
		});
	});
});

// send mail from contact form
// document.querySelector('#form-button').addEventListener('click', function() {
//     let subject = encodeURIComponent('Message from Bootstrap Button');
//     let body = encodeURIComponent('This is a message sent from a Bootstrap button.');
//     let email = 'jchen2190@gmail.com';
//     window.location.href = 'mailto:' + email + '?subject=' + subject + '&body=' + body;
// });

const date = new Date();
const yr = date.getFullYear();
const copyright = document.getElementById("copyright");
copyright.textContent = `© 2023-${yr} Jon Chen.`