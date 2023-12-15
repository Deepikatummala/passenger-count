
let countEL =  document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0
function increment() {
   
     count = count + 1
     countEL.innerHTML =  count   
   
}

function save() {
  let countStr = count + '' + " - "
  saveEl.innerHTML +=  countStr
}