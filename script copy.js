console.log("start");

function startEngineFunction() {
  console.log("wroozuuuom");
}

// let car1 = {
//   type: "tesla",
//   engine: "electric",
//   traction: "rw",
//   dors: 5,
//   startEngine: startEngineFunction
// };

// console.log(car1);
// car1.startEngine();

// constructor
function Car(type, engine, traction, dors, name) {
  this.name = name;
  this.type = type;
  this.engine = engine;
  this.traction = traction;
  this.dors = dors;
  this.maxSpeedMS = 100;
}

// Car.prototype.startEngineFunction = startEngineFunction;
Car.prototype.printEngine = function() {
  console.log(this);
  console.log(this.engine);
};

Car.prototype.setOwner = function(owner) {
  this.owner = owner;
};

Car.prototype.stopEngine = function(timeOnTheRoad) {
  console.log("Engine stopped after: " + timeOnTheRoad + "s");
  const metersDone = this.maxSpeedMS * timeOnTheRoad;
  console.log(this.name + " has done " + metersDone + "m");
};

Car.prototype.startEngine = function(timeOnTheRoad) {
  const obj = this;
  setTimeout(function() {
    obj.stopEngine(timeOnTheRoad);
  }, timeOnTheRoad * 1000);
};

const car1 = new Car("tesla", "electric", "rw", 5, "car1");
car1.startEngine(2);

const car2 = new Car("ferrari", "gbl", "awd", 2, "car2");
car2.startEngine(3000);
// console.log(car1, car2);

// car1.printEngine = function() {
//   console.log(this.engine);
// };

// car1.printEngine();
// car2.printEngine();
// console.log(car1.owner);
// car1.setOwner();
// console.log(car1.owner);
console.log(car2.maxSpeed);
console.log(car1.maxSpeed);
// console.log(car1.dors);
// console.log(car2.dors);

// car1.printEngine();
// car1.startEngineFunction();
// car2.printEngine();
