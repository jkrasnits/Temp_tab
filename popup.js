//retrieves the tabs array from the background page
var background = chrome.extension.getBackgroundPage();
var tabs = background.tabs;



$( document ).ready(function() {
	populate_popup();
});

//loops through tabs array and populates popup
function populate_popup () {
	for (var i = 0; i < tabs.length; i++) {
		var current_tab = JSON.parse(tabs[i][0]);
		$("#container").append("<p>", current_tab.title, " : ", current_tab.link, "</p>");
	};

}