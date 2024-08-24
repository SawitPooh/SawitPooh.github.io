function readInput() {
    let list = [], num;
    while (true) {
        input = prompt("Enter an integer (a negative integer to quit):");
        num = Number(input);
        if (num >= 0) {
            list.push(num);
        } else if (num < 0) {
            break;
        }
        else {
            continue;
        }
    }
    return (list);
}
list = readInput();
function displayStats(n) {
    let maxNum, averageNum = 0, minNum, sum = 0;
    maxNum = Math.max(...n);
    minNum = Math.min(...n);
    for (let i = 0; i < n.length; i++) {
        sum += n[i];
    }
    averageNum = sum / n.length;
    n.length <= 0 ? alert("For the list is empty, the average is 0 ,the minimum is 0 , and the maximum is 0") : alert("For the list is " + n + ", the average is " + averageNum + " ,the minimum is " + minNum + " , and the maximum is " + maxNum);
}

displayStats(list);