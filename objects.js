// singleton 

// object litrels

const mySym = Symbol("key1")


const jsUser = {
    name : "shreyash",
    "full name": "Shreyash Kumbhar",
    mySym:"mykey1",
    age: 18,
    location : "Pune",
    email: "shreyashkumbhae002@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(jsUser["full name"])
// console.log(jsUser[mySym])

// jsUser.email = "shreyash@gmail"


// console.log(jsUser.email)

// Object.freeze(jsUser)
// console.log(jsUser.age)

// console.log(jsUser)
console.log(jsUser[mySym])
  jsUser.greeting  = function (){
    console.log("Hello JS user");
}
jsUser.greetingTwo = function(){
    console.log(`Hello JS user,${this.name}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());