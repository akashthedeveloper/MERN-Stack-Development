console.log("Hello World");

const MyFirstVariable = 300
console.log(MyFirstVariable);

// Const Value can't be changed if once it is assigned a certain value- This is a comment
// const MyFirstVariable = 375

let MySecondVariable = 350
console.log(MySecondVariable);

// Here in this case we don't got any error and we can change the value of the variable
MySecondVariable = 400 

console.log(MySecondVariable);

// Data Types in JS

  // String - "Hello World" or 'Hello World'
  // Number - 12345
  // Boolean - true or false
  // Null - null
 Array = [1,2,3,4,5]
 console.log(Array[0]) //Print a Array
  // undefined - undefined
  const someSpecialValue = undefined
  console.log(someSpecialValue)

  // BigInt - BigInt
  const BigIntNumber = 111111111111111111111111111111111n
  console.log(BigIntNumber)

  //typeof operator
  /*myAge = 22
  const MyAge = myAge
  console.log(typeof Array) */

// Math Operators

 //Addition- method 1
const MyAge2022 = 22
const MyUpdatedAge2022 = MyAge2022 + 1
console.log(MyUpdatedAge2022)

 //OR- method 2
 let myAge22 =22
 myAge22 = myAge22 + 1
 console.log(myAge22)

// Subtraction
//Multiplication 
//Division 
//Modulus - remainder of the division
//Exponent - power of the number

// Write a program to calculate the average of number

const friends =[18, 19, 20, 21, 22]
const sumfriendsage = friends[0] + friends[1] + friends[2] + friends[3] + friends[4]
console.log("Sum of Friends Age", sumfriendsage)
const numberoffriends = 5
console.log("Number of friends is", numberoffriends)
const averagefriendsage = sumfriendsage / numberoffriends
console.log("Average of Friends Age", averagefriendsage)

// Increment & Decrement Operators

 // Increment  ++
let myAge = 22
myAge++ // Increment by 1
console.log(myAge)

 // Decrement  -- 
let myAge2 = 24
myAge-- // Decrement by 1
console.log(myAge2)

//console.log is a method to print the value on the console, it is having similar function to print in python

//Functions in JS
let myNumber =22
let Sum = 200
let myName = "Tech Community"

function NewAction() {                      //Function Declaration
    console.log("Join Our Tech Community") //body of function
    console.log(Sum)                       //body of function
}
NewAction()    //Function calling For Printing the Variable value

//Function examples
function CommunityTech() {
    console.log("Join Our", myName)
    console.log("Sum is equal to", Sum)
    console.log("My Roll Call is", myNumber)
}
CommunityTech()

//Function with parameters
/*function AddsTomyNumber(incrementBy, multiplyBy) { //incrementBy is a parameter/argument which is a variable 
    let myNumber = 22
    console.log(incrementBy)
    myNumber = (myNumber + incrementBy) * multiplyBy  
}
AddsTomyNumber(5, 2)
console.log(myNumber)
console.log(AddsTomyNumber(5, 2)) */


//function with  parameters
/*function SubtractMyNumber(incrementBy, subtractBy) { 
    const myValue = 58
    console.log(subtractBy)
    myValue = (myValue + subtractBy)
    SubtractMyNumber(9)
    console.log(myValue)
} */

/*let myAgeValue = 23
let SumValue =200
let totalcount = 5

function addtomyAgeValue(incrementBy) {
    console.log(incrementBy)
    myAgeValue = myAgeValue + incrementBy
}
addtomyAgeValue(3)
console.log(myAgeValue) */

//Return Statement
const MyYear = 22
let sumValue = 205
let totalvalue = 10
function MyNewYear (incrementBy) {
    console.log((MyAge + incrementBy)) //after return no ststement is executed
}
const Myyear = MyNewYear(5)
console.log(Myyear, MyYear)

//if-else statement
let ValueAge =23
function ShouldIgetDrivingLicense(age) {
    if (age >= 18) {
        console.log("You are eligible to get a driving license")
    } else {
        console.log("You are not eligible to get a driving license")
    }
}
console.log(ShouldIgetDrivingLicense(23))

//if-else statement
/*agemine = 23
function ShouldIGetLicensce(age){
    if (agemine >= 18) {
        return "I am eligible to get license"
    } else {
        return "I am not eligible to get license"
    }
}
console.log(ShouldIGetLicensce(23))*/

//logical operators

    //AND - &&
    //OR - ||
    //NOT - !

function ShouldIgetlicense(age, bribe){
    if (age >= 18 && bribe >= 100) {
        return "I am eligible to get license"
    } else {
        return "I am not eligible to get license"
    }
}
console.log(ShouldIgetlicense(23, 100))