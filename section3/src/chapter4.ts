/**
 * 대수 타입
 * -> 여러개의 타입을 합성해서 새롭게 만들어낸 타입
 * -> 합집합 타입과 교집합 타입이 존재
 */

/**
 * 1. 합집합 -> Union
 */

let a: string | number;
a = 1;
a = "hello";

let arr: (string | number | boolean)[] = [1, "hello", true];

type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Union = Dog | Person;

let union1: Union = {
  name: "바둑이",
  color: "brown",
};

let union2: Union = {
  name: "홍길동",
  language: "ko",
};

let union3: Union = {
  name: "홍길동",
  color: "blue",
  language: "ko",
};

// let union4: Union1 = { // Dog이랑 Person 둘 중 하나도 아니다.
//   name: "홍길동",
// };

/**
 * 2. 교집합 -> Intersection
 * 기본 타입 말고 객체 타입에 사용된다.
 */

let variable: number & string; // never 타입

type Intersection = Dog & Person; // Dog타입과 Person타입 모두 가진 객체

let intersection1: Intersection = {
  name: "",
  color: "",
  language: "",
};
