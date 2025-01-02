// Nasted Scopes
function one(){
    const username = "Shreyash"

    function two(){
        const website = "yputube.com"
        console.log(username);
    }
    // console.log(website);
two()
}

// one()

 if (true){
     const username = "Shreyash"
  if (username === "Shreyash"){
 const website= "youtube.com"
 //console.log(website+username);
   }
//   console.log(website);
 }


// console.log(username);


// insterting

function adone(num){
    return num + 1
}

adone(5)


const addTwo = function(num){
    return num + 2
}

addTwo(5)