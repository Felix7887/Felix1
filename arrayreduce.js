
function sum(...args) {
    return args.reduce((total, args) => total + args,0);
}
console.log(sum(1, 5));
console.log(sum(2));
console.log(sum());
document.getElementById("sum").innerHTML = sum;
