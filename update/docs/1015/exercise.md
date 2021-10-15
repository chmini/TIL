# Test Problem

징검다리를 건너려고 한다. 징검다리는 한 번에 1칸 혹은 2칸을 건널 수 있다.

징검다리의 발판 수 n이 주어질 때, 징검다리를 건너는 모든 방법의 수를 구하는 함수, solution을 완성하자.



## How to solve

보자마자 DP문제라고 생각했다.

n을 1단위로 나누고 1칸 건널 때의 경우의 수와 2칸 건널 때의 경우의 수를 합치면 된다.

|      | 1     | 2        | 3                  | 4                                  | 5                                                            |
| ---- | ----- | -------- | ------------------ | ---------------------------------- | ------------------------------------------------------------ |
| 1    | 1 [1] | 1 [1, 1] | 2 [1, 1, 1] [1, 2] | 3 [1, 1, 1, 1] [1, 1, 2] [1, 2, 1] | 5 [1, 1, 1, 1, 1] [1, 1, 1, 2] [1, 1, 2, 1] [1, 2, 1, 1] [1, 2, 2] |
| 2    | 0     | 1 [2]    | 1 [2, 1]           | 2 [2, 1, 1] [2, 2]                 | 3 [2, 1, 1, 1] [2, 1, 2] [2, 2, 1]                           |

자세히 보면 경우의 수가 피보나치 수열과 같다는 것을 알 수 있다.



## Code

```js
const solution = (n) => {
    const dp = [0, 1];
    for (let i = 2; i <= n + 1; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n + 1];
};
```



# Menu Renewal

프로그래머스 ["메뉴 리뉴얼" 문제 링크](https://programmers.co.kr/learn/courses/30/lessons/72411)

차근차근 풀어보면 어려운 문제는 아니다.

```js
const combination = (arr, r) => {
    const result = []

    if (r === 1) {
        return arr.map((v) => [v])
    }

    for (let i = 0; i < arr.length; i++) {
        const rest = arr.slice(i + 1)
        result.push(...combination(rest, r - 1).map((el) => [arr[i], ...el]))
    }

    return result
}

const solution = (orders, course) => {
    let answer = []
    // 정렬
    const sort_orders = []
    for (let i = 0; i < orders.length; i++) {
        sort_orders.push(orders[i].split("").sort())
    }
	
    for (let j = 0; j < course.length; j++) {
        const db = {}
        for (let i = 0; i < sort_orders.length; i++) {
            // 주문에서 조합으로 뽑아낸 코스요리를 db에 저장
            combination(sort_orders[i], course[j])
                .map((x) => x.join(""))
                .forEach((x) => {
                    if (db[x]) db[x]++
                    else db[x] = 1
                })
        }
	
        if (Object.keys(db).length !== 0) {
            const max = Math.max(...Object.values(db))
            if (max > 1) {
                const result = Object.keys(db).reduce((r, e) => db[e] === max ? [...r, e] : r, [])
                answer = [...answer, ...result]
            }
        }
    }
    
    return answer.sort()
}
```

오늘은 복습 위주라 새로운 문제는 많이 못 풀었는데 집중도가 떨어진 느낌도 나는 것 같고 그렇다. 다시 집중해보자!

