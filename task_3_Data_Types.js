console.log("1------------------------");
//1.1 string+boolean 
var a="hi";
var b=false;
let x= a + b;
console.log("1.1) " + typeof a + " + " + typeof b + " = " + typeof x);
console.log(" 'Hi'+ false = " + x);
//1.2 string+number
var c="Hello";
var d=47;
let y= c + d;
console.log("1.2) " + typeof c + " + " + typeof d + " = " + typeof y);
console.log(" 'Hello'+ 47 = " + y);
//1.3 number+boolean
var e=3.14;
var f=true;
let z= e + f;
console.log("1.3) " + typeof e + " + " + typeof f + " = " + typeof z);
console.log(" 3.14 + true = " + z);

console.log("2------------------------");

//2.1 string*boolean 
var a="hi";
var b=false;
x= a * b;
console.log("2.1) " + typeof a + " * " + typeof b + " = " + typeof x);
console.log(" 'Hi'* false = " + x);
//1.2 string*number
var c="Hello";
var d=47;
y= c * d;
console.log("2.2) " + typeof c + " * " + typeof d + " = " + typeof y);
console.log(" 'Hello'* 47 = " + y);
//1.3 number*boolean
var e=3.14;
var f=true;
z= e * f;
console.log("2.3) " + typeof e + " * " + typeof f + " = " + typeof z);
console.log(" 3.14 * true = " + z);

console.log("3------------------------");

//3.1 string/boolean 
var a="hi";
var b=true;
x= a / b;
console.log("3.1) " + typeof a + " / " + typeof b + " = " + typeof x);
console.log(" 'Hi'/ true = " + x);
//3.2 string*number
var c="547";
var d=47;
y= c / d;
console.log("3.2) " + typeof c + " / " + typeof d + " = " + typeof y);
console.log(" '574'/ 47 = " + y);
//3.3 number/boolean
var e=3.14;
var f=false;
z= e / f;
console.log("3.3) " + typeof e + " / " + typeof f + " = " + typeof z);
console.log(" 3.14 / false = " + z);

console.log("4------------------------" );

//number -> string -> boolean

console.log("Convert Number 365 to String  = " + typeof String(365)); //number -> string
console.log(String(365));
console.log("Convert Boolean true to String = "+ typeof String(true)); //boolean -> string
console.log(String(true));
console.log("Convert String 'How are you?' to Number  = " + typeof Number("How are you?")); // string -> number
console.log(Number("How are you?"));
console.log("Convert String '254' to Number  = " + typeof Number("254")); // string -> number
console.log(Number("254"));
console.log("Convert Boolean false to Number  = " + typeof Number(false)); // boolean -> number
console.log(Number(false));
console.log("Convert String 'Bye' to Boolean  = " + typeof Boolean("Bye")); // string -> boolean
console.log(Boolean("Bye"));
console.log("Convert String 'false' to Boolean  = " + typeof Boolean("false")); // string -> boolean
console.log(Boolean("false"));
console.log("Convert Number 365 to Boolean  = " + typeof Boolean(365)); // Number -> boolean
console.log(Boolean(365));
console.log("Convert Number 0 to Boolean  = " + typeof Boolean(0)); // Number -> boolean
console.log(Boolean(0));





