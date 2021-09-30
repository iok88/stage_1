    console.log("6-----------------------------------------------");
	function zver(name){
	 this.name = name
	 this.move = true
	}
	var animal = new zver("Lion");
	console.log(animal);
	function cat(name){
	 this.name = name
	}
	cat.prototype = animal;
	tom = new cat('Tom');
	console.log(tom.move);