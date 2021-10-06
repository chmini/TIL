## Doubly Linked List

이중 연결 리스트는 노드 간의 연결이 양 방향으로 앞과 뒤로 연결된다.

연결 리스트의 노드의 구성은 일단 값을 저장할 `data` 와 노드 기준 다음 노드와의 연결(다음 노드 주소값 저장)을 위한 `next` 로 이루어져 있다.

이중 연결 리스트는 이전 노드와도 연결할 `prev` 또한 필요하다. 따라서 노드의 생김새는 이러하다.

```js
class Node {
    constructor(data) {
        this.prev = null;
        this.data = data;
        this.next = null;
    }
}
```



## Circular Linked List

원형 연결 리스트는 단순 연결 리스트에서 끝의 노드와 첫 노드인 `head` 를 연결시켜 원형을 이루어 원형 연결 리스트라고 한다.

따라서 노드의 구성은 단순 연결 리스트와 같다.



## Practice

### Train

새로운 지하철 노선이 신설되어, 이를 위한 열차가 새로 반입되었다.

하지만 이 열차들은 서로 연결되어 있지 않아 현재 운행이 어려운 상태이다.

열차 운행을 위해 열차 찻간을 이어주는 프로그램을 작성하자.

열차 별로 고유의 식별번호가 있어, 이를 기준으로 반입된 순서대로 열차 찻간을 이어주도록 한다.

#### example

```markdown
TC1

Input: [4, 7, 1, 10, 6]
Output: [Linked List] 4 -> 7 -> 1 -> 10 -> 6 -> null

TC2

Input: [3, 10, 6, 9, 11, 3, 4]
Output: [Linked List] 3 -> 10 -> 6 -> 9 -> 11 -> 3 -> 4 -> null

TC3

Input: [5, 8, 7, 3, 4, 1, 2, 7, 10, 7]
Output: [Linked List] 5 -> 8 -> 7 -> 3 -> 4 -> 1 -> 2 -> 7 -> 10 -> 7 -> null
```

#### solution

```js
class TrainNode {
    constructor(number) {
        this.number = number;
        this.next = null;
    }
}

class Train {
    constructor() {
        this.head = null;
    }

    insertLast(number) {
        const node = new TrainNode(number);
        if (!this.head) {
            this.head = node;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
    }

    toString() {
        let string = "";
        let current = this.head;
        while (current) {
            string += current.number + " -> ";
            current = current.next;
        }
        string += null;
        return string;
    }
}

const linkedTrain = (trainNodes) => {
    const train = new Train();

    trainNodes.forEach((tNode) => {
        train.insertLast(tNode);
    });

    return train.toString();
};
```

### Document

동생에게 전달해준 서류를 순서대로 서랍에 정리해달라고 부탁했더니, 서류를 반대 순서로 넣어두었다.

다시 제대로 정렬하기 위해, 이미 정리된 순서의 반대로 서류를 역 정렬시키는 프로그램을 제작하자.

#### example

```markdown
TC1

Input: [Linked List] 1 -> 3 -> 7 -> null
Output: [Linked List] 7 -> 3 -> 1 -> null

TC2

Input: [Linked List] 3 -> 1 -> 9 -> 6 -> 4 -> null
Output: [Linked List] 4 -> 6 -> 9 -> 1 -> 3 -> null

TC3

Input: [Linked List] 6 -> 9 -> 7 -> 2 -> 1 -> 4 -> 3 -> null
Output: [Linked List] 3 -> 4 -> 1 -> 2 -> 7 -> 9 -> 6 -> null
```

#### solution

```js
class File {
    constructor(number) {
        this.number = number;
        this.next = null;
    }
}

class Document {
    constructor() {
        this.head = null;
    }

    makeFiles(files) {
        let current = this.head;
        files.reverse().forEach((num) => {
            const file = new File(num);
            file.next = current;
            this.head = file;
            current = file;
        });
    }

    reverse() {
        let current = this.head,
            prev = null,
            next;

        while (current) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }

        this.head = prev;
    }

    toString() {
        let string = "";
        let current = this.head;
        while (current) {
            string += current.number + " -> ";
            current = current.next;
        }
        string += null;
        return string;
    }
}

const arrangeDocument = (document) => {
    document.reverse();
    return document.toString();
};
```

### Rep

대표를 선출해야 한다. 모두 자신이 대표가 되고 싶어하여, 아래 규칙을 통해 대표를 선출하기로 하였다.

규칙은 먼저 원탁에 둘러 앉아 시계 방향으로 1번부터 n번까지 번호를 부여한다.

그리고 주사위를 통해 굴려 나온 숫자 m의 사람을 제외하고, 그 다음으로 나온 주사위 숫자 k만큼 이동해가며 대표 후보에서 제외시킨다.

이렇게 순회하며 1명이 남을 때 까지 반복해 마을의 대표를 선출하기로 하였다.

n, m, k가 주어졌을 때 대표 후보에서 제외되는 번호를 출력해주는 프로그램을 제작하자.

대표 후보에서 제외되는 번호를 순차적으로 배열로 반환한다.

#### example

```markdown
TC1

Input: [8, 2, 3]
Output: [2, 5, 8, 4, 1, 7, 3, 6]

TC2

Input: [10, 2, 3]
Output: [2, 5, 8, 1, 6, 10, 7, 4, 9, 3]

TC3

Input: [20, 5, 7]
Output: [5, 12, 19, 7, 15, 3, 13, 2, 14, 6, 18, 11, 9, 8, 10, 17, 4, 16, 20, 1]
```

#### solution

```js
class Person {
    constructor(num) {
        this.num = num;
        this.next = null;
    }
}

class RoundTable {
    constructor() {
        this.head = null;
    }

    sitPerson(num) {
        const person = new Person(num);
        if (!this.head) {
            this.head = person;
        } else {
            let current = this.head;
            while (current.next != this.head) {
                current = current.next;
            }
            current.next = person;
        }
        person.next = this.head;
    }

    drawRep(m, k) {
        // find first node
        let current = this.head,
            prev;
        while (--m) {
            prev = current;
            current = current.next;
        }
        // remove representative
        let count,
            result = [];
        while (current.next != current) {
            result.push(current.num);
            prev.next = current.next;

            count = k;
            while (count--) {
                prev = current;
                current = current.next;
            }
        }
        result.push(current.num);
        return result;
    }

    toString() {
        let string = "head -> ";
        let current = this.head;
        while (current.next != this.head) {
            string += current.num + " -> ";
            current = current.next;
        }
        string += current.num + " -> null";
        return string;
    }
}

const repArr = (n, m, k) => {
    const roundTable = new RoundTable();
    // sit on table
    for (let num = 1; num <= n; num++) {
        roundTable.sitPerson(num);
    }
    // draw rep
    return roundTable.drawRep(m, k);
};
```

