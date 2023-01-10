// document.getElementById("count-el").innerText = 5
let count=0

function increment(){
    count += 1
    document.getElementById("count-el").textContent = count
}

function save(){
    console.log(count)
    document.getElementById("prev").textContent += count + " -  "
    
    count = 0
    document.getElementById("count-el").textContent = count
}