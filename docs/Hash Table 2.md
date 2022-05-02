## Hash Collision

해시 테이블 구조에서 해시 충돌이 일어날 수 있다고 했다.

이를 해결하기 위한 방법에는 3가지가 있다.

- 해시 사이즈를 늘리고 해시 함수를 조정하는 방법(djb2)
- 선형 조사법
- 체이닝



### djb2

```js
const HASH_SIZE = 1013;

class HashTable {
    ...
    djb2HashCode(key) {
        let hash = 5381;
        for (let i = 0; i < key.length; i++) {
            hash = hash * 33 + key.charCodeAt(i);
        }
        return hash % HASH_SIZE;
    }
}

```



### Linear Probing

선형 조사법은 해시 함수로 구한 테이블의 `index` 공간에서 충돌이 발생하면 그 다음 `index` 가 비어있는지 조사한다.

빈 공간이라면 저장하고 아니라면 다시 그 다음 `index` 를 조사한다. 이러한 과정을 반복하여 충돌을 해결한다.

값을 추가하거나 접근하거나 삭제할 때 `index` 를 하나 씩 넘겨야 하는데 이때 `HASH_SIZE` 보다 커지면 안되므로 `mod` 연산을 해준다.

```js
const startIndex = index;
do {
    // put, get or remove
    index = (index + 1) % HASH_SIZE;
} while (index !== startIndex)
```

완성된 코드는 아래와 같다.

```js
const HASH_SIZE = 37;

class Element {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}

class HashTable {
    constructor() {
        this.table = {};
    }

    loseloseHashCode(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % HASH_SIZE;
    }

    hashCode(key) {
        return this.loseloseHashCode(key);
    }

    put(key, value) {
        if (key && value) {
            let index = this.hashCode(key);
            const startIndex = index;
            do {
                if (!this.table[index]) {
                    this.table[index] = new Element(key, value);
                    return;
                }
                index = (index + 1) % HASH_SIZE;
            } while (index !== startIndex);
        }
    }

    get(key) {
        let index = this.hashCode(key);
        const startIndex = index;
        do {
            const hash = this.table[index];
            if (hash && hash.key === key) {
                return hash.value;
            }
            index = (index + 1) % HASH_SIZE;
        } while (index !== startIndex);
    }

    remove(key) {
        let index = this.hashCode(key);
        const startIndex = index;
        do {
            const hash = this.table[index];
            if (hash && hash.key === key) {
                delete this.table[index];
                return hash;
            }
            index = (index + 1) % HASH_SIZE;
        } while (index !== startIndex);
    }

    getSize() {
        return Object.keys(this.table).length;
    }

    clear() {
        this.table = {};
    }

    toString() {
        const keys = Object.keys(this.table);
        let objString = "Hash Table";
        for (let i = 0; i < keys.length; i++) {
            objString +=
                "\n" + `{${keys[i]} => ${this.table[keys[i]].toString()}}`;
        }
        return objString;
    }
}
```



### Chaining

체이닝은 해시 함수로 구한 테이블의 `index` 공간을 연결리스트로 사용하여 같은 `index` 를 가진다면 연결시켜 충돌을 해결한다.

```js
import { LinkedList } from "./linked_list.js";

const HASH_SIZE = 37;

class Element {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }

    toString() {
        return `${this.key}: ${this.value}`;
    }
}

class HashTable {
    constructor() {
        this.table = {};
    }

    loseloseHashCode(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % HASH_SIZE;
    }

    hashCode(key) {
        return this.loseloseHashCode(key);
    }

    put(key, value) {
        if (key && value) {
            const index = this.hashCode(key);

            if (!this.table[index]) {
                this.table[index] = new LinkedList();
            }

            this.table[index].insertLast(new Element(key, value));
        }
    }

    get(key) {
        const index = this.hashCode(key);
        const hash = this.table[index];

        if (hash && !hash.isEmpty()) {
            let current = hash.head;
            while (current) {
                if (current.data.key === key) {
                    return current.data.value;
                }
                current = current.next;
            }
        }
    }

    remove(key) {
        const index = this.hashCode(key);
        const hash = this.table[index];

        if (hash) {
            let current = hash.head;
            while (current) {
                if (current.data.key === key) {
                    const element = current.data;
                    hash.remove(element);
                    if (hash.isEmpty()) {
                        delete this.table[index];
                    }
                    return element;
                }
                current = current.next;
            }
        }
    }

    getSize() {
        return Object.keys(this.table).length;
    }

    clear() {
        this.table = {};
    }

    toString() {
        const keys = Object.keys(this.table);
        let objString = "Hash Table";
        for (let i = 0; i < keys.length; i++) {
            objString += "\n" + `{${keys[i]} => `;

            let current = this.table[keys[i]].head;
            while (current) {
                if (!current.next) {
                    objString += current.data.toString();
                } else {
                    objString += current.data.toString() + " -- ";
                }
                current = current.next;
            }
        }
        objString += "}";
        return objString;
    }
}
```

