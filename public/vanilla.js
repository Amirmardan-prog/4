startTime()

function startTime(){
  let today = new Date()
  let h = today.getHours()
  let m = today.getMinutes()
  let s = today.getSeconds()

  s = checkTime(s)
  m = checkTime(m)

  document.getElementById("time").innerHTML = h + ":" + m + ':' + s;

  setTimeout(startTime, 1000)

}

function checkTime (k){
  if (k<10){k = "0" + k}
  return k
}
