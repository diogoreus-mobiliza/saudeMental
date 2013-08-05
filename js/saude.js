$(document).ready(function(){

	var unidadeIcon  = $('.unidadeIcon'),
		unidadeIcon2 = $('.unidadeIcon2'),
		unidadeIcon3 = $('.unidadeIcon3');
		unidadeCheck = $('.unidadeCheck');


//-------------------------------------HOVER--------------------------------------------------
	
	$(".colDescricao > li").on({
		mouseenter:function(e){
			$(this).css('background', 'url(img/icones/unidadeHover.png) 4px 5px no-repeat');
			console.log("testando hover");
		},
		mouseleave:function(e){
			$(this).css('background', 'url(img/icones/fundoMenu.jpg)');
		}
	});

	$(".descricao1").on({
		click:function(){
			$(unidadeIcon).addClass('unidadeCheck');
		}
	});

	$(".descricao2").on({
		click:function(){
			$(unidadeIcon2).addClass('unidadeCheck');
		}
	});

	$(".descricao3").on({
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
