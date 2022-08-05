'use strict';

//const requestConfrim = require('./library/confrim.js');

var requestPOST = {
url: "",
options: {}
}

//requestConfrim = { POST: requestPOST };

function getUrlConfrimJs (request = {}) {

requestPOST = request;

function urlDB () {
var url = requestPOST.url;
return url;
}

function getOptions () {
var requestOPTIONS = requestPOST.options;
return requestOPTIONS;
}

var requestResult = "";

if (urlDB()[urlDB().length-1] === "/") {
//var requestResult = urlDB().slice("0");
//var requestResult = urlDB().replace(urlDB()[urlDB().length-1], "");
//urlDB() + urlDB().split("").pop();
}

//var requestResult = urlDB() + '?' + JSON.stringify(getOptions()).toString().replace(`{`, "").replace(`}`, "").replace(Number, "") + requestPOST.post.map(x=>x);
//var requestResult = urlDB() + '?' + getOptions().map(x=>`${x}=${requestPOST.post.map(x=>x)}`).join("");
//var requestResult = urlDB() + '?' + getOptions().map (options => options + "=").join("&");

/*requestPOST.post.map(opt => {
var requestResult = urlDB() + '?' + getOptions().map (options => options + "=" + opt).join("&");
});*/

//var requestResult = urlDB() + '?' + getOptions().map (options => options + "=" /*requestPOST.post.map(x => x)*/).join("&");

//var requestResult = urlDB() + '?' + getOptions().map (options => options + "=" + ArrayListPush.map(x=>x.array)).join("&");
var ArrayListPush = [];

requestPOST.post.map(x=>{
ArrayListPush.push({
array: x
})
});

var requestResult = urlDB() + '?' + getOptions().map (options => {
return options + "=" + ArrayListPush.map(x => x.array);
}).join("&");

var requestResult = requestResult.toLocaleString();

var requestResult = requestResult.slice() + requestResult.slice(requestResult.indexOf(",") + requestResult.length - requestResult.indexOf(","));

if (/(?=[^\d])[\.*-0-9+]/.test(requestResult)) {

//var requestResult = requestResult.replace(",", "").replace(/(?=[^,])[0-9]+/gi, "");

}

return requestResult.replace("", "").replace(RegExp(Symbol), "").replace(/\,[0-9]+/g, "");
//.match(/[0-9]+/g);

 //urlDB().toLocaleString().split("/").join("");
};

module.exports = getUrlConfrimJs;