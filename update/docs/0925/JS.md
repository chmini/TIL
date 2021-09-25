# JavaScript

## Overview

자바스크립트는 동적인 웹을 위한 프로그래밍 언어이다.

처음부터 `JavaScript` 라는 이름을 가진 것은 아니다.

`LiveScript` 라는 이름에서 바뀌어 지금의 이름이 되었다고 한다.

`JavaScript Engine` 위에서 실행된다.

엔진은 스크립트를 컴파일하는 역할을 한다.



## ECMAScript

`ECMA` 라는 기관이 만든 스크립트 언어이다.

`ECMA-262` 이라는 규격을 따르고 표준화하기 위해 만들어졌다.

`ES1` 부터 계속 발전해오면서 현재 `ES12(ES2021)` 까지 나왔지만 `ES6` 에서 중요한 기능들이 있다고 한다.



## Variable

변수는 **변경이 가능**한 값을 저장하기 위한 저장소이다.

변수를 사용하기 위해서는 선언을 해야 하는데 `let` 이라는 키워드를 사용하여 선언한다.

변수의 선언은 중복으로 할 수 없다.

```js
let A = 1;
console.log(A);

let A = 2; // SyntaxError
```

### naming rule

변수의 이름은 문자, 숫자로 이루어지고 특수문자는 `$` 와 `_` 만 사용가능한데 첫 글자가 숫자가 될 수는 없다.

```js
let $name = "Kevin";
let test2;
```



## Constant

상수는 변수와 다르게 **변경 불가능**한 값을 가질 수 있다.

이것이 변수와 유일한 차이이다.

보통 변수와의 구분과 변경되지 않는 점을 명시적으로 표기하기 위해 대문자로 표기한다고 한다.



## Hosting

호이스팅은 코드에 선언된 변수 및 함수를 유효한 범위의 코드 상단으로 끌어올리는 작업을 말한다.

`var` 라는 키워드를 사용하여 변수를 선언할 때 발생한다.

```js
console.log(name); // output: undefined
var name = "Min";
console.log(name); // output: Min
```

위 예시 처럼 첫 번째 출력에서 필요한 변수가 아래에 선언이 되었지만 실제 작동은 아래 처럼 작동한다는 의미이다.

```js
var name;
conosle.log(name); // output: undefined
name = "Min";
console.log(name); // output: Min
```

변수가 선언되었지만 값이 없기 때문에 `undefined` 가 출력이 되고 값을 받고 난 후는 그 값이 출력되는 것을 알 수 있다.



## Data types

### typeof

`typeof` 연산자로 자료형을 나타내는 문자열을 알 수 있다.

```js
console.log(typeof 123); // output: number
console.log(typeof "hello"); // output: string
console.log(typeof null); // output: object
```

아래에서 `null` 은 `primitive` 타입이다.

그런데 `typeof` 연산자를 통한 확인은 `object` 라고 표기된다.

이 이유는 하위 호환성을 위해서 수정하지 않고 남겨두어 이렇게 나타나는 것이라고 한다.

### Primitive

#### Boolean

`true` 와 `false` 두 가지 값만을 가지는 타입이다.

주로 조건문에서 동작 판단의 기준으로 사용하기도 하고 비교 결과 저장을 위해서도 사용한다고 한다.

```js
let name_check = true;
let age_check = false;

let value_check = 5 > 2;
console.log(value_check); // output: true
```

#### Null

`null` 값만을 가지는 타입이다.

```js
let name = null;
```

`null` 은 **비어 있는** 값을 나타날 때 사용한다.

#### Undefined

`undefined` 은 **값이 할당되지 않은** 상태를 의미한다.

변수를 선언했는데 값이 할당되지 않으면 `undefined` 가 할당된다.

```js
let name;
console.log(name) // output: undefined
```

`undefined` 를 직접 할당하는 것보다 값이 없다는 것을 나타내고 싶다면 `null` 을 사용하는 것이 좋다.

#### Number

정수, 실수 등 숫자를 표현하는 타입이다.

사칙연산을 대표로 여러가지 연산자를 사용할 수 있다.

`Infinity` `NaN` 처럼 특수한 값도 가진다.

#### BigInt

`number` 타입은 -2<sup>53</sup>-1 ~ 2<sup>53</sup>-1 의 범위를 벗어나는 값을 가질 수 없다.

`BigInt` 는 정수 끝에 `n` 을 붙여 사용한다.

```js
let bigNumber = 14n;
```

#### String

문자열을 표현하는 타입이다.

따옴표로 문자열을 묶어 표현한다.

- 큰 따옴표 : "hello"
- 작은 따옴표 : 'hello'
- 역 따옴표 : &#96;Hello&#96;

역 따옴표에서 변수를 사용할 때 `${ }` 에 감싸서 사용하면 문자열에 변수를 넣을 수 있다.

```js
let name = "Cos";
console.log(`Hello, ${name}`); // output : Hello, Cos
```

