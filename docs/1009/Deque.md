# Deque

데크는 데이터의 삽입과 삭제가 큐의 양쪽 끝에서 모두 발생하는 자료구조

자바스크립트에서의 데크 구현은 `Array` 객체로 가능하고 삽입과 삭제는 `unshift` `shift` `push` `pop` 라는 메서드로 가능하다.

데크는 양쪽 끝에서 삽입과 삭제가 일어나기 때문에 배열로 구현하는 것보다 이중 연결 리스트를 이용하여 구현하는 것이 효율적이다.

하지만 지금은 `Array` 객체 메서드를 이용하는 것으로 넘어가자.



# Problem

## Make Queue

자연수를 저장하는 큐를 만들고자 한다.

입력으로 주어지는 큐 명령어를 처리하는 프로그램을 작성하자.

명령어는 6가지이고 명령에 따라 반환된 값을 배열에 넣어 최종적으로 반환하자.

- enqueue X : 자연수 X를 큐 뒤쪽에 넣는다.
- dequeue : 큐 앞쪽에 있는 값을 제거하고 그 `값` 을 반환한다. 만약 값이 없다면 `-1` 을 반환한다.
- empty : 큐가 비어 있다면 `1` 아니면 `0`을 반환한다.
- size : 큐에 들어있는 자연수 `개수` 를 반환한다.
- front : 큐 앞쪽에 값이 있다면 해당 `값` 을 없다면 `-1` 을 반환한다.
- back : 큐 뒤쪽에 값이 있다면 해당 `값` 을 없다면 `-1` 을 반환한다.



### example

```markdown
TC1

Input: [ "enqueue 1", "enqueue 2", "dequeue", "dequeue", "dequeue" ]
Output: [ 1, 2, -1 ]

TC2

Input: [ "enqueue 3", "enqueue 4", "enqueue 5", "enqueue 6", "front", "back", "dequeue", "size", "empty"]
Output: [ 3, 6, 3, 3, 0 ]

TC3

Input: [ "enqueue 7", "enqueue 8", "front", "back", "size", "empty", "dequeue", "dequeue", "dequeue", "size", "empty", "dequeue", "enqueue 9", "empty", "front"]	
Output: [ 7, 8, 2, 0, 7, 8, -1, 0, 1, -1, 0, 9]
```



### solution

```js
class Queue {
    constructor() {
        this.repo = [];
    }

    enqueue(data) {
        this.repo.unshift(data);
    }

    dequeue() {
        if (this.isEmpty()) {
            return -1;
        } else {
            return this.repo.pop();
        }
    }

    isEmpty() {
        if (this.repo.length === 0) {
            return 1;
        } else {
            return 0;
        }
    }

    getSize() {
        return this.repo.length;
    }

    getFront() {
        if (this.isEmpty()) {
            return -1;
        } else {
            return this.repo[this.repo.length - 1];
        }
    }

    getBack() {
        if (this.isEmpty()) {
            return -1;
        } else {
            return this.repo[0];
        }
    }
}

const getQueueOperResult = (cmds) => {
    const queue = new Queue();
	// 각 커맨드의 결과 값을 result에 저장 후 리턴
    return cmds.reduce((result, cmd) => {
        const command = cmd.split(" ")[0];

        switch (command) {
            case "enqueue":
                queue.enqueue(+cmd.split(" ")[1]);
                break;
            case "dequeue":
                result.push(queue.dequeue());
                break;
            case "empty":
                result.push(queue.isEmpty());
                break;
            case "size":
                result.push(queue.getSize());
                break;
            case "front":
                result.push(queue.getFront());
                break;
            case "back":
                result.push(queue.getBack());
                break;
        }

        return result;
    }, []);
};
```



## Take Card

친구와 카드 게임을 하려고 한다. 카드는 총 N장 있으며, 1부터 N까지 번호가 차례대로 붙어있다.

카드의 순서는 1번 카드가 가장 위에 있고 N번 카드가 가장 아래인 상태로 놓여 있다.

이때 맨 위에 있는 한 장을 빼서 나누고, 그 다음 맨 위에 있는 한 장을 아래로 집어 넣으면서, 모든 카드를 분배할 때 까지 카드 한 장씩 빼고 넣는 작업을 반복한다.

이러한 규칙으로 분배된 카드의 순서를 알려주는 프로그램을 작성하자.



### example

```markdown
TC1

Input: 4
Output: [ 1, 3, 2, 4 ]

TC2

Input: 7
Output: [ 1, 3, 5, 7, 4, 2, 6 ]

TC3

Input: 10
Output: [ 1, 3, 5, 7, 9, 2, 6, 10, 8, 4 ]
```



### solution

```js
const takeCard = (num) => {
    const result = [];
    // num 부터 1 까지를 먼저 큐에 넣어둔다.
    const queue = Array.from({ length: num }, (_, i) => -(i - num));
    // 뽑을 경우와 안 뽑을 경우를 나눌 take 변수를 사용
    let take = true;
    // 큐가 비어질 때 까지 뽑는다.
    while (queue.length > 0) {
        if (take) {
            // 뽑으면 result에 저장
            result.push(queue.pop());
            // 다음에는 안 뽑는 경우로 변환
            take = false;
        } else {
            // 안 뽑으면 큐 뒤로 넘김
            queue.unshift(queue.pop());
            // 다시 뽑는 경우로 변환
            take = true;
        }
    }
    return result;
};
```



**다시풀이**

## Printer

새로 구매한 프린터는 우선 순위를 고려해 프린트 결과물을 출력해주기 때문에 아래 규칙으로 동작한다.

현재 등록된 프린트 문서들의 우선순위를 확인하고, 가장 높은 우선순위 문서가 먼저 출력되며 현재 선택된 문서가 가장 높은 우선순위 문서가 아니라면, 취소되고 다시 뒤쪽 순서로 설정되어 추가된다.

만약, 3개의 문서 A, B, C가 대기 상태이고, 중요도가 1, 2, 3이면 `A B C - B C A - C A B - C 출력 - A B - B A - B 출력 - A - A 출력` 으로 동작한다.

현재 등록된 문서 우선순위를 보고, 내가 등록한 문서가 언제 출력될지 계산하는 프로그램을 작성하자.

입력은 우선순위와 0번부터 시작하는 문서 번호가 주어지고, 주어진 문서번호가 출력될 순서를 반환한다.



### example

```markdown
TC1

Input: [ 3 ], 0
Output: 1

TC2

Input: [ 3, 4, 5, 6 ], 2
Output: 2

TC3

Input: [ 1, 1, 5, 1, 1, 1 ], 0
Output: 5
```



### solution

```js
```



## Rep Election

대표를 선출해야 한다. 모두 자신이 대표가 되고 싶어해 아래 규칙을 통해 대표를 선출하기로 하였다.

규칙은 먼저 원탁에 둘러 앉아 시계 방향으로 1번부터 n번까지 번호를 부여한다.

그리고 주사위를 통해 굴려 나온 숫자 m의 사람을 제외하고 그 다음으로 나온 주사위 숫자 k만큼 이동해가며 대표 후보에서 제외시킨다.

이렇게 순회하며 1명이 남을 때 까지 반복해 마을의 대표를 선출하기로 하였다.

n, m, k가 주어졌을 때 대표 후보에서 제외되는 번호를 출력해주는 프로그램을 제작하자.



### example

```markdown
TC1

Input: 8, 2, 3
Output: [ 2, 5, 8, 4, 1, 7, 3, 6 ]

TC2

Input: 10, 2, 3
Output: [ 2, 5, 8, 1, 6, 10, 7, 4, 9, 3 ]

TC3

Input: 20, 5, 7
Output: [ 5, 12, 19, 7, 15, 3, 13, 2, 14, 6, 18, 11, 9, 8, 10, 17, 4, 16, 20, 1 ]
```



### solution

```js
class CircleQueue {
    constructor(size) {
        this.size = size;
        this.repo = [];
        this.front = 0;
        this.rear = 0;
    }

    enqueue(data) {
        if (this.isFull() || !data) {
            return false;
        }

        this.rear = (this.rear + 1) % this.size;
        this.repo[this.rear] = data;
        return true;
    }

    dequeue() {
        if (this.isEmpty()) {
            return;
        }

        this.front = (this.front + 1) % this.size;
        const value = this.repo[this.front];
        delete this.repo[this.front];
        return value;
    }

    isEmpty() {
        return this.rear === this.front;
    }

    isFull() {
        return (this.rear + 1) % this.size === this.front;
    }
}

const repElection = (n, m, k) => {
    const circleQueue = new CircleQueue(n + 1);
    // 원탁에 1부터 n까지 앉음
    for (let i = 0; i < n; i++) {
        circleQueue.enqueue(i + 1);
    }
    // 결과 값 저장 공간
    const result = [];
    // dequeue의 기준인 front를 m만큼 늘려주고
    circleQueue.front = (n + m - 1) % n;
    // 처음 값 제외
    result.push(circleQueue.dequeue());
    // 처음 원형 큐는 포화상태이기 때문에 rear는 front - 1
    // m은 n보다 클 수 없으므로 mod 필요 X
    circleQueue.rear = circleQueue.front - 1;
	// k만큼 넘겨주고 리셋될 변수
    let step;
    while (1) {
        step = k;
        // 큐가 비어질 때 반복문 아웃
        if (circleQueue.isEmpty()) break;
        // dequeue하고 다시 enqueue하는 과정을 step만큼 실행
        while (--step) {
            const stepValue = circleQueue.enqueue(circleQueue.dequeue());
            // 값이 없는 경우는 한 번 스킵
            if (!stepValue) step++;
        }
        // 매번 빼 준 값
        const ejectedValue = circleQueue.dequeue();
        if (!ejectedValue) { // 값이 존재하지 않으면 다시 빼줌
            result.push(circleQueue.dequeue());
        } else { // 값이 존재하면 결과 값에 저장 
            result.push(ejectedValue);
        }
    }
    return result;
};
```