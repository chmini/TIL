해시 테이블을 이용하는 문제는 알아두는 것이 좋다고 하여 프로그래머스에서 `level2` 와 `level3` 각각 하나씩 풀어보려 한다.

## Camouflage

스파이들은 매일 다른 옷을 조합하여 입어 자신을 위장한다.

스파이가 가진 의상들이 담긴 2차원 배열이 주어질 때 서로 다른 옷의 조합의 수를 리턴하도록 하는 함수를 작성하자.

### example

```markdown
[의상의 이름, 의상의 종류]

TC1
Input: [
	["yellohat", "headgear"],
	["bluesunglasses", "eyewear"],
	["green_turban", "headgear"]
]
Output: 5

TC2
Input: [
	["crowmask", "face"],
	["bluesunglasses", "face"],
	["smoky_makeup", "face"]
]
Output: 3
```

### solution

```js
const solution = (clothes) => {
    // { 의상의 종류: 의상의 개수 } map 생성
    const clothesMap = clothes.reduce((map, cloth) => {
        if (map[cloth[1]]) {
            map[cloth[1]]++
        } else {
            map[cloth[1]] = 1
        }
        return map
    }, {})
    // 조합 결과는 ((의상의 개수) + 1(안 입는 경우의 수)) 를 곱하면서 누적시키고 아무 것도 안 입는 경우의 수 1을 빼주면 된다.
    let result = 1;
    for (let cnt of Object.values(clothesMap)) {
        result *= (cnt + 1)
    }
    return --result
}
```



## Best Album

스트리밍 사이트에서 장르 별로 가장 많이 재생된 노래를 두 개씩 모아 베스트 앨범을 출시하려 한다.

노래는 고유 번호로 구분하며, 노래를 수록하는 기준은 다음과 같다.

1. 속한 노래가 많이 재생된 장르를 먼저 수록한다.
2. 장르 내에서 많이 재생된 노래를 먼저 수록한다.
3. 장르 내에서 재생 횟수가 같은 노래 중에서는 고유 번호가 낮은 노래를 먼저 수록한다.

노래의 장르를 나타내는 문자열 배열 `genres` 와 노래별 재생 횟수를 나타내는 정수 배열 `plays` 가 주어질 때 베스트 앨범에 들어갈 노래의 고유 번호를 순서대로 리턴하도록 함수를 완성하자.

노래의 고유 번호는 각 배열의 인덱스 값을 의미한다.

### example

```js
TC1
Input: [ "classic", "pop", "classic", "classic", "pop" ] [500, 600, 150, 800, 2500]
Output: [4, 1, 3, 0]
```

### solution

```js
const solution = (genres, plays) => {
    // 억지로 reduce를 이용한 map을 만들려고 했지만 단순 for문을 이용해서 만들어도 된다.
    const len = genres.length;
    const songMap = Array.from({length: len}).reduce((map, _, uNum) => {
        // 장르의 존재 유무에 따라 {[고유번호], 총 재생횟수} 형태로 저장한다.
        if (map[genres[uNum]]) {
            map[genres[uNum]].uNums.push(uNum);
            map[genres[uNum]].total += plays[uNum];
        } else {
            map[genres[uNum]] = {uNums: [uNum], total: plays[uNum]}
        }
        return map;
    }, {})
    // songMap의 형태는 {장르: {[고유번호], 총 재생횟수}} 이므로 필요없는 key값을 버리고 value값만 배열 형태로 바꿔준다.
    const album = Object.values(songMap)
    // 수록 기준 1번 : 장르별 재생횟수(총 재생횟수)를 기준으로 내림차순 정렬한다.
    album.sort((a, b) => b.total - a.total)
    // 수록 기준 2번 : 장르 내에서 재생횟수를 높은 기준으로 정렬하고 최대 2개만 남기기 위해 자른다.
    // 3번은 애초에 고유 번호가 낮은 순으로 정렬되어 있었기 때문에 2번 과정의 sort 메서드로 인해 자동 성립된다. 
    // 마지막으로 2차원 배열을 1차원 배열로 바꿔서 리턴하면 정답이다.
    return album.map((el) => el.uNums.sort((a, b) => plays[b] - plays[a]).slice(0, 2)).flat()
}
```