var isPalindrome = function(x) {
    arr=x.toString().split('').map(value=>parseInt(value,10))

    arrReverse=[...arr].reverse()
    y=parseInt(arrReverse.join(''),10)

    return x == y ? true : false
};

console.log(isPalindrome(121))