## Function

함수는 다수의 명령문을 코드 블록으로 감싸고 하나의 실행 단위로 만든 코드의 집합을 말한다.

### Declaration

함수를 만들기 위해서는 함수를 정의해야 한다.

함수 정의 방법은 3가지가 있다.

첫 번째로는 `function` 키워드를 통해 함수를 선언하는 방법이 있다.

``` js
function printHello() {
    console.log("hello");
}
```

두 번째로는 함수 표현식을 사용해 정의하는 방법이 있다.

```js
const printHello = function() {
    console.log("hello");
}
```

세 번째로는 화살표 함수이다.

```js
const printHello = () => {
    console.log("hello");
}
```

함수는 매개변수를 지정할 수 있다.

매개변수는 함수 내부에 데이터를 전달하는 인수이다.

### Call

함수를 호출할 때에는 함수의 이름과 매개변수가 옵션으로 필요하다.

자바스크립트는 정의된 함수의 매개변수 개수와 호출시 넘긴 매개변수의 개수가 일치하는지 확인하지 않는다.

#### Default

정의된 함수는 매개변수가 있지만 함수 호출시 값을 전달하지 않으면 그 값은 `undefined` 가 된다.

값은 전달하지 않는데 값이 필요할 땐 **기본 값**을 매개변수에 지정할 수 있다.

```js
const printHello = (to = "world") => {
    console.log(`hello ${to}`)
}
```

#### Dynamic

함수에 매개변수를 동적으로 전달할 수도 있다.

자바스크립트는 정의된 함수의 매개변수의 개수와 전달하는 값의 개수가 달라도 된다고 했다.

그래서 매개변수가 없는 함수에 값을 전달하면 함수 내부에 `arguments` 라는 객체로 그 값을 확인 할 수 있다.

화살표 함수에서는 `arguments` 가 없으니 주의하자.

```js
const printHello = function () {
    console.log(`${argument[0]} ${argument[1]}`)
}
```

#### Return

함수를 호출하면 값을 반환할 수 있다.

값을 반환하면 그 이후의 코드는 수행되지 않는다.

```js
const addResult = (x, y) => {
    return x + y;
}
console.log(addResult(2, 3)); // output: 5
```

#### name

함수의 이름을 지을 때는 함수의 이름을 보고 어떠한 기능을 하는지 유추가 가능하도록 지어주는 것이 좋다.

### Recursion

함수 스스로 자신을 참조해 호출하면서 동일한 코드가 계속적으로 수행되는 함수 호출 방법을 재귀라고 하고 그 함수를 재귀 함수라 부른다.

재귀 함수는 계속해서 반복되기 때문에 특정 조건일 때 그만 호출 되도록 제한하는 코드가 필요하다.

재귀 함수의 대표적인 예로 팩토리얼 함수가 아래이다.

```js
function factorial(num) {
    if (num === 1) return 1;
    return num * factorial(num-1);
}
console.log(factorial(num)); // output: 6
```

반복문으로도 구현이 가능하지만 재귀를 사용하는 이유는 코드가 짧아지고 코드에 대한 이해도가 높아져서 반복문보다 재귀를 사용하는 경우도 많다.

**재귀의 내부 동작과정**은 스택에 쌓고 하나씩 다시 꺼내서 실행되는 구조라고 하는데 이해가 완벽하지 않아 이 부분은 다음에 다시 작성하도록 하자.

### Callback

**콜백 함수**는 다른 함수의 매개변수로 전달되어 수행되어지는 함수이다.

#### call by value

값을 복사하여 함수에 넘겨주는 형식이다.

값이 복사되었기 때문에 값은 같아도 메모리 영역이 서로 다르기 때문에 서로에 대한 영향이 없다.

```js
let a = 1;
let add = function (b) {
    b = b + 1;
}
add(a);
console.log(a); // output: 1
```

#### call by reference

주소를 복사하여 함수에 넘겨주는 형식이다.

주소가 복사되었기 때문에 같은 메모리를 가리키는 주소이기 때문에 하나를 변경하면 원본도 변경이되어 서로에게 영향이 있다.

```js
let a = { v: 1 }
let add = function (b) {
    b.v = b.v + 1;
}
add(a);
console.log(a.v); // output: 2
```

위 예시를 보면 `a` 의 주소 값이 매개변수로 전달되었기 때문에 값이 변경되어 `2` 가 출력된 것을 알 수 있다.

객체 복사 문제점과 유사하다.

### Assignment

함수 표현식 처럼 함수를 정의하여 변수에 저장하는 것이 가능하다.

또한 배열이나 객체에도 함수를 저장할 수 있다.



### Method

함수는 객체에도 저장이 가능하다. 저장된 이 함수를 **메서드**라고 부른다.

```js
let user = {
    name: "Min",
    age: 24,
    hello_func() {
        console.log("Hello");
    }
}
```

#### this

메서드에서 객체 내부의 속성 값을 접근할 수 있는 지시자이다.

```js
let user = {
    name: "Min",
    age: 24,
    hello_func() {
        console.log("Hello" + this.name);
    }
}
```


