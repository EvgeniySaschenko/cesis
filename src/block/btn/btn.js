(function(){
	let toggleBtn= (idBtn)=>{
		/*
			idBtn - id кнопки при нажатии на которую происходит прерключение
			data-id-control - id елемента которому добавляется/удаляется класс ".active" после нажатия на кнопку 
		*/
		// Клик
		let btn= document.getElementById(idBtn);
		if(btn){
			btn.addEventListener('click', function(){
				this.classList.toggle('active');
				let idControl= this.getAttribute('data-id-control');
				document.getElementById(idControl).classList.toggle('active');
			});
			// Касание
			btn.addEventListener('touch', function(){
				this.classList.toggle('active');
				let idControl= this.getAttribute('data-id-control');
				document.getElementById(idControl).classList.toggle('active');
			});
		}
	}


	// Кнопка бургер header - преключение навигации
	toggleBtn('btn_burger-header-open');
	toggleBtn('btn_burger-header-close');
})();

// скролл к portfolio
(function(){

	document.getElementById('header-to-portfolio-1').addEventListener('click', function(e){
		smoothScroll( e.target.getAttribute('data-section') );
	})

	document.getElementById('header-to-portfolio-2').addEventListener('click', function(e){
		smoothScroll( e.target.getAttribute('data-section') );
	})

})();