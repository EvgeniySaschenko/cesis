// Активный пункт меню
(function(){
	let btnClose= document.getElementById('btn_burger-header-close');
	let funActiveMenu__item= (event, el)=>{
		for(let i= 0, l= el.length; l > i; i++){
			el[i].addEventListener(event, function(){
				smoothScroll( el[i].getAttribute('data-section') );
				btnClose.click();
			})
		}
	}
	let nav_header= document.querySelectorAll('.nav_header .nav__item');
	funActiveMenu__item('click', nav_header);
	funActiveMenu__item('touch', nav_header);
})();