superbowlWin = function(record) {
  let a = record.find(function(el)  {return el.result === "W"})
  return a ? a.year : undefined
}
