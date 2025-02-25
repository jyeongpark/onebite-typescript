/**
 * 함수 타입 정의
 */

// 함수를 설명하는 가장 좋은 방법
// 어떤 매개변수를 받고, 어떤 결과값을 반환하는지
// 어떤 [타입의] 매개변수로 받고, 어떤 [타입의] 결과값을 반환하는지
function func(a: number, b: number) {
  return a + b;
}

/**
 * 화살표 함수의 타입을 정의하는 방법
 */

const add = (a: number, b: number): number => a + b;

/**
 * 함수의 매개변수
 */

function introduce(name = "홍길동", age: number, height?: number) {
  console.log(`name : ${name}, age : ${age}`);
  if (typeof height === "number") {
    console.log(`height : ${height + 10}`);
  }
}

introduce("홍길동", 20, 170);

function getSum(...rest: number[]) {
  // rest parameter, 가변적인 길이의 인수를 전달하면 배열로 저장
  return rest.reduce((acc, cur) => acc + cur, 0);
}

console.log(getSum(1, 2, 3)); //6
console.log(getSum(1, 2, 3, 4, 5)); //15
