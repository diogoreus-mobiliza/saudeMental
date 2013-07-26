
var objScorm = {};

objScorm.inicializaScorm = function(){
	objScorm.susData = doLMSGetValue( "cmi.suspend_data" );
	objScorm.nota = doLMSGetValue( "cmi.core.score.raw" );
	objScorm.lessonStatus = doLMSGetValue("cmi.core.lesson_status");
	objScorm.tempoInicial = new Date().getTime();

	console.log('Inicializou o SCORM "uhu"');
	doLMSInitialize();
	startTimer();
}

objScorm.setValor = function(scope, valor){
	doLMSSetValue(scope, valor);
}

objScorm.commit = function(scope, valor) {
	var queryData = "";

	switch(scope){
		case "score":
			objScorm.setValor("cmi.core.score.raw", 	valor);
		break;
		case "status":		
			objScorm.setValor("cmi.core.lesson_status", valor);
		break;
		case "data":
			objScorm.setValor("cmi.suspend_data", 		valor);
		break;		
	}
	
	console.log('SCORM suspend_data ');
	console.log(queryData);
	doLMSCommit();
}

objScorm.finalizaScorm = function() {
	computeTime(objScorm.tempoInicial);
	console.log('Finalizou o SCORM "uhu"');
	doLMSFinish();		
}
