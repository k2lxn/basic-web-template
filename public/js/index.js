
function set_text_scolling() {
	document.querySelectorAll( ".scroll-wrapper" ).forEach( function( wrapper ){
		let text = wrapper.querySelector(".scroll") ;
		let container_width = wrapper.getBoundingClientRect().width ;
        let text_width = text.getBoundingClientRect().width ;
        if ( text_width > container_width ) {
            //inject a second copy of text for looping
            text.innerHTML =  text.innerHTML + text.innerHTML ;
            
            // set css variables for animation
            wrapper.style.setProperty('--text-width', `-${text_width + 100}px` ); // 100px is the margin between text spans
            
            let scroll_time = Math.floor(text_width / 100) * 6;

            wrapper.style.setProperty('--scroll-time', `${scroll_time}s`);
            wrapper.classList.add( "scrollable" );
        }
        else {
            wrapper.classList.remove( "scrollable" );
        }
	});
}

function position_tooltips() {
	document.querySelectorAll( ".tooltip-center" ).forEach( function( tooltip ){
		let offset = ( tooltip.parentElement.getBoundingClientRect().width / 2 ) - ( tooltip.getBoundingClientRect().width /2 ) ;
		tooltip.style.left = `${offset}px` ;
	});
}


window.onload = function() {
	set_text_scolling();
	position_tooltips();
}