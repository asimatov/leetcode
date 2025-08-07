export function longestPalindrome(s: string): string {
    let longestPalindrome = "";

    const stringLength = s.length;
    for(let i=0; i<stringLength; i++) {
        let odd = getPalindrome(s, i)
        let even = getPalindrome(s, i, i+1)
        
        if(longestPalindrome.length <= odd.length)
            longestPalindrome = odd;
        if(longestPalindrome.length <= even.length)
            longestPalindrome = even;   
    }

    return longestPalindrome;
};

function getPalindrome(s: string, indexLeft: number, indexRight = indexLeft) : string {
    const stringLength = s.length;
    let [begin, end] = [0, 0];

    let shift = 0;
    while(indexLeft-shift>=0 && indexRight+shift<=stringLength-1 && s.charAt(indexLeft-shift)==s.charAt(indexRight+shift)) {
        [begin, end] = [indexLeft-shift, indexRight+shift];
        shift++;
    }
    
    return s.substring(begin, end+1);
}