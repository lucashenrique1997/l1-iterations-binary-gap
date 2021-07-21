console.log(solution(9));
console.log(solution(529));
console.log(solution(20));
console.log(solution(15));
console.log(solution(1041));
console.log(solution(32));

function solution(n) {
    let bin = Math.abs(n).toString(2);
    const gaps = bin.split('1');
    let longestGap = 0;

    if(gaps.length <= 2) return 0;
    gaps.shift()
    gaps.pop()

    for(let gap of gaps) {
        longestGap = Math.max(longestGap, gap.length);
    }

    return longestGap;
}