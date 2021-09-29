각각 타입들의 메서드는 `mdn` 문서에 가면 자세히 볼 수 있다.

## Number

### Exponential notation

아주 큰 숫자와 작은 숫자를 표기하기 위한 지수 표기법이다.

`0` 의 개수를 `e` 로 대체 표기가 가능하다.

`100000000` 을 `1e8` 로 표기가 가능하다.

```js
let num1 = 100000000;
let num2 = 1e8;
console.log(num1 === num2); // output: true
```

`0.00001` 은 `-` 와 자릿 수를 이용해 `1e-5` 로 표현 가능하다.

```js
let num3 = 1e-5;
console.log(num3); // output: 0.00001
```

### Base N

진법을 표현하기 위해 16진수는 `0x`, 8진수는 `0o`, 2진수는 `0b` 로 표기가 가능하다.

10진수 `15` 를 각 진법으로 표기하면 아래와 같다.

```js
console.log(0x0f);
console.log(0o17);
console.log(0b1111);
```

### Constant

`Number` 에 제공되는 상수 값이 있다.

- 지수로 표기되는 양수의 최대와 최소 값
- 안전하게 표기되는 최대와 최소 값
- 무한대 양수와 음수 값
- NaN

```js
/* 1 */
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

/* 2 */
console.log(Number.MAX_SAFE_VALUE);
console.log(Number.MIN_SAFE_VALUE);

/* 3 */
console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);

/* 4 */
console.log(Number.NaN);
```

### Method

#### toString

`Number` 를 `String` 으로 변환해주는 함수이다.

#### toFixed

소수 점 아래 자리 수 길이를 제한하는 함수이다.

```js
let num = 110.291;
console.log(num.toFixed(2)); // output: 110.29
```

#### toPrecision

정수 부분과 소수 부분의 자리 수를 합한 길이를 제한한다.

```js
let num = 110.291;
console.log(num.toPrecision(2)); // output: 1.1e+2
```

#### isNaN

`NaN` 인지 판단해주는 함수이다.

#### isFinite

유한 수인지 확인하는 함수이다.



## String

자바스크립트에는 글자 하나만 저장할 수 있는 타입이 없다.

### special symbol

- line feed - `\n`
- carriage return - `\r`
- backslash - `\\`
- tab - `\t`
- unicode - `\u{}`

### Property

#### length

문자열의 길이를 알 수 있다.

```js
let str = "hello";
console.log(str.length); // output: 5
```

### Method

#### charAt

문자열에서 인덱스에 따른 한 글자를 알 수 있다.

```js
let str = "hello";
console.log(str.charAt(2)); // output: l
```

#### charCodeAt

문자열에서 인덱스에 따른 한 글자의 아스키 코드를 알 수 있다.

```js
let str = "hello";
console.log(str.charCodeAt(2)); // output: 108
```

#### indexOf

찾고 싶은 문자열의 인덱스를 원하는 인덱스부터 처음 발견한 인덱스 값을 반환해 준다.

원하는 인덱스를 입력하지 않으면 처음부터 찾는다.

```js
let str = "hello";
console.log(str.indexOf("l")); // output: 2
```

#### lastIndexOf

`indexOf` 는 처음부터 였지만 얘는 문자열의 끝에서부터 찾아 반환한다.

```js
let str = "hello";
console.log(str.lastIndexOf("l")); // output: 3
```

#### includes

문자열이 찾고 싶은 문자열을 포함하는지 확인하는 함수다.

대소문자를 구분하여 반환한다.

```js
let str = "hello";
console.log(str.includes("L")); // output: false
```

#### startsWith

원하는 문자열로 시작하는지 판단한다.

```js
let str = "hello";
console.log(str.startsWith("h")); // output: true
```

#### endsWith

원하는 문자열로 끝나는지 판단한다.

```js
let str = "hello";
console.log(str.endsWith("o")); // output: true
```

#### toLowerCase

문자열을 모두 소문자로 변환한다.

#### toUpperCase

문자열을 모두 대문자로 변환한다.

#### replace

처음 만나는 문자열을 원하는 문자열로 바꿀 수 있다.

만약 같은 문자열을 모두 바꾸고 싶다면 정규표현식을 활용하여 변경이 가능하다.

```js
let str = "hello";
console.log(str.replace("l", "L")); // output: heLlo
console.log(str.replace(/l/g, "L")); // output: heLLo
```

#### slice

시작 `start` 부터 끝 `end` 을 정해서 문자열을 자를 수 있다.

`end` 는 포함되지 않는다.

```js
let str = "hello";
console.log(str.slice(0, 2)); // output: he
```

`end` 를 명시하지 않으면 `start` 부터 끝까지를 의미한다.

```js
let str = "hello";
console.log(str.slice(2)); // output: llo
```

`start` 나 `end` 가 음수면 끝에서 부터의 인덱스를 의미한다.

```js
let str = "hello";
console.log(str.slice(-2)); // output: lo
```

#### substring

`slice` 와 동작이 같지만 `start` 가 `end` 보다 커도 된다.

```js
let str = "hello";
console.log(str.substring(1, 3)); // output: el
console.log(str.substring(3, 1)); // output: el
```

#### substr

시작부터 원하는 길이 만큼의 문자열을 반환한다.

```js
let str = "hello";
console.log(str.substr(1, 2)); // output: el
```

#### split

문자열을 특정 구분자를 지정하여 나뉘어 배열로 반환된다.

``` js
let str = "number string";
console.log(str.split(" ")); // output: ["number", "string"]
```



## Array

여러 개체 값을 순차적으로 나열한 자료 구조이다.

배열은 `new Array()` 혹은 `[]` 을 통해 선언할 수 있다.

```js
let array = new Array();
let array = [];
```

사이즈를 입력하거나 초기값을 입력할 수도 있다.

배열 내 값을 요소 `element` 라고 하고 요소에 대한 접근은 `index` 로 한다.

배열의 크기를 알 수 있는 속성으로 `length` 가 있다.

```js
let array = new Array(4);
console.log(array); // [ <4 empty items> ]

let array = ["HTML", "CSS", "JS"];
console.log(array[0]); // HTML
console.log(array[1]); // CSS
console.log(array[2]); // JS

console.log(array.length); // 3
```

자바스크립트는 배열이 메모리가 연속적으로 되어있는 밀집 배열이아니라 Hash 기반의 객체로 비 연속적인 희소 배열이다.

배열은 객체 타입이기 때문에 `index` 로 접근이 가능하지만 일반 객체처럼 `key: value` 쌍의 값을 가질 수 있다.

### Method

#### isArray

`typeof` 연산자로 일반 객체와 배열은 구분이 안된다.

`isArray` 메서드로 배열인지 확인할 수 있다.

```js
let type1 = "string";
let type2 = ["hello"];

console.log(Array.isArray(type1)); // false
console.log(Array.isArray(type2)); // true
```

#### push

배열의 마지막 요소로 추가한다.

```js
let lan = ["js", "c", "java"];

lan.push("python");
console.log(lan); // ["js", "c", "java", "python"]
```

#### pop

배열의 마지막 요소를 삭제하고 그 요소가 반환된다.

```js
let res = lan.pop();
console.log(res); // python
console.log(lan); // ["js", "c", "java"]
```

#### unshift

배열의 첫 번째 요소로 추가한다.

```js
lan.unshift("c#");
console.log(lan); // ["c#", js", "c", "java"]
```

#### shift

배열의 첫 번째 요소를 삭제하고 그 요소가 반환된다.

```js
res = lan.shift();
console.log(res); // c#
console.log(lan); // ["js", "c", "java"]
```

#### splice

배열의 요소를 삭제하거나 값을 변경할 수 있다.

삭제된 요소는 반환된다.

매개변수로는 시작 인덱스와 인덱스 부터 삭제할 요소의 개수를 입력해주면 된다.

개수를 입력하지 않으면 인덱스부터 끝까지 삭제한다.

```js
res = lan.splice(1);
console.log(res); // ["c", "java"]
console.log(lan);// ["js"]

lan = ["js", "c", "java"]
res = lan.splice(1, 1);
console.log(res); // ["c"]
console.log(lan); // ["js", "java"]
```

값이 변경되는 경우는 자세히 보면 요소를 삭제하고 다른 값을 추가하는 형태이다.

```js
lan.push("c");
console.log(lan); // ["js", "java", "c"]
lan.splice(1, 1, "c++");
console.log(lan); // ["js", "c++", "c"]
```

#### slice

배열의 일부분을 가져오고 싶을 때 사용할 수 있다.

원본 배열에 대해서는 변동이 없다.

```js
res = lan.slice(1);
console.log(res); // ["c++", "c"]
console.log(lan); // ["js", "c++", "c"]
```

#### concat

배열과 배열 또는 값을 병합할 수 있다.

```js
lan = lan.concat(["python", "java"]);
console.log(lan); // ["js", "c++", "c", "python", "java"]
```

#### indexOf

찾고 싶은 요소의 인덱스를 배열의 처음부터 찾아 반환해 준다.

배열에서 요소를 찾지 못하면 `-1` 을 반환해준다.

```js
console.log(lan.indexOf("js")); // 0
console.log(lan.indexOf("go")); // -1
```

#### lastIndexOf

`indexOf` 와 반대로 배열의 끝에서 부터 찾는다.

```js
console.log(lan.lastIndexOf("python")); // 3
```

#### includes

배열의 요소들 중 값의 포함 여부를 확인하여 불린타입을 반환한다.

```js
console.log(lan.includes("js")); // true
console.log(lan.includes("go")); // false
```

#### sort

배열을 오름차순으로 정렬시킨다.

```js
console.log(lan.sort()); // ["c", "c++", "java", "js", "python"]
```

#### reverse

배열을 내림차순으로 정렬시킨다.

```js
console.log(lan.reverse()); // ["c", "c++", "java", "js", "python"]
```

#### join

배열을 하나의 문자열로 반환한다.

```js
let array = ["hello", "world"];
console.log(array.join(" ")); // hello world
```

### loop

배열에서 `loop` 는 3가지의 종류가 있다.

- for 문

  `index` 로 요소에 접근한다.

  ```js
  for (let i = 0; i < lan.length; i++) {
      console.log(lan[i]);
  }
  ```

  

- for..in

  `key` 값으로 요소에 접근한다.

  ```js
  for (let key in lan) {
  	console.log(lan[key]);
  }
  ```

  

- for..of

  요소에 바로 접근이 가능하다.

  ```js
  for (let l of lan) {
      console.log(l);
  }
  ```




### Higher-Order Function

#### sort problem

`sort` 는 정렬 시에 배열의 요소가 일시적으로 문자열로 변경된다. 

```js
let nums = [1, 49, 2, 100, 14];
```

위와 같은 배열이 있을 때 `sort` 함수를 적용하면 원하는 정렬은 `[1, 2, 14, 49, 100]` 이지만 아래처럼 나타난다.

```js
console.log(num.sort()); // [1, 100, 14, 2, 49]
```

문자열로 비교가 되었기 때문에 이렇게 정렬된 것이다.

또 문자열로 이루어진 배열을 대소문자를 구분하지 않고 정렬시키고 싶지만 `sort` 는 대소문자를 구분하여 정렬한다.

#### sort solution

**TIL 0905 참고**

`sort` 의 인자로 `compareFunction` 함수가 제공될 때 이 함수의 반환 값에 따라 정렬된다고 한다.

`compareFunction` 의 인자로 `a` 와 `b` 를 주고 비교한다.

반환 값이 `0` 보다 **작은** 경우 `a` 가 `b` 보다 앞에 정렬된다.

`0` **을 반환**하면 서로에 대한 변경사항이 없다.

`0` 보다 **크면** `b` 를 `a` 보다 앞으로 정렬한다.

#### forEach

`forEach` 의 콜백 함수 매개변수는 `element` `index` `array` 를 가지는데 `index` 와 `array` 는 `optional` 이다.

```js
let nums = [1, 2, 3]
nums.forEach(function(num) {
    console.log(num);
})
```

#### map

`map` 의 콜백 함수 구조는 `forEach` 와 동일하다.

콜백 함수의 리턴 값으로 새로운 배열을 만든다.

```js
let map = nums.map(function(num) {
    return num * 2;
})
console.log(map); // [2, 4, 6]
```

#### find

`find` 의 콜백 함수 구조는 `forEach` 와 동일하다.

콜백 함수 조건을 만족하는 첫 번째 요소 값을 반환한다.

```js
let find = nums.find(function(num) {
    return num < 3;
})
console.log(find); // 1
```

`nums` 배열에서 3보다 작은 수는 1과 2 두 개가 존재하지만 첫 번째 값인 1만 반환하는 것이다.

#### filter

`filter` 의 콜백 함수 구조는 `forEach` 와 동일하다.

콜백 함수 조건에 만족하는 값들로 새로운 배열을 만든다.

```js
let filter = nums.filter(function(num) {
    return num < 3;
})
console.log(filter); // [1, 2]
```

#### reduce

**0904 참고**

`reduce` 의 콜백 함수는 네 가지 인수를 받는다.

- **`accmulator`** 

  - 콜백마다 리턴값을 누적한다.

  - 초기값을 설정할 수 있다.

- **`currentValue`** 

  현재 요소를 나타낸다.

- `currentIndex` `Optional`

  현재 인덱스를 나타낸다.

- `array` `Optional`

  호출한 배열을 의미한다.

```js
let reduce = nums.reduce(function(acc, num) {
    return acc + num;
}, 0)
console.log(reduce); // 6
```

`acc` 를 `0` 으로 초기 값을 설정하고 각 요소를 `acc` 에 더해서 누적시킨 값을 반환한 것이다.

## 
