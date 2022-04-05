/* 20. Valid Parentheses
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 

Example 1:
Input: s = "()"
Output: true


Need to learn stack and come back to this one
 */
var isValid = function(s) {
    let arr=s.split('')

    
};

console.log(isValid("(()"))

 




    // let arr=s.split('')
    
    // let arrp=arr.some(value=>value == '('| value == ')')
    // let arrb=arr.some(value=>value == '['| value == ']')
    // let arrbc=arr.some(value=>value == '{'| value == '}')

    // let regexp=/\(\)|\(\[\]\)|\(\{\}\)/gm
    // let regexb=/\[\]|\[\(\)\]|\[\{\}\]/gm
    // let regexbc=/\{\}|\{\(\)\}|\{\[\]\}/gm
    // let regexi=/\}\{|\)\(|\}\[/gm

    // if(arrb){
    //     return regexb.test(s)
    // }
    // if(arrp && arrb && arrbc){
    //     return regexp.test(s) && regexb.test(s) && regexbc.test(s) && !regexi.test(s)
    // }else if(!arrp && arrb && arrbc){
    //     return regexb.test(s) && regexbc.test(s) && !regexi.test(s)
    // }else if(arrp && !arrb && arrbc){
    //     return regexp.test(s) && regexbc.test(s) && !regexi.test(s)
    // }else if(arrp && arrb && !arrbc){
    //     return regexp.test(s) && regexb.test(s) && !regexi.test(s)
    // }else if(arrp && !arrb && !arrbc){
    //     return regexp.test(s) && !regexi.test(s)
    // }else if(!arrp && arrb && !arrbc){
    //     return regexb.test(s) && !regexi.test(s)
    // }else if(!arrp && !arrb && arrbc){
    //     return regexbc.test(s) && !regexi.test(s)
    // }

    // var isValid = function(s) {

    //     // let arr=s.split('')
    //     // checkp=arr.includes(value=> value == ')')

    //     let regexp=/\(\)/gm
    //     let regexb=/\[\]/gm
    //     let regexbc=/\{\}/gm

    //     // return regexp.test(s) && regexb.test(s)
    //     return checkp
    // };