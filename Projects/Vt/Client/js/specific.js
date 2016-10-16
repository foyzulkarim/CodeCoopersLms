function handleView(id) {
	var element = document.getElementById(id+'Content');		
	var elementTitle = document.getElementById(id);
	if(element.style.display == 'none') {
		element.style.display = 'block';
		elementTitle.className = "title open";
	} else {
		element.style.display = 'none';
		elementTitle.className = "title";				
	}
}

function handleViewDetail(id, oid) {
	var element = document.getElementById(id+'Content');		
	if(element.style.display == 'none') {
		element.style.display = 'block';	
	} else {
		element.style.display = 'none';				
	}
}

function detectIEBrowser() {
	if ($.browser.msie && $.browser.version == 10) {
		$("html").addClass("ie10");
	}
	if ($.browser.msie && $.browser.version == 9) {
		$("html").addClass("ie9");
	}
	if ($.browser.msie && $.browser.version == 8) {
		$("html").addClass("ie8");
	}
	if ($.browser.msie && $.browser.version == 7) {
		$("html").addClass("ie7");
	}
	return;
}

function memberDetails(id) {
	var element = document.getElementById(id);
	var elementTitle = document.getElementById('title'+id);
	if (element.style.display != 'inline-block') {
		element.style.display = 'inline-block';
		elementTitle.className = "linkSchliessen open1";
	} else {
		element.style.display = 'none';
		elementTitle.className = "linkOeffnen title1";
	}
}

$(document).ready(function(){
	$("a[rel^='prettyPhoto']").prettyPhoto();
});

$(function() {  
	$("#egwsitemapclick").click(function() {  
		$(".egwsitemapcontent").toggleClass("egwsitemapcontent-change");
		$(".egwsitemapbutton").toggleClass("egwsitemapbutton-change");
	});  
});

$(function() {  
	$("#egwmoverevent").click(function() {  
		$(".egwmover").toggleClass("egwmover-change");
		$(".egwmovertoggle").toggleClass("egwmovertoggle-change");
	});  
});
$(function() {  
	$("#egwmobileevent").click(function() {  
		$(".egwmainnavigationwrapper").toggleClass("egwmainnavigationwrapper-change");
		$(".egwmobile-navbtn-toggle").toggleClass("egwmobile-navbtn-toggle-change");
	});  
});
$(function() {  
	$("#egwmobilezoom").click(function() {  
		$(".egwsearchwrapper").toggleClass("egwsearchwrapper-change");
		$(".egwmobile-zoombtn-toggle").toggleClass("egwmobile-zoombtn-toggle-change");
	});  
});

(function(window, document, undefined){
	var XBTooltip = function(element, userConf, tooltip) {
		var config = {
			id: userConf.id|| undefined,
			className: userConf.className || undefined,
			x: userConf.x || 20,
			y: userConf.y || 20,
			text: userConf.text || undefined
		};
		var over = function(event) {
			tooltip.style.display = "block";
		},
		out = function(event) {
			tooltip.style.display = "none";
		},
		move = function(event) {
			event = event ? event : window.event;
			if ( event.pageX == null && event.clientX != null ) {
				var doc = document.documentElement, body = document.body;
				event.pageX = event.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
				event.pageY = event.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
			}
			tooltip.style.top = (event.pageY+config.y) + "px";
			tooltip.style.left = (event.pageX+config.x) + "px";
		}
		if (tooltip === undefined && config.id) {
			tooltip = document.getElementById(config.id);
			if (tooltip) tooltip = tooltip.parentNode.removeChild(tooltip)
		}
		if (tooltip === undefined && config.text) {
			tooltip = document.createElement("span");
			if (config.id) tooltip.id= config.id;
			tooltip.innerHTML = config.text;
		}
		if (config.className) tooltip.className = config.className;
		tooltip = document.body.appendChild(tooltip);
		tooltip.style.position = "absolute";
		element.onmouseover = over;
		element.onmouseout = out;
		element.onmousemove = move;
		over();
	};
	window.XBTooltip = window.XBT = XBTooltip;
})
(this, this.document);