//retrieves the tabs array from the background page
var background = chrome.extension.getBackgroundPage();
var tabs = background.tabs; 


$( document ).ready(function() {
	populate_popup();

	$('body').on('click', 'a', function(){
    chrome.tabs.create({url: $(this).attr('href')});
   });
});

//loops through tabs array and populates popup
function populate_popup () {
	for (var i = 0; i < tabs.length; i++) {
		var current_tab = JSON.parse(tabs[i][0]);
		var title = current_tab.title;
		var link = current_tab.link;



		if (title.length > 69){
			title = title.substring(0,65) + " ..."
		}


		//the plan is to have an option to show preview of tab where an iframe shows up
		//$("#container").append("<iframe scrolling='no' class='frame' src="+current_tab.link+ "><div>");
		if (!(link === null || link.length===0)){
			$("#container").append("<a href="+link+"><div class='link'>"+title+ "</div></a>");
		}
		
	};

}
