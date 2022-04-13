// Program-1
function ShouldIgetlicense(age, bribe){
    if (age >= 18 && bribe >= 100) {
        return "I am eligible to get license"
    } else {
        return "I am not eligible to get license"
    }
}
console.log(ShouldIgetlicense(23, 100))

// Program-2
function ShouldIGetLicense(age, bribe){
    if((age<=18 && bribe>100) || bribe>500){
        console.log('You Pass')
    }
    else if(age>18){
        console.log('You are eligible for License')
    }
    else if(bribe<=100){
        console.log('You are not eligible for License')
    }
}
ShouldIGetLicense(50, 1000)

// Common Array Operations

    //1. push()
    //2. pop()
    //3. shift()
    //4. unshift()
    //5. splice()
    //6. slice()
    //7. indexOf()
    //8. lastIndexOf()
    //9. join()
    //10. sort()
    //11. reverse()
    //12. filter()  
    //13. map()
    //14. reduce()
    //15. forEach()
    //16. some()
    //17. every()
    //18. find()
    //19. findIndex()
    //20. includes()

    //Program-3

    let myFriends =[]

    function addMyFriends(friend) {
        myFriends.push(friend) //push is used to push the values at the end of array
        console.log(myFriends)
    }
    addMyFriends('Arman')
    addMyFriends('Raj')

    //Program-4

    let myFriend =[]

    function addMyFriend(friend) {
        myFriend.unshift(friend) //ushift is used to push the values at the start of array
        console.log(myFriend)
    }
    addMyFriend('Arman')
    addMyFriend('Raj')

    console.log(myFriend[0]) //array starts from index value of 0

    console.log(myFriend.length) //length is used to find the length of array

    myFriend.pop()  //pop is used to remove the last value of array 
    console.log(myFriend)

    //To change the values in array or update the values
    myFriend[1] = 'Akash'
    console.log(myFriend)

// Loops in JS

    //1. for loop
    //2. while loop
    //3. do while loop
    //4. for in loop
    //5. for of loop

    // for loop

    for(let i=0; i<=20; i++) {
        console.log(i)
        //myFriend.push(i)
    }
    
    console.log(myFriend)

    //Program-5

    let evenNumber = []
    let oddNumber = []

    for(i=0; i<=20; i++){
        if(i%2===0){
            evenNumber.push(i)
        }
        else{
            oddNumber.push(i)
        }
    }
    console.log(evenNumber, oddNumber)

    

