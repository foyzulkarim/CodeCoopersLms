//=======================================================================================
// add datepicker to date fields

function addJQDatePickers () {
//	alert("addDatePickers");
	jQuery.each($(".date"), function(index, value) {
//		alert("value " + value);
		$("#" + value.id).datepicker({showOn: 'button', buttonImage: pathprefix + '/images/calendar.png', buttonImageOnly: true});
		//$("#" + value.id).datepicker($.datepicker.regional['us']);
	 
//		   console.log("index", index, "value", value);
	});
}

//=======================================================================================
// utility method to get the 'cutter-url'

function getCutterURL (theURL, theCutID) {
	var anURL = null;
	if (theURL.indexOf("?") == -1) {
		anURL = theURL + "?client_request_ajaxcutid=" + theCutID;
	}
	else {
		anURL = theURL + "&client_request_ajaxcutid=" + theCutID;
	}
	return anURL;
}

//=======================================================================================
// utility to close a dialog

function __closeDialog() {
	$("#dialog").dialog("destroy");
	$("#dialog").dialog("close");
	$("#dialog").html("");
}

//=======================================================================================
//method used to open a modal form dialog

function openModalDialog (theDialogLink) {
	try{
		$("#dialog").dialog("destroy");		
		var myURL = getCutterURL(theDialogLink, 'content');
		$("#dialog").dialog("open");
//		alert(myURL);
		$("#dialog").load(myURL, {}, __internal_modaldialogcallback);
	}
	catch (error) {
		alert("Fehler: " + error);
	}
}

function openModalDialogWithTitle (theDialogLink, title, flagBig) {
	try{
		$("#dialog").dialog("destroy");	
		var myURL = getCutterURL(theDialogLink, 'content');
		$("#dialog").dialog("open");
		dialogStandardHeight = 300;
		$("#dialog").attr("title", title);
		if (flagBig) {
			$("#dialog").load(myURL, {}, __internal_modaldialogcallback_big);
		} else {
			$("#dialog").load(myURL, {}, __internal_modaldialogcallback);
		}
	
	}
	catch (error) {
		alert("Fehler: " + error);
	}
}

function __internal_modaldialogcallback (responseText, textStatus, XMLHttpRequest) {
	__internal_modaldialogcallback_h (responseText, textStatus, XMLHttpRequest, 300);
}

function __internal_modaldialogcallback_big (responseText, textStatus, XMLHttpRequest) {
	__internal_modaldialogcallback_h (responseText, textStatus, XMLHttpRequest, 650);
}

function __internal_modaldialogcallback_h (responseText, textStatus, XMLHttpRequest, height) {
//	alert(responseText);
	replaceTextAreasByWYSIWYGEditorInID('dialog');
	addDatePickers();
	try {
		$("#dialog").dialog(
			{
				bgiframe: true,
				resizable: true,
				minHeight: 250, // sonst geht es im IE6 nicht, function _size in ui.dialog.js, zeile 431 geht sonst nicht
				height: height,
				width: 600,
				modal: true,
				overlay: {
					backgroundColor: '#000',
					opacity: 0.5
				},
				buttons: {
					"Schliessen": function() {
						__closeDialog();
					}
				}
			}
		);
	}
	catch (error) {
//		alert("callback-error: " + error.number + ", " + error.description);
	}
}

//=======================================================================================
//method used to open a modal form dialog

function openProgressPopup (theDialogLink) {
	try{
		$("#dialog").dialog("destroy");		
		var myURL = getCutterURL(theDialogLink, 'content');
		$("#dialog").dialog("open");
//		alert(myURL);
		$("#dialog").load(myURL, {}, __internal_modaldialogcallbackProgressPopup);
	}
	catch (error) {
		alert("Fehler: " + error);
	}
}


function __internal_modaldialogcallbackProgressPopup (responseText, textStatus, XMLHttpRequest) {
//	alert(responseText);
	replaceTextAreasByWYSIWYGEditorInID('dialog');
	addDatePickers();
	try {
		$("#dialog").dialog(
			{
				bgiframe: true,
				resizable: true,
				minHeight: 250, // sonst geht es im IE6 nicht, function _size in ui.dialog.js, zeile 431 geht sonst nicht
				height: 300,
				width: 600,
				modal: true,
				closable: true,
				overlay: {
					backgroundColor: '#000',
					opacity: 0.5
				}
			}
		);
	}
	catch (error) {
//		alert("callback-error: " + error.number + ", " + error.description);
	}
}


//=======================================================================================
// method used to open a modal form dialog

function openEditDialog (thePart2Replace, theLink, theDialogLink) {
	try{
		$("#dialog").dialog("destroy");
		$("#callbackURL").attr("val", theLink);
		$("#callbackTarget").attr("val", thePart2Replace);
		var myURL = getCutterURL(theDialogLink, 'content');
		$("#dialog").dialog("open");
//		alert(myURL);
		$("#dialog").load(myURL, {}, __internal_callback_2);
//		__internal_callback_2(null, null, null);
	}
	catch (error) {
//		alert("Fehler, letzter Schritt: " + step + ", error=" + error);
	}
}

function __internal_callback_2 (responseText, textStatus, XMLHttpRequest) {
//	alert(responseText);
	replaceTextAreasByWYSIWYGEditorInID('dialog');
	addDatePickers();
	try {
		$("#dialog").dialog(
			{
				bgiframe: true,
				resizable: true,
				minHeight: 400, // sonst geht es im IE6 nicht, function _size in ui.dialog.js, zeile 431 geht sonst nicht
				height: 600,
				width: 800,
				modal: true,
				overlay: {
					backgroundColor: '#000',
					opacity: 0.5
				}
			}
		);
	}
	catch (error) {
//		alert("callback-error: " + error.number + ", " + error.description);
	}
}

//=======================================================================================
// method used to open a docustore menu

function openMenuDialog (event, theHeight, title, theDialogLink) {
	try{
		size = title.length;
		if(size > 23) {
			title = title.substring(0, 15)+"..."+title.substring(size-4, size);
		}
		$("#docuMenu").dialog("destroy");		
		var myURL = getCutterURL(theDialogLink, 'content');
		$("#docuMenu").dialog("open");
		$("#docuMenu").attr("title", title);		
		$("#docuMenu").attr("height", theHeight);	
		$("#docuMenu").attr("position", new Array(new Number(event.clientX-160), new Number(event.clientY-40)));
		$("#docuMenu").load(myURL, {}, __internal_menu);
	  $("#docuMenu").attr("position", new Array(new Number(event.clientX-160), new Number(event.clientY-40)));
		//alert(event.clientX);
	}
	catch (error) {
		alert("Fehler: " + error);
	}
}

function __internal_menu (responseText, textStatus, XMLHttpRequest) {
	//alert(responseText);	
	replaceTextAreasByWYSIWYGEditorInID('docuMenu');
	addDatePickers();
	arr = $("#docuMenu").attr("position").toString().split(",");	
	try {
		$("#docuMenu").dialog(
			{
				position: [new Number(arr[0]), new Number(arr[1])],
				backgroundColor: '#ffffff',					
				padding:0,
				margin:0,				
				bgiframe: true,				
				resizable: false,
				minHeight: 100, // sonst geht es im IE6 nicht, function _size in ui.dialog.js, zeile 431 geht sonst nicht
				height: $("#docuMenu").attr("height"),
				width: 230,				
				modal: false				
			}
		);
	}
	catch (error) {
//		alert("callback-error: " + error.number + ", " + error.description);
	}
}

// =======================================================================================
// cancel a modal form dialog

function cancelFormDialog() {
	__closeDialog();
}

//=======================================================================================
//submit a modal form dialog and refresh part of the underlaying page

function submitFormDialog(formID) {
	writeBackFCK2textarea(formID);
	var dataString = $("#" + formID).serialize();
//	alert(dataString);
	$.ajax({
		type: "POST",
		url: pathprefix + "/boxalino/client/common/error.html?client_request_ajaxcutid=error",  
		data: dataString,
		success: function(thehtml) {
//			alert(thehtml);
//todo: auswerten des resultates
			$("#infoarea").html(thehtml);			
			var callbackURL = $("#callbackURL").attr("val");			
			var callbackTarget = $("#callbackTarget").attr("val");			
//			alert("callback url = " + callbackURL);
//			alert("callback target = " + callbackTarget);
			if (callbackTarget && callbackURL) {
				ajaxReplace(callbackTarget, callbackURL);
			}
			
			__closeDialog();
		}
	});  										
}

function submitFormDialog2(formID) {
	writeBackFCK2textarea(formID);
	var dataString = $("#" + formID).serialize();
//	alert(dataString);
	$.ajax({
		type: "POST",
		url: pathprefix + "/boxalino/client/common/error.html?client_request_ajaxcutid=error",  
		data: dataString,
		success: function(thehtml) {
			$("#infoarea").html(thehtml);
			if (!thehtml || thehtml.indexOf("errorMarker") < 0) {				
				var callbackURL = $("#callbackURL").attr("val");			
				var callbackTarget = $("#callbackTarget").attr("val");			
	//			alert("callback url = " + callbackURL);
	//			alert("callback target = " + callbackTarget);
				if (callbackTarget && callbackURL) {
					ajaxReplace(callbackTarget, callbackURL);
				}
				
				__closeDialog();
			}
		}
	});  										
}

//urlToCall: (pathprefix + url), this page will create for example an item an set the values

function submitFormDialogAndCallURL(formID, urlToCall) {
	writeBackFCK2textarea(formID);
	var dataString = $("#" + formID).serialize();
	//alert(dataString);
		
	$.ajax({
		type: "POST",
		url: urlToCall + "?client_request_ajaxcutid=error",  
		data: dataString,
		success: function(thehtml) {	
//todo: auswerten des resultates
			$("#infoarea").html(thehtml);	
			var callbackURL = $("#callbackURL").attr("val");
			var callbackTarget = $("#callbackTarget").attr("val");
		// alert("callback url = " + callbackURL);
	 // alert("callback target = " + callbackTarget);
			ajaxReplace(callbackTarget, callbackURL);
			__closeDialog();		
		}
	});  											
}


//=======================================================================================
//submit form without default action

function submitFormExceptDefaultAction (formID, targetID, theURL) {
//	var hiddenField = $("input[name='defaultAction']");
	var hiddenField = document.getElementById(formID + "_defaultAction");
	var origDA = "";
	if (hiddenField != null) {
		origDA = hiddenField.value;
		hiddenField.name="client_request_ajaxcutid";
		hiddenField.value="error";
	}
	writeBackFCK2textarea(formID);
	var dataString = $("#" + formID).serialize();
	if (hiddenField != null) {
		hiddenField.name = "defaultAction";
		hiddenField.value = origDA;
	}
//	alert(dataString);
	$.ajax({
		type: "POST",
		url: pathprefix + "/boxalino/client/common/error.html",  
		data: dataString,
		success: function(thehtml) {
//			alert(thehtml);
//todo: auswerten des resultates
//			$("#infoarea").html(thehtml);
//			alert("callback url = " + callbackURL);
//			alert("callback target = " + callbackTarget);
//			alert(targetID + "-->" + theURL);
			ajaxReplace(targetID, theURL);
		}
	});  										
}

function wrapWithFormAndSubmit(id, theURL) {
	var formID = wrapWithForm(id);	
	submitFormExceptDefaultAction (formID, id, theURL);
}

function wrapWithForm(id) {
	var formId = "form_" + id;
	$('#' + id).contents().wrapAll("<form id='" + formId + "' method='POST'></form>");
	return formId;
}

function addHiddenFieldToForm(formId, name, value) {
	$('#' + formId).append("<input type='hidden' name='" + name + "' value='" + value + "'>");
}

//=======================================================================================
//submit form without default action

function execAndUpdate (theFormID, theTargetID, theParams) {
//	var hiddenField = $("input[name='defaultAction']");
	var hiddenField = document.getElementById(theFormID + "_defaultAction");
	var origDA = "";
	if (hiddenField != null) {
		origDA = hiddenField.value;
		hiddenField.name="client_request_ajaxcutid";
		hiddenField.value="error";
	}
	writeBackFCK2textarea(theFormID);
	var dataString = $("#" + theFormID).serialize();
	if (hiddenField != null) {
		hiddenField.name = "defaultAction";
		hiddenField.value = origDA;
	}
//	dataString = encodeURIComponent(dataString);
//	alert(dataString);
	$.ajax({
		type: "POST",
		url: pathprefix + "/boxalino/client/common/error.html",  
		data: dataString,
		success: function(thehtml) {
//			alert(thehtml);
//todo: auswerten des resultates
//			$("#infoarea").html(thehtml);
//			alert("callback url = " + callbackURL);
//			alert("callback target = " + callbackTarget);
//			alert(targetID + "-->" + theURL);
			var refresh = $("#" + theTargetID).attr("refresh");
//			alert(refresh);
			refresh = refresh + "&" + theParams;
//			alert(refresh);
			ajaxReplace(theTargetID, refresh);
		}
	});
	return false;
}

//=======================================================================================
//submit form without default action

function confirmExecAndUpdate (theConfirmationDialogURL, theFormID, theTargetID, theParams) {
	$("#dialog").attr("the-form-id", theFormID);
	$("#dialog").attr("the-target-id", theTargetID);
	$("#dialog").attr("the-params", theParams);

	confirmActionWithFunction (theConfirmationDialogURL, _confirmExecAndUpdate);
}

function _confirmExecAndUpdate () {
	var theFormID = $("#dialog").attr("the-form-id");
	var theTargetID = $("#dialog").attr("the-target-id");
	var theParams = $("#dialog").attr("the-params");
//	var hiddenField = $("input[name='defaultAction']");
	var hiddenField = document.getElementById(theFormID + "_defaultAction");
	var origDA = "";
	if (hiddenField != null) {
		origDA = hiddenField.value;
		hiddenField.name="client_request_ajaxcutid";
		hiddenField.value="error";
	}
	writeBackFCK2textarea(theFormID);
	var dataString = $("#" + theFormID).serialize();
	if (hiddenField != null) {
		hiddenField.name = "defaultAction";
		hiddenField.value = origDA;
	}
//	alert(dataString);
	$.ajax({
		type: "POST",
		url: pathprefix + "/boxalino/client/common/error.html",  
		data: dataString,
		success: function(thehtml) {
//			alert(thehtml);
//todo: auswerten des resultates
//			$("#infoarea").html(thehtml);
//			alert("callback url = " + callbackURL);
//			alert("callback target = " + callbackTarget);
//			alert(targetID + "-->" + theURL);
			var refresh = $("#" + theTargetID).attr("refresh");
			refresh = refresh + "&" + theParams;
//			alert(refresh);
			ajaxReplace(theTargetID, refresh);
		}
	});
	return false;
}

//=======================================================================================
// process a modal form dialog and refresh part of the underlaying page

function executeHREFDialog(params) {
	var callbackURL = encodeURI($("#callbackURL").attr("val"));
	var callbackTarget = $("#callbackTarget").attr("val");
	var theurl = null;
	if (callbackURL.indexOf("?") == -1) {
		theurl = callbackURL + "?" + params;
	}
	else {
		theurl = callbackURL + "&" + params;
	}
	ajaxReplace(callbackTarget, theurl);
	__closeDialog();
}

//=======================================================================================
//method used to protect actions in hrefs

function confirmAction (thePart2Replace, theLink, theDialogLink) {
//	alert("confirm " + theLink + " | " + theDialogLink);
	$("#dialog").dialog("destroy");
	ajaxReplace('dialog', theDialogLink);
//	$("#dialog").dialog('open');
	$("#dialog").dialog(
			{
		bgiframe: true,
		resizable: false,
		height:250,
		minHeight: 250, // sonst geht es im IE6 nicht, function _size in ui.dialog.js, zeile 431 geht sonst nicht
		width:400,
		minWidth: 250,
		modal: true,
		overlay: {
			backgroundColor: '#000',
			opacity: 0.5
		},
		close: function () {
			__closeDialog();
		},
		buttons: {
			"Nein": function() {
			__closeDialog();
			},
			"Ja": function() {
//				alert("Lösche " + theLink.href);
//				alert("Lösche " + theLink);
//				alert(thePart2Replace + " --> " + theLink);
				ajaxReplace(thePart2Replace, theLink);
				__closeDialog();
			}
		}
	});
}

//=======================================================================================
//method used to protect actions in hrefs

function confirmActionWithFunction (theConfirmationDialogURL, theFunction) {
	$("#dialog").dialog("destroy");
	ajaxReplace('dialog', pathprefix + theConfirmationDialogURL);
//	$("#dialog").dialog('open');
	$("#dialog").dialog(
			{
		bgiframe: true,
		resizable: false,
		height:250,
		minHeight: 250, // sonst geht es im IE6 nicht, function _size in ui.dialog.js, zeile 431 geht sonst nicht
		width:400,
		minWidth: 250,
		modal: true,
		overlay: {
			backgroundColor: '#000',
			opacity: 0.5
		},
		close: function () {
			__closeDialog();
		},
		buttons: {
			"Nein": function() {
				__closeDialog();
			},
			"Ja": function() {
//				alert("Lösche " + theLink.href);
//				alert("Lösche " + theLink);
				theFunction();
				__closeDialog();
			}
		}
	});
}

//=======================================================================================
//method used to protect actions in hrefs

function confirmActionWithFunctionParam (theConfirmationDialogURL, theFunction, theParam) {
	$("#dialog").dialog("destroy");
	ajaxReplace('dialog', pathprefix + theConfirmationDialogURL);
//	$("#dialog").dialog('open');
	$("#dialog").dialog(
			{
		bgiframe: true,
		resizable: false,
		height:250,
		minHeight: 250, // sonst geht es im IE6 nicht, function _size in ui.dialog.js, zeile 431 geht sonst nicht
		width:400,
		minWidth: 250,
		modal: true,
		overlay: {
			backgroundColor: '#000',
			opacity: 0.5
		},
		close: function () {
			__closeDialog();
		},
		buttons: {
			"Nein": function() {
				__closeDialog();
			},
			"Ja": function() {
//				alert("Lösche " + theLink.href);
//				alert("Lösche " + theLink);
				theFunction(theParam);
				__closeDialog();
			}
		}
	});
}

//=======================================================================================
// helper method to replace a certain tag with the content of the given URL

function ajaxReplace (targetID, url) {
	var theurl = null;
	if (url.indexOf("?") == -1) {
		theurl = url + "?client_request_ajaxcutid=" + targetID;
	}
	else {
		theurl = url + "&client_request_ajaxcutid=" + targetID;
	}
	//alert(targetID + ", " + theurl);
	$("#" + targetID).load(theurl);
}




function ajaxReplaceWithAction (targetID, url, action) {
	var theurl = null;
	if (url.indexOf("?") == -1) {
		theurl = url + "?client_request_ajaxcutid=" + targetID;
	}
	else {
		theurl = url + "&client_request_ajaxcutid=" + targetID;
	}
//	alert(targetID + ", " + theurl);
//	alert(action);
	$("#" + targetID).load(theurl, null, action);
}



//============================================ Begin of BETA code
function pausecomp(millis)
{
	var date = new Date();
	var curDate = null;
	
	do { curDate = new Date(); }
	while(curDate-date < millis);
} 


var _loaded = false;

function _setLoaded() {
	_loaded = true;
}
function ajaxReplaceSynchron (targetID, url) {
	_loaded = false;
	ajaxReplaceWithAction(targetID, url, _setLoaded);
	var i = 0;
	while (!_loaded && i < 20) {
		pausecomp(100);
		i = i + 1;
	}
}
//============================================ End of BETA code

//=======================================================================================
// helper method to replace a certain tag with the content of the given URL
// this function allows to have different IDs of the part to be replaced and the part
// to use as the source from the page retrieved by the URL

function ajaxReplace2 (targetID, url, cutID) {
	var theurl = null;
	if (url.indexOf("?") == -1) {
		theurl = url + "?client_request_ajaxcutid=" + cutID;
	}
	else {
		theurl = url + "&client_request_ajaxcutid=" + cutID;
	}
//	alert(targetID + ", " + theurl);
	$("#" + targetID).load(theurl);
}


//=======================================================================================
// datepicker utility

function addDatePickers () {
	$("#adate").datepicker(
			{
				numberOfMonths: 3,
				showButtonPanel: true
			}
		);
}

function openOrCloseForClass(el,className) {
	var elements = el.parentNode.getElementsByTagName("div");
	for (var i = elements.length -1; i >= 0; i--) {
		var element = elements[i];
		if (hasClassName(element, className)) {
			if (removeClassName(el, "open")) {
				appendClassName(element, "portletClosed"); 
			} else {
				appendClassName(el,"open");
				removeClassName(element, "portletClosed");
			}
			return false;
		}
	}
	return false;
}

function openSwap(a,b) {
	if (removeClassName(a,"portletClosed")) {
		appendClassName(b,"portletClosed");
	} else {
		appendClassName(a,"portletClosed");
		removeClassName(b,"portletClosed");
	}
}

function openOrCloseNextRow(el){
	var currentRow = el;
	while (currentRow.tagName != "TR") {
		if (currentRow == null) return false;
		currentRow = currentRow.parentNode;
	}
	var nextRow = currentRow.nextSibling;
	while (nextRow.tagName != "TR") {
		if (nextRow == null) return false;
		nextRow = nextRow.nextSibling;
	}
	
	openSwap(currentRow,nextRow);
	
	return false;
}

function openOrClosePreviousRow(el){
	var currentRow = el;
	while (currentRow.tagName != "TR") {
		if (currentRow == null) return false;
		currentRow = currentRow.parentNode;
	}
	var previousRow = currentRow.previousSibling;
	while (previousRow.tagName != "TR") {
		if (previousRow == null) return false;
		previousRow = previousRow.previousSibling;
	}
	openSwap(currentRow,previousRow);
	
	return false;
}

/* -- class helpers -- */

function hasClassName(el,givenClass) {
	var cn = el.className;
	var cns = cn.split(' ');
	for (var i = cns.length -1; i >= 0; i--) {
		var className = cns[i];
		if (className == givenClass) {
			return true;
		}
	}
	return false;
}

function appendClassName(el,givenClass) {
	if (hasClassName(el,givenClass)) {
		return false;
	} else {
		if (el.className.length > 0 ) {
			el.className += ' ' + givenClass;
		} else {
			el.className += givenClass;
		}
	}
	
	return true;
}

function removeClassName(el,givenClass) {
	if (hasClassName(el,givenClass)) {
		var cn = el.className;
		var cns = cn.split(' ');
		var newClassName = '';
		for (var i = cns.length -1; i >= 0; i--) {
			var className = cns[i];
			if (className != givenClass) {
				if (newClassName.length > 0 ) {
					newClassName += ' ' + className;
				} else {
					newClassName += className;
				}
			}
		}
		el.className = newClassName;
		return true;
	} else {
		return false; 
	}
}

/* -- class helpers end -- */

/*
 * Only use when you have the following structure
 * 
 * <ul>
 * 		<li>
 * 			<a>el</a>
 * 		</li>
 * 		<li>
 * 			<a>anotherTab</a>
 * 		</li>
 *	</ul>
 */
function tabify(el,cutterId){
	var tabs = el.parentNode.parentNode.getElementsByTagName('li');
	for (var i = tabs.length - 1; i >= 0; i--) {
		var tab = tabs[i].getElementsByTagName('a')[0];
		removeClassName(tab,"active");
	}
	appendClassName(el,"active");
	ajaxReplace(cutterId,el.href);
	return false;
}
function tabifyEvent(el,cutterId, url){	
	var tabs = el.parentNode.parentNode.getElementsByTagName('li');	
	for (var i = tabs.length - 1; i >= 0; i--) {		
		var tab = tabs[i].getElementsByTagName('a')[0];		
		removeClassName(tab,"active");	
	}	appendClassName(el,"active");	
	ajaxReplace(cutterId, url);	return false;
}