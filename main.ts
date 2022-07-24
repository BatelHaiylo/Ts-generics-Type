interface IUser {
    firstName : string;
    lastName : string;
    dateOfBirth : Date;
}
class Person {
    height: number;
    country: string;
    user: IUser;
    constructor(height: number, country: string, user: IUser){
        this.height = height;
        this.country = country;
        this.user = user
    }
}
let rndUser: IUser = {firstName:"Batel", lastName: "Haiylo", dateOfBirth: new Date("08/20/1997")}
const someone: Person = new Person(1.67, "Israel", rndUser)
console.log(someone)

interface IUser {
    firstName : string;
    lastName : string;
    dateOfBirth : Date;
}
class Person {
    height: number;
    country: string;
    user: IUser;
    constructor(height: number, country: string, user: IUser){
        this.height = height;
        this.country = country;
        this.user = user
    }
}
let rndUser: IUser = {firstName:"Batel", lastName: "Haiylo", dateOfBirth: new Date("08/20/1997")}
const someone: Person = new Person(1.67, "Israel", rndUser)
console.log(someone)

interface ICar {
    model: string;
    numOfDoors: number;
    numOfWheels: number
}
class CarShowRoom {
    city: string;
    country: string;
    showRoomName: string;
    cars: ICar[];
    constructor(city:string, country: string, showRoomName: string,cars: ICar[]){
        this.city = city;
        this.country = country;
        this. showRoomName = showRoomName;
        this.cars = cars
    }
}
let Mersedes: ICar = {model: "barbedos", numOfDoors: 2, numOfWheels:3}
let Rangerover: ICar = {model: "Africa", numOfDoors: 5, numOfWheels:5}
let AlphaRomeo: ICar = {model: "Bali", numOfDoors: 4, numOfWheels:4}
const BonbONShop: CarShowRoom = new CarShowRoom("San-Francisco", "USA", "Bonbon",[Mersedes,Rangerover,AlphaRomeo])
console.log(BonbONShop)

class Garage {
    garadgeName: string;
    ownersName: string;
    isRighteous: boolean;
    cars: ICar[];
    constructor(garadgeName:string, ownersName: string, isRighteous: boolean,cars: ICar[]){
        this.garadgeName = garadgeName;
        this.ownersName = ownersName;
        this. isRighteous = isRighteous;
        this.cars = cars
    }
}
let Bike: ICar = {model: "barbedos", numOfDoors: 2, numOfWheels:3}
let Spashipe: ICar = {model: "Africa", numOfDoors: 5, numOfWheels:5}
let Tesla: ICar = {model: "Bali", numOfDoors: 4, numOfWheels:4}
const BonbONGaradge: Garage = new Garage("Nona", "Mike", false,[Bike,Spashipe,Tesla])
console.log(BonbONGaradge)
