var tabs = [];

chrome.tabs.getCurrent(function(tab){
        console.log(tab.url);
    }
);

//creates context menu with add option only when a right click is done on a link
chrome.contextMenus.create({
	"id": "temp_tab",
	"title": "Add to temp_tab",
	"documentUrlPatterns":["http://www.reddit.com/*"],
	"contexts": ["link"],
	"onclick": contextMenuClickHandler
	}, function(){
		console.log("context menu item created");
	}
);

//handler for the add option - runs inject.js and then adds resulting object to array of temp_tabs
function contextMenuClickHandler(info, tab){
	chrome.tabs.executeScript(null, {file: "inject.js"}, function(tab){
		tabs.push(tab);
		for(var i = 0; i < tabs.length; i++){
			console.log(tabs[i]);
		}

	});
}
