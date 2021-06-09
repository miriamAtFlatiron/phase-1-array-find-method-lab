
Three ways to solve: 

var superbowlWin = (arr) => {
  const results = arr.find( rec => rec.result === "W" )
 
  if (!!results) {
    return results.year
  }
}

var superbowlWin = (arr) => {
  const results = arr.find( rec => rec.result === "W" )
  return results ? results.year : alert('undefined')
}
  

var superbowlWin = (arr) => {
  const results = arr.find( rec => rec.result === "W" )
 
  if (results) {
    return results.year
  }
}
