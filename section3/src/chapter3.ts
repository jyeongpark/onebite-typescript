/**
 * 기본 타입간의 호환성
 */

let num1: number = 10;
let num2: 10 = 10;

num1 = num2;

/**
 * 객체 타입간의 호환성
 *  -> 어떤 객체타입을 다른 객체타입으로 취급해도 괜찮은가?
 */

type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: "yellow",
};

let dog: Dog = {
  name: "바둑이",
  color: "brown",
  breed: "진도",
};

animal = dog;

// dog = animal; // 객체타입은 프로퍼티를 기준으로 구조적 타입시스템을 따른다.

type Book = {
  name: string;
  price: number;
};

type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  skill: "react.js",
};

book = programmingBook;
// programmingBook = book;

/**
 * 초과 프로퍼티 검사
 */

let book2: Book = {
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  // skill: "react.js", // 초과 프로퍼티 검사때문에
};

function func(book: Book) {}

func({
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  // skill: "react.js", // 초과 프로퍼티 검사때문에
});

// 변수를 초기화하거나 매개변수로 전달할 때 객체 리터럴을 사용하면 초과 프로퍼티 검사로 오류가 난다.
func(programmingBook);
