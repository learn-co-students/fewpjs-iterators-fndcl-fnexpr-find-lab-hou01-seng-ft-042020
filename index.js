const testVar = {}

function testFunc() {
  return "hi"
}

const superbowlWin = (record) => {
  let result = record.find(record => record.result === "W")
  return !!result ? result.year : undefined
}