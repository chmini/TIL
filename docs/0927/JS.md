## Operator

피연산자는 연산의 대상 값이고 그 개수에 따라 단항, 이항, 삼항연산자가 존재한다.

### Arithmetic

사칙연산이 가능한 4가지 연산자( `+` `-` `*` `/` )가 있다.

나머지를 구할 수 있는 나머지 연산자( `%` )와 거듭제곱을 구하는 거듭제곱 연산자( `**` )도 있다.

```js
console.log(5 % 3); // output: 2
console.log(2 ** 4); // output: 16
```

### Assignment

대입 또는 할당 연산자라고 부른다.

우리가 변수에 데이터를 할당할 때 사용하는 `=` 이 해당한다.

```js
let num1 = 34;
let num2 = 10;
let num3;

num3 = num1 + num2;
console.log(num3); // output: 44
```

**복합 대입 연산자**

산술 연산자와 결합하여 계산하고 그에 대한 결과를 대입까지 하는 연산자를 말한다.

```js
let num = 4;
num += 5;
console.log(num); // output: 9
```

### Increment and Decrement

숫자를 1만큼 늘리거나 줄이는 연산을 해주는 연산자이다.

`++` 와 `--` 로 두 가지의 연산자가 있는데 이것이 피연산자의 앞에 위치하는지 뒤에 위치하는지에 따라 값이 달라진다.

```js
let num, result;

num = 10;
result = num++;
console.log(result); // output: 10
console.log(num); // output: 11

num = 10;
result = ++num;
console.log(result); // output: 11
console.log(num); // output: 11
```

뒤에 연산자를 사용하면 `num` 을 증가시키기는 하지만 다음 행부터 적용이 되기 때문에 `result` 에 대입이 될 때에는 기존 값 `10` 이 들어가게 된다.

앞에 연산자를 사용하면 `num` 을 증가시키는 행위가 먼저이고 다음에 대입을 하기 때문에 `result` 값이 `11` 이 되는 것을 알 수 있다.

### Comparison

연산자를 기준으로 양옆의 피연산자를 비교한 다음 `Boolean type` 으로 값을 반환하는 연산자이다.

우리가 아는 부등호도 여기에 포함된다.

자바스크립트에는 같음을 비교하는 연산자가 2가지가 있다.

일반적으로 같다, 동등하다의 의미를 가지는 `==` 연산자와 데이터 타입까지 완전히 일치한다는 의미를 갖는 `===` 연산자가 있다.

```js
console.log(3 == '3') // output: true
console.log(3 === '3') // output: false
console.log(3 === 3) // output: true
```

#### String

자바스크립트에서 문자열의 비교는 사전식 순서 더 정확하게는 유니코드 순서를 따른다고 한다.

두 문자열 비교 시에 첫 글자부터 하나씩 크기를 비교해 나가는 형식이다.

```js
console.log('Z' > 'A'); // output: true
console.log('Hello' > 'Hi') // output: false
```

### Logical

3가지 논리 연산자 `&&`(AND), `||`(OR), `!`(NOT) 가 있다.

논리 연산자는 `Boolean` 뿐 아니라 다른 타입이 피연산자가 될 수도 있고 반환되는 값도 `Boolean` 만 되는 것은 아니다.

`Boolean` 간의 연산을 먼저 보자면 `AND` 연산은 두 피연산자가 모두 `true` 여야 `true` 값이 반환되고 `OR` 연산은 두 피연산자 중 하나만 `true` 여도 `true` 값이 반환된다.

|   x   |   y   | x && y | x \|\| y |
| :---: | :---: | ------ | -------- |
| true  | true  | true   | true     |
| true  | false | false  | true     |
| false | true  | false  | true     |
| false | false | false  | false    |

### Precedence

[연산자 우선순위](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)



## Scope

스코프는 변수나 상수에 접근할 수 있는 범위를 말한다.

### Global

전역으로 선언되어 코드의 어디든 접근이 가능하다.

```js
let x = 1;
{
    console.log(x); // output: 1
}

(function scope() {
    console.log(x); // output: 1
})();

console.log(x); // output: 1
```

### Local

지역 즉 함수나 코드 블록 내에서 선언되어 함수나 코드 블록 내에서의 접근만 가능하다.

자바스크립트는 함수 레벨 스코프를 따른다.

하지만 `ES6` 에서 지원하는 `let` 키워드를 통해 블록 레벨 스코프가 지원된다.

#### Function Level

```js
(function() {
    let x = 1;
    console.log(x)
})();

console.log(x); // Error: x is not defined
```

위 예시처럼 함수 내에 선언된 `x` 는 외부에서 접근이 불가하다.

```js
var x = 2;

{
    var x = 1;
}

console.log(x); // output: 1
```

위와 같은 경우에는 코드 블록에 있는 `x` 는 접근이 안되기를 바라지만 `var` 키워드는 함수 레벨 스코프를 따르기 때문에 `x` 가 `1` 이 되었다.

#### Block Level

`let` 을 이용한 변수 선언은 블록 레벨을 따르므로 아래와 같은 경우에 같은 변수 명이여도 값이 변경되지 않는 것을 알 수 있다.

```js
let x = 2;

{
    let x = 1;
}

console.log(x); // output: 2
```



## Conditional Statement

조건에 따라 다른 동작을 원할 때 조건문을 사용한다.

### if

조건문은 `if ` 문을 이용해 표현할 수 있다.

`if` 문은 괄호 안에 조건을 적어주고 그 조건이 참일 때 실행된다.

```js
const X = 2;
if (X > 1) {
    console.log("X is bigger than 1");
}
```

`X` 는 `2` 이다. `if` 문에서 조건은 ' `X` 가 `1` 보다 큰가 ' 인데 이 조건에 대해 참이므로 코드 블록 내의 `console.log` 가 실행된다.

### else

조건이 만약 참이 아니라면 처리할 내용도 있을 것이다.

이것은 `else` 를 이용해서 `if` 문의 조건이 거짓일 경우 `else` 를 실행한다.

```js
let price = 2000;
if (price > 3000) {
    console.log("expensive");
} else {
    console.log("buy it");
}
```

`price` 가 `2000` 이다. 조건문은 `price` 가 `3000` 보다 클 때인데 작으니까 `else` 에 있는 `console.log` 가 실행된다.

### else if

조건이 여러 개가 필요할 수도 있다. 이런 경우에는 `else if` 를 사용해 `if` 문 외에 다른 조건을 붙일 수 있다.

```js
let year = 2019;
if (year > 2021) {
    console.log(`${year - 2021}년 후`);
} else if (year < 2021) {
    console.log(`${2021 - year}년 전`);
} else {
    console.log("올해");
}
```

### ?

조건 연산자 `?` 로도 조건에 따른 동작을 지정할 수 있다.

피연산자가 3개로 **삼항연산자** 라고도 한다.

작성하는 문법은 아래와 같다.

```js
let variable = condition ? trueValue : falseValue
```

`?` 를 기준으로 왼쪽에 조건을 적고 조건이 참일 때 `:` 을 기준 왼쪽이 실행되고 거짓일 때 오른쪽이 실행된다.

위에서 확인한 `if-else` 예제를 아래처럼 대체가 가능하다.

```js
let price = 2000;
let result = price > 3000 ? "expensive" : "buy it";
console.log(result)
```

### switch

`switch` 는 괄호 안의 변수 값이 일치하는 `case` 문을 실행한다.

```js
let dayNum = 5;
let day;

switch (dayNum) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
    default:
        day = "error";
        break;
}

console.log(day); // output: Friday
```

`dayNum` 이라는 변수 값이 `0~6` 범위에서 각각 요일을 지정하고 범위를 벗어나는 경우는 `default` 를 실행하는 방식이다.



## Loop

### for

처음 선언문(init)은 변수 선언 및 초기화를 하고 두 번째로 조건문(condition) 작성 후 마지막 표현식(final)은 주로 증감문 형태로 사용한다.

각 구성 요소의 구분은 **세미 콜론** `;` 으로 하며 필요없는 요소는 생략이 가능하다.

조건문이 `false` 가 되기 전까지 반복되는 진행 구조이다.

```js
for (init; condition; final) {
    // Code
}
```

아주 간단한 예시로 변수 `i` 의 초기값을 `0` 으로 설정하고 조건문은 `i` 가 `5` 보다 작을 때 실행되도록 한다. 마지막으로 `i` 는 `1` 씩 늘어나도록 하여 반복이 무한으로 되지 않도록 한다.

이에 대한 결과는 초기값 0부터 1씩 늘어나 조건문에 참이 되는 4 까지의 숫자가 출력이 된다는 것을 알 수 있다.

```js
for (let i = 0; i < 5; i++) {
    console.log(i);
}
```

반복문은 익숙해질 때까지 연습해야 한다.

### while

```js
while (condition) {
    // code
}
```

`condition` 이 참일 경우 실행되는 반복문이다.

`for` 문에서 본 예시와 같은 반복문을 `while` 문으로 바꾸면 아래와 같다.

```js
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}
```

### do while

`do while` 문은 조건 판단 이전에 실행이 한 번 필요한 경우에 사용한다.

```js
let i = 0;
do {
    console.log(i);
    i++;
} while (i < 5);
```

### break

반복문이 실행될 때 탈출할 때 사용되는 식별자이다.

```js
let cnt = 0
while (1) {
    if (cnt === 3) break
    console.log(cnt)
    cnt++
}
```

위 예시처럼 특정 조건일 때 반복문을 빠져나오게 만들 수 있다.

### continue

`break` 는 반복문을 탈출이지만 `continue` 는 다음 코드를 무시하고 다음 반복으로 넘어가는 형식이다.

```js
for (let i = 0; i < 4; i++) {
    if (i === 2) continue;
    console.log(i);
}
```

`i` 가 `2` 일때 다음 반복으로 넘어가게 만드는 코드이다.

출력 결과는 2를 제외한 0 ~ 3 범위 숫자가 된다.

### label

`break` 는 하나의 반복문만 탈출한다.

2중 반복문일 때 안쪽 반복문에서 `break` 를 사용하면 안쪽 반복문만 탈출한다는 의미이다.

만약 중첩된 반복문을 한 번에 빠져나오고 싶을 때 `label` 을 이용해서 빠져나올 수 있다.

``` js
label: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        if (j === 2) break label;
        console.log(i, j);
    }
}
```

`label` 은 가독성과 로직을 망가뜨리는 이유에서 사용을 권장하지는 않는다.