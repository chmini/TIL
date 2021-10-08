# Queue

큐는 먼저 넣은 데이터가 먼저 나오는 선입선출(FIFO) 기반의 자료구조이다.

![queue](./img/queue.PNG)

자바스크립트에서 큐 또한 스택처럼 `Array` 객체로 표현이 가능하다.

큐에서 `enqueue` `dequeue` 의 동작은 `Array` 객체의 `push` `shift` 메서드 동작과 같다.

`shift` 는 배열을 순회하기 때문에 `O(n)` 의 시간 복잡도를 가진다.

이것을 `O(1)` 로 줄일 수 있는데 그 방법은 아래와 같다.

스택에서는 `top` 이라는 한 곳에서만 데이터의 삽입과 삭제가 발생한다.

큐는 먼저 삽입된 데이터가 먼저 삭제되는 구조이기 때문에 `front` 와 `rear` 라는 두 곳에서 삽입과 삭제가 각각 하나씩 발생한다.

`front` 와 `rear` 로 배열의 인덱스로 접근하여 `dequeue` 동작을 구현하면 `O(1)` 의 시간 복잡도를 가진다.

```js
class Queue {
    constructor() {
        this.repo = [];
        this.front = -1;
        this.rear = -1;
    }

    enqueue(data) {
        // 큐가 비어있을 때 front + 1
        if (this.isEmpty()) {
            this.front++;
        }
        // 값이 들어오면 rear + 1
        this.rear++;
        this.repo.push(data);
    }

    dequeue() {
        // 큐가 비어있으면 작동 X
        if (this.isEmpty()) {
            return;
        }
        // 삭제된 값 저장 (리턴을 위함)
        const frontValue = this.repo[this.front];
        // 삭제 후 front + 1
        delete this.repo[this.front++];
        return frontValue;
    }

    isEmpty() {
        return this.repo.length === 0;
    }

    getSize() {
        return this.repo.length;
    }
}
```



# Priority Queue

우선순위 큐는 우선순위를 고려한 큐이다.

우선순위를 고려한다는 의미를 설명하면 높은 우선순위를 가진 데이터를 먼저 처리한다는 말이다.

우선순위를 정렬하는 방법은 3가지가 있다.

- 배열
- 연결리스트
- 힙

1번과 2번의 시간복잡도와 3번의 시간복잡도가 다르기 때문에 모두 알아두자.

배열이나 연결리스트는 데이터를 삽입할 때 우선순위에 대한 비교를 위해 순회를 해야 하므로 시간 복잡도가 `O(n)` 이고 삭제 시에는 우선순위로 정렬되어 있기 때문에 `O(1)` 만큼의 복잡도를 가진다.

힙으로 정렬시에는 삽입, 삭제의 시간 복잡도가 `O(logN)` 이라고 하는데 이 부분은 나중에 알아보도록 하자.

아래의 코드는 배열을 기반으로 구현한 우선순위 큐이다.

```js
class Element {
    constructor(data, priority) {
        this.data = data;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.repo = [];
        this.front = 0;
    }

    enqueue(data, priority) {
        const element = new Element(data, priority);
        // find index
        let index;
        for (let i = this.front; i < this.getSize(); i++) {
            if (this.repo[i].priority > element.priority) {
                index = i;
                break;
            }
        }
        console.log(index);
        // not found index
        if (index === undefined) {
            this.repo.push(element);
            return;
        }
        // found index
        for (let i = this.getSize(); i > index; i--) {
            this.repo[i] = this.repo[i - 1];
        }
        this.repo[index] = element;
    }

    dequeue() {
        if (this.isEmpty()) {
            return;
        }
        const value = this.repo[this.front];
        delete this.repo[this.front++];
        return value;
    }

    isEmpty() {
        return this.repo.length === 0;
    }

    getSize() {
        return this.repo.length;
    }
}
```



# Circle Queue

선형 큐 `Queue` 에서 `front` 와 `rear` 를 계속 늘려가면서 앞에 `dequeue` 된 빈 공간이 존재한다.

큐의 크기가 제한적인 상황이라면 그 빈 공간도 채워진 상태로 판단하기 때문에 데이터를 빈 앞쪽 공간으로 옮겨 해결해야 한다.

이 방법은 큐의 효율성이 떨어트리는 방법이라고 하고 원형 큐로 이 문제가 해결이 가능하다고 한다.

원형 큐는 배열의 처음과 끝이 연결되어 있는 구조로 가정하여 사용한다.

```js
class CircleQueue {
    constructor(size) {
        this.size = size;
        this.repo = [];
        this.front = 0;
        this.rear = 0;
    }

    enqueue(data) {
        if (this.isFull()) {
            return;
        }

        this.rear = (this.rear + 1) % this.size;
        this.repo[this.rear] = data;
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
        return this.repo.length === 0;
    }

    isFull() {
        return (this.rear + 1) % this.size === this.front;
    }
}
```

