/**
Classe que contem os metodos de SCORM basicos utilizados na leitura e escrita no SCORM!

@class SCOFunctions Classe de comunicação SCORM
**/

/**
Calcula a diferença entre a data e hora de inicio e a data atual e grava o tempo total dentro do SCO na variavel cmi.core.session_time;

@method computeTime
@param {Number} startDate Data e hora do inicio do SCO;
*/
function computeTime(startDate){	
	if ( startDate != 0 ){
        var currentDate = new Date().getTime(),
            elapsedSeconds = ( (currentDate - startDate) / 1000 ),
            formattedTime = convertTotalSeconds( elapsedSeconds );
	}else{
		formattedTime = "00:00:00.0";
	}
	doLMSSetValue( "cmi.core.session_time", formattedTime );
}

/**
Converte um numero total de segundos no formato hh:mm:ss

@method convertTotalSeconds
@param {Number} ts Numero total de segundos

@return {Number} Retorno de segundos no formato hh:mm:ss
*/
function convertTotalSeconds(ts){
	var sec,
		tmp,
		strSec,
		strWholeSec,
		strFractionSec,
		rtnVal,
		hour,
		min;

	sec = (ts % 60);
	ts -= sec;
	tmp = (ts % 3600);  //# of seconds in the total # of minutes
	ts -= tmp;              //# of seconds in the total # of hours

	// convert seconds to conform to CMITimespan type (e.g. SS.00)
	sec = Math.round(sec*100)/100;

	strSec = new String(sec);
	strWholeSec = strSec;
	strFractionSec = "";

	if (strSec.indexOf(".") != -1){
	  strWholeSec =  strSec.substring(0, strSec.indexOf("."));
	  strFractionSec = strSec.substring(strSec.indexOf(".")+1, strSec.length);
	}

	if (strWholeSec.length < 2){
	  strWholeSec = "0" + strWholeSec;
	}
	strSec = strWholeSec;

	if (strFractionSec.length){
	  strSec = strSec+ "." + strFractionSec;
	}


	if ((ts % 3600) != 0 )
	  hour = 0;
	else hour = (ts / 3600);
	if ( (tmp % 60) != 0 )
	  min = 0;
	else min = (tmp / 60);

	if ((new String(hour)).length < 2)
	  hour = "0"+hour;
	if ((new String(min)).length < 2)
	  min = "0"+min;

	rtnVal = hour+":"+min+":"+strSec;

	return rtnVal;
}
