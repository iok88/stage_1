    console.log("8-----------------------------------------------");
	try {
	 console.log(a);
	 let a = 3;
	} catch (err) {
	 if (err.name == "ReferenceError") {
	  console.log("Before using 'a' you need to declare");
	  }
	}
	try {
	 let b = 1/0;
	 if (b == Infinity){
	  throw new SyntaxError("Cannot be divided by zero");
	 }
	} catch (e) {
	 console.log(e.message);
	}