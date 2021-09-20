### Transition

상태 A가 상태 B로 변환되는 모습을 보여주는 데 어느 정도의 **시간**이 필요하다.

<br>

#### transition-property

어떤 속성을 바꿀 것인지를 정한다.

`none` 으로 안 바꿀 수도 `all` 로 모든 속성을 바꿀 수도 아니면 **특정 속성만 입력**해 그 속성만 적용시킬 수 도 있다.

#### transition-duration

변환되는 시간을 설정한다.

`<time>` 이라는 값을 가진다. `s` `ms` 의 단위를 가진다.

```css
/* A */
.box {
    width: 300px;
    height: 80px;
    border: 2px dashed black;
    background-color: white;
    font-size: 50px;
    color: black;
    /* transition */
    transition-property: color;
    transition-duration: 1s;
}
```

```css
/* B */
.box:hover {
    width: 320px;
    background-color: black;
    color: white;
    font-size: 60px;
}
```

<br>

#### transition-delay

변환을 시작하는 시간을 지연시킬 수 있다.

```css
/* 1s 뒤에 시작 */
transition-delay: 1s;
```

#### transition-timing-function

`ease` `ease-in` `ease-out` `ease-in-out` `linear` 로 변하는 시간 곡선을 바꾼다.

`cubic-bezier` 로 직접 조작하여 원하는대로 바꿀 수 있다.

<br>

#### transition

**shorthand** 속성이다. 위의 4가지 속성을 값으로 갖는다.

`<time>` 값의 순서가 중요하다.

첫 번째가 `duration` 이고 두 번째는 `delay` 이다.

```css
/* property duration timing-function delay */
transition: all 3s ease-in-out 1s;
```

위의 예시의 순서를 따르는 것이 좋다.

<br>

#### 활용 예제

```css
/* A */
.box {
    width: 100px;
    height: 100px;
    border: 10px solid seagreen;
    background-color: rgb(204, 253, 225);
    border-radius: 30px;
    
    transform-origin: bottom r
    transition: all 3s ease-in-out;
}
```

```css
/* B */
.box:hover {
    transform: rotate(360deg) translate(30px, 30px);
}
```