$(document).ready(function(){
		var x = 0;
		
		$('.last').click(function(){

			x= (x>=100)?(x-100):500;
			$('figure').css('left', -x+'%');
		});
		
		$('.next').click(function(){

			x= (x<=400)?(x+100):0;
			$('figure').css('left', -x+'%');
		});


		
});