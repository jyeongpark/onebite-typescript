/**
 * 함수 타입 표현식 function type expression
 */

type Operation = (a: number, b: number) => number;

const add: (a: number, b: number) => number = (a, b) => a + b;
const sub: Operation = (a, b) => a - b;
const multiply: Operation = (a, b) => a * b;
const divide: Operation = (a, b) => a / b;

/**
 * 호출 시그니쳐 (콜 시그니쳐)
 * 객체타입처럼 정의하는 이유는 함수가 자바스크립의 객체이기 때문이다.
 */

type Operation2 = {
  (a: number, b: number): number;
  name: string; // 하이브리드 타입
};

const add2: Operation2 = (a, b) => a + b;
const sub2: Operation2 = (a, b) => a - b;
const multiply2: Operation2 = (a, b) => a * b;
const divide2: Operation2 = (a, b) => a / b;

add2(1, 2);
add2.name;
