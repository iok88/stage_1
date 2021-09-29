    console.log("5-----------------------------------------------");
	let films = ["The Matrix","The Green Mile", "The Shawshank Redemption", "Lord of the Rings", "Forrest Gump"];
	films.map(item=>console.log(item));
	
	console.log("------------------------------------------------");
	let cars = [
	 "Honda", 
	 "Toyota", 
	 "Volkswagen", 
	 "Audi", 
	 "Lada", 
	]
	let strCar = cars.join('; ');
	console.log(strCar);
	let arrCar = strCar.split('; ');
	console.log(arrCar);
	
	console.log("------------------------------------------------");
	let names = ["Ivan", "Oleg", "Sanya", "Vasya"];
	console.log(names);
	names = names.map(item=>("Hello " + item));
	console.log(names);
	
	console.log("------------------------------------------------");
	let numb = [0,1,0,2,5,5,];
	console.log(numb);
	numb = numb.map(item=>Boolean(item));
	console.log(numb);
	
	console.log("------------------------------------------------");
	let arr1 = [1,6,7,8,3,4,5,6];
	function compNum (a,b){
	 if (a<b) return 1;
	 if (a==b) return 0;
	 if (a>b) return -1;
	}
	arr1.sort(compNum);
	console.log(arr1 +" descending sort" );	
	console.log("------------------------------------------------");
	let arr2 = [1,6,7,8,3,4,5,6];
	let arr3 = arr2.filter(item => item > 3);
	console.log(arr3 + " filter >3");
	
	console.log("------------------------------------------------");
	function arrId (arr, a){
	 let b = arr.indexOf(a);
	 console.log(arr + " " + a +" index = " + b);
	 return b;
	}
	arrId([1,3,5,7,9,255,47], 5);
	arrId([1,3,5,7,9,255,47], 77); // for example if no such element in array
	
	console.log("------------------------------------------------");
	
	function lessTen(z){
	 for (let i=z; i>=10; i--){
	   console.log(i);
	 }
	}
	lessTen(15);
	
	console.log("------------------------------------------------");
	console.log("prime numbers")
	function calcNumber(x){
		y=Math. trunc((Math.abs(x))**(1/2)); // take the integral part of the absolute 
											//	value of the square root of the number
		f = true;
		let i=2;
		while (i<=y){						// like in a task_4, but used while
			if (x%i==0) {
				f=false;
			}
		i++;
		}
		if (f) {
			 return 1;
		}
		else return 0;
	}
	for (let i=2; i<100 ; i++){  
	 if (calcNumber(i)) {
	  console.log(i);
	 }
	}
	
	console.log("------------------------------------------------");
	console.log("odd numbers");
	for (let i=1; i<20; i++){
	 if (i%2 == 0) continue;
	 console.log(i);
	}
	
	
	
	
	
	
	
	
	
	