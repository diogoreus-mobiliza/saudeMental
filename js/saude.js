$(document).ready(function(){

	var unidadeIcon  = $('.unidadeIcon'),
		unidadeIcon2 = $('.unidadeIcon2'),
		unidadeIcon3 = $('.unidadeIcon3');
		unidadeCheck = $('.unidadeCheck');


//-------------------------------------HOVER--------------------------------------------------
	$(".descricao1").on({
		mouseenter:function(e){
			$(unidadeIcon).css('background', 'url(img/icon.png) -53px -8px');
		},
		mouseleave:function(e){
			$(unidadeIcon).css('background-position', '-10px -8px');
		},
		click:function(){
			$(unidadeIcon).addClass('unidadeCheck');
		}
	});

	$(".descricao2").on({
		mouseenter:function(e){
			$(unidadeIcon2).css('background', 'url(img/icon.png) -53px -8px');
		},
		mouseleave:function(e){
			$(unidadeIcon2).css('background-position', '-10px -8px');
		},
		click:function(){
			$(unidadeIcon2).addClass('unidadeCheck');
		}
	});

	$(".descricao3").on({
		mouseenter:function(e){
			$(unidadeIcon3).css('background', 'url(img/icon.png) -53px -8px');
		},
		mouseleave:function(e){
			$(unidadeIcon3).css('background-position', '-10px -8px');
		},
		click:function(){
			$(unidadeIcon3).addClass('unidadeCheck');
		}
	});
});

