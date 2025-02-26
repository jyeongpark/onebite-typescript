/**
 * 인터페이스의 확장
 */

interface Animal {
  name: string;
  age: number;
}

interface Dog extends Animal {
  // name: "hello"; // 상속 받는 인터페이스에서 동일한 프로퍼티 다시 사용 가능 // 원본 타입의 서브타입이어야함
  isBark: boolean;
}
const dog: Dog = {
  name: "hello",
  age: 0,
  isBark: true,
};

interface Cat extends Animal {
  isScratch: boolean;
}

interface Chicken extends Animal {
  isFly: boolean;
}

/** 다중 확장 */
interface DogCat extends Dog, Cat {}

const dogCat: DogCat = {
  name: "",
  age: 0,
  isBark: true,
  isScratch: true,
};
