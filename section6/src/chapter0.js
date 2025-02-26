/**
 * 클래스
 */

let studentA = {
  name: "홍길동",
  grade: "A+",
  age: 20,
  study() {
    console.log("열심히 공부 함");
  },
  introduce() {
    console.log("안녕하세요!");
  },
};

// let studentB = {
//   name: "김길동",
//   grade: "B+",
//   age: 20,
//   study() {
//     console.log("열심히 공부 함");
//   },
//   introduce() {
//     console.log("안녕하세요!");
//   },
// };

class Student {
  // field 클래스가 만들어낼 객체의 프로퍼티
  name;
  grade;
  age;

  // 생성자
  constructor(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
  }

  // 메서드
  study() {
    console.log("열심히 공부 함");
  }
  introduce() {
    console.log(`안녕하세요! ${this.name}입니다.`);
  }
}

// 클래스를 이용해서 만든 객체 -> 인스턴스
// 스튜던트 인스턴스
let studentB = new Student("김길동", "B+", 20);
console.log(studentB);
studentB.study();
studentB.introduce();

// class StudentDeveloper {
//   // 필드
//   name;
//   grade;
//   age;
//   favoriteSkill;

//   constructor(name, grade, age, favoriteSkill) {
//     this.name = name;
//     this.grade = grade;
//     this.age = age;
//     this.favoriteSkill = favoriteSkill;
//   }

//   // 메서드
//   study() {
//     console.log("열심히 공부 함");
//   }
//   introduce() {
//     console.log(`안녕하세요! ${this.name}입니다.`);
//   }
//   programming() {
//     console.log(`${this.favoriteSkill}로 프로그래밍 함`);
//   }
// }

// let studentDeveloper = new StudentDeveloper("홍길동", "B+", 20, "TypeScript");
// console.log(studentDeveloper);
// studentDeveloper.programming();

class StudentDeveloper extends Student {
  //필드
  favoriteSkill;

  constructor(name, grade, age, favoriteSkill) {
    super(name, grade, age); // 슈퍼 함수 호출하고 부모클래스(슈퍼클래스) 생성자가 호출됨
    this.favoriteSkill = favoriteSkill;
  }

  programming() {
    console.log(`${this.favoriteSkill}로 프로그래밍 함`);
  }
}

let studentDeveloper = new StudentDeveloper("홍길동", "B+", 20, "TypeScript");
console.log(studentDeveloper);
studentDeveloper.programming();
studentDeveloper.introduce();
studentDeveloper.study();
