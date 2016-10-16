//=======================================================================================
// open article in modal jquery window
function showArticle(oid,title){
	var myURL = getCutterURL(pathprefix+'/article/article.html?client_request_articleOID='+oid, 'content');
	showModalDialog(myURL, title);
}

function showModalDialog(url, title){
	try{
		$("#dialog").dialog("destroy");	
		var myURL = getCutterURL(url, 'content');
		$("#dialog").dialog("open");
		$("#dialog").attr("title", title);
		$("#dialog").load(myURL, {}, __internal_modaldialogcallback2);
	} catch (error) {
		alert("Fehler: " + error);
	}
}

function __internal_modaldialogcallback2 (responseText, textStatus, XMLHttpRequest) {
	
	var dialogHeight;
	if (window.innerHeight) {
		dialogHeight=window.innerHeight;
	} else if (document.documentElement && document.documentElement.clientHeight) {
		dialogHeight=document.documentElement.clientHeight;
	} else if (document.body) {
		dialogHeight=document.body.clientHeight;
	}
	
	try {
		$("#dialog").dialog(
			{
				bgiframe: true,
				resizable: true,
				minHeight: 250, // sonst geht es im IE6 nicht, function _size in ui.dialog.js, zeile 431 geht sonst nicht
				height: dialogHeight,
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
				},
				open: function (event,ui){document.getElementById('dialog').scrollTop = 0;}
			}
		);
		$('#dialog').dialog('option', 'dialogClass', 'modalDialog');
	}
	catch (error) {
		alert("callback-error: " + error.number + ", " + error.description);
	}
}


/*Show Small Dialog*/


function showSmallModalDialog(url, title){
	try{
		$("#dialog").dialog("destroy");	
		var myURL = getCutterURL(url, 'content');
		$("#dialog").dialog("open");
		$("#dialog").attr("title", title);
		$("#dialog").load(myURL, {}, __internal_modaldialogcallback3);
	} catch (error) {
		alert("Fehler: " + error);
	}
}

function __internal_modaldialogcallback3 (responseText, textStatus, XMLHttpRequest) {
	
	var dialogHeight = 250;
	
	try {
		$("#dialog").dialog(
			{
				bgiframe: true,
				resizable: true,
				minHeight: 250, // sonst geht es im IE6 nicht, function _size in ui.dialog.js, zeile 431 geht sonst nicht
				height: dialogHeight,
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
				},
				open: function (event,ui){document.getElementById('dialog').scrollTop = 0;}
			}
		);
		$('#dialog').dialog('option', 'dialogClass', 'modalDialog');
	}
	catch (error) {
		alert("callback-error: " + error.number + ", " + error.description);
	}
}