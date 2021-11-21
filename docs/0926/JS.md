### Object

`Primitive type` 의 데이터, 객체, 배열 등 다양한 데이터를 저장할 수 있다.

객체는 `key: value` 쌍으로 이루어진 데이터를 저장한다.

`value` 에 대한 **접근**은 `object.key` 로 접근이 가능하다.

```js
let user = {
    name: "john",
    age: 27
};
```

위와 같은 객체의 **저장 구조**는 이렇다.

일반적으로 생각했을 때 `user` 라는 변수에 `name` 과 `age` 가 저장된다고 생각할 수 있다.

`user` 에는 객체를 저장한 메모리의 주소 값이 저장이 되고 그 주소를 찾아가면 `name` 공간에 문자열 `john` 이 `age` 공간에 `27` 이라는 숫자값이 저장되어 있는 구조이다.

#### Copy Problem

객체의 저장 구조 특성 때문에 아래처럼 객체를 복사하는 경우에 문제가 발생한다.

```js
let admin = user;
```

`user` 객체를 `admin` 에 복사를 했지만 사실 주소 값을 복사한 것이기 때문에 객체에 대한 접근과 수정을 했을 때 같은 객체가 변화된다는 것을 알 수 있다.

```js
admin.age = 30;

console.log(admin.age); // output: 30
console.log(user.age); // output: 30
```

#### Shallow Copy

이러한 복사 문제를 해결하기 위한 얕은 복사가 있다.

얕은 복사를 하는 방법에는 3가지가 있다.

-  `for` 문을 이용한 복사

  ```js
  let admin = {};
  for (let key in user) {
      admin[key] = user[key];
  }
  ```

- `Object.assign( )` 함수를 이용한 복사

  ```js
  let admin = Object.assign({}, user);
  ```

- `ES6` 에서부터 지원하는 `Spread Operator` 를 이용한 복사

  ```js
  let admin = { ...user };
  ```

하지만 얕은 복사에도 문제점이 있는데 객체 내 또 다른 객체가 있으면 복사되지 않는다.

#### deep copy

얕은 복사의 해결법이 깊은 복사이다.

반복문을 통한 복사방법도 있고 `JSON` 객체를 이용한 복사방법도 있다.

```js
let admin = JSON.parse(JSON.stringify(user));
```



## Convert Type

자바스크립트는 타입을 명시적으로 선언하지 않는 그럴 필요가 없는 언어이다.

타입을 변환할 때 연산자로 인한 자동으로 암묵적 변환이 이루어지기도 하고 강제적으로 명시적인 타입 변환도 있다.

### String

`String( )` 함수를 이용해 문자열로 변환한다.

```js
console.log(String(58)); // output: 58
```

### Number

`Number( )` 함수를 이용해 `Number` 타입으로 변환한다.

정수나 실수로의 변환은 `parseInt( )` 와 `parseFloat( )` 를 이용한다.

```js
console.log(Number("")); // output: 0
console.log(Number("58")); // output: 58
console.log(Number(true)); // output: 1
console.log(Number(false)); // output: 0
console.log(Number(null)); // output: 0
console.log(Number(undefined)); // output: NaN

console.log(parseInt("150.42")); // output: 150
console.log(parseFloat("150.42")); // output: 150.42
```

### Boolean

`Boolean( )` 함수를 이용해 `Boolean` 타입으로 변환한다.

```js
console.log(Boolean("")); // output: false
```

`0` `null` `undefined` `NaN` `""` 은 `false` 이고 나머지는 `true` 값으로 변환된다.