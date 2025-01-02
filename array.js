//array

// const fruits = [1, 2, 4, 6, 8, 9]


// fruits.push("banana", "apple", "peach");
// console.log(Object.keys(fruits));
// console.log(fruits.length)

// fruits.pop([4],[5]);
// console.log(Object.keys(fruits));
// console.log(fruits.length)

// console.log(fruits.toString)



// const myArr = [0, 1 , 2 , 6 , 4 , 5]
// const myHeors = ["ironman", "batman"]

// const myArr2 = new Array(1,2,3,4)
// console.log(myArr2[3])

// myArr.push(11)
// myArr.push("Batman" , "Superman")
// myArr.pop(7)

// myArr.unshift(11)
// myArr.shift(3)

// console.log(myArr.includes(6))
// console.log(myArr.indexOf(6));
// const newArr = myArr.join()

// console.log(myArr);
// console.log(typeof newArr);

//slice and splice
// it return a section of and array
// console.log(" A", myArr);

// const myn1 = myArr.slice(1,3)

// const myn2 = myArr.splice(1, 3)


// console.log(myn2)
// console.log("c", myArr);



const marvelHroe = ["thor", "ironman", "spiderman"]
const dcHeroes = ["superman", "flash", "batman"]

// marvelHroe.push(dcHeroes)

// console.log(marvelHroe[3][0]);


// const allHerores = marvelHroe.concat(dcHeroes)
// console.log(allHerores);

const all_new_heroes = [...marvelHroe, ...dcHeroes]

// console.log(all_new_heroes)

const another_array = [1, 2, 3, [4, 5, 6], 7,[6, 7,[4, 5]]]

const real_another_array = another_array.flat(Infinity)

console.log(real_another_array);

 console.log(Array.isArray("Shreyash"))
console.log(Array.from("Shreyash").toString)


let score1 = 100
let score2 = 200
let score3 = 300


console.log(Array.of(score1, score2, score3));