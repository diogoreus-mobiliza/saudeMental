/**
Classe que contem os metodos de SCORM basicos utilizados na leitura e escrita no SCORM;

@class APIWrapper Classe de comunicação SCORM

@param {Boolean} _Debug Setar false para acabar com alertas de debbug;
@param {Number} _NoError Definições de erros, defaul = 0;
@param {Number} _GeneralException Definições de erros, defaul = 101;
@param {Number} _ServerBusy Definições de erros, defaul = 102;
@param {Number} _InvalidArgumentError Definições de erros, defaul = 201;
@param {Number} _ElementCannotHaveChildren Definições de erros, defaul = 202;
@param {Number} _ElementIsNotAnArray Definições de erros, defaul = 203;
@param {Number} _NotInitialized Definições de erros, defaul = 301;
@param {Number} _NotImplementedError Definições de erros, defaul = 401;
@param {Number} _InvalidSetValue Definições de erros, defaul = 402;
@param {Number} _ElementIsReadOnly Definições de erros, defaul = 403;
@param {Number} _ElementIsWriteOnly Definições de erros, defaul = 404;
@param {Number} _IncorrectDataTypeDefinições de erros, defaul = 405;

@param apiHandle Definição de variaveis locais, default = null;
@param var API Definição de variaveis locais, default = null;
@param {Number} findAPITries Definição de variaveis locais, default = 0;
**/

var _Debug = false;

// Define exception/error codes
var _NoError = 0;
var _GeneralException = 101;
var _ServerBusy = 102;
var _InvalidArgumentError = 201;
var _ElementCannotHaveChildren = 202;
var _ElementIsNotAnArray = 203;
var _NotInitialized = 301;
var _NotImplementedError = 401;
var _InvalidSetValue = 402;
var _ElementIsReadOnly = 403;
var _ElementIsWriteOnly = 404;
var _IncorrectDataType = 405;

// local variable definitions
var apiHandle = null;
var API = null;
var findAPITries = 0;


/**
Inicializa a comunicação com o LMS chamando LMSInitialize() função que será implementada pelo LMS;

@method doLMSInitialize
@return {Boolean} CMIBoolean true se a inicialização foi feita com sucesso, ou CMIBoolean false se não.
*/
function doLMSInitialize()
{
   var api = getAPIHandle();
   if (api == null)
   {
      alert("Unable to locate the LMS's API Implementation.\nLMSInitialize was not successful.");
      return "false";
   }

   var result = api.LMSInitialize("");

   if (result.toString() != "true")
   {
      var err = ErrorHandler();
   }

   return result.toString();
}


/**
Finaliza a comunicação com o LMS chamando LMSFinish() função que será implementada pelo LMS;

@method doLMSFinish
@return {Boolean} CMIBoolean true se a finalização foi feita com sucesso, ou CMIBoolean false se não.
*/
function doLMSFinish()
{
   var api = getAPIHandle();
   if (api == null)
   {
      alert("Unable to locate the LMS's API Implementation.\nLMSFinish was not successful.");
      return "false";
   }
   else
   {
      // call the LMSFinish function that should be implemented by the API

      var result = api.LMSFinish("");
      if (result.toString() != "true")
      {
         var err = ErrorHandler();
      }

   }

   return result.toString();
}

/**
Busca a valor de uma variavel SCORM;

@method doLMSFinish
@param {String} name String que representa o "cmi data model" definido na sua categoria ou elemento (ex cmi.core.student_id);
@return {String} Retorno o valor da variavel ou "" em caso de algum problema;
*/
function doLMSGetValue(name)
{
   var api = getAPIHandle();
   if (api == null)
   {
      alert("Unable to locate the LMS's API Implementation.\nLMSGetValue was not successful.");
      return "";
   }
   else
   {
      var value = api.LMSGetValue(name);
      var errCode = api.LMSGetLastError().toString();
      if (errCode != _NoError)
      {
         // an error was encountered so display the error description
         var errDescription = api.LMSGetErrorString(errCode);
         alert("LMSGetValue("+name+") failed. \n"+ errDescription);
         return "";
      }
      else
      {
         
         return value.toString();
      }
   }
}

/**
Seta o valor de uma variavel SCORM;

@method doLMSSetValue
@param {String} name String que representa o "cmi data model" definido na sua categoria ou elemento (ex cmi.core.student_id);
@param {String} value Valor a ser atribuido ao elemento;

@return {Boolean} CMIBoolean true se a ação foi feita com sucesso, ou CMIBoolean false se não.
*/
function doLMSSetValue(name, value)
{
   var api = getAPIHandle();
   if (api == null)
   {
      alert("Unable to locate the LMS's API Implementation.\nLMSSetValue was not successful.");
      return;
   }
   else
   {
      var result = api.LMSSetValue(name, value);
      if (result.toString() != "true")
      {
         var err = ErrorHandler();
      }
   }

   return;
}

/**
Comita os dados setados ao longo da seção;

@method doLMSCommit
*/
function doLMSCommit()
{
   var api = getAPIHandle();
   if (api == null)
   {
      alert("Unable to locate the LMS's API Implementation.\nLMSCommit was not successful.");
      return "false";
   }
   else
   {
      var result = api.LMSCommit("");
      if (result != "true")
      {
         var err = ErrorHandler();
      }
   }

   return result.toString();
}

/**
Retorna o ultimo erro ocorrido;

@method doLMSGetLastError
@return {String} Codigo e descrição do ultimo erro ocorrido;
*/
function doLMSGetLastError()
{
   var api = getAPIHandle();
   if (api == null)
   {
      alert("Unable to locate the LMS's API Implementation.\nLMSGetLastError was not successful.");
      //since we can't get the error code from the LMS, return a general error
      return _GeneralError;
   }

   return api.LMSGetLastError().toString();
}


/**
Retorna a descrição dado um código de um erro;

@method doLMSGetErrorString
@param {String} errorCode Codigo do erro;

@return {String} Descrição do erro fornecido;
*/
function doLMSGetErrorString(errorCode)
{
   var api = getAPIHandle();
   if (api == null)
   {
      alert("Unable to locate the LMS's API Implementation.\nLMSGetErrorString was not successful.");
   }

   return api.LMSGetErrorString(errorCode).toString();
}

/**
Retorna o diagnostico dado um código de um erro;

@method doLMSGetDiagnostic
@param {String} errorCode Codigo do erro;

@return {String} Descrição do erro fornecido e do diagnostico analisado pelo LMS;
*/
function doLMSGetDiagnostic(errorCode)
{
   var api = getAPIHandle();
   if (api == null)
   {
      alert("Unable to locate the LMS's API Implementation.\nLMSGetDiagnostic was not successful.");
   }

   return api.LMSGetDiagnostic(errorCode).toString();
}


/**
Determina se a API do LMS foi inicializada;

@method LMSIsInitialized

@return {Boolean} true se o LMS foi inicializado com sucesso e false se
*/
function LMSIsInitialized()
{
   // there is no direct method for determining if the LMS API is initialized
   // for example an LMSIsInitialized function defined on the API so we'll try
   // a simple LMSGetValue and trap for the LMS Not Initialized Error

   var api = getAPIHandle();
   if (api == null)
   {
      alert("Unable to locate the LMS's API Implementation.\nLMSIsInitialized() failed.");
      return false;
   }
   else
   {
      var value = api.LMSGetValue("cmi.core.student_name");
      var errCode = api.LMSGetLastError().toString();
      if (errCode == _NotInitialized)
      {
         return false;
      }
      else
      {
         return true;
      }
   }
}


/**
Determina se um erro foi encontrado na chamada enterior da API e em caso positivo mostra uma mensagem para o usuário.
Se o erro tiver uma descrição associada tambem será exibida;

@method ErrorHandler

@return {String} Retorna o atual valor do LMS Error Code;
*/
function ErrorHandler()
{
   var api = getAPIHandle();
   if (api == null)
   {
      alert("Unable to locate the LMS's API Implementation.\nCannot determine LMS error code.");
      return;
   }

   // check for errors caused by or from the LMS
   var errCode = api.LMSGetLastError().toString();
   if (errCode != _NoError)
   {
      // an error was encountered so display the error description
      var errDescription = api.LMSGetErrorString(errCode);

      if (_Debug == true)
      {
         errDescription += "\n";
         errDescription += api.LMSGetDiagnostic(null);
         // by passing null to LMSGetDiagnostic, we get any available diagnostics
         // on the previous error.
      }

      alert(errDescription);
   }

   return errCode;
}

/**
Retorna o "handle" para o objeto da API se ele foi previamente setado se não volta null;

@method getAPIHandle

@return {String} Valor contido na APIHandle;
*/
function getAPIHandle()
{
   if (apiHandle == null)
   {
      apiHandle = getAPI();
   }

   return apiHandle;
}

/**
Retorna a API dado um Window Object;

@method findAPI
@param {String} win a Window Object;

@return {String} Retorno a API encontrada ou null em caso de não encontrar a API;
*/
function findAPI(win)
{
   while ((win.API == null) && (win.parent != null) && (win.parent != win))
   {
      findAPITries++;
      // Note: 7 is an arbitrary number, but should be more than sufficient
      if (findAPITries > 7) 
      {
         alert("Error finding API -- too deeply nested.");
         return null;
      }
      
      win = win.parent;

   }
   return win.API;
}


/**
Retorna a API da atual Window Object;

@method findAPI

@return {String} Retorno a API encontrada ou null em caso de não encontrar a API;
*/
function getAPI()
{
   var theAPI = findAPI(window);
   if ((theAPI == null) && (window.opener != null) && (typeof(window.opener) != "undefined"))
   {
      theAPI = findAPI(window.opener);
   }
   if (theAPI == null)
   {
      alert("Unable to find an API adapter");
   }
   return theAPI
}


