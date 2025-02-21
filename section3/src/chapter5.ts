/**
 * 타입 추론
 */

let a = 10;
let b = "hello";

// 일반적으로 변수를 선언하고 초기화 할 때, 변수의 초기값을 기준으로 타입을 추론한다.

// 추론할 정보가 있으면 추론한다.

function func(message = "hello") {
  return "hello";
}

// 우리의 생각과 다르게 추론하는 경우
// 암묵적 any 타입, any 타입의 진화
let d; // any 타입 추론 let d : any;// 명시적으로 정의하면 다 any타입으로 사용. 진화 없음
d = 10;
d.toFixed(); // number 타입 추론 (number타입으로 진화)

d = "hello";
d.toUpperCase(); // string 타입 추론 (string타입으로 진화)

// const 키워드
const num = 10; // number 리터럴 타입으로 추론, 10으로 추론
const str = "hello";

let arr = [1, "hello"]; // 최적의 공통 타입으로 추론된다.

// let 타입 넓히기 가능. 범용적으로 추론
