# Printer

프로그래머스 ["프린터" 문제 링크](https://programmers.co.kr/learn/courses/30/lessons/42587)

**풀이 설명**

```js
Array.prototype.last = function () {
    return this[this.length - 1];
};

const solution = (priorities, location) => {
    const locQueue = [],
        prtQueue = [];

    priorities.reverse().forEach((prt, loc) => {
        locQueue.push(priorities.length - 1 - loc);
        prtQueue.push(prt);
    });

    let count = 0;
    while (1) {
        const maxPrt = Math.max(...prtQueue);
        if (prtQueue.last() === maxPrt) {
            count++;
            if (locQueue.last() === location) {
                return count;
            } else {
                locQueue.pop();
                prtQueue.pop();
            }
        } else {
            locQueue.unshift(locQueue.pop());
            prtQueue.unshift(prtQueue.pop());
        }
    }
};
```



# Athletes who did not finish

프로그래머스 ["완주하지 못한 선수" 문제 링크](https://programmers.co.kr/learn/courses/30/lessons/42576)

**풀이 설명**

```js
const solution = (participant, completion) => {
    const comMap = completion.reduce((res, c) => {
        res[c] ? res[c]++ : (res[c] = 1);
        return res;
    }, {});

    let p;
    for (let i = 0; i < participant.length; i++) {
        p = participant[i];
        if (!comMap[p]) return p;
        else comMap[p]--;
    }
};
```



# Feature development

프로그래머스 ["기능개발" 문제 링크](https://programmers.co.kr/learn/courses/30/lessons/42586)

**풀이 설명**

```js
Array.prototype.isEmpty = function () {
    return this.length === 0;
};

const solution = (progresses, speeds) => {
    const queue = [];

    for (let i = 0; i < progresses.length; i++) {
        const day = Math.ceil((100 - progresses[i]) / speeds[i]);
        queue.unshift(day);
    }

    const result = [];
    let count = 1,
        tmp = queue.pop();
    while (!queue.isEmpty()) {
        const first = queue.pop();
        if (tmp < first) {
            tmp = first;
            result.push(count);
            count = 1;
        } else {
            count++;
        }
    }
    return [...result, count];
};

```

