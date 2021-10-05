## Linked List

각 노드가 데이터와 포인터를 가지며, 한 줄로 연결되어 있는 방식으로 데이터를 저장하는 자료 구조이다.

![linked list](./img/linked_list.PNG)

연결 리스트의 구조는 이러하다.

하나의 노드는 `data` 값과 `next` 를 가진다.

`next` 는 연결 리스트에서 다음 노드의 주소를 가리킨다.

`head` 에는 연결 리스트의 첫 노드의 주소 값을 가진다.

마지막 노드의 `next` 는 다음 노드가 없기 때문에 `null` 을 가진다.

### Node

새로운 노드를 생성하는 생성자이다.

`data` 값을 가지고 `next` 값은 보통 입력하지 않으므로 디폴트 값으로 `null` 을 가지도록 한다.

```js
class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}
```

### Create LinkedList

연결리스트 객체를 만든다.

연결리스트에 필요한 정보는 `head` 는 반드시 필요하고 `size` 는 선택사항이지만 리스트 크기를 알기위해서는 리스트를 돌면서 체크해야 하기 때문에 `size` 도 지정해준다.

```js
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
}
```

아래에서 여러가지 메서드 구현을 할 때에 생성자는 생략한다.

### Insert

삽입하는 방법에는 3가지 방법이 있다.

연결리스트의 가장 처음에 노드를 삽입하는 방법, 가장 마지막에 삽입하는 방법, 중간에 삽입하는 방법이 있다.

#### insertFirst

가장 처음에 삽입을 할 때에는 새로운 노드가 현재 `head` 를 `next` 에 연결시키고 본인이 `head` 가 되면 처음 삽입하는 구조가 된다.

```js
class LinkedList {
    insertFirst(data) {
        this.head = new Node(data, this.head);
        this.size++;
    }
}
```

#### insertLast

가장 마지막에 삽입을 할 때에는 마지막 노드의 `next` 에 새로운 노드를 연결시켜야 한다.

그런데 이 삽입에는 두 가지의 상태의 리스트가 있다.

연결리스트가 비어있는 경우와 아닌 경우로 나뉜다.

비어있는 경우는 `head` 가 `null` 인 상태로 표현이 가능하다.

이 때는 `head` 를 새로운 노드와 연결하면 처리가 가능하다.

```js
class LinkedList {
    insertLast(data) {
        let node = new Node(data);
        let current;
        if (!this.head) {
            this.head = node;
        } else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }
}
```

#### insertAt

리스트의 중간에 원하는 인덱스 위치에 삽입할 때는 `index` 가 리스트 `size` 를 벗어나는 범위를 제외하고 구현해야 한다.

`index` 을 입력하지 않으면 `0` 으로 `insertFirst` 와 같이 작동하게 한다.

중간 삽입은 이전 노드 `prev` 와 `index` 위치의 노드 `current` 가 필요하다.

새로운 노드의 `next` 를 `current` 와 연결하고 `prev` 의 `next` 와 새로운 노드를 연결해야 한다.

`prev` 와 `current` 를 찾는 방법은 반복문에서 `index` 값일 때 `count` 변수를 사용하여 찾을 수 있다.

```js
insertAt(data, index = 0) {
    if (index < 0 || index > this.size) {
        return;
    }

    if (index === 0) {
        this.head = new Node(data, this.head);
        this.size++;
    } else {
        let current = this.head,
            node = new Node(data),
            prev;

        let count = 0;
        while (count++ < index) {
            prev = current;
            current = current.next;
        }
        node.next = current;
        prev.next = node;

        this.size++;
    }
}
```

### remove

삭제는 데이터 값을 인자로 받아서 삭제하거나 인덱스 값을 받아서 삭제하는 두 가지 방법을 구현한다.

#### remove

데이터를 받아 삭제할 때에는 리스트 내에 삭제하고 싶은 데이터가 있는지 확인 부터 해야 한다.

데이터를 찾지 못하면 그냥 종료하고 찾았을 경우에는 또 두 가지로 나뉜다.

찾은 데이터가 `head` 인지 아닌지로 구분하여 삭제할 노드의 이전 노드의 `next` 와 다음 노드(삭제할 노드의 `next`)와 연결 시키면 된다.

```js
remove(data) {
    let current = this.head,
        prev;
    
    while (current.data !== data && current.next) {
        prev = current;
        current = current.next;
    }
    
    if (current.data !== data) {
        return;
    }
    
    if (current === this.head) {
        this.head = current.next;
    } else {
        prev.next = current.next;
    }

    this.size--;
}
```

#### removeAt

인덱스를 이용한 삭제는 `insertAt` 과 비슷하게 구현하면 된다.

인덱스의 범위를 체크하고 `index` 가 `0` 이면 `head` 를 삭제하고 다음 노드와 `head` 를 연결한다.

나머지 `index` 는 `prev` 의 `next` 와 `current` 의 `next` 를 연결하면 된다.

```js
removeAt(index) {
    if (index < 0 || index > this.size) {
        return;
    }

    let current = this.head,
        prev;

    let count = 0;
    if (index === 0) {
        this.head = current.next;
    } else {
        while (count++ < index) {
            prev = current;
            current = current.next;
        }
        prev.next = current.next;
    }

    this.size--;
}
```

### isEmpty

리스트가 비어있는지 확인하는 메서드를 구현했다.

```js
isEmpty() {
    return this.size === 0;
}
```

### getSize

리스트의 사이즈를 알 수 있는 메서드를 구현한다.

```js
getSize() {
    return this.size;
}
```



