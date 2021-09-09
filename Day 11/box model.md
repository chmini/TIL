### Box Model

![box model](https://github.com/chmini/TIL/blob/master/Day%2011/box%20model.PNG)

`content`  : `content` 가 표시되는 영역을 말한다.

`border` : 외곽선이다. 기본 값은 `0` 이다.

`padding` : `content` 와 `border` 사이의 여백이다.

`margin` : 이 박스 모델과 다른 요소 사이의 공백 역할을 한다.

크롬에서 개발자 도구를 통해 확인해 볼 수 있다.

<br>

#### `width` `height`

초기값은 `auto` 라는 값이다.

인라인 요소는 지정할 수 없다.

값이 상속되지 않는다.

<br>

#### `max-width` `max-height` `min-width` `min-height`

각각의 박스 크기 **최대치와 최소치**를 설정해주어 더 이상 변경되지 않도록 할 수 있다.

<br>

#### `margin` 

**shorthand** 속성이다.

```css
.box {
    margin: 10px 20px 5px 15px;
}
```

 `top` `right` `bottom` `left` 순으로 적용된다. 쉽게 시계방향으로 해석하면 된다.

2가지만 작성하면 세로와 가로순으로 적용된다.

단일 값은 모두 적용된다.

단위 `%` 사용할 때 부모 박스가 있다면 부모 박스 **너비**의 백분율을 의미한다.

<br>

#### margin collapsing

블록 요소이고 `top` 과 `bottom` 이 경우에 따라 큰 크기를 가진 `margin` 이 합쳐지는 현상을 말한다.

블록 박스가 위와 아래에 각각 위치할 때 위에 있는 박스의 `margin-bottom` 값 **10**이고 아래에 있는 박스의 `margin-top` 값이 **20**이라면 둘 사이의 `margin` 간격이 **30**이 아니라 아래의 `margin-top` 값 **20**으로 합쳐지게 된다.

부모 블록 박스가 `border` 과 `padding` 또는 `inline` 이 없고 자식 블록 박스의 `margin-top` 이 부모 박스보다 크다면 자식 박스의 `margin-top` 값으로 합쳐진다.

하나의 블록 박스가 빈 블록이라면 `margin-top` 과 `margin-bottom` 이 상쇄된다.

<br>

#### `padding`

`margin` 과 동일하게 작성하고 동작의 차이는 `border` 의 안과 밖이다.

```css
.box {
    padding: 20px 30px 10px 40px;
}
```

<br>

#### `border-style` 

키워드로 스타일을 지정할 수 있다.

`margin` 과 `padding` 처럼 시계방향으로 스타일을 적용할 수 있다.

#### `border-width` 

`border` 의 두께를 지정한다.

키워드를 사용할 수도 있고 `length` 를 사용할 수도 있다.

#### `border-color`

색깔도 시계방향으로 적용할 수 있다.

<br>

#### `border`

```css
.box {
    border: 3px solid black;
}
```

**shorthand** 속성이다.

보통 이 속성으로 스타일을 선언한다고 한다.

`style` `width` `color` 를 작성하는데 순서는 상관이 없다.

**outline** 은 박스 모델에 속해 있지 않다.

<br>

#### `border-radius`

```css
.box {
    border-radius: 50%;
}
```

`length` 나 `percentage` 를 사용할 수 있다.

<br>

#### `box-sizing`

기본 값은 `content-box` 이다.

`content-box` 는 `width` 와 `height` 의 영역이 박스 모델에서 `content` 영역만 해당한다.

`border-box` 는 `width` 와 `height` 의 영역이 `padding` `border` 까지 포함한 영역을 의미한다.
