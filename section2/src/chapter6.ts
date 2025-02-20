// any
// 특정 변수의 타입을 우리가 확실히 모를 때
let anyVar = 10;
// anyVar = "hello"; // 초기화 한 값으로 자동 추론

// js 쓰듯이 아무 값이나 담고 싶으면 any타입을 사용하면 된다.
let anyVar1: any = 10;
anyVar1 = "hello";

let num: number = 10;
num = anyVar1; // number 타입에 any타입이 지정 가능하다. unknown 타입은 지정할 수 없다.

// unknown
let unknownVar: unknown;

unknownVar = 10;
unknownVar = "";

// unknown 타입은 모든 타입의 변수의 값으로 집어넣을 수 없다.
// unknown 타입의 값을 사용하고 싶다면 typeof 조건 사용
if (typeof unknownVar === "number") {
  // 타입 정제
  num = unknownVar;
}

// any타입은 runTime Error를 발생시킬 수 있다.
