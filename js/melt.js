$(function(){
	/* Hamburger Menu */
	$(".hamburger").on("click",function(){
		$(".mobile_menu").addClass("open");
		$(".mega_menu_wrapper li").addClass("t_blue");
	});
	
	$(".btn_close").on("click",function(){
		$(".mobile_menu, .mega_sub").removeClass("open");
		$(".mega_menu_wrapper li").removeClass("t_blue");
	});

	/* Change Submenu Position */
	$('.mega_menu').each(function () {
	    $(this).on('click', function(){
	    	$(this).find('.mega_sub').toggleClass('open');
	    });
	    return false;
	});

	$('.play_video').on('click', function(){
		$('.video_popup').addClass('show');
		$("iframe")[0].src += "1";
	});

	$('.icon_close').on('click', function(){
		$('.video_popup').removeClass('show');
		$('.video_popup').attr('src', $('.video_popup').attr('src').replace('autoplay=', 'autoplay=1'));
	});
})

