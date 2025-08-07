export function lengthOfLongestSubstring(s: string): number {
    let maxSubstr = "";
    let tmpSubstr = "";

    for(let i=0; i<s.length; i++) {
        let currentChar = s.charAt(i);

        let tmpCharPos = tmpSubstr.indexOf(currentChar);
        
        if(i==s.length-1 && tmpCharPos==-1) {
            tmpSubstr += currentChar;
        }

        if(tmpCharPos>-1 || i==s.length-1) {
            if(maxSubstr.length <= tmpSubstr.length)
                maxSubstr = tmpSubstr;
            tmpSubstr = tmpSubstr.substring(tmpCharPos+1);
        }

        tmpSubstr += currentChar;
    }

    return maxSubstr.length;
};