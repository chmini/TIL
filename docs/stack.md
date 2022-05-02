## Stack

스택은 가장 마지막에 삽입한 데이터가 가장 먼저 삭제되는 후입선출(LIFO) 동작 구조를 가지고 있다.

예를 들면 뒤로 가기 기능이 스택으로 이루어져 있다.

동작마다 하나 씩 쌓이고 뒤로 가기를 하면 가장 나중에 한 동작 부터 취소가 된다.

그림으로 보면 아래와 같다.

![stack](./img/stack.PNG)

### Implement

자바스크립트에는 `Array` 객체가 이미 스택의 구조 `push` 와 `pop` 이 포함되어 있다.

스택의 구현은 `Array` 객체를 이용할 수 있고 연결리스트를 통해 구현도 가능하다.

```js
class Stack {
    constructor() {
        this.repo = [];
        this.top = -1;
    }

    isEmpty() {
        return this.top === -1 ? true : false;
    }

    push(data) {
        // 배열에 top 하나 늘린 인덱스에 추가
        this.repo[++this.top] = data;
    }

    pop() {
        if (this.isEmpty()) {
            return;
        } else {
            // 리턴을 위해 top 에 있는 데이터를 저장
            const topValue = this.repo[this.top];
            // 저장소에서 마지막 top 에 있는 데이터를 잘라내고 top 하나 감소
            this.repo = this.repo.slice(0, this.top--);
            return topValue;
        }
    }

    getSize() {
        return this.top + 1;
    }
}
```

위 예시는 배열을 통해서 구현한 코드이다.



### Practice

#### Train Operation

열차 플랫폼에 열차가 **1번부터 3번까지 순서대로** 들어온다.

나가는 순서가 주어질 때 순서를 지켜 나갈 수 있는지 없는지 판단하는 프로그램을 작성하자.

입력 값은 차량 순서 번호가 적혀 있는 배열이며, 가능 여부에 따라 `Boolean` 타입을 반환한다.

##### example

```markdown
TC1

Input: [1, 2, 3]
Output: true

TC2

Input: [3, 2, 1]
Output: true

TC3

Input: [3, 1, 2]
Output: false
```

##### solution

```js
Array.prototype.isEmpty = function () {
    return this.length === 0;
};

Array.prototype.peek = function () {
    return this[this.length - 1];
};

const checkTrainOper = (criteria) => {
    const platform = [];
    let train = 0;
    for (let i = 0; i < criteria.length; i++) {
        // train in
        while (platform.isEmpty() || platform.peek() < criteria[i]) {
            platform.push(++train);
        }
        // train out
        if (criteria[i] === platform.peek()) {
            platform.pop();
        } else {
            return false;
        }
    }
    return true;
};
```



#### Find parenthesis

계산 수식이 주어졌을 때, 같은 짝의 괄호 위치를 찾는 프로그램을 제작하자.

입력은 계산 수식으로 주어지며, 괄호의 짝 별 위치를 [시작, 끝]으로 찾아 2차원 배열 형태로 반환한다.

위치 시작 값은 0으로 시작하며, 하나라도 짝이 맞지 않을 경우 빈 배열을 반환한다.

##### example

```markdown
TC1

Input: (a+b)
Output: [ [0, 4] ]

TC2

Input: (ax(b+c)+d)
Output: [ [3, 7], [0, 10] ]

TC3

Input: (ax(b+c)+d+(e)
Output: []

TC4

Input: (ax(b+c)+d)+e)
Output: []

TC5

Input: (ax(b+c)+d)+(ex(f+g))
Outpu: [ [3, 7], [0, 10], [15, 19], [12, 20] ]
```

##### solution

```js
Array.prototype.isEmpty = function () {
    return this.length === 0;
};

Array.prototype.peek = function () {
    return this[this.length - 1];
};

const findParenthesis = (str) => {
    const result = [];
    const pStack = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "(") {
            pStack.push(i);
        } else if (str[i] === ")") {
            // 닫는 괄호에서 stack에 여는 괄호가 없다면 []을 리턴
            if (pStack.isEmpty()) {
                return [];
            }
            // [여는 괄호의 인덱스, 닫는 괄호의 인덱스]
            result.push([pStack.pop(), i]);
        }
    }
    return pStack.isEmpty() ? result : [];
};
```



#### Take out Dish

접시를 알파벳 순서대로 넣고 세척기에서 꺼내려고 한다. 

꺼내는 순서가 주어질 때 접시가 꺼내지는 동작을 계산하는 프로그램을 작성하자.

동작과정을 `push` 를 `0` 으로 `pop` 을 `1` 로 변환하여 배열로 반환한다.

순서대로 꺼내지 못할 경우 빈 배열을 반환한다.

##### example

```markdown
TC1

Input: bacd
Output: [0, 0, 1, 1, 0, 1, 0, 1]

TC2

Input: dabc
Output: []

TC3

Input: edcfgbijha
Output: [0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 1]
```

##### solution

```js
Array.prototype.isEmpty = function () {
    return this.length === 0;
};

Array.prototype.peek = function () {
    return this[this.length - 1];
};

const checkTakeDish = (str) => {
    const result = [];
    const washer = [];
    const dishes = str.split("").sort();
    let dishIdx = 0;
    for (let i = 0; i < str.length; i++) {
        while (washer.isEmpty() || washer.peek() < str[i]) {
            washer.push(dishes[dishIdx++]);
            result.push(0);
        }
        if (washer.isEmpty() || washer.peek() > str[i]) {
            return [];
        } else {
            washer.pop();
            result.push(1);
        }
    }
    return result;
};
```



#### 다시 풀이

#### Giraffe's Sight

기린이 앞쪽만 볼 수 있는 경우, 다른 기린을 몇 마리 볼 수 있는지 총합을 구하는 프로그램을 작성하자.

기린은 자신보다 작거나 같은 기린만 볼 수 있으며, 자신보다 큰 기린이 나오면 가려져 그 앞의 기린들은 보지 못한다.

각각의 기린들의 키와 순서가 주어질 때 다른 기린을 볼 수 있는 총합을 구해 반환한다.

##### example

```markdown
TC1

Input: [10, 3, 7, 4, 12, 2]
Output: 5

TC2

Input: [7, 4, 12, 1, 13, 11, 12, 6]
Output: 6

TC3

Input: [20, 1, 19, 18, 15, 4, 6, 8, 3, 3]
Output: 30
```

##### solution

```js
```



#### Calculate Braket

4개의 기호 `(` `)` `[` `]` 를 이용해서 만들어지는 괄호열로, 아래 규칙으로 게산하는 프로그램을 만들자.

- 각 괄호 쌍 `()` `[]` 는 `2` 와 `3` 값을 가진다.
- 각 괄호 쌍 사이에 어떤 값 `X` 가 있으면 괄호 값과 `X` 를 곱한 값으로 계산한다.
- 괄호열이 나열된 경우 서로 더하여 계산한다.

이러한 규칙으로 계산한 정수 값을 반환한다.

만약 비정상적인 괄호열이라면 0을 반환한다.

##### example

```markdown
TC1

Input: (()[[]])
Output: 22

TC2

Input: [][]((])
Output: 0

TC3

Input: (()[[]])([])
Output: 28
```

##### solution

```js
```

