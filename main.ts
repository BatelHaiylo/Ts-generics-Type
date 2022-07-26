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

// קלטי 2 מס והדפיסי את כולם מהנמוך לגבוהה 

function numsBetween(minNum: number, maxNum: number):number[]{
    const betweenArr : number[] = []
    for(let i = minNum+1; i<maxNum; i++){
        betweenArr.push(i)

    }
    return betweenArr
}
function printMin(num1: number, num2: number):void{
    num1 == Math.min(num1,num2) ? console.log(numsBetween(num1,num2)) : console.log(numsBetween(num2,num1))
}
// printMin(3,6)

function printSort(...numbers: number[]):void{
    numbers ? console.log(numbers.sort((a,b) => a-b)) : "no parameters were given"
}
// printSort(9,5,2,1)

// הכניסי את כל המספרים הזוגיים  למערך 

function getEven(...numbers: number[]):number[]{
    let evenArr: number [] = []
    numbers ? numbers.forEach(item => {item % 2 == 0 ? evenArr.push(item) : console.log( "not even")}) :console.log( "no parameters")
    return evenArr
}
// console.log(getEven(2,5,8,6,4,11,31,20))

function getEvenNum(num:number): number[]{
    let evenArr: number [] = []
    for(let i = 0; i<num; i++){
        i % 2 == 0 ? evenArr.push(i) : console.log("not even")
    }
    return evenArr
}
console.log(getEvenNum(20))
