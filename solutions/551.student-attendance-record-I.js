/* 551. Student Attendance Record I
You are given a string s representing an attendance record for a student where each character signifies whether the student was absent, late, or present on that day. The record only contains the following three characters:

'A': Absent.
'L': Late.
'P': Present.
The student is eligible for an attendance award if they meet both of the following criteria:

The student was absent ('A') for strictly fewer than 2 days total.
The student was never late ('L') for 3 or more consecutive days.
Return true if the student is eligible for an attendance award, or false otherwise.

 

Example 1:

Input: s = "PPALLP"
Output: true
Explanation: The student has fewer than 2 absences and was never late 3 or more consecutive days.
Example 2:

Input: s = "PPALLL"
Output: false
Explanation: The student was late 3 consecutive days in the last 3 days, so is not eligible for the award.
 

Constraints:

1 <= s.length <= 1000
s[i] is either 'A', 'L', or 'P'.
*/

var checkRecord = function(s) {
    //check was never late more than 3 times
    let regexL=/LLL/g
    let lConsecutive=regexL.test(s)
    
    if(lConsecutive){
        return false
    }
    
    //check absences
    let regexA=/[A]/g
    let amountA=s.match(regexA) ?? 0
    
    if(amountA.length >= 2){
        return false
    }

    //default true as absents fewer than 2 and no 3 or more lates consecutive and the string wont be empty
    return true
};

