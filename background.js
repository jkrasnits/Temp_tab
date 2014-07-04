var tabs = [];

chrome.contextMenus.create({
	"id": "temp_tab",
	"title": "Add to temp_tab",
	"contexts": ["link"],
	"onclick": contextMenuClickHandler
	}, function(){
		console.log("context menu item created");
	}
);

function contextMenuClickHandler(info, tab){
	chrome.tabs.executeScript(null, {file: "inject.js"}, function(tab){
		tabs.push(tab);
		for(var i = 0; i < tabs.length; i++){
			console.log(tabs[i]);
		}

	});
}