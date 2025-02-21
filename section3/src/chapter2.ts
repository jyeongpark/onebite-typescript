/**
 * Unknown 타입
 */

// unknown 타입은 모든 타입의 슈퍼타입
// 업캐스팅은 가능하지만 다운캐스팅은 불가능
function unknownExam() {
  let a: unknown = 1;
  let b: unknown = "hello";
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;

  let unKnowVar: unknown;

  // let num: number = unKnowVar; // 다운캐스팅 불가능
}

/**
 * Never 불가능 모순
 * 모든 타입의 서브타입
 * 공집합이라고 이해 가능
 */

function neverExam() {
  function neverFunc(): never {
    while (true) {}
  }

  let num: number = neverFunc(); // 업캐스팅 기능
  // let never1: never = 10; number타입은 never타입에 다운캐스팅 불가능
}

/**
 * Void
 */
function voidExam() {
  function VoidFunc(): void {
    console.log("hi");
    return undefined;
  }

  let voidVar: void = undefined; // void타입은 undefined타입의 슈퍼타입이다.
}

/**
 * any
 */

function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;
  let neverVar: never;

  anyVar = unknownVar;
  undefinedVar = anyVar; // 타입 계층도를 무시한다. 위험한 타입
  // neverVar = anyVar; // any타입은 never타입까지는 다운캐스팅 할 수 없다.
}
