const myNumbers = [1, 2, 3, 4, 5]

//  const newNum = myNumbers.map((number) => { return number + 9})
const newNums = myNumbers
    .map((number) => number * 10)
    .map((number) => number + 1)
    .filter((number) => number > 40)

console.log(newNums); // [1, 2, 3, 4, 5]



const array1 = [1, 2, 3, 4, 5]

// const myTotal = array1.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// },5)

const myTotal = myNumbers.reduce((acc, currval) => acc + currval, 5)
 console.log(myTotal); // 15
