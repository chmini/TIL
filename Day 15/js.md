#### 1. 모래 뺏기 게임

`num` kg의 모래를 쌓아두고 게임을 시작한다.

모래성 중앙의 깃발이 쓰러지지 않는 모래성의 무게는 1kg이다.

흥민, 누나의 순서로 게임 진행한다.

한사람이 한 번에 가져갈 수 있는 모래의 양은 1kg 이상 3kg 이하이다.

흥민이가 이길 수 있는 모래성의 무게 `num` 을 찾아야 한다.

------

일단 모래성의 무게는 1을 넘어야 한다.

흥민이가 먼저 시작하기 때문에 모래성이 **4n - 3 (n은 정수)**의 무게만 아니라면 무조건 흥민이가 이긴다.

```js
const solution = (num) => {
    for (let i = 1; i <= num; i++) {
        // 4n - 3
        const a = 4 * i - 3;
        if (a === num) { // 수열에 존재하다는 의미
            return false;
        } else if (a > num) { // 수열에 없다는 의미
            return true;
        } else { // 찾는 중
            continue;
        }
    }
}
```

<br>

#### 2. 낱말 게임

패턴이 주어지면 패턴대로 한 사람씩 돌아가면서 낱말을 말하는 게임이다.

상현, 성민의 순서로 낱말 게임을 진행한다.

게임이 무승부가 되는 경우를 찾아야 한다.

------

예를 들어, `가가가가` 라는 패턴이 주어졌을 때

상현이가 처음에 `바나나` 라고 말했다면 이후에 진행되는 모든 단어가 `바나나` 이어야 한다.

만약 상현이나 성민이가 `바나나` 외에 다른 단어를 이야기 한다면 이 경우는 무승부가 아니다.

------

**[ 낱말, 패턴 ]** 쌍의 값을 저장할 수 있는 **Map** Object를 사용할 것 이다.

`pattern` 은 한 글자씩 분리하고 `string` 은 한 칸의 공백으로 분리한다.

**Map**에서 **Value**에 해당하는 패턴을 찾아서 없다면 새로운 쌍을 저장한다.

`string[i]` 가 **Map**에 존재한다면 `pattern[i]` 와 **Value**가 다르면 무승부가 아니기 때문에 **False**를 리턴한다.

반복문을 무사히 마치면 무승부이기 때문에 **True**를 리턴한다.

```js
const solution = (pattern, string) => {
    pattern = pattern.split("");
    string = string.split(" ");

    const map = new Map();
    for (let i = 0; i < string.length; i++) {
        const pat = map.get(string[i]);
        if (!pat) {
            map.set(string[i], pattern[i]);
        } else {
            if (pat !== pattern[i]) {
                return false;
            }
        }
    }
    return true;
}
```

<br>

#### 3. 숫자 뒤집기

숫자를 뒤집어야 한다.

**100000**이 넘어가면 **0**을 리턴한다.

뒤집은 숫자가 예를 들어 **005**라면 앞 자리의 **0**은 제거한 **5**를 리턴한다.

문제 설명에는 없지만 문제의 예시에 **-383000**도 **0**으로 리턴하는 것을 보니 **-100000**보다 작아도 **0**을 리턴하는 것으로 하자.

------

**-100000** 이상 **100000** 이하의 범위를 벗어나는 `num` 은 **0**을 리턴한다.

범위 내의 `num` 은 음수인 경우와 양수인 경우를 나누어 리턴한다.

`reverseNumber()` 는 문자열로 변환, 배열로 변환, 배열 리버스, 다시 합치기 과정을 거친다.

```js
const reverseNumber = (num) => {
    return num.toString().split("").reverse().join("");
};

const solution = (num) => {
    if (num > 100000 || num < -100000) {
        return 0;
    } else {
        if (num < 0) {
            return -reverseNumber(-num);
        } else {
            return +reverseNumber(num);
        }
    }
};
```

<br>