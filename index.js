// const testVar = {}

// function testFunc() {
//   return "hi"
// }

// const record = [
//   {year: "2018", result: "L"},
//   {year: "2017", result: "W"},
//   {year: "2016", result: "N/A"}
// ];


// const superbowlWin = record.find( ({result}) => result === "W");
// console.log(superbowlWin);
superbowlWin = (record) => {
  let result = record.find( record => record.result === "W" )
  return !!result ? result.year : undefined
}