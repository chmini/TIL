# Hash Table

해시 테이블에 대해 알아보기 전에 해시 함수가 무엇인지 보자.



## Hash Function

해시 함수는 임의의 데이터를 고정된 길이의 데이터로 매핑하는 함수이다.

원본 데이터 키 값을 매핑한 데이터 해시 값으로 변환되는 해싱 과정을 거친다.

<br>

해시 테이블은 이런 해시 함수를 사용하여 특정 값을 `O(1)` 의 복잡도로 빠르게 찾을 수 있는 자료구조이다.

테이블에서 키 값은 다른데 해당 키로 얻은 해시 값이 동일한 경우가 있다.

이러한 경우를 **충돌**이라고 부른다.



### Lose Lose Hash Function

가장 흔한 형태의 해시 함수이다.

해시 값은 키를 이루는 문자의 아스키 코드 값을 더하고 해시 사이즈로 나누어준 값이다.



## Implement

```js
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
            if (this.table[index]) {
                return console.log(`key ${key} Hash Collision!`);
            } else {
                this.table[index] = new Element(key, value);
            }
        }
    }

    get(key) {
        return this.table[this.hashCode(key)];
    }

    remove(key) {
        const hash = this.hashCode(key);
        const element = this.table[hash];

        if (element) {
            delete this.table[hash];
            console.log("delete!");
        } else {
            console.log("not found");
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
            objString +=
                "\n" + `{${keys[i]} => ${this.table[keys[i]].toString()}}`;
        }
        return objString;
    }
}
```