const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(obj){
  let result = obj.find(obj => obj.result === "W")
  return result ? result.year : undefined
}