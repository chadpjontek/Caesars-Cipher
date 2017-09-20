//A function which takes a ROT13 encoded string as input(CAPS ONLY) and returns a decoded string.
function rot13(str) { // LBH QVQ VG!
	/*loop through str and find charCode val for each char.
	Then either subtract 13 (letters N-Z), add 13 (letters A-M) or do nothing.
	Converts to characters based on Unicode value and pushes them into charCodeArr
	*/
	var charCodeArr = [];
	var charCode = "";
	for (var i = 0; i < str.length; i++) {
		charCode = str.charCodeAt(i);
		if (charCode >= 78 && charCode <= 90) {
			charCodeArr.push(String.fromCharCode(charCode - 13));
		} else if (charCode >= 65 && charCode <= 77 ) {
			charCodeArr.push(String.fromCharCode(charCode + 13));
		} else {
			charCodeArr.push(String.fromCharCode(charCode));
		}
	}
	//convert to string with join
  	str = charCodeArr.join(""); 
  	return str;
}
// examples
rot13("SERR CVMMN!"); // decodes to "FREE PIZZA!"
rot13("SERR YBIR?"); // decodes to "FREE LOVE?"
rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK."); // decodes to "THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX."