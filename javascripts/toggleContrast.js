// toggleContrast.js
// swaps out the css for the site
//////////////////////////////////////////////////////

// After DOM is loaded
document.addEventListener('DOMContentLoaded', function() {

	// On load set default if it doesn't exist
	if (localStorage.getItem("highContrastMode") === null) {
		localStorage.setItem('highContrastMode', JSON.stringify(false));
	}
	setMode();

	// Shove this into the window object (not great :/)
	window.toggleContrast = function toggleContrast(){

		if (JSON.parse(localStorage['highContrastMode'])) {
				localStorage.setItem('highContrastMode', JSON.stringify(false));
				location.reload();
			} else {
				localStorage.setItem('highContrastMode', JSON.stringify(true));
			}
			setMode();
	}

	function setMode(){

		if (JSON.parse(localStorage['highContrastMode'])) {
			// Inject CSS

			// This is IE 8 only
			var styleSheet="http://127.0.0.1:4000/css/highContrast.css";

			if(document.createStyleSheet) {
			  document.createStyleSheet(styleSheet);

			// Every other normal browser
			}else {
			  var styles = "@import url("+styleSheet+");";
			  var newSS=document.createElement('link');
			  newSS.rel='stylesheet';
			  newSS.href='data:text/css,'+escape(styles);
			  document.getElementsByTagName("head")[0].appendChild(newSS);
			}

			console.log("Adding: "+styleSheet);

		}else{
			// No override
		}



	}

}, false);
