## Find Min Value in Sequence

수열이 주어질 때, 이 수열의 있는 수 중 최소 값의 위치를 모두 출력하는 프로그램을 작성하자.

입력은 자연수로 된 배열을 받고, 시작 위치는 0으로 계산하여 최소 값의 위치를 배열로 반환한다.

### example

```markdown
**TC1**
Input: [5, 2, 10, 2]
Output: [1, 3]
**TC2**
Input: [4, 5, 7, 4, 8]
Output: [0, 3]
**TC3**
Input: [12, 11, 11, 16, 11, 12]
Output: [1, 2, 4]
```

### solution

```js
/* solution */
const findMinValueIndex = (nums) => {
    // 배열에서 최소값 찾기
    const min = Math.min(...nums);
    // 최소값과 같은 값의 인덱스만 추가한 배열을 반환
    return nums.reduce((res, num, idx) => {
        if (min === num) {
            return [...res, idx];
        } else {
            return res;
        }
    }, []);
};
```



## Chess Set

오래된 창고에서 체스 판과 기물을 발견했다.

불행히도 기물 별 개수가 부족하거나 많아, 완전한 한 세트를 이루고 있지 못하고 있어 보인다.

게임을 하기 위해 부족하거나 많은 기물의 개수를 계산하여 반환하는 프로그램을 제작하자.

기물의 개수는 배열 형태로 아래와 같이 `King` 부터 `Pawn` 순으로 들어오며 한 게임을 하기 위해 필요한 기물의 개수는 아래와 같다.

**King(1), Queen(1), Rook(2), Bishop(2), Knight(2), Pawn(8)**

### example

```markdown
**TC1**
Input: [0, 1, 2, 2, 2, 7]
Output: [1, 0, 0, 0, 0, 1]
**TC2**
Input: [2, 1, 2, 1, 2, 1]
Output: [-1, 0, 0, 1, 0, 7]
**TC3**
Input: [0, 1, 1, 5, 3, 6]
Output: [1, 0, 1, -3, -1, 2]
```

### solution

```js
const matchChessSet = (chess) => {
    // 체스 기물 개수
    const chessSet = [1, 1, 2, 2, 2, 8];
    // 필요한 기물 리턴
    return chess.map((piece, idx) => chessSet[idx] - piece);
};
```



## Max Sum of Two Numbers

수열이 주어질 때, 이 중 두 개의 수를 선택하여 최대 합이 나올 수 있도록 프로그램을 제작하자.

입력은 정수로 된 배열을 받고, 최대 합이 나올 수 있는 두 수를 배열 형태로 반환한다.

배열로 입력되는 정수는 10~20개 사이이며, 정수의 범위는 -20~20 사이의 값이 입력된다.

### example

```markdown
**TC1**
Input: [-11, 5, 18, -2, -3, 6, 4, 17, 10, 9]
Output: [18, 17]
**TC**
Input: [3, 7, -14, 2, -6, 13, -20, -2, -7, 6, -17, 5, 14, -9, 19]
Output: [19, 14]
**TC**
Input: [-15, -4, -8, 12, 12, -8, -8, 9, 10, 15, -2, 10, -14, 2, 13, 19, -9, 3, -18, 14]
Output: [19, 15]
```

### solution

```js
const findTwoMaxNum = (sequence) => {
    // 내림차순 정렬 후 맨 앞의 두 수만 리턴
    return sequence.sort((a, b) => b - a).slice(0, 2);
};
```



## Seven Dwarfs

일터에 나갔던 난쟁이 9명이 와서는 모두 자기가 일곱 난쟁이 중 하나라고 우기고 있다.

모든 난쟁이의 가슴에는 숫자가 표시된 배지가 있는데, 다행히도 일곱 난쟁이의 배지에 표시된 숫자의 합이 100이라는 단서로 일곱 난쟁이를 분별할 수 있다.

일곱 난쟁이를 분별하는 프로그램을 작성하자.

배지 값은 100이하 자연수로 들어오며, 일곱 난쟁이의 배지 값을 기존 순서대로 배열에 넣어 반환한다.

### example

```markdown
**TC1**
Input: [1, 5, 6, 7, 10, 12, 19, 29, 33]
Output: [1, 5, 6, 7, 19, 29, 33]
**TC2**
Input: [25, 23, 11, 2, 18, 3, 28, 6, 37]
Output: [23, 11, 2, 18, 3, 6, 37]
**TC3**
Input: [3, 37, 5, 36, 6, 22, 19, 2, 28]
Output: [3, 37, 5, 6, 19, 2, 28]
```

### solution 1

js/combination.js

```js
export const combination = (arr, r) => {
    const result = [];
    
    if (r === 1) {
        return arr.map((v) => [v]);
    }
    
    for (let i = 0; i < arr.length; i++) {
        const rest = arr.slice(i + 1);
        result.push(...combination(rest, r - 1).map((el) => [arr[i], ...el]));
    }
    
    return result;
};
```

js/array_practice/seven_dwarfs.js

```js
import { combination } from "../combination.js";

const findSevenDwarfs = (dwarfs) => {
    return combination(dwarfs, 7).filter((combDwf) => {
        return combDwf.reduce((sum, dwf) => (sum += dwf), 0) === 100;
    });
};
```

저번에 구현한 조합을 활용해서 일곱 난쟁이 조합을 구하고 그 중 합이 100인 난쟁이 조합만 리턴해주는 형식이다.

### solution 2

```js
const findSevenDwarfs = (dwarfs) => {
    const fakeDwarfsSum = dwarfs.reduce((sum, dwf) => (sum += dwf), 0) - 100;

    for (let i = 0; i < dwarfs.length; i++) {
        for (let j = i + 1; j < dwarfs.length; j++) {
            if (dwarfs[i] + dwarfs[j] === fakeDwarfsSum) {
                return dwarfs.filter((_, idx) => idx !== i && idx !== j);
            }
        }
    }
};
```

가짜 난쟁이 두 놈의 합을 찾고 이중 반복문에서 가짜 난쟁이 두 놈을 찾는다.

찾음과 동시에 나머지 일곱 난쟁이를 리턴하여 함수를 종료한다.

`solution 1` 보다 데이터가 작아서 미세하게 빨랐다. 만약 큰 데이터라면 차이가 심할 듯 하다.

### solution 3

```js
const findSevenDwarfs = (dwarfs) => {
    const fakeDwarfsSum = dwarfs.reduce((sum, dwf) => (sum += dwf), 0) - 100;

    const fakeDwarfsIndex = {};
    for (let i = 0; i < dwarfs.length; i++) {
        const fakeDwarf = fakeDwarfsIndex[fakeDwarfsSum - dwarfs[i]];
        if (fakeDwarf !== undefined) {
            return dwarfs.filter((_, idx) => idx !== fakeDwarf && idx !== i);
        }
        fakeDwarfsIndex[dwarfs[i]] = i;
    }
};
```

`Two Sum` 문제를 통해 알게 된 방법이다.



## Draw Tree

조카가 나무 그리기를 어려워 하고 있다. 어린 조카를 위해 나무를 그려주는 프로그램을 만들어주자.

자연수를 높이로 입력 받고 대칭형 형태로 나무를 만들어 반환한다.

각 행 별로 개행 문자를 넣어주면서 `*` 을 찍어 나무를 그려준다.

### example

```markdown
**TC1**
Input: 3
Output: 
  .
 ...
.....

**TC2**
Input: 5
Output: 
    .
   ...
  .....
 .......
.........

**TC3**
Input: 7
Output:  
      .
     ...
    .....
   .......
  .........
 ...........
.............
```

### solution

```js
const makeTree = (floor) => {
    let tree = "";
    for (let i = 0; i < floor; i++) {
        // 현재 층수(i)와 총 층수(floor)의 차이에서 1을 뺀 만큼의 공백이 필요
        for (let j = 0; j < floor - i - 1; j++) {
            tree += " ";
        }
        // 현재 층수(i) x 2 + 1 만큼의 * 이 필요
        for (let j = 0; j < i * 2 + 1; j++) {
            tree += "*";
        }
        // 층 마다 개행
        tree += "\n";
    }
    console.log(tree);
};
```



## Two Sum

배열과 정수 값이 주어질 때, 배열 내 두 값을 합하여 정수 값을 만들 수 있도록 두 개의 index를 반환하는 함수를 작성하자.

각 입력에 정확히 하나의 솔루션이 있다고 가정하고, 동일한 요소를 두 번 사용하지 않는다.

배열의 index는 오름차순으로 정렬하여 반환한다.

### example

```markdown
**TC**
Input: [2, 7, 11, 15], 9
Output: [0, 1]
**TC**
Input: [3, 2, 4], 6
Output: [1, 2]
**TC**
Input: [3, 3], 6
Output: [0, 1]
```

### solution 1

난쟁이 문제와 같다.

```js
const twoSum = (array, num) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] === num) {
                return [i, j];
            }
        }
    }
    return [];
};
```

### solution 2

```js
const twoSum = (array, num) => {
    const map = {};
    for (let i = 0; i < array.length; i++) {
        if (map[num - array[i]] !== undefined) {
            return [map[num - array[i]], i];
        }
        map[array[i]] = i;
    }
    return [];
};
```

`solution 1` 에 비해 반복문을 하나 덜 사용해 빠르다.



## OX Quiz

네카라쿠배 대학교에서 OX퀴즈 쇼를 진행한다. 

정답을 맞췄을 경우 문제당 1점을 부여하며, 연속적으로 맞출 경우 연속한 정답 개수 만큼의 가산점을 부여해준다.

진행자를 위해 채점표를 보고 점수를 산출해주는 프로그램을 제작하자.

배열 형태의 채점 값이 1(정답), 0(오답)으로 입력되며, 점수의 합계를 반환한다.

### example

```markdown
**TC1**
Input: [1, 0, 1, 1, 1, 0, 1, 1, 0, 0]
Output: 10
**TC2**
Input: [1, 1, 0, 1, 1, 0, 1, 1, 1, 1]
Output: 16
**TC3**
Input: [1, 1, 1, 1, 1, 0, 0, 1, 1, 0]
Output: 18
```

### solution

```js
const getScore = (table) => {
    let serial = 0;
    return table.reduce((sum, isCorrect) => {
        if (isCorrect) {
            return sum + ++serial;
        } else {
            serial = 0;
            return sum;
        }
    }, 0);
};
```



## Move Brick

새로 온 알바생이 벽돌의 높이를 맞추지 않고 벽을 쌓아 놓았다.

관리자를 위해 몇 개의 벽돌을 옮겨야 벽돌의 높이가 같아질 수 있을지 구해주는 프로그램을 제작하자.

입력은 배열 형태의 정수이며, 같은 높이를 맞추기 위해 옮겨야 하는 벽돌의 개수를 반환한다.

단, 입력으로 들어오는 배열은 남는 벽돌 없이 높이가 딱 나눠떨어지도록 들어온다.

### example

```markdown
**TC1**
Input: [5, 2, 4, 1, 7, 5]
Output: 5
**TC2**
Input: [12, 8, 10, 11, 9, 5, 8]
Output: 6
**TC3**
Input: [27, 14, 19, 11, 26, 25, 23, 15]
Output: 21
```

### solution

```js
const moveBrick = (bricks) => {
    // 블록을 쌓아야 하는 평균 개수
    const avg = bricks.reduce((sum, br) => (sum += br), 0) / bricks.length;
    // 블록들 중 평균보다 큰 블록과의 차이를 합한 값 리턴
    return bricks.reduce((res, br) => {
        const diff = br - avg;
        return diff > 0 ? (res += diff) : res;
    }, 0);
};
```



## Number Frequency

두 자연수 M, N을 입력 받아, M부터 N까지 각 자리수의 빈도수를 합하는 프로그램을 제작하자.

예를 들어 129와 137이 주어졌을 때, 129, 130, 131, 132, 133, 134, 135, 136, 137 숫자가 나오고 이 숫자들의 자릿수 별 숫자 빈도수를 계산하여, 0부터 9까지의 빈도수 값을 반환한다.

입력 값은 M, N은 10,000 이하의 자연수이며, 0부터 9까지의 자릿수 별 빈도수를 배열 형태로 반환한다.

### example

```markdown
**TC1**
Input: 129 137
Output: [1, 10, 2, 9, 1, 1, 1, 1, 0, 1]
**TC2**
Input: 1412 1918
Output: [100, 614, 101, 101, 189, 201, 201, 201, 201, 119]
**TC3**
Input: 4159 9182
Output: [1503, 1527, 1503, 1502, 2343, 2503, 2512, 2512, 2505, 1686]
```

### solution

```js
const numFreq = (M, N) => {
    const result = new Array(10).fill(0);
    for (let i = M; i <= N; i++) {
        i.toString()
            .split("")
            .forEach((num) => result[num]++);
    }
    return result;
};
```
