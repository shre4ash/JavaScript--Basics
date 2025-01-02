// function sayMyName(){
//     console.log("s")
//     console.log("h")
//     console.log("h")
//     console.log("y")
//     console.log("a")
    
//     console.log("s")
// }


// sayMyName()
//parameters
// function addtion(a,b){
//    console.log(a  +  b);

// }
function addtion(a,b){
    return a + b
 
 }
const result = addtion(77,1)
// console.log("Result:", result);

 function loginUserName(username =" shrexash" ){
    if(!username){
        console.log("Please enter valid username");
        return
    }
    return `${username} just logged in`
 }

//  console.log(loginUserName("shreyash"))

 function calculateCartPrice(...num1){
return num1
 }
// console.log(calculateCartPrice(1000,400,6999))

const usser = {
    username: "shreyash",
    price: 900
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username}
         and price is ${anyobject.price}`);
}

// handleObject(usser)
//direct object approach

handleObject({userbame: "shreyash", price: 900})

const myNewArray = [1,2,3,4,5,6,7,8,9,10]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));