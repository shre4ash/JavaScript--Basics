// const tinderUser = new Object()
 const tinderUser={} 

 tinderUser.id = "77shre"
    tinderUser.name = "Shreya"
    tinderUser.isLoggedId = false

// console.log(tinderUser); // {}

const regularUser = {
    Mob: 1234567890,
    fullName: {
        userfullname : {
            firstName: "Shreya",
            lastName: "Sharma"
        }
    }
    }


// console.log(regularUser.fristName.userfullname.fristName)

const obj1 = {
    1:"a",
    2:"b",
}
const obj2 = {
    3:"a",4:"b"
}
// const obj3 = Object.assign({},obj1,obj2)
// console.log(obj3)

const obj3 = {...obj1,...obj2}
//console.log(obj3);

const user =[
    {
        id: 1,
        email:"h@gmail.com"
    },
]

console.log(tinderUser)

console.log(Object.keys(tinderUser)); //important 
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'))


const course   = {
    coursename: "js in hindi",
    price:"999",
    courseInstructor:"Nagraj manjule"

}
const {courseInstructor: shryash} = course

// console.log(courseInstructor);

// course.courseInstructor
console.log(shryash)

//react perspective
// const navbar = ({company}) => {

// }
// navbar(company = "hitesh")

