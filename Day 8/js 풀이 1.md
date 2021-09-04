### 연습문제 2개/6개 풀이

[자세한 문제 설명](https://classroom.google.com/c/Mzc3NTY5NzIwODUy/m/Mzg4MTU0NTA3MDA4/details)
[실습](https://replit.com/@chmini/practice)

#### 1. 선생님의 실수

**제한사항**

- 학생은 최대 100명이다.
- 리턴 배열의 길이가 매개변수 배열의 길이를 넘을 수 없다.

|         매개변수          | return type |
| :-----------------------: | :---------: |
| nums [ type : **array** ] |    array    |

**입출력 예시**

|           nums           | return |
| :----------------------: | :----: |
| [1, 2, 3, 4, 5, 6, 6, 6] | [7, 8] |
|      [1, 2, 3, 90]       |  [4]   |

<br>

**풀이 전 생각**

출석번호는 학생이 `n` 명일 때 `1` 번부터 `n` 번까지 이다.

제대로 출석번호를 불렀다면 `nums` 는 `[1,2,...,n]` 의 형태를 가질 것이다.

<br>

**참고**

`reduce` 함수는 네 가지 인수를 받는다.

- **`accmulator`** 

  - 콜백마다 리턴값을 누적한다.

  - 초기값을 설정할 수 있다.

- **`currentValue`** 
  - 현재 요소를 나타낸다.
- `currentIndex` `Optional`
  - 현재 인덱스를 나타낸다.
- `array` `Optional`
  - 호출한 배열

<br>

**내가 푼 풀이**

`accmulator` 의 초기값을 빈 배열로 설정한다.

배열을 순회할 때마다 빈 배열에 **잘못 부른 학생**의 **원래 출석번호**를 누적시킨다.

원래 출석번호는 `currentIndex` 에 `1` 을 더한 값과 같다.

이 값과 부른 출석번호가 다르다면 `currentIndex + 1` 을 `accmulator` 에 누적시키는 형태이다.

같다면 변화없이 누적한다.

끝까지 순회하면 배열의 형태로 정답이 도출된다.

<br>

리듀서 함수 `reduce` 를 사용하지 않고 `for` 문을 사용하여 풀어도 전혀 상관이 없다.

```javascript
const solution = (nums) => {
    return nums.reduce((res, num, idx) => {
        if (num !== idx+1) {
            return [...res, idx+1]
        } else {
            return res
        }
    }, [])
}
```

<br>

#### 2. 아재 개그

**제한사항**

- 낱말 퍼즐은 `4x4` 형태의 칸으로 구성되어 있다.
- 모든 낱말은 중복되지 않는다.
- 낱말은 한줄로 붙어 있다.
  - 위 아래 가능
  - 좌우 가능
  - 대각선 불가능

|   매개변수   | return type |
| :----------: | :---------: |
| puzzle, word |   boolean   |

**입출력 예시**

|                            puzzle                            |   word   | return |
| :----------------------------------------------------------: | :------: | :----: |
| [ [ '가', '나', '콜', '사' ], [ '라', '기', '로', '세' ], [ '미', '모', '리', '움' ], [ '상', '지', '곤', '타' ] ] |  참기름  | false  |
| [ [ '헬', '나', '삵', '사' ], [ '로', '키', '랑', '세' ], [ '숭', '티', '리', '움' ], [ '니', '농', '카', '타' ] ] | 헬로키티 |  true  |

<br>

**풀이 전 생각**

주어지는 `word` 를 `puzzle` 에서 찾아내면 된다.

첫 번째 예시는 `참` 이 존재하지 않으므로 `false` 를 리턴한다.

두 번째 예시는 `헬` 이 `[0][0]` , `로` 가 `[1][0]` , `키` 가 `[1][2]` , `티` 가 `[2][1]` 에 있다.

글자들이 한 칸씩 연결되어 있어서 `true` 를 리턴한다.

사실 이 문제는 퍼즐이 `4x4` 로 너무 작다.

그래서 완전 탐색으로 하나씩 찾아도 오래 걸리지 않고 답을 찾아낼 수 있다.

하지만 내가 풀어볼 방식은 첫 글자는 퍼즐을 처음부터 찾아서 발견하면 멈추고 위치를 기억한다.

그 위치에서 상하좌우로 한 칸씩 `4` 개 중에 다음 글자를 찾는다.

그러다가 다 찾으면 `true` 리턴하고 찾다가 발견하지 못하면 `false` 를 리턴할 것이다.

<br>

**내가 푼 풀이**

생각보다 오래 걸렸다.

방문한 노드를 갱신하는 것에서 코드 블럭의 외부와 내부를 신경쓰지 않아서 그거 찾느라 좀 걸렸다.

가장 중요한 파트였는데 여기서 시간이 끌렸다. 다음부터는 **주의**하자.

<br>

코드의 진행방식은 이러하다.

`word` 의 한 글자씩을 `puzzle` 에서 찾는다.

처음은 어디에 있는지 모르니까 `findAll` 이라는 함수로 완전탐색을 했다.

탐색하다가 찾으면 좌표를 리턴하여 `letNode` 를 갱신하고 

끝까지 탐색을 해도 찾지 못하면 `false` 를 리턴하여 끝낸다.

찾은 좌표 `letNode` 를 기준으로 상하좌우로 한 칸을 `arroundNode` 에 저장한다.

퍼즐은 `4x4` 이기 때문에 유효하지 않은 값이 존재할 수 있다.

`isValid` 함수로 유효한 좌표값만 걸러낸다.

걸러낸 좌표값 `arroundNode` 과 `word` 의 현재 글자를 비교해서 찾으면 `letNode` 갱신하고

못찾으면 `false` 리턴하여 끝낸다.

그렇게 `word` 를 끝까지 순회해서 다 찾으면 최종적으로 `true` 를 리턴하여 마무리하는 형식이다.

<br>

여기에서 핵심은 내가 시간이 걸렸던 방문한 노드를 갱신하는 부분인 것 같다.

이런 유형의 문제를 코테 때 보면 유의하며 풀자.

```javascript
const findAll = (puzzle, letter) => {
    for (let i = 0; i < puzzle.length; i++) {
        for (let j = 0; j < puzzle.length; j++) {
            if (letter === puzzle[i][j]) {
                return [i, j]
            }
        }
    }
    return false
}

const findAround = (puzzle, aroundNode, letter) => {
    for (let i = 0; i < aroundNode.length; i++) {
        const x = aroundNode[i][0]
        const y = aroundNode[i][1]
        const aroundLetter = puzzle[x][y]
        if (letter === aroundLetter) {
            return [x, y]
        }
    }
    return false
}

const isValid = (node) => {
    if (node[0] < 0 || node[0] > 3 || node[1] < 0 || node[1] > 3) {
        return false
    } else {
        return true
    }
}

const solution = (puzzle, word) => {
    let letNode = []
    for (let i = 0; i < word.length; i++) {
        if (i === 0) {
            letNode = findAll(puzzle, word[i])
        } else {
            let aroundNode = [
                [letNode[0] - 1, letNode[1]], 
                [letNode[0], letNode[1] - 1],
                [letNode[0] + 1, letNode[1]],
                [letNode[0], letNode[1] + 1]
            ]
            aroundNode = aroundNode.filter(node => isValid(node))
            letNode = findAround(puzzle, aroundNode, word[i])
        }
        if (!letNode) {         
            return false
        }
    }
    return true
}
```
