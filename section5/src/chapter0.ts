/**
 * 인터페이스
 */

interface Person {
  name: string;
  age: number;
  sayHi: () => void; // 메서드, 함수 타입 표현식
  sayBye(): void; // 호출 시그니쳐
  sayBye(name: string): void; // 호출 시그니쳐 오버로딩
}

const person: Person = {
  name: "홍길동",
  age: 20,
  sayHi: () => console.log("hi"),
  sayBye: (name?: string) => {
    if (typeof name === "string") {
      console.log(`bye ${name}`);
    } else {
      console.log("bye");
    }
  },
};

person.sayBye();
person.sayBye("hong");
