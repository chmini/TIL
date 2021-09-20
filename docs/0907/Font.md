### Font

#### font-size

```css
.text {
    font-size: 14px;
}
```

키워드를 사용하는 경우는 흔치 않다.

대부분 숫자와 단위 혹은 퍼센트를 이용한다.

<br>

#### font-style

```css
.text {
    font-style: italic;
}
```

기본 값은 `normal` 이다.

대부분 `italic` 체를 만들기 위해 사용한다.

`html` 에서 `i` 나 `em` 태그와 용도를 구분하는 것을 **유의**하자.

<br>

#### font-weight

```css
.text {
    font-weight: bold;
}
```

폰트 가중치나 키워드를 통해 굵기를 조정한다.

폰트마다 지원하는 가중치가 다를 수 있다.

이것도 `html` 에서 `b` 나 `strong` 태그와 의미가 다르므로 **유의**하자

<br>

#### font-family

```css
.text {
    font-family: "Nanum Gothic", sans-serif
}
```

폰트의 글꼴 자체를 바꾸기 위해 사용한다.

사용자의 컴퓨터에 있을 수도 없을 수도 있다.

이런 경우에는 여러가지 글꼴을 **나열**해서 사용자의 컴퓨터에 있는 글꼴을 선택해서 사용할 수 있도록 한다.

글꼴 이름이 공백이 존재하면 따옴표로 감싸주어야 한다.

작동하는 방식은 나열된 글꼴 중에서 앞에서 부터 순차적으로 지원하는 글꼴을 채택하여 적용된다.

**generic family name**  `serif` `sans-serif` `monospace`

폰트가 아무것도 없다면 마지막에 작성되는 글꼴이다.

브라우저에서 정해주는 글꼴이다.

<br>

#### line-height

```css
p {
    line-height: 2.0;
}
```

폰트 사이즈와 위 아래 여백까지의 높이를 의미한다.

폰트마다 `line-height` 가 다르기 때문에 고정 값을 주어 통일감을 줄 수 있다.

<br>

#### font

```css
.text {
    font: italic 300 14px/1.5 "Nanum Gothic", sans-serif
```

여러가지 폰트 관련 속성을 한 줄로 표현할 수 있는 형태이다.

**shorthand** 속성이다.

`font-size` `font-family` 는 **필수**이다.

`font-style` `font-weight` `font-variant` `line-height` 도 작성할 수 있다.

작성하는 데에도 순서가 있다.

`font-style` `font-weight` 는 `font-size` 앞에 위치해야 한다.

`line-height` 는 `font-size` 뒤에 `/` 와 작성해야 한다.

6개 속성 중 하나를 생략하면 그 속성은 `initial` 값으로 돌아간다.

<br>

#### letter-spacing

```css
.text {
    letter-spacing: -2px;
}
```

#### word-spacing

```css
.text {
    word-spacing: 1px;
}
```

글자 간 간격과 단어 간 간격을 의미한다.

`letter-spacing` `word-spacing` 도 글꼴마다 기본 값이 다르다.

너무 큰 값이나 작은 값을 사용하는 것은 좋지 않다.

<br>

#### text-align

```css
.text {
    text-align: center;
}
```

`left` `center` `right` 정렬이 있다.

`text-align` 을 적용하기 위해서는 **블록 요소**여야 한다.

<br>

#### text-indent

```css
.text {
    text-indent: 10px;
}
```

들여쓰기를 표현할 수 있다.

상속이 가능하다.

블록 요소에만 적용이 가능하다.

<br>

#### text-decoration

```css
.text {
    text-decoration: underline dotted;
}
```

**shorthand** 속성이다.

`line` 속성은 `underline` `overline` `line-through` 를 사용하는 데 두 가지 이상을 지정할 수 있다.

`style` 속성은 `solid` `double` `dotted` `dashed` `wavy` 가 있다.

<br>

#### word-break

```css
p[lang="en"] {
    word-break: break-all;
}
```

정해진 크기를 벗어나지 않도록 한다. (한중일 제외)

```css
p[lang="ko"] {
	word-break: keep-all;
}
```

띄어쓰기를 하지 않는 이상 글자가 쭉 이어진다. (한중일)

<br>

#### text-transform

한글에는 적용할 수 없는 속성이다.

사용할 수 있는 언어가 한정적이다.

```css
.text {
    text-transform: uppercase;
}
```

`uppercase` `lowercase` `capitalcase` 를 적용할 수 있다.

`html` 의 `content` 를 바꾸는 것은 아니다.