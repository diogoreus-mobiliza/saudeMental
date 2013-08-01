$(document).ready(function(){

	var unidadeIcon  = $('.unidadeIcon'),
		unidadeIcon2 = $('.unidadeIcon2'),
		unidadeIcon3 = $('.unidadeIcon3');
		unidadeCheck = $('.unidadeCheck');


//-------------------------------------HOVER--------------------------------------------------
	$(".descricao1").on({
		mouseenter:function(e){
			$(unidadeIcon).css('background', 'url(img/icones/icon.png) -53px -8px');
		},
		mouseleave:function(e){
			$(unidadeIcon).css('background-position', '-119px -626px');
		},
		click:function(){
			$(unidadeIcon).addClass('unidadeCheck');
		}
	});

	$(".descricao2").on({
		mouseenter:function(e){
			$(unidadeIcon2).css('background', 'url(img/icones/icon.png) -53px -8px');
		},
		mouseleave:function(e){
			$(unidadeIcon2).css('background-position', '-119px -626px');
		},
		click:function(){
			$(unidadeIcon2).addClass('unidadeCheck');
		}
	});

	$(".descricao3").on({
		mouseenter:function(e){
			$(unidadeIcon3).css('background', 'url(img/icones/icon.png) -53px -8px');
		},
		mouseleave:function(e){
			$(unidadeIcon3).css('background-position', '-119px -626px');
		},
		click:function(){
			$(unidadeIcon3).addClass('unidadeCheck');
		}
	});

	$(".facebookIcon").on({
		mouseenter:function(e){
			$(this).css('background', 'url(img/icones/icon.png) -92px -63px');
		},
		mouseleave:function(e){
			$(this).css('background-position', '-4px -63px');
		}
	});

	$(".cafeIcon").on({
		mouseenter:function(e){
			$(this).css('background', 'url(img/icones/icon.png) -92px -142px');
		},
		mouseleave:function(e){
			$(this).css('background-position', '-4px -142px');
		}
	});

	$(".enqueteIcon").on({
		mouseenter:function(e){
			$(this).css('background', 'url(img/icones/icon.png) -92px -222px');
		},
		mouseleave:function(e){
			$(this).css('background-position', '-4px -222px');
		}
	});

	$(".complementarIcon").on({
		mouseenter:function(e){
			$(this).css('background', 'url(img/icones/icon.png) -92px -302px');
		},
		mouseleave:function(e){
			$(this).css('background-position', '-4px -302px');
		}
	});

	$(".ferramentaIcon").on({
		mouseenter:function(e){
			$(this).css('background', 'url(img/icones/icon.png) -92px -382px');
		},
		mouseleave:function(e){
			$(this).css('background-position', '-4px -382px');
		}
	});

	$(".glossarioIcon").on({
		mouseenter:function(e){
			$(this).css('background', 'url(img/icones/icon.png) -92px -462px');
		},
		mouseleave:function(e){
			$(this).css('background-position', '-4px -462px');
		}
	});

	$(".forumIcon").on({
		mouseenter:function(e){
			$(this).css('background', 'url(img/icones/icon.png) -92px -542px');
		},
		mouseleave:function(e){
			$(this).css('background-position', '-4px -542px');
		}
	});
});

