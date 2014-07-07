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

		//the plan is to have an option to show preview of tab where an iframe shows up
		$("#container").append("<iframe scrolling='no' class='frame' src="+current_tab.link+ "><div>");
	};

}
