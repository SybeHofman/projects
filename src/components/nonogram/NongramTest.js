
let solution = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 1, 0, 1, 1, 1, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 1, 1, 1, 0, 1, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

let rowNumbers = []
for(let i = 0; i < solution.length; i++) {
    rowNumbers.push([]);
            let lastTrue = false;
    for(let j = 0; j < solution[i].length; j++) {
        if(solution[i][j] === 1) {
            if(lastTrue) {
                rowNumbers[i][rowNumbers[i].length - 1]++;
            } else {
                rowNumbers[i].push(1);
            }
            lastTrue = true;
        } else {
            lastTrue = false;
        }
    }
}