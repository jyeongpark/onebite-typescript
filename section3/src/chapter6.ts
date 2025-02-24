/**
 * 타입 단언
 * 타입스크립트 컴파일러의 눈을 잠깐 가리는. 위험한 문법
 */

type Person = {
  name: string;
  age: number;
};

let person: Person = {} as Person;
person.name = "홍길동";
person.age = 27;

type Dog = {
  name: string;
  color: string;
};

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도", // 추가 프로퍼티 검사
} as Dog;

/**
 * 타입 단언의 규칙
 * 각 as 단언 <- 단언식
 * A as B
 * A가 B의 슈퍼타입이거나
 * A가 B의 서브타입이어야 함
 */
let num1 = 10 as never;
let num2 = 20 as unknown;

// let num3 = 30 as string; // 오류
let num3 = 30 as unknown as string; // 오류 아님. 다중단언
// 단언을 한번 하고 한번 더 한 것. unknown 타입은 모든 타입의 전체집합이기 때문에 가능

/**
 * const 단언
 */

let num4 = 10 as const; // 넘버 리터럴 타입 10으로 추론

// 객체 타업과 함께 사용할 때 활용도 있음
let cat = {
  name: "야옹이",
  color: "yellow",
} as const;

// cat.name = '돌돌이' 프로퍼티 값 수정 못함

/**
 * Non Null 단언
 */

type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: "게시글1",
  author: "홍길동",
};

// const len: number = post.author?.length; // 옵셔널 체이닝
const len: number = post.author!.length; // non null
