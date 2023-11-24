

var Wallet= {

    color: "blue", 
    size: "40cm",
    sides: "two",
    thickness: "30"
}

var book= {
    pages: "200",
    name: "10 things", 
    thickness : "20"
} 
 
 
function match_Thickness(book, Wallet) {
    
    if(book.thickness> Wallet.thickness ){
        console.log("Wallet thickness is more")
    
    } 
    else {
        console.log("its not more");
    }


} 

// match_Thickness(book, Wallet); 
// match_Thickness(book,Wallet);
match_Thickness(book,Wallet); 
 
function addelements(one, two, three){
    var myarr = [] ;
    myarr.push(one);
    myarr.push(two);
    myarr.push(three);
    console.log(myarr);


}
addelements('apple', 'banana', 'berry'); 
var result = "Hello".indexOf('l');
console.log(result); 


var clothes = [];
clothes.push('gray t-shirt');
clothes.push('green scarf');
clothes.pop();
clothes.push('slippers');
clothes.pop();
clothes.push('boots');
clothes.push('old jeans'); 
console.log(clothes.length); 

var dog = {
    color: "brown",
    height: 30,
    length: 60 
    
}; 
dog["type"] = "corgi"; 

console.log(dog)
 
try {
    console.log('Hello');
  } catch(err) {
    console.log('Goodbye');
  } 

  var x;

  if(x === null) {
    console.log("null");
  } else if(x === undefined) {
    console.log("undefined");
  } else {
    console.log("ok");
  }
   
  function add(a, b) {
    console.log(a + b)
  }

  add(3, "4");

  var a;
  console.log(a); 

  var str = "Hello";
str.match("jello");
console.log(str.match("jello"));
 
try {
    Number(5).toPrecision(300)
    } catch(e) {
    console.log("There was an error")
    }

    var currencyOne= 200; 
    var Currencytwo= 200; 
    var exchangeRate= 1.2;

    function currencyConverter(amount,rate){
      return amount*rate;

    }
   // Currencytwo= currencyConverter(currencyOne, exchangeRate) 

    function checkArgument(val){
      console.log(val);
      return val;
    } 
    
    
  console.log("last line");  

  var virtualPet = {
    sleepy: true,
    nap: function() {
        this.sleepy = true;
    }
}
console.log(virtualPet.sleepy) // true
virtualPet.nap() 
console.log(virtualPet.sleepy)


console.log("last line");
function addTwoNums(a, b) {
  console.log(a + b)
}

function randomNum() {
  return Math.floor((Math.random() * 10) + 1);
}
function specificNum() { return 42 };

var useRandom = true;

var getNumber;

if(useRandom) {
  getNumber = randomNum
} else {
  getNumber = specificNum
}

addTwoNums(getNumber(), getNumber()) 

console.log("last line two") 
// Task 1: Build a function-based console log message generator (consoleStyler)
function consoleStyler(color, background, fontSize, txt) {
  var message = "%c" + txt;
  var style = `color: ${color};`;
  style += `background: ${background};`;
  style += `font-size: ${fontSize};`;

  console.log(message, style);
}

// Task 2: Build another console log message generator (celebrateStyler)
function celebrateStyler(reason) {
  var fontStyle = "color: tomato; font-size: 50px";

  if (reason == "birthday") {
    console.log("%cHappy birthday", fontStyle);
  } else if (reason == "champions") {
    console.log("%cCongrats on the title!", fontStyle);
  } else {
    console.log("Default message if reason is not recognized.");
  }
}

// Task 3: Run both the consoleStyler and celebrateStyler functions
consoleStyler('#1d5c63', '#ede6db', '40px', 'Congrats!');
celebrateStyler('birthday');

// Task 4: Insert a congratulatory and custom message (styleAndCelebrate)
function styleAndCelebrate(color, background, fontSize, txt, reason) {
  consoleStyler(color, background, fontSize, txt);
  celebrateStyler(reason);
}
 
styleAndCelebrate('ef7c8e', 'fae8e0', '30px', 'You made it!', 'champions'); 

console.log("Last line 3")

function meal(animal){ // object is in parameter 
  animal.food= animal.food+10;  // manipulating property of an object 
}
 var dog={
food: 10
 }; 

 meal(dog); 
 meal(dog); 
 meal(dog); 
 console.log(dog.food); 

 
 function two() {
  return 2;
}

function one() {
  return 1;
}

function calculate(initialValue, incrementValue) {
  return initialValue() + incrementValue() + incrementValue();
}

console.log(calculate(two, one)); 


console.log("Object Oriented Programming");

var purchase = {
  shoes_price: 10,
  taxPrice: 1.5,

totalPrice: function(){
  var calculation = purchase.shoes_price * purchase.taxPrice
  console.log('total price is', calculation);
  
}
};
purchase.totalPrice();
 

class Person {
  constructor(name = "Tom", age = 20, energy = 100) {
      this.name = name;
      this.age = age;
      this.energy = energy;
  }

  sleep() {
      this.energy += 10;
  }

  doSomethingFun() {
      this.energy -= 10;
  }

  toString() {
      return `Name: ${this.name}, Age: ${this.age}, Energy: ${this.energy}`;
  }
}

class Worker extends Person {
  constructor(name = "Tom", age = 20, energy = 100, xp = 0, hourlyWage = 10) {
      super(name, age, energy);
      this.xp = xp;
      this.hourlyWage = hourlyWage;
  }

  goToWork() {
      this.xp += 10;
  }
}

function intern() {
  const internObj = new Worker("Bob", 21, 110, 0, 10);
  internObj.goToWork();
  return internObj;
}

function manager() {
  const managerObj = new Worker("Alice", 30, 120, 100, 30);
  managerObj.doSomethingFun();
  return managerObj;
}

// Example usage:
const internObject = intern();
const managerObject = manager();

console.log("Intern Object:");
console.log(internObject.toString());

console.log("Manager Object:");
console.log(managerObject.toString());


class Cake {
  constructor(lyr) {
      this.layers = lyr + 1;
  }
}

var result = new Cake(1);
console.log(result.layers);


var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake'];

const animal = {
  canJump: true
};

const bird = Object.create(animal);
bird.canFly = true;
bird.hasFeathers = true;

function logDairy() {
  for (const item of dairy) {
    console.log(item);
  }
}

function birdCan() {
  for (const property in bird) {
    console.log(`${property}: ${bird[property]}`);
  }
}

function animalCan() {
  for (const property in bird) {
    console.log(`${property}: ${bird[property]}`);
  }

  for (const property in animal) {
    console.log(`${property}: ${animal[property]}`);
  }
}

logDairy();  // Call the logDairy function
birdCan();   // Call the birdCan function
animalCan(); // Call the animalCan function


let set = new Set();
    set.add(1);
    set.add(2);
    set.add(3);
    set.add(2);
    set.add(1);
 

    
    let obj = {
      key: 1,
      value: 4
  };

  let output = { ...obj };
  output.value -= obj.key;

  console.log(output.value);

  function scopeTest() {
    var y = 44;

    console.log(x);
}

var x = 33;
scopeTest(); 


