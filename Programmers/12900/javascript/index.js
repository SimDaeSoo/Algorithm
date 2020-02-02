function solution(n) {
    const answer = getPatternCount(n);
    return answer;
}
function getPatternCount(n) {
    const DIVIDE_CONSTANT = 1000000007;
    const patternCount = { 1: 1, 2: 2 };

    for (let i = 3; i <= n; i++) {
        patternCount[i] = (patternCount[i - 1] + patternCount[i - 2]) % DIVIDE_CONSTANT;
    }

    return patternCount[n];
}