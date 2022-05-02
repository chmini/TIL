이 선택자들은 직접 해보고 눈으로 보는게 좋지만 문서로 정리하는 것도 한 번은 필요하다고 생각한다.

### Selector

#### Type

- 하나의 `html` 에 있는 모든 태그에 적용이 되기 때문에 주의해서 사용한다.
- 범위가 가장 넓기 때문에 `css` 파일의 상단부에 작성을 많이 한다.

```css
h2 {
	color: red;
}
```

<br>

#### ID

- `ID` 를 가진 하나의 요소에만 적용된다.
- 전체 `html` 에서 중복되는 네이밍이 불가능하다는 특징을 생각하고 사용한다.

```css
#title {
	color: green;
}
```

<br>

#### Class

- `class` 를 가진 여러 요소에 적용된다.
- `ID` 와 다르게 중복으로 적용이 가능하다.

```css
.blue {
	color: blue;
}
```

<br>

#### Attribute

- 같은 요소들 중에서 어떠한 **속성을 가진** 요소들에만 적용할 수 있다.

  ```css
  a[target] {
      color: green;
  }
  ```

- **속성의 특정 값**을 지정해서 적용할 수도 있다.

  ```css
  input[type=submit] {
      background-color: blue;
  }
  ```

  - `^=` 는 `value` 로 시작하는 속성

    ```css
    a[href^="https://"] {
        color: silver;
    }
    ```

  - `$=` 는 `value` 로 끝나는 속성

    ```css
    a[href$=".com"] {
        color: pink;
    }
    ```

  - `*=` 는 `value` 를 가지는 속성

    ```css
    a[href*="example"] {
        color: sienna;
    }
    ```

<br>

#### Pseudo-Class

- 조금 더 좁은 범위에 적용할 수 있다.

- 선택자 부모의 **자식 요소들 중**에서 해당하는 것을 찾는 것이다.

  - `first-child`

    ```css
    li:first-child {
        color: green;
    }
    ```

  - `last-child`

    ```css
    span:last-child {
    	color: tomato;
    }
    ```

  - `nth-child( )`

    `odd` `even` `2n-1` 등 여러 조건을 부여할 수 있다.

    ```css
    li:nth-child(odd) {
    	color: hotpink;
    }
    ```

- 선택자의 부모와 관계없이 **타입(선택자)만**을 기준으로 찾는 것이다.

  - `first-of-type`

    ```css
    .movie:first-of-type {
        color: red;
    }
    ```

  - `last-of-type`

    ```css
    p:last-of-type {
        color: blue;
    }
    ```

  - `nth-of-type( )`

    `nth-child` 와 조건 부여 방식은 동일하다.

    ```css
    p:nth-of-type(even) {
        color: yellow;
    }
    ```

- 원하지 않는 요소를 제외할 수 있다.

  - `not( )`

    ```css
    input:not([type=submit]) {
    	background-color: red;
    }
    ```

- 동적인 상황에 따른 스타일도 다르게 적용할 수 있다.

  - `link`

    방문한 적 없는 링크

    ```css
    a:link {
        color: yellow;
    }
    ```

  - `visited`

    방문한 링크

    ```css
    a:visited {
        color: blue;
    }
    ```

    크롬은 방문 기록을 통해 방문 여부를 확인한다.

  - `hover`

    마우스를 올렸을 때 적용

    ```css
    input[type=button]:hover {
        background-color: black;
        color: white;
    }
    ```

  - `active`

    마우스 버튼을 누르는 순간부터 떼는 시점까지를 의미

    ```css
    input[type=button]:active {
        background-color: red;
    }
    ```

  - `focus`

    현재 포커스가 되어 있는지 상태를 체크하여 적용

    ```css
    input[type=button]:focus {
    	background-color: blue;
    }
    ```

- `enabled` 는 `disabled` 속성이 없는 상태를 의미한다.

  `checked` 는 `radio` 나 `checkbox` 가 체크된 상태를 의미한다.

  ```css
  input[type=text]:enabled {
      background-color: skyblue;
  }
  ```

  ```css
  input[type=text]:disabled {
      background-color: silver;
  }
  ```

  ```css
  input[type=radio]:checked {
      outline: 3px solid red;
  }
  ```

<br>

#### Pseudo-Element

- `css3` 부터는 **더블 콜론 ( :: )** 을 쓰도록 권고한다고 한다.

  - `before` `after`

    `css` 로 만들어낸 가상의 요소이다.

    드래그나 복사가 되지 않고 내용이 있는 것이 아니고 오로지 스타일을 위함이다.

    `before` 는 앞, `after` 는 뒤에 붙인다.

    ```css
    .movie::before {
        content: "MOVIE"; /* point */
        color: indianred;
    }
    ```

  - `first-letter`

    첫 번째 글자에 적용된다.

    ```css
    .lorem::first-letter {
        color: red;
    }
    ```

  - `first-line`

    브라우저의 사이즈에 관계없이 첫 번째 줄에 적용된다.

    ```css
    .lorem::first-line {
        color: blue;
    }
    ```

  - `selection` 

    선택 영역에 대해 적용된다.

    ```css
    .lorem::selection {
        background-color: orange;
    }
    ```

<br>

#### Selector Combinators

- 하위 선택자  `s1 s2`

  `s1` 요소에 포함된 `s2` 요소를 선택한다.

  ```css
  ul li:last-of-type {
      color: red;
  }
  ```

- 자식 선택자  `s1 > s2`

  `s1` 요소의 직계 자식 요소인 `s2` 를 선택한다.

  ```css
  ul > li:last-of-type {
      color: red;
  }
  ```

- 일반 형제 선택자

  뒤에 위치한 형제를 의미한다.

  ```css
  code ~ p {
      color: red;
  }
  ```

- 인접 형제 선택자

  바로 뒤에 위치한 형제를 의미한다.

  ```css
  code + p {
  	color: blue;
  }
  ```

- 그룹화

  동일한 규칙을 가지는 것을 하나로 줄일 수 있다. 

  ```css
  h1, h2, h3 {
  	color: orange;
  }
  ```

<br>

#### Universal

- 단독으로 사용할 경우 `html` 전체에 영향을 미치기 때문에 주의해서 작성하도록 하자.

- 다른 선택자와 결합하여 사용할 수도 있다.

  ```css
  * {
  	color: red;
  }
  ```

<br>

#### 상속

`initial`

- 상속되는 값을 적용시키지 않는다.

  ```css
  .child {
      all: initial;
  }
  ```

`inherit`

- 무조건 상속을 받게 적용시킨다.

  ```css
  .parent * {
      color: inherit; 
  }
  ```

`unset` 의 동작 방식

- 상속받을 값이 있으면 `inherit`
- 상속받을 값이 없으면 `initial`