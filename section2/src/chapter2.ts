// 배열
let numArr: number[] = [1, 2, 3];

let strArr: string[] = ["hello", "im", "jiyeong"];

let boolArr: Array<boolean> = [true, false, true]; // 제네릭 문법

// 배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr: (number | string)[] = [1, "hello"];

// 다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
];

// 튜플
// 길이와 타입이 고정된 배열
let tup1: [number, number] = [1, 2];

let tup2: [number, string, boolean] = [1, "2", true];

tup1.push(1); // 배열 메소드를 사용할 때는 오류가 나타나지 않는다.
tup1.pop();
tup1.pop();
tup1.pop();

const users: [string, number][] = [
  ["홍길동", 1],
  ["김길동", 2],
  ["이길동", 3],
  // [4, "박길동"], 오류를 감지
];
