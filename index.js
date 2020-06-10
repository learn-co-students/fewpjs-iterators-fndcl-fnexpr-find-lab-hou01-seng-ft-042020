const testVar = {}

function superbowlWin(array) {
  const object = array.find(obj => obj.result === "W")
  return object ? object.year : undefined
}