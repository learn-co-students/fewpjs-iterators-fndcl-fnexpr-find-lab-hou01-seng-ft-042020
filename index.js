const testVar = {}

function testFunc() {
  return "hi"
}

superbowlWin = (record) => {
  let win =  record.find(rec => rec.result === "W");
  return win ? win.year : undefined;
};