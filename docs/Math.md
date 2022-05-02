# Math



## algorithm complexity

알고리즘의 성능 평가 지표로는 정확성, 작업량, 메모리 사용량, 최적성, 효율성 측면을 볼 수 있다.

코딩 테스트나 문제에서는 메모리와 효율성에서 시간 복잡도 측면을 주로 다룬다.

대부분의 문제는 메모리를 넉넉하게 주기 때문에 사실 상 시간 복잡도에 대해 신경을 쓰면 된다.

### Time complexity

시간 복잡도는 알고리즘의 수행시간을 평가하는 방법이다.

빅오, 세타, 오메가 라는 세 가지 점근적 표현법이 있다.

- 빅오는 최악의 상황을 고려한 성능 측정 결과를 말한다.
- 세타는 평균적인 경우에서의 결과를 말한다.
- 오메가는 최선의 상황일 때의 성능 측정 결과를 말한다.

대부분의 문제에서는 빅오를 다룬다.

빅오를 판단하는 예제를 하나보면

``` js
function big_o(arr, n) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += arr[i];       
    }
    return sum;
}
```

함수가 호출될 때 수행 되는 횟수가 `sum` 초기화 `1` 번, 반복문은 0에서 n-1까지이므로 `n` 번, 마지막 리턴 `1` 번 총 `n+2` 회 작동한다.

빅오로 표기할 때에는 가장 큰 항만 표기하기 때문에 `O(n)` 이라고 표현한다.



## permutation

순열은 서로 다른 n개의 원소 중에서 원하는 개수 r만큼 중복 없이 골라 순서에 상관 있게 나열하는 경우의 수를 말한다.

만약 서로 다른 원소 4개가 있고 그 중 2개를 뽑아 순열을 만들려고 한다.

이때 처음에 뽑는 경우의 수 4이고 다음에 뽑을 때는 중복되지 않아야 하므로 3이다.

이들은 동시에 일어나는 경우이므로 곱의 법칙이 적용되어 4x3하여 총 12가지의 순열이 나타난다.

뭐 대충 이러한 로직을 가지고 있다.

강의에서 본 재귀로 푼 예제는 순열은 맞지만 모든 경우에 대응되지 않는 팩토리얼에 대한 예제인 것 같다.

순열을 코드로 구현해보면 이러하다.

```js
const els = [1, 2, 3, 4];

const permutation = (arr, r) => {
    // 결과 값 저장소
    const result = [];
    // 뽑아야 하는 수가 하나 남았을 때
    if (r === 1) {
        return arr.map((el) => [el]);
    }

    for (let i = 0; i < arr.length; i++) {
        // i번째를 뽑고 남은 수들
        const rest = [...arr.slice(0, i), ...arr.slice(i + 1)];
        // 마지막으로 뽑은 수들과 뽑은 수를 병합하여 결과 값에 누적
        result.push(...permutation(rest, r - 1).map((el) => [arr[i], ...el]));
    }
    // 결과 값 리턴
    return result;
};

const pResult = permutation(els, 2);
console.log(pResult);
/*
[
  [ 1, 2 ], [ 1, 3 ],
  [ 1, 4 ], [ 2, 1 ],
  [ 2, 3 ], [ 2, 4 ],
  [ 3, 1 ], [ 3, 2 ],
  [ 3, 4 ], [ 4, 1 ],
  [ 4, 2 ], [ 4, 3 ]
]
*/
```

위 구조를 하나씩 살펴보자.

`r = 2`

`i = 0` `arr[0] = 1` `rest = [2, 3, 4]` : 처음 1을 뽑은 상태에서 나머지 [2, 3, 4] 중 다시 뽑기 위해 재귀하고 이 상태는 일시정지

​	재귀로 들어와서 `r = 1`

​	`return [ [2], [3], [4] ] `

리턴되어 재귀는 종료 다시 아까 상태로 돌아와서

`result` 에 뽑은 값 `arr[0] = 1` 과 리턴받은 값 `[ [2], [3], [4] ]` 를 합쳐 `[ [1, 2], [1, 3], [1, 4] ]` 를 누적한다.

이 과정이 루프 한번을 의미한다.

루프를 다 돌면 2 뽑고 재귀한 결과, 3 뽑고 재귀한 결과, 4 뽑고 재귀한 결과가 `result` 에 누적되어 마지막에 `return result` 를 해주면

결과 값이 나오는 구조이다.

2개를 뽑는 예제라 재귀가 1번이지만 3개를 뽑을 때는 재귀가 2번일 것이다.



## combination

조합은 순열처럼 뽑는 과정은 같지만 순서에 상관없이 뽑는 것이 다른 점이다.

만약 서로 다른 원소 n개가 있고 그 중 r개를 뽑아 조합을 만들려고 한다.

순열과 똑같이 뽑을 수 있다. 하지만 순서가 상관이 없기 때문에 [1, 2]와 [2, 1]을 같은 경우로 취급한다.

이러한 경우가 한 가지 당 중복 발생 수가 r! 만큼 발생한다. 

그래서 순열 경우의 수 nPr 에서 r! 만큼 나누어주면 조합 경우의 수가 나온다.

조합을 코드로 구현해 보면 이러하다.

```js
const els = [1, 2, 3, 4, 5];
function combination(arr, data, s, idx, r) {
    if (s == r) {
        console.log(data);
        return;
    }
    for (let i = idx; arr.length - i >= r - s; i++) {
        data[s] = arr[i];
        combination(arr, data, s + 1, i + 1, r);
    }
}
combination(els, [], 0, 0, 3);
```

이 코드는 조합 자체만 구현하기 위한 코드인 느낌이 든다.

조합의 결과 값들을 만약 다른 함수에 전달해야 한다면 전역변수를 사용해야 하기 때문에 이런 경우에는 부적합하다는 생각이다.

```js
const els = [1, 2, 3, 4];

const combination = (arr, r) => {
    // 결과 값 저장소
    const result = [];
    // 뽑아야하는 개수가 하나 남았을 때 리턴
    if (r === 1) {
        return arr.map((v) => [v]);
    }

    for (let i = 0; i < arr.length; i++) {
        // 뽑고 남은 요소들
        const rest = arr.slice(i + 1);
        // 마지막으로 뽑은 수들과 뽑은 수를 병합하여 결과 값에 누적
        result.push(...combination(rest, r - 1).map((el) => [arr[i], ...el]));
    }
    // 결과 값 리턴
    return result;
};

console.log(combination(els, 2));
/*
[ 
	[ 1, 2 ], [ 1, 3 ], 
	[ 1, 4 ], [ 2, 3 ], 
	[ 2, 4 ], [ 3, 4 ] 
]
*/
```

순열과 구조가 아주 유사하다.

딱 하나가 다른데 순열은 순서가 중요하기 때문에 뽑은 수를 제외한 나머지들 모두 경우의 수로 포함시켰다.

하지만 조합은 순서가 상관없어 뽑았던 경우는 제외하기 때문에 뽑은 수의 뒷 파트에서만 다시 뽑으면 된다.

순열과 조합의 코드가 한 줄이 다르기 때문에 겹치는 코드들을 합칠 수도 있을 것 같다.



## recurrence relation

점화식은 수열에서 이웃하는 두 개의 항 사이에 성립하는 관계를 식으로 나타낸 것이다.

### arithmetic sequence

등차수열은 연속하는 두 항 사이에 공통적으로 차가 존재한다. 

이를 공차(d)라고 부르고 만약 n번째의 항을 알고 싶다면 n-1번째 항에 공차(d)만큼을 더해주면 된다.

식으로는 a<sub>n</sub> = a<sub>n-1</sub> + d 처럼 나타낼 수 있고 변형하여 a<sub>n</sub> = a<sub>1</sub> + (n-1)d 로 나타낼 수 있다.

즉 n번째 항은 첫 번째 항과 공차(d)만 알면 어떤 항이라도 알 수가 있다.

첫 번째 항과 공차(d)와 N이 주어질 때 생기는 N번째 까지의 등차수열과 N번째 항을 구하는 함수를 코드로 구현해보자.

```js
const arithmetic = (a1, d, n) => {
    const result = [];
    let ai = a1;
    for (let i = 0; i < n; i++) {
        result.push(ai);
        ai = ai + d;
    }
    return { seq: result, n: ai - d };
};

const arith = arithmetic(1, 3, 7);
console.log(arith.seq, arith.n);
/*
[1, 4, 7, 10, 13, 16, 19] 19
*/
```

### geometric sequence

등비수열은 첫 번째 항과 일정한 비를 가지는 수열을 말한다.

이를 공비(r)라고 부르고 만약 n번째 항을 알고 싶다면 n+1번째 항에서 공비(r)만큼을 나누면 된다.

식으로는 a<sub>n</sub>r = a<sub>n+1</sub> 로 나타낼 수 있고 일반항은 a<sub>n</sub> = ar<sup>n-1</sup> 이다.

첫 번째 항과 공비(r)와 N이 주어질 때 N번째 항을 구하는 함수를 코드로 구현할 것이다.

```js
const geometric = (a1, r, n) => {
    if (n == 1) {
        return a1;
    }
    return geometric(a1, r, n - 1) * r;
};

const geom = geometric(1, 2, 6);
console.log(geom); // 32
```

### fibonacci

피보나치 수열은 1번째와 2번째 항은 1이고 그 후의 모든 항은 바로 앞 두 항의 합으로 이루어진 수열이다.

식으로 나타내면 F<sub>n</sub> = F<sub>n-1</sub> + F<sub>n-2</sub> 으로 나타낼 수 있다.

피보나치 수열에서 N번째 항을 구하는 함수를 코드로 보자.

```js
const fibonacci = (n) => {
    if (n == 1 || n == 0) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
};

console.log(fibonacci(7));
```
