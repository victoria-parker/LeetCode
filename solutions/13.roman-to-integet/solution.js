/* 13. Roman to Integer

Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000 */

var romanToInt = function(s) {
    arr=s.split('')
    arrn=[]
    for(let i=0;i < arr.length;i++){
        switch (arr[i]){
            case 'I':
                arr[i+1] == 'V' | arr[i+1] == 'X' ? arrn.push(-1) : arrn.push(1)
            break;
            case 'V':
                arrn.push(5)
            break;
            case 'X':
                arr[i+1] == 'L' | arr[i+1] == 'C' ? arrn.push(-10) : arrn.push(10)
            break;
            case 'L':
                arrn.push(50)
            break;
            case 'C':
                arr[i+1] == 'M' | arr[i+1] == 'D'? arrn.push(-100) : arrn.push(100)
            break;
            case 'D':
                arrn.push(500)
            break;
            case 'M':
                arrn.push(1000)
            break;
        }

    }
    return arrn.reduce((acc,val)=>val+acc,0)
};

console.log(romanToInt("MCDLXXVI"))
