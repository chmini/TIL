# Open Chat

["오픈채팅방" 문제 링크](https://programmers.co.kr/learn/courses/30/lessons/42888?language=javascript)

카카오톡 오픈 채팅방을 개설한 사람을 위해, 다양한 사람들이 들어오고, 나가는 것을 지켜볼 수 있는 관리자창을 만들기로 했다. 

채팅방에 누군가 들어오면 다음 메시지가 출력된다.

"[닉네임]님이 들어왔습니다."

채팅방에 누군가 나가면 다음 메시지가 출력된다.

"[닉네임]님이 나갔습니다."

채팅방에서 닉네임을 변경하는 방법은 다음과 같이 두 가지이다.

- 채팅방을 나간 후, 새로운 닉네임으로 다시 들어간다.
- 채팅방에서 닉네임을 변경한다.

닉네임을 변경할 때는 기존에 채팅방에 출력되어 있던 메시지의 닉네임도 전부 변경된다.

채팅방에 들어오고 나가거나, 닉네임을 변경한 기록이 담긴 문자열 배열 `record` 가 매개변수로 주어질 때, 모든 기록이 처리된 후, 최종적으로 방을 개설한 사람이 보게 되는 메시지를 리턴하는 함수를 작성하자.

다음은 `record` 에 담긴 문자열에 대한 설명이다.

- 모든 유저는 [유저 아이디]로 구분한다.
- [유저 아이디] 사용자가 [닉네임]으로 채팅방에 입장 : Enter [유저 아이디] [닉네임]
- [유저 아이디] 사용자가 채팅방에서 퇴장 : Leave [유저 아이디]
- [유저 아이디] 사용자가 닉네임을 [닉네임]으로 변경 : Change [유저 아이디] [닉네임]
- 첫 단어는 Enter, Leave, Change 중 하나이다.
- 각 단어는 공백으로 구분되어 있으며, 알파벳 대문자, 소문자, 숫자로만 이루어져있다.
- 유저 아이디와 닉네임은 알파벳 대문자와 소문자를 구분한다.
- 유저 아이디와 닉네임의 길이는 1 이상 10 이하이다.
- 잘못된 입력은 주어지지 않는다.

<br>

## How to Solve

여기서 핵심은 닉네임이 변경되는 지점이라고 생각했다.

문제를 보면 변경되는 경우는 새로운 닉네임으로 `Enter` 하는 경우와 닉네임을 `Change` 하는 경우이다.

유저의 구분은 유저아이디가 핵심이기 때문에 유저아이디와 최종적으로 정해진 닉네임을 먼저 매핑하기로 했다.

그리고 나서 매핑된 정보를 통해 메시지를 만들어 정답을 만들었다.

```js
const solution = (record) => {
    const userInfo = record.reduce((res, log) => {
        const [action, userId, nickName] = log.split(" ");
        switch (action) {
            case "Enter":
            case "Change":
                res[userId] = nickName;
                break;
        }
        return res;
    }, {});

    return record.reduce((res, log) => {
        const [action, userId] = log.split(" ");
        switch (action) {
            case "Enter":
                res.push(`${userInfo[userId]}님이 들어왔습니다.`);
                break;
            case "Leave":
                res.push(`${userInfo[userId]}님이 나갔습니다.`);
                break;
        }
        return res;
    }, []);
};
```
