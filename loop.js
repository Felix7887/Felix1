let text="";
for(let i=0;i<5;i++){
    text += " The number is "+i+"<br>";
}
document.getElementById("loop").innerHTML=text;

let number="";
let i=10;
while (i<30){
    number += "<br> the number is"+i;
    i++ 
}
document.getElementById("program").innerHTML=number;