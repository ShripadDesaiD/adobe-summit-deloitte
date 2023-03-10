var locationURL = window.location.href;
var pageName = "Abbvie";
if(window.location.pathname != "/"){
 var interimVal = window.location.pathname.split("/")[2];
 pageName = interimVal.split(".html")[0];
}
var digitalData = {"page":{"pageName":pageName, "URL":locationURL}};
