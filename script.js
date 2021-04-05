
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
  let array = Object.entries(obj)
  
  return array
}

console.log(console.log(newOToA(obj)))
//or

//This is considering that the key is a string...if the key was a number on line 28 change string to number
const altOToA = (obj) =>{
  let array = Object.keys(obj).map(key => [String(key), obj[key]])

  return array
}

console.log(altOToA(obj))