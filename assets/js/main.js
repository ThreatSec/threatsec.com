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

			// allow normal form POST (no preventDefault) and clear fields on successful page load
$("#contact-form").submit(function(){
  // do nothing to prevent default submit
  // optional: let the Apps Script redirect back; fields will already be cleared by server redirect
});

document.getElementById('contact-form').addEventListener('submit', function(e){
  try {
    if (typeof grecaptcha !== 'undefined' && grecaptcha.getResponse().length === 0) {
      e.preventDefault();
      alert('Please complete the reCAPTCHA and try again.');
      return false;
    }
  } catch (err) { /* ignore if grecaptcha not present */ }
});


	});

})(jQuery);
