export function countSubstrings(s: string): number {
    let totalCount = 0;

    for(let i=0; i<s.length; i++) {
        totalCount += getPalindromesCount(s, i) //odd
        totalCount += getPalindromesCount(s, i, i+1) //even
    }

    return totalCount;
};

function getPalindromesCount(s: string, begin:number, end=begin) {
    let count = 0;
    let shift = 0;
    const len = s.length
    while(begin-shift >=0 && end+shift <= len-1 && s.charAt(begin-shift)==s.charAt(end+shift)) {
        shift++;
        count++;
    }
    return count;
}

