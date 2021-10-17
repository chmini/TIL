# Heap

힙은 완전 이진 트리에서 최댓값 또는 최솟값을 찾기 위해서 만들어진 자료구조이다.

최댓값을 찾기 위한 힙은 최대힙(Max Heap)이라 하고 최솟값을 찾기 위한 힙은 최소힙(Min Heap)이라 한다.

최대 힙은 부모 노드의 값이 자식 노드의 값보다 항상 크거나 같은 크기의 관계이고 최소 힙은 부모 노드의 값이 자식 노드의 값보다 항상 작거나 같은 크기의 관계이다.



## implement

힙에서의 삽입과 삭제 연산은 어떤 노드라도 부모 노드에 쉽게 접근을 해야 하고 완전 이진 트리이기 때문에 순차 자료구조(배열)를 사용하여 표현한다.

현재 노드의 위치(배열에서 인덱스)를 `N` 이라고 할 때 부모 노드, 자식 노드의 위치는 다음과 같다.

- 부모 노드 : **Math.floor(N / 2)**
- 왼쪽 자식 노드 : **N * 2**
- 오른쪽 자식 노드 : **N * 2 + 1**

이를 이용하여 힙을 자바스크립트로 구현해보자.

```js
class Heap {
    constructor() {
        this.heap = [];
        this.size = 0;
    }

    insert(value) {
        let currentIdx = ++this.size;
        while (
            currentIdx !== this._rootIndex() &&
            value > this.parentNode(currentIdx)
        ) {
            this.heap[currentIdx] = this.parentNode(currentIdx);
            currentIdx = this._parentIndex(currentIdx);
        }
        this.heap[currentIdx] = value;
    }

    remove() {
        const removedValue = this.rootNode();

        const lastNode = this.heap.pop();
        this.size--;

        let parentIndex = this._rootIndex(),
            childIndex = this._childIndex(parentIndex);
        while (childIndex <= this.size) {
            // 왼쪽 자식 노드보다 오른쪽 자식 노드가 크면 childIndex + 1
            if (
                childIndex < this.size &&
                this.heap[childIndex] < this.heap[childIndex + 1]
            ) {
                childIndex++;
            }
			
            // 마지막 노드가 자식 노드 중 큰 노드보다 크면 종료
            if (lastNode >= this.heap[childIndex]) {
                break;
            } 
            // 아니라면 자식 노드를 부모 노드 자리로 올림
            // 그리고 다음 서브트리 정렬을 위해 index 변경
            else {
                this.heap[parentIndex] = this.heap[childIndex];
                parentIndex = childIndex;
                childIndex = this._childIndex(childIndex);
            }
        }
        // 정렬이 끝나면 lastNode 삽입
        this.heap[parentIndex] = lastNode;
        return removedValue;
    }

    _rootIndex() {
        return 1;
    }

    rootNode() {
        return this.heap[this._rootIndex()];
    }

    _parentIndex(childIndex) {
        return Math.floor(childIndex / 2);
    }

    parentNode(childIndex) {
        return this.heap[this._parentIndex(childIndex)];
    }

    _childIndex(parentIndex) {
        return parentIndex * 2;
    }

    childNode(parentIndex) {
        const childIndex = this._childIndex(parentIndex);
        const leftChildNode = this.heap[childIndex];
        const rightChildNode = this.heap[childIndex + 1];
        return [leftChildNode, rightChildNode];
    }
}
```

직접 스왑한다는 느낌보다 밀어내는 느낌(?)의 구현을 해보았는데 처음 생각보다 구현을 어떻게 해야할지 떠올리는게 쉽지 않았다.

다음에 시간이 되면 스왑 느낌도 구현해보도록 하자.

