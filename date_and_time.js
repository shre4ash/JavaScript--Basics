let myCreatedDate = new Date("01-14-2023")

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

let  newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

console.log(newDate.toLocaleDateString('default', {
    weekday: "long"
}))


