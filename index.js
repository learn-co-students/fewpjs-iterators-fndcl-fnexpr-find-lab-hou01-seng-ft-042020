const testVar = {}

function testFunc() {
  return "hi"
}
// const record = [
//   {year: "2018", result: "L"},
//   {year: "2017", result: "W"},
//   {year: "2016", result: "N/A"}
// ]

// function superbowlWin(record){
//  let recordWin= record.find(function(record) {
//     record.result === "W"
//   }
//   return !!recordWin ? recordWin.year : undefined 
//   )
// }

superbowlWin = (record) => {
  let result = record.find( record => record.result === "W" )
  return !!result ? result.year : undefined
}