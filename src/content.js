
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

var tryAutoLogin = function(tried_times){
	console.log("tryAutoLogin", tried_times);
	var pwd = getPasswordInput();
	if (!pwd || !pwd.value){
		console.log("no pwd");
        if (tried_times<10) {
            setTimeout(function(){tryAutoLogin(tried_times+1);}, 200);
        }
		return;
	}
    console.log('submit')
	submitForm(pwd.form);
}

console.log('begin');
tryAutoLogin(0);


