let text="";
for (let i=1;i<20;i+=2){
    text += " the even number is "+i+"<br>";
}
console.log(text);
document.getElementById("odd").innerHTML=text;

let text1="";
for (let i=0;i<20;i+=2){
    text1 += " the even number is "+i+"<br>";
}
console.log(text1);
document.getElementById("even").innerHTML=text1;



