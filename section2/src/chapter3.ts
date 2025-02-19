// object 객체
let user: object = {
  id: 1,
  name: "홍길동",
};
// 타입스크립트의 object타입은 타입이 객체고 프로퍼티는 알 수 없다.

// 객체 리터럴 타입
let user1: { id: number; name: string } = {
  id: 1,
  name: "홍길동",
};

user1.id;

let dog: { name: string; color: string } = { name: "돌돌이", color: "brown" };

// 프로퍼티를 일일히 정리해가면서 정의하는 타입스크립트 방식이 C나 Java 볼 수 없다.
// 구조를 기준으로 타입을 정의한다. 구조적 타입 시스템. property based type system
// C나 Java는 이름을 기준으로 하는 명목적 타입 시스템

let user2: { id?: number; name: string } = {
  // ? 선택적 프로퍼티, 옵셔널 프로퍼티
  name: "김길동",
};

let config: { readonly apiKey: string } = {
  // readonly 읽기 전용 프로퍼티
  apiKey: "MY API KEY",
};

// config.apiKey = "hacked"; // 읽기 전용 프로퍼티라 바뀔 수 없음
