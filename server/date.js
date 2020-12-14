// const today = new Date()
// today.toLocaleString('default', {month: 'long'})
// console.log('Today month is: ', today )

var today = new Date()
var month = today.toLocaleString('da-DK', { month: 'long' })
console.log('Month: ', month )