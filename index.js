
let count =0
function increment(){
    count+=1;
    document.getElementById("count").innerText =count
}

function save(){
    
    document.getElementById("sa").textContent=document.getElementById("sa").textContent+count+" - ";
    count=0
    document.getElementById("count").innerText =count
}
