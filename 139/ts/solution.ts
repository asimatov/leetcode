export function wordBreak(s: string, wordDict: string[]): boolean {
    const matchs = new Set<Match>();
    const len = s.length;
    for(let i=0; i<len; i++) {
        for(let w=0; w<wordDict.length; w++) {
            let word = wordDict[w];
            if(word.charAt(0)!=s.charAt(i)) // first letter does not match - no need to check further
                continue;

            if (s.substr(i, word.length) == word) {
                matchs.add(new Match(i, i + word.length, word))
            }
        }
    }

    let ends = new Set<number>([0]);
    let k = 0;
    while(!ends.has(len) && ends.size>0) {
        ends = getEnds(matchs, ends)
    }

    return ends.has(len);
}

function getEnds(matchs: Set<Match>, begin: Set<number>): Set<number> {
    let ends = new Set<number>();
    for(let i=0; i<begin.size; i++) {
        [...matchs].filter(m => m.begin == [...begin][i]).forEach((e) => {
            ends.add(e.end);
        });
    }
    return ends;
}

class Match {
    private _begin: number;
    private _end: number;
    private _words: string[] = [];

    constructor(begin:number, end:number, word:string) {
        this._begin = begin;
        this._end = end;
        this._words.push(word);
    }

    get begin(): number {
        return this._begin;
    }

    get end(): number {
        return this._end;
    }

    get words(): string[] {
        return this._words;
    }
}