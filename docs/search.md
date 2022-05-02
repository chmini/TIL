# Binary Search

이진 검색은 정렬되어 있는 자료를 검색할 때 사용하는 검색 방법으로 검색 범위를 반으로 줄여나가는 형식의 분할 정복 기법을 이용한 방법이다.

조금 더 설명하면 정렬된 배열이 주어지고 원하는 숫자값을 찾고 싶을 때 배열의 크기의 중간 값을 계속해서 찾는 것이다.

중간 값이 만약 찾아야 하는 값보다 작으면 중간 보다 왼쪽 범위에서 또 찾고 크면 오른쪽 범위에서 찾아나가는 방식이다.

코드로 구현할 때는 반복문과 재귀를 사용하여 구현이 가능하다.

```js
const binarySearch = (array, value) => {
    let lowIndex = 0;
    let midIndex;
    let highIndex = array.length - 1;

    while (lowIndex <= highIndex) {
        midIndex = Math.floor((lowIndex + highIndex) / 2);
        if (array[midIndex] > value) {
            highIndex = midIndex - 1;
        } else if (array[midIndex] < value) {
            lowIndex = midIndex + 1;
        } else {
            return midIndex;
        }
    }
    return -1;
};

export default binarySearch;
```

