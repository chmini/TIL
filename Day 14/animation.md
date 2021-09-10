### animation

`transition` 과 비슷하지만 다르다.

유저의 액션이 없어도 적용되는 변환이다.

여러가지의 스타일을 미리 정의해두고 사용할 수 있다.

<br>

#### @keyframes

`animation` 의 특정 지점의 스타일을 지정하고 `animation-name` 을 정할 수 있다.

```css
.box {
    width: 100px;
    /* two animation */
    animation: my-first-animation 2s infinite;
    animation: my-second-animation 2s infinite;
}
```

2가지 상태를 작성 시에 `from` `to` 로 작성한다.

```css
@keyframes my-first-animation {
    from { width: 100px; }
    to { width: 300px; }
}
```

3가지 이상의 상태를 작성 시에 퍼센트를 통해서 작성한다.

```css
@keyframes my-second-animation {
    0% {
        font-size: 20px;
    }
    50% {
        width: 300px;
        font-size: 80px;
    }
    100% {
        font-size: 20px;
    }
}
```

<br>

#### animation-name

`@keyframes` 의 이름을 사용한다.

대소문자를 구분한다.

이름으로는 `a-z` `0-9` `_` ` -` 만 사용이 가능하다.

#### animation-duration

`animation` 의 한 사이클을 완료하는 데 걸리는 시간을 지정한다.

음수 값은 존재하지 않는다. 0 이상의 `<time>` 값을 가진다.

<br>

#### animation-delay

`animation` 이 시작되는 시간을 지정한다.

`<time>` 값을 가진다. 음수 값도 지정이 가능하다.

만약 `-1s` 이라면 바로 시작되지만 **1초의 지점**부터 시작된다.

#### animation-timing-function

`transition` 과 값이 동일하다.

<br>

#### animation-iteration-count

`animation` 의 반복 횟수를 지정한다. 

기본 값은 1이고 `<number>` 값을 가질 수 있다.

`infinite` 로 무한 반복 재생도 가능하다.

#### animation-direction

`animation` 사이클의 재생 방향을 지정할 수 있다.

`normal`

정방향 재생이다.

`reverse`

역방향 재생이다.

`alternate`

매 사이클 마다 방향을 뒤집는다. 첫 번째는 정방향이다.

`alternate-reverse`

`alternate` 와 같지만 첫 번째 사이클이 역방향이다.

#### animation-play-state

두가지의 값을 갖는다. `running` `paused`

`hover` 나 별도의 `javascript` 를 통해서 상태를 재생 상태를 유지하거나 일시 정지 상태를 유지할 수도 있다.

<br>

#### animation-fill-mode

4가지 값을 가진다.

`none`

기본 값이다. 

`animation` 이 실행 될 때에만 스타일을 적용한다는 의미이다.

`forwards`

`@keyframe` 에서 끝 프레임이 `animation` 이 끝난다.

`backwards`

`@keyframe` 에서 첫 프레임에서 `animation` 을 시작한다.

이 프레임은 `direction` 의 값을 따른다.

만약에 `reverse` 라면 끝 프레임을 처음으로 유지한다.

`both` 

`forwards` 와 `backwards` 가 둘 다 적용된다.

`animation` 이 어떻게 진행되는지 생각하면 이해하기 쉽다.

<br>

#### animation

```css
/* duration timing-function delay iteration-count direction fill-mode play-state name */
animation: 2s linear 1s 2 reverse forwards paused my-firset-animation;
```

`transition` 과 마찬가지로 `<time>` 값의 첫 번째는 `duration` 두 번째는 `delay` 이다.