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
	chrome.tabs.executeScript(null, {file: "inject.js"}, function(data){
		//var track = JSON.parse(data[0]);
		//tracks.push(track);
	});
}