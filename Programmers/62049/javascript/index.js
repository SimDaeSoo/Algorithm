function solution(n) {
    var answer = getPaperPattern(n);
    return answer;
}
function getPaperPattern(n) {
    let pattern = [0];

    for (let i = 1; i < n; i++) {
        const reverse = [...pattern];
        reverse[Math.floor(reverse.length / 2)] = 1;
        pattern = pattern.concat([0, ...reverse]);
    }

    return pattern;
}