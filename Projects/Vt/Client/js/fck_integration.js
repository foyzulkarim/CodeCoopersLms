//=======================================================================================
// replaces all textareas with the FCKeditor

var editor;
var fckmode;

function replaceTextAreasByWYSIWYGEditor() {
	var firstFCK = null;
	var allTextAreas = document.getElementsByTagName("textarea");
	for (var i=0; i < allTextAreas.length; i++) {
		var cssClasses = allTextAreas[i].className;		
		if (cssClasses && cssClasses.indexOf("nowysiwyg") >= 0) {
			continue;
		}
		var name = allTextAreas[i].id;
		// alert (name);
		if (!name) {
			name = allTextAreas[i].name;
		}
		var height = allTextAreas[i].style.height;				var width = allTextAreas[i].style.width;
		var tabix = allTextAreas[i].getAttribute("tabindex");
//		alert("tabindex " + tabix);
//		var oEditor = FCKeditorAPI.GetInstance(editName);
//		if (oEditor != null) {
//			oEditor.UpdateLinkedField();
//		}
		
		var oFCKeditor = new FCKeditor( name ) ;
		editor = oFCKeditor;
		if (!height) {
			oFCKeditor.Height = 100;
		}
		else {
			oFCKeditor.Height = height;
		}				if (!width) {			oFCKeditor.Width = 438;		}		else {			oFCKeditor.Width = width;		}
		
		if (fckmode != null && fckmode == 'expert'){
			oFCKeditor.ToolbarSet = "Default";
		}else{
			oFCKeditor.ToolbarSet = "Basic";
		}
		
		oFCKeditor.Config.ToolbarStartExpanded = true;
		oFCKeditor.BasePath = pathprefix + "/boxalino/system/FCKeditor/" ;
		oFCKeditor.ReplaceTextarea();
		if (tabix == 1) {
			firstFCK = oFCKeditor;
		}
	}
	if (firstFCK != null) {
//		alert("focus on " + firstFCK);
		firstFCK.Focus();
	}
}

function testDest(){
	
	alert('start');
	editor.ToolbarSet = "Default";
}

function writeBackFCK2textarea(parentID) {
	var aTag = document.getElementById("" + parentID);
//	alert(aTag);
	i_writeBackFCK2textarea(aTag);
}

function i_writeBackFCK2textarea(aTag) {
	if (aTag == null) {
		return;
	}
	var elems = aTag.childNodes; 
//	alert("anzahl tags " + elems.length);
	for (var i=0; i<elems.length; i++) {
		var elem = elems[i];
		if (elem.nodeType != 1) continue;
//		alert(elem.nodeName + ", " + elem.nodeType + ", " + elem.id);
		if (elem.nodeName.toLowerCase() == "textarea") {
			var editName = elem.name;
//			alert(editName);
			var oEditor = null;
			try {
				oEditor = FCKeditorAPI.GetInstance(editName);
			} catch (err) {}
			if (oEditor != null) {
				oEditor.UpdateLinkedField();
			}		}
		else {
			i_writeBackFCK2textarea(elem);
		}
	}	
}

function replaceTextAreasByWYSIWYGEditorInID (targetID) {
	var x = document.getElementById("" + targetID);
	var tareas = new Array();
	replaceTextAreasByWYSIWYGEditorInTag(x, tareas);
	//alert("found " + tareas.length + " textareas");
	for (var i=0; i<tareas.length; i++) {
		var elem = tareas[i];
		var oFCKeditor = new FCKeditor( elem.name ) ;
		oFCKeditor.Height = 100;
		oFCKeditor.Width = 550;
		oFCKeditor.ToolbarSet = "Basic";
		oFCKeditor.Config.ToolbarStartExpanded = true;
		oFCKeditor.BasePath = pathprefix + "/boxalino/system/FCKeditor/" ;
		oFCKeditor.ReplaceTextarea();
	}
}

function replaceTextAreasByWYSIWYGEditorInTag (tag, tareas) {
	if (tag == null) {
		return;
	}
	var elems = tag.childNodes; 
//	alert("anzahl tags " + elems.length);
	for (var i=0; i<elems.length; i++) {
		var elem = elems[i];
		if (elem.nodeType != 1) continue;
//		alert(elem.nodeName + ", " + elem.nodeType + ", " + elem.id);
		if (elem.nodeName.toLowerCase() == "textarea") {
			var editName = elem.name;
//			alert(editName);
			tareas.push(elem);
		}
		else {
			replaceTextAreasByWYSIWYGEditorInTag(elem, tareas);
		}
	}
}
