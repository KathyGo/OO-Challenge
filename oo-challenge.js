//Part One
class Vehicle {
	constructor(made, model, year) {
		this.made = made;
		this.model = model;
		this.year = year;
	}
	honk() {
		console.log('Beep');
	}

	toString() {
		console.log(`The vehicle is a ${this.made} ${this.model} from ${this.year}`);
	}
}

let myFirstVehicle = new Vehicle('Honda', 'Monster Truck', 1999);
myFirstVehicle.honk();
myFirstVehicle.toString();

// Part Two
class Car extends Vehicle {
	constructor(made, model, year) {
		super(made, model, year);
		this.numWheels = 4;
	}
}

let myFirstCar = new Car('Toyota', 'Corolla', 2005);
myFirstCar.toString();
myFirstCar.honk();
console.log(myFirstCar.numWheels);

// Part Three
class Motorcycle extends Vehicle {
	constructor(made, model, year) {
		super(made, model, year);
		this.numWheels = 2;
	}

	revEngine() {
		console.log('VROOM!!!');
	}
}

let myFirstMotorcycle = new Motorcycle('Honda', 'Nighthawk', 2000);
myFirstMotorcycle.toString();
myFirstMotorcycle.honk();
myFirstMotorcycle.revEngine();
console.log(myFirstMotorcycle.numWheels);

// Part Four
class Garage {
	constructor(capacity) {
		this.vehicles = [];
		this.capacity = capacity;
	}

	add(newCar) {
		if (newCar instanceof Vehicle) {
			if (!this.checkGarageFull()) {
				this.vehicles.push(newCar);
			}
		} else {
			console.log('Only vehicles are allowed in here!');
		}
	}

	checkGarageFull() {
		if (this.vehicles.length + 1 > this.capacity) {
			console.log('Sorry, we’re full.');
			return true;
		} else {
			console.log('Vehicle added!');
			return false;
		}
	}
}

let garage = new Garage(2);
garage.add(new Car('Hyundai', 'Elantra', 2015));
garage.add('Taco');
garage.add(new Motorcycle('Honda', 'Nighthawk', 2000));
garage.add(new Motorcycle('Honda', 'Nighthawk', 2001));
