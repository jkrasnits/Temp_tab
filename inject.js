//tab object will initially contain the href attr and the link innerHTML when it is sent to the server
var tab = {};

var selected_link = document.activeElement;

tab.link = selected_link.getAttribute("href");
tab.title = selected_link.innerHTML;


console.log(tab);
JSON.stringify(tab);