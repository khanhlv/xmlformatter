String.space = function(a) {
    var b = [],
        e;
    for (e = 0; e < a; e++) b.push(" ");
    return b.join("")
};

function convertFormat() {
	var a = document.querySelector("#input").value;
	var value = vkbeautify.xml(a);
	
	document.querySelector("#input").focus();
	if (value) {
		document.querySelector("#input").value = value;
	}
}

function convertClear() {
	document.querySelector("#input").value = '';
}

function convertRemoveSpace() {
	var a = document.querySelector("#input").value;
	var value = vkbeautify.xmlmin(vkbeautify.xml(a));
	
	document.querySelector("#input").focus();
	if (value) {
		document.querySelector("#input").value = value;
	}
}

