 console.log("4------------------------------------------------");
 let car = {};
 car.color = "black";
 car.color = "green";
 car.power = function showPower() {
								   console.log("engien power 101 hp");
								  }
 car.power();
 console.log("------------------------------------------------"); 
 var a=15 // pears
 var b=13 //apples
 function calcFruit(x,y){
	let z=x+y;
	return(z);
	}
 console.log(calcFruit(a,b) + " total fruits ");
 console.log("------------------------------------------------"); 
  const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})
readline.question("What's your name?", (name) => {
console.log("Hi " + name);
readline.close()
})
