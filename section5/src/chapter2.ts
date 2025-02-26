/**
 * 선언 합침
 */

type Person = {
  name: string;
};

// type Person = { 동일한 이름 안됨
//   age: nubmer;
// };

interface User {
  name: string;
}

interface User {
  // name: "hello"; // 합칠 때에는 서브타입이 아닌 동일한 타입으로만 정의해야 충돌 없음
  age: number;
}

interface Developer extends User {
  name: "hello"; // 확장할 때는 서브타입으로 선언 가능
}

const user: User = {
  name: "홍길동",
  age: 20,
};

/**
 * 모듈 보강
 */

interface Lib {
  a: number;
  b: number;
}

interface Lib {
  c: string;
}

const lib: Lib = {
  a: 1,
  b: 2,
  c: "hello",
};
