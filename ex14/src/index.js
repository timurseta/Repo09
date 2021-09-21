// Only change code below this line
function myForLoop1() {
    var evenNumbers = "";
    for (var i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        if (i != 8) {
        evenNumbers += i + ",";
        i++;
    } else { 
        evenNumbers += i;
    }
    } 
}
    return evenNumbers;
}

function myForLoop2() {
    var evenInverseNumbers = "";
    for (var i = 9; i >= 0; i--) {
if (i % 2 == 0) {
    if (i != 0) {
    evenInverseNumbers += i + ",";
    i--;
} else {
    evenInverseNumbers +=i;
}
}
    }
return evenInverseNumbers;
}
console.log(myForLoop1());
console.log(myForLoop2());
// Only change code above this line
module.exports = {
    myForLoop1,
    myForLoop2
};