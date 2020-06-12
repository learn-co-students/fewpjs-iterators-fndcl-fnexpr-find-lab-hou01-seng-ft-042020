const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(record){
  
  const result = record.find(record => record.result === "W")
  return result ? result.year : undefined
}
