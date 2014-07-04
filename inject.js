var tab = {};

var selected_link = document.activeElement;

tab.link = selected_link.getAttribute("href");
tab.name = selected_link.innerHTML;

console.log(tab);

JSON.stringify(tab);