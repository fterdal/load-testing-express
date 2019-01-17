const axios = require('axios')

// const getRootParallel = async (numRequests) => {
//   const dummyArray = '0'.repeat(numRequests).split('')
//   await Promise.all(
//     dummyArray.map(() => axios.get('http://localhost:3000/'))
//   )
// }

const get = async () => {
  console.log('BEFORE')
  const { data: { message } }  = await axios.get('http://localhost:3000/')
  console.log('AFTER', message)
}


// getRootParallel(5)

// const emptyArr = new Array(10)
// console.log(emptyArr.length)
const dumbArr = '0'.repeat(1000).split('')
console.log(Array.isArray(dumbArr))

// [1,2,3,4].forEach(x => console.log('HELLO'))

module.exports = {
  get,
}
