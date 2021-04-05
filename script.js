
//converting a array to an object
let array = [1,2,3]

const aToO = (array) =>{
  const obj = {...array}
  return obj
}

console.log(aToO(array))


const obj = {'first': 1, 'second': 2, 'third': 3}


//new way of converting a object to an array
const newOToA = (obj) =>{
  const array = Object.entries(obj)
  
  return array
}

console.log(console.log(newOToA(obj)))


