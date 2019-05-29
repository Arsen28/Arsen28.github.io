var start = +prompt();
var num = start;

var result = 0;
while (num > 0) {
    var currentDigit = num % 10;
    result += currentDigit ** 3;
    num = Math.floor(num / 10);
}

if (result === start) {
    alert('Yes');
} else {
    alert('No');
}
