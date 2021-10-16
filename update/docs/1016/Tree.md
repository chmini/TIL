# Tree

트리는 그래프의 일종으로 두 노드 사이에 하나의 간선만 연결되어 있다. 간선의 수는 최소이고 계층 형태의 자료구조이다.

컴퓨터의 파일 구조가 트리 구조의 대표적 예로 볼 수 있다.



## Basic Terms

- Node(노드) : 트리를 구성하는 값을 갖는 객체 단위

- Edge(간선) : 노드를 연결하는 선

- Root(최상위 노드) : 부모가 없는 최상위 노드

- Leaf Node(단말 노드) : 자식이 없는 노드

- Parent Node(부모 노드) : 특정 서브 트리 내에서 상위 노드

- Child Node(자식 노드) : 특정 서브 트리 내에서 하위 노드 

- Sibiling(형제) : 부모가 같은 노드들

- Depth : 최상위 노드에서 어떠한 노드까지의 간선 개수

- Level : 트리의 특정 깊이를 가지는 노드의 집합 

- Degree(차수) : 한 노드가 가진 자식 노드의 수

- Tree Degree(트리 차수) : 트리 내에서 노드의 차수 중 최대 차수

- Height : 최상위 노드에서 가장 깊숙히 있는 노드의 깊이



## Traversal

순회라는 것은 모든 노드를 빠트리지 않고 정확히 한 번씩 방문한다는 의미이다.

순회의 작업 방식은 3가지가 있다.

- N : 현재 노드를 방문한다.
- L : 현재 노드의 왼쪽 서브 트리로 이동한다.
- R : 현재 노드의 오른쪽 서브 트리로 이동한다.

모든 순회는 현재 노드 기준 왼쪽 서브 트리를 오른쪽 서브 트리보다 먼저 방문하고 현재 노드의 방문 순서에 따라 전위, 중위, 후위 순회로 나뉜다.

트리 순회 예시는 아래 트리 그림을 기준으로 설명한다.

![tree](./img/tree.PNG)

### preorder

전위 순회는 **N - L - R** 로 현재 노드를 가장 먼저 방문한다.

A - B - D - H - I - E - J - C - F - G

### inorder

중위 순회는 **L - N - R** 로 현재 노드를 2번째로 방문한다.

H - D - I - B - J - E - A - F - C - G

### postorder

후위 순회는 **L - R - N** 으로 현재 노드를 가장 마지막에 방문한다.

H - I - D - J - E - B - F - G - C - A



## Binary Tree

트리의 구조를 일정하게 제한하여 정의하면 트리의 연산이 단순하고 명확해진다.

이진 트리는 모든 노드가 최대 2개의 자식 노드를 가지도록 제한하여 전체 트리의 차수가 2이하가 되도록 정의한 것이다.

 

### implement

트리에 노드를 추가하는 메서드와 3가지 순회 메서드를 구현해보자.

연결 자료구조 형식으로 구현을 위해 노드의 구성을 값 저장공간과 왼쪽과 오른쪽에 대한 정보 저장공간도 함께 한다.

노드를 추가하는 방식은 방문 노드를 기준으로 값이 작으면 왼쪽에 크면 오른쪽에 추가하는 것으로 한다.

```js
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    _insertNode(node, value) {
        if (!node) {
            node = new Node(value);
        } else if (value < node.value) {
            node.left = this._insertNode(node.left, value);
        } else if (value > node.value) {
            node.right = this._insertNode(node.right, value);
        }
        return node;
    }

    insert(value) {
        this.root = this._insertNode(this.root, value);
    }

    _preOrderTraversal(node) {
        if (!node) {
            return;
        }

        process.stdout.write(`${node.value} `); // N
        this._preOrderTraversal(node.left); // L
        this._preOrderTraversal(node.right); // R
    }

    preOrderTraversal() {
        return this._preOrderTraversal(this.root);
    }

    _inOrderTraversal(node) {
        if (!node) {
            return;
        }

        this._inOrderTraversal(node.left); // L
        process.stdout.write(`${node.value} `); // 
        this._inOrderTraversal(node.right);
    }

    inOrderTraversal() {
        return this._inOrderTraversal(this.root);
    }

    _postOrderTraversal(node) {
        if (!node) {
            return;
        }

        this._postOrderTraversal(node.left);
        this._postOrderTraversal(node.right);
        process.stdout.write(`${node.value} `);
    }

    postOrderTraversal() {
        return this._postOrderTraversal(this.root);
    }
}
```



## Binary Search Tree

트리를 효율적으로 구현하고 사용하기 위해서 일정한 조건으로 정의한 것이 이진 트리이다.

이진 탐색 트리는 이진 트리를 탐색용 자료구조로 사용하기 위해 **원소 크기에 따라** 노드 위치를 정의한 것이다.

아까 이진트리의 노드 추가 구현 부분에서 방문 노드를 기준으로 작은 값을 왼쪽 큰 값을 오른쪽으로 추가했는데 이러한 크기 비교를 통해 생성된 트리가 이진 탐색 트리이다.



### implement

이진 탐색 트리에서 노드를 삭제할 경우 그 노드의 차수에 따라 해주어야 하는 작업을 생각하면서 구현하면 된다.

삭제할 노드가 단말 노드, 차수가 0일 때는 부모 노드와의 연결을 끊어주기만 하면 된다.

하지만 차수가 늘어나면 연결을 끊어주고 후처리가 필요하다.

삭제할 노드가 자식 노드 **하나**를 가지고 있다면 삭제할 노드의 부모 노드와 자식 노드를 연결시켜주면 된다.

자식 노드를 **둘**을 가지고 있을 때는 삭제된 노드의 자리에 자식 노드 값 중 하나로 대체 해야함은 같지만 이진 탐색 트리의 정의를 만족해야 한다.

방법은 삭제된 노드의 왼쪽 서브 트리에서 가장 큰 노드를 가져오거나, 오른쪽 서브 트리에서 가장 작은 노드를 가져오면 된다.

```js
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    _insertNode(node, value) {
        if (!node) {
            node = new Node(value);
        } else if (value < node.value) {
            node.left = this._insertNode(node.left, value);
        } else if (value > node.value) {
            node.right = this._insertNode(node.right, value);
        }
        return node;
    }

    insert(value) {
        this.root = this._insertNode(this.root, value);
    }

    _minNode(node) {
        if (!node) return;

        while (node.left) {
            node = node.left;
        }
        return node;
    }

    minNode() {
        return this._minNode(this.root);
    }

    _maxNode(node) {
        if (!node) return;

        while (node.right) {
            node = node.right;
        }
        return node;
    }

    maxNode() {
        return this._maxNode(this.root);
    }

    _searchNode(node, value) {
        if (!node) return false;

        if (node.value === value) {
            return true;
        } else if (node.value > value) {
            return this._searchNode(node.left, value);
        } else if (node.value < value) {
            return this._searchNode(node.right, value);
        }
    }

    searchNode(value) {
        return this._searchNode(this.root, value);
    }

    _removeNode(node, value) {
        if (!node) return;

        if (node.value === value) {
            if (node.left === null && node.right === null) {
                node = null;
            } else if (!node.left || !node.right) {
                if (node.left) {
                    node = node.left;
                } else {
                    node = node.right;
                }
            } else {
                /* find hr in left
                const hr = this._maxNode(node.left);
                node.value = hr.value;
                node.lethis._removeNode(node.left, h.value);
                */
                /* find hr in right */
                const hr = this._maxNode(node.right);
                node.value = hr.value;
                node.right = this._removeNode(node.right, hr.value);
            }
        } else if (node.value > value) {
            node.left = this._removeNode(node.left, value);
        } else if (node.value < value) {
            node.right = this._removeNode(node.right, value);
        }

        return node;
    }

    remove(value) {
        this.root = this._removeNode(this.root, value);
    }
}
```

