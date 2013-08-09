$(document).ready(function(){

	var unidadeIcon 		= $('.unidadeIcon'),
		unidadeIcon2 		= $('.unidadeIcon2'),
		unidadeIcon3 		= $('.unidadeIcon3');
		unidadeCheck 		= $('.unidadeCheck');
		facebookIcon 		= $('.facebookIcon');
		cafeIcon 			= $('.cafeIcon');
		opiniaoIcon 		= $('.opiniaoIcon');
		extraIcon 			= $('.extraIcon');
		utilitarioIcon		= $('.utilitarioIcon');
		glossarioIcon 		= $('.glossarioIcon');
		forumIcon 			= $('.forumIcon');

//-------------------------------------HOVER--------------------------------------------------
	
	$(".colDescricao > li").on({
		mouseenter:function(e){
			$(this).css('background', 'url(//unasus2.moodle.ufsc.br/pluginfile.php/16706/mod_folder/content/0/unidadeHover.png ) 2px 5px no-repeat');
			console.log("testando hover");
		},
		mouseleave:function(e){
			$(this).css('background', 'url(//unasus2.moodle.ufsc.br/pluginfile.php/16706/mod_folder/content/0/fundoMenu.jpg)');
		}
	});

	$(".unidade1").on({
		click:function(){
			$(unidadeIcon).css('background', 'transparent');
			$(unidadeIcon).addClass('unidadeCheck');
		}
	});

	$(".unidade2").on({
		click:function(){
			$(unidadeIcon2).css('background', 'transparent');
			$(unidadeIcon2).addClass('unidadeIncompleteCheck');
		}
	});

	$(".unidade3").on({
		click:function(){
			$(unidadeIcon3).css('background', 'transparent');
			$(unidadeIcon3).addClass('unidadeCheck');
		}
	});

	$(".cafe").on({
		mouseenter:function(e){
			$(cafeIcon).css('background', 'url(https://unasus2.moodle.ufsc.br/pluginfile.php/16805/mod_folder/content/0/icon.png) -93px -142px');
		},
		mouseleave:function(e){
			$(cafeIcon).css('background-position', '-4px -142px');
		}
	});

	$(".opiniao").on({
		mouseenter:function(e){
			$(opiniaoIcon).css('background', 'url(https://unasus2.moodle.ufsc.br/pluginfile.php/16805/mod_folder/content/0/icon.png) -93px -222px');
		},
		mouseleave:function(e){
			$(opiniaoIcon).css('background-position', '-4px -222px');
		}
	});

	$(".utilitario").on({
		mouseenter:function(e){
			$(utilitarioIcon).css('background', 'url(https://unasus2.moodle.ufsc.br/pluginfile.php/16805/mod_folder/content/0/icon.png) -93px -382px');
		},
		mouseleave:function(e){
			$(utilitarioIcon).css('background-position', '-4px -382px');
		}
	});

	$(".extra").on({
		mouseenter:function(e){
			$(extraIcon).css('background', 'url(https://unasus2.moodle.ufsc.br/pluginfile.php/16805/mod_folder/content/0/icon.png) -93px -302px');
		},
		mouseleave:function(e){
			$(extraIcon).css('background-position', '-4px -302px');
		}
	});	

	$(".glossario").on({
		mouseenter:function(e){
			$(glossarioIcon).css('background', 'url(https://unasus2.moodle.ufsc.br/pluginfile.php/16805/mod_folder/content/0/icon.png) -93px -462px');
		},
		mouseleave:function(e){
			$(glossarioIcon).css('background-position', '-4px -462px');
		}
	});

	$(".facebook").on({
		mouseenter:function(e){
			$(facebookIcon).css('background', 'url(https://unasus2.moodle.ufsc.br/pluginfile.php/16805/mod_folder/content/0/icon.png) -92px -63px');
		},
		mouseleave:function(e){
			$(facebookIcon).css('background-position', '-4px -63px');
		}
	});


	$(".forum").on({
		mouseenter:function(e){
			$(forumIcon).css('background', 'url(https://unasus2.moodle.ufsc.br/pluginfile.php/16805/mod_folder/content/0/icon.png) -93px -542px');
		},
		mouseleave:function(e){
			$(forumIcon).css('background-position', '-4px -542px');
		}
	});



});