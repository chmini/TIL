### Layout

#### inline

영역의 크기가 내부 콘텐츠 크기로 정해진다.

`margin` `padding` 의 `top` `bottom` 값이 없다.

여러 요소가 가로 배치된다.

#### block

영역의 크기를 `width` `height` 로 지정할 수 있다.

`width` 를 지정하지 않으면 가로 전체를 차지한다.

여러 요소가 세로 배치된다.

#### inline-block

영역의 크기를 `width` `height` 로 지정할 수 있다. 

여러 요소가 가로 배치가 된다.

<br>

`display` 속성으로 세 가지 요소를 지정할 수 있다.

```css
span {
	display: block;
}
```

<br>

#### 요소가 보이지 않는 방법

```css
.box {
    display: none;
}
```

레이아웃에서 없어지고 브라우저가 **무시**하여 그려낸다.

```css
.box {
    visibility: hidden;
}
```

레이아웃을 변경하지 않고 브라우저가 **보이지만** 않도록 한다.

<br>

#### Float

기존에 요소가 가지고 있던 특징 ( **inline**, **block**.. ) 을 무시하고 별도의 배치 효과를 가지게 된다.

`left` `right` 값을 가질 수 있다. 최대까지 배치할 수 있는 위치로 간다.

```css
.img {
    float: left;
}
```

<br>

**normal flow**

레이아웃을 변경하지 않을 시 웹페이지 요소가 자기 자신을 배치하는 방법이다.

블록, 인라인 요소들의 **상태**, 특징을 말한다.

#### position

값으로 가질 수 있는 키워드가 여러가지가 있다.

**static**

기본값이다. `normal flow` 에 따라 배치한다.

**relative**

`normal flow` 에 따라 배치 후 `static` 상태의 자기 자신을 **기준**으로 `top` `bottom` `left` `right` 의 값에 따라 오프셋을 적용한다.

반대가 되는 값을 동시에 쓰게 되면 `top` `left` 가 우선순위로 처리가 된다.

**absolute**

`normal flow` 에서 제거한다.

조상 중에서 `position:static` 이 아닌 가장 가까운 요소를 **기준**으로 `top` `bottom` `left` `right` 값을 지정하여 배치한다.

조상이 없다면 `body` 를 기준으로 한다.

**fixed**

`normal flow` 에서 제거한다.

뷰포트 영역을 **기준**으로 `top` `bottom` `left` `right` 값을 지정하여 배치한다.

**sticky**

`normal flow` 에 따라 배치한다.

스크롤 되는 조상을 **기준**으로 `top` `bottom` `left` `right` 값을 지정하여 배치한다.

<br>

각 `position` 에서 기준점을 잘 파악하면 쉽게 적용시킬 수 있다.

<br>

#### overflow

컨테이너의 크기가 지정된 상태에서 컨텐츠가 그 크기보다 넘쳐흐를 때 처리하는 방법을 지정하는 속성이다.

`visible`

기본 값이다. 넘치는 내용이 넘치는대로 보이게 된다.

`hidden`

넘치는 내용이 보이지 않도록 한다.

`scroll`

컨테이너에 스크롤 바가 생성이 되어 스크롤로 넘치는 내용을 확인 할 수 있다.

`auto`

넘치지 않으면 기본 값 상태이다가 넘치면 `scroll` 로 보여주는 브라우저가 결정한다.

<br>

#### z-index

요소의 Z축 순서를 지정한다. 더 큰 `z-index` 값을 가진 요소가 작은 값의 요소 위를 덮는다.

값의 자료형으로는 `<integer>` 를 사용할 수 있다.

`static` 이 아닌 `position` 은 `static` 인 `position` 보다 `z-index` 값이 더 높다.