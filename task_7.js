    console.log("7-----------------------------------------------");
	str =  'ahb acb aeb aeeb adcb axeb';
	reg = /a.b/g;
	console.log(str.match(reg));
	
	console.log("------------------------------------------------");
	str ='2+3 223 2223';
	reg = /\d\+\d\s/g;	// find digit + digit
	reb = /2\+3\s/g;	 // find only 2+3
	console.log(str.match(reg));
	console.log(str.match(reb));
	
	console.log("------------------------------------------------");
	var now = new Date();
	let day = now.getDate();
	let month = now.getMonth()+1; //// getMonth starts from 0 month January 
	let year = now.getFullYear();
	console.log(day + " Date");
	console.log(month + " Month"); 
	console.log(year + " Year");