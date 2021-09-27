    console.log("4-----------------------------------------------");
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
 
    let myname = "Ivan"; 
	function checkName(name) {
		if (name==myname) {
		console.log("Hello  " + name)	;
		}
		else console.log("No such name");	
	}
	checkName("Ivan");
	
    console.log("------------------------------------------------"); 
    
	function showType(name) {
	c=typeof name;
	console.log (c);
	}
	showType(123);
	showType("Hi");
	showType(true);
	showType({});
	
	console.log("------------------------------------------------"); 
	
	function calcNumber(x){
		
		y=Math. trunc((Math.abs(x))**(1/2)); // take the integral part of the absolute 
											//	value of the square root of the number
		for (let i=2; i<=y; i++){
			if (x%i==0 && x>3) {
				console.log(x + "  HEPROSTOE");
			}
			else console.log(x + "  PROSTOE");
		}
	}
	calcNumber(1);
	calcNumber(2);
	calcNumber(3);
	calcNumber(4);
	calcNumber(5);
	calcNumber(5487);
	
  


