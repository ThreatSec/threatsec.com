/*
	Escape Velocity by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	skel
		.breakpoints({
			desktop: '(min-width: 737px)',
			tablet: '(min-width: 737px) and (max-width: 1200px)',
			mobile: '(max-width: 736px)'
		})
		.viewport({
			breakpoints: {
				tablet: {
					width: 1080
				}
			}
		});

	$(function() {

		var	$window = $(window),
			$body = $('body');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				$body.removeClass('is-loading');
			});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// CSS polyfills (IE<9).
			if (skel.vars.IEVersion < 9)
				$(':last-child').addClass('last-child');

		// Prioritize "important" elements on mobile.
			skel.on('+mobile -mobile', function() {
				$.prioritize(
					'.important\\28 mobile\\29',
					skel.breakpoint('mobile').active
				);
			});


		// Off-Canvas Navigation.

			// Title Bar.
				$(
					'<div id="titleBar">' +
						'<a href="#navPanel" class="toggle"></a>' +
						'<span class="title">' + $('#logo').html() + '</span>' +
					'</div>'
				)
					.appendTo($body);

			//insert copyright year
			var year = (new Date().getFullYear());
			$('#copyrightYear').text(year);

			//scroll to form
/*
$("a[href='#contact']").click(function(event) {
  $("html, body").animate({ scrollTop: $(document).height() }, "slow");
  return false;
});

*/
$("a[href='#contact']").bind('touchstart touchend', function(e) {
//        e.preventDefault();

        $(this).toggleClass('hover_effect');
    });


			//form post 

			$("#contact-form").submit(function(e){
				e.preventDefault();
				
				var name = $("#contact-name").val()
				var email = $("#contact-email").val()
				var message = $("#contact-message").val()
				var recaptchaResponse = $("#g-recaptcha-response").val()
				
				var formData = $("#contact-form").serialize()
				
				
				// send ajax
				$.ajax({
					url: 'https://contact.threatsec.com/send', // url where to submit the request
					type : "POST", // type of action POST || GET
					dataType : 'json', // data type					
					data: formData,					
					success : function(result){						
						if (result.msg === "ok"){
							$("#contact-name").val("");
							$("#contact-email").val("");
							$("#contact-message").val("");							
							alert("Thank you, your email has been sent");
						}
						else {
							alert("Error, unable to sent an email.  Please try again later");
						}
					},
					error : function(xhr,status, error){
						var errors =[]
						var result = JSON.parse(xhr.responseText)
						console.log(result)									
						alert("Error: we were unable to send your message for the following reason(s):\n\n* "+result.msg.replace(/,./g, "\n* "))
					}
				})
			});



	});

})(jQuery);
