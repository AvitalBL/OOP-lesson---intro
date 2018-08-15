//use the `class` keyword to define a class
class User {
    //define the constructor function that will initialize new objects
    constructor (name, department, courseDate) {
      this.name = name;
      this.department = department;
      this.courseDate = courseDate;
    } 
    speak (sentence) {
        console.log(this.name + " says: '" + sentence + "'");
      }
    
    moveDepartment (newDepartment){
        this.department = newDepartment;
      }
    }

  
    //define any other functions/properties of the class
  
var Dan = new User("Dan", "Coding Bootcamp", new Date(2018, 22, 7));
var Shani = new User("Shani", "Coding Evening Course", new Date(2018, 30, 8));

var Shani = new User("Shani" , "A regular course");
Shani.moveDepartment("Coding Bootcamp");

//PARTNER EXERCISE 1 -ok
// console.log(Dan);
// console.log(Shani);

//PARTNER EXERCISE 2 -ok
Dan.speak('Good morning all!');
Shani.speak('Where is class 2?')

Dan.moveDepartment("Coding Bootcamp");
console.log(Dan);

//PARTNER EXERCISE 3 -ok
var Avital = new User('Avital', 'Coding Bootcamp', new Date(2018, 22, 7));
console.log(Avital);

//PARTNER EXERCISE 4 + 5
class Vehicle{
    constructor(x, y, speed, fuel){
        this._x = x || Vehicle.defaultX;
        this._y = y || Vehicle.defaultY;
        this.speed = speed;
        this.speed = speed || Vehicle.defaultSpeed;
        Vehicle.carsSold++;
        this._fuel = fuel;
    }
    honk () {
        console.log("Beep! Beep!");
     }
  
     static getInfo(){
        console.log("Cars are great!! " + Vehicle.carsSold + " cars was sold");
     }

     static setDefaultSpeed(speed) {
         this.defaultSpeed = speed;
     }
//Partner exercise 6
     static setDefaultX(x) {
         this.defaultX = x;
     }
     static setDefaultX(y) {
        this.defaultY = y;
    }
    get x() {
        return this._x;
    }
    set x(value) {
        console.log('setter for x: '+value);
        if(this._fuel > 0){
            this._x = value;
        } else {

        }
    }
// PARTNER EXERCISE 7
    get y() {
        return this._y;
    }
    set y(value) {
        console.log('setter for y: '+value);
        this._y = value;
    }
}

Vehicle.carsSold = 0;
Vehicle.defaultSpeed = 5;
Vehicle.defaultX = 2;
Vehicle.defaultY = 4;
// Car.getInfo();
// var myCar = {x:3, y:45.2, speed: 6};
var myCar = new Vehicle(3, 45.2, 6);
console.log(myCar);
