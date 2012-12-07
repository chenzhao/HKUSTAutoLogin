
var getPasswordInput = function(){
	return document.getElementById("password");
}
var submitForm = function(form){
	submitAttr = form.submit;
	if (typeof submitAttr == 'function') {
		submitAttr.call(form);
	} else {
		submitAttr.click();
	}
}
tryAutoLogin = function(){
	console.log("tryAutoLogin");
	var pwd = getPasswordInput();
	if (!pwd){
		console.log("no pwd found");
		return;
	}
	if (pwd.value==""){
		console.log("pwd has no content");
		return;
	}
	submitForm(pwd.form);
}

var n = 0;
while(n<30){
	setTimeout(tryAutoLogin, 100);
	n += 1;
}


