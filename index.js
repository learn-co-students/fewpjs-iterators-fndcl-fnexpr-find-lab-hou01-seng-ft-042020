const testVar = {}


function superbowlWin(record){
  const object = record.find(obj => obj.result === 'W')
  return object ? object.year : undefined
}