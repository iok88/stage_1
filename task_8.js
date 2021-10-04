    console.log("8-----------------------------------------------");
	try {
	 console.log(a);
	 let a = 3;
	 a = 1/0;
	 if (a == Infinity){
	  throw new SyntaxError("Cannot be divided by zero");
	 }
	} catch (err) {
	 if (err.name == "ReferenceError") {
	  console.log(" Before using 'a' you need to declare");
	  }
	  else
	  console.log(err.message);
	 }
	