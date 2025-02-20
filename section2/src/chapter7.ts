// void
// void -> 공허 -> 아무것도 없다
// void -> 아무것도 없음을 의미하는 타입

function func1(): string {
  return "hello";
}

function func2(): void {
  console.log("hello"); // 반환값이 없다.
  // return undefined; // 이 값도 가능
}

// 함수의 반환값을 undefined라고 정의하면 진짜 undefined를 반환하기 위해서 return 문을 사용해야한다.

// never
// never -> 존재하지 않는
// 불가능한 타입

function func3(): never {
  while (true) {} // 절대로 정상적으로 반환할 수 없어서 반환값이 있는 자체가 오류이다.
}

function func4(): never {
  throw new Error();
}
