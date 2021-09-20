### Color

컬러를 표현할 수 있는 방법은 여러가지가 있다.

키워드 `red` `blue` 를 사용하여 표현하거나 `transparent` 로 투명도 표현도 가능하다.

RGB 3차원 좌표계 `HEX ` 로 표기하거나 `rgb()` `rgba()` 같은 함수형 표기법도 있다.

<br>

#### opacity

`alpha` 값을 지정할 수 있다. 이 값은 불투명도를 나타내는 `0` 이상 `1` 이하의 숫자로 조정할 수 있다. 기본 값은 `1` 이다. 

요소의 내용을 포함해 자식 요소들도 영향을 받는다. 자식 요소에 영향을 주지 않기 위해서는 `background-color` 값을 조정해야 한다.

<br>

### Background

#### color

컬러의 표기방법 중 선택하여 표현할 수 있다.

`image` 뒤에 렌더링 된다.

#### image

`url()` 에 이미지 주소를 넣은 값으로 표현한다.

#### repeat

배경 이미지의 반복 방법을 지정한다.

`repeat`

배경을 채울 때까지 이미지를 반복하되 넘치면 잘라낸다.

`repeat-x` `repeat-y`

`x` 축만 반복되거나 `y` 축만 반복되도록 설정된다.

`no-repeat`

이미지가 반복되지 않도록 설정된다.

#### position

기본 위치는 이미지의 왼쪽 상단 꼭짓점을 좌표로 `(0,0)` 이라고 볼 수 있다.

반복되는 상태여도 사용할 수 있다.

```css
.box {
    background-image: url("./img.png");
    
   	/* pixel */
    background-position: 200px 300px;
    /* keyword : 키워드 순서는 상관없다. */
    background-position: top right;
}
```

#### background-origin

`border-box` `padding-box` `content-box` 의 값을 가질 수 있다.

`box-sizing` 영역과 같다고 생각하면 좋다.

#### background-size

기본 값은 `auto` 이고 원본 크기를 보여준다.

`contain`

이미지가 잘리지 않고 비율이 변경되지 않는 선에서 가장 크게 설정한다.

`cover`

이미지의 비율이 변경되지 않는 선에서 가장 크게 설정한다.

원하는 크기를 `<length>` 나 `<percentage>` 를 통해 설정할 수도 있다.

이미지의 비율이 어긋 날 수 있다.

값을 하나만 입력하면 `width` 값에 맞는 비율로 이미지의 크기가 변경된다.

```css
.box {
    background-image: url("./img.png");
    background-repeat: no-repeat;

    /* 이미지의 비율을 유지하며 맞춰진다. */
    background-size: contain;
    background-size: cover;
    /* 강제로 크기를 고정한다. */
    background-size: 200px 300px;
    background-size: 100%;
}
```

#### background

**shorthand** 속성이다.

`color` 는 마지막에 위치해야 한다.

`size` 는 `position` 바로 뒤에 `/` 로 구분해서 작성해야 한다.