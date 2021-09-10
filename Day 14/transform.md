### Transform

이 속성의 값으로 `<transform-function>` 을 사용한다.

<br>

#### scale

```css
.img {
    width: 400px;
    transform: scale(0.5)
}
```

`width` 에 대한 영역을 그대로 두고 사이즈를 `0.5` 배로 변경된다.

사이즈를 `width` 로 조절하는 것과 `scale` 로 조절하는 것은 큰 차이가 있다.

`scale(x, y)` 처럼 값을 두 가지를 받을 수도 위 예시처럼 한 가지만 받을 수도 있다.

`scaleX()` 와 `scaleY()` 로 가로나 세로만 조절할 수도 있다.

<br>

#### rotate

`<angle>` 값을 가진다. 회전을 의미한다.

단위로는 `deg` `grad` `rad` `turn` 이 있다.

예를 들어 **시계방향으로 90도**는 `90deg` `100grad` `0.25turn` 이라고 표현 가능하다.

```css
.img {
	width: 400px;
    /* same */
	transform: rotate(180deg);
    transform: rotate(200grad);
    transform: rotate(0.5turn);
}
```

<br>

#### translate

`<length>` 와 `<percentage>` 값을 가질 수 있다. 이동을 의미한다.

```css
.img {
	width: 400px;
   	/* two things */
    transform: translate(20px);
    transform: translate(30%, 40%);
}
```

하나의 값만 입력하면 `x` 축에만 영향을 준다.

`translateX()` 와 `translateY()` 로 각 축으로만 이동시킬 수 있다.

<br>

#### skew

`<angle>` 값을 가진다. 기울이기를 설정한다.

```css
.img {
	width: 400px;
	/* two things */
	transform: skew(45deg)
        
}
```

하나의 값만 입력하면 `x` 축에만 영향을 준다.

`skewX()` 와 `skewY()` 로 각 축에만 기울기를 적용할 수 있다.

<br>

### transform-origin

`transform` 의 `function` 이 아니고 별도의 속성이다.

```css
.img {
    width: 400px;
    /* origin */
    transform: scale(1.5);
    transform-origin: top left;
}
```

기본 값은 `50%` `center` 를 의미한다.

`transform` 의 **기준점**을 변경할 수 있다.

`transform` 은 **기준점**에서 사이즈를 변경하고 회전하고 이동하고 기울이는 형식이다.

