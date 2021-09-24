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
 
    let myname = "Ivan"; // 
    const readline = require('readline').createInterface({
      input: process.stdin, 
      output: process.stdout
    }); 
 
    const start = async () =>{
 	   console.log("What's your name?"  )
        for await (const line of readline) {
            if (line == myname) {
	 	   console.log("Hello " + line);
		    }
	 	   else console.log("No such name ");
		   readline.close();
		} 
    }
    start()
 
    console.log("------------------------------------------------"); 
  
  const stop = async () =>{
 	   console.log("HAHAHAHA?"  )
        for await (const line of readline) {
            if (line == myname) {
	 	   console.log("Hello HAHAHA " + line);
		   //readline.close();
	   	    }
	 	   else console.log("No such name HAHAHA ");
		
        } 
    }
    stop()

